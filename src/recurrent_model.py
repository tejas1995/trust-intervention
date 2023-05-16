#!/usr/bin/env python3

import utils
import torch
from sklearn.metrics import f1_score, accuracy_score, mean_absolute_error

DEVICE = "cuda" if torch.cuda.is_available() else "cpu"
TARGET_FEATURE = 0

class RNNTrustModel(torch.nn.Module):
    def __init__(self):
        super(RNNTrustModel, self).__init__()
        self.model = torch.nn.LSTM(
            input_size=5,
            hidden_size=40,
            num_layers=3,
            batch_first=True,
            dropout=0.3,
            # proj_size=1,
        )
        self.projection = torch.nn.Sequential(
            torch.nn.Linear(40, 1),
            torch.nn.Sigmoid() if TARGET_FEATURE != 1 else torch.nn.Identity()
        )

        self.optimizer = torch.optim.Adam(
            self.parameters(),
            lr=1e-4 if TARGET_FEATURE != 1 else 1e-3
        )
        self.loss_fn = torch.nn.MSELoss()
        # self.loss_fn = torch.nn.CrossEntropyLoss()
        self.to(DEVICE)

    def forward(self, x):
        output, (h_n, c_n) = self.model(x)
        output = self.projection(output)
        return output

    @staticmethod
    def prepare_xy_to_x(x, y):
        # shift targets to the right so we're not cheating
        x_extra = [[0.0] * len(y[0])] + y[:-1]
        # x_extra = y
        x_extra = [[v * 1.0 for v in vs] for vs in x_extra]
        assert len(x_extra) == len(x)

        x = torch.tensor(
            [[
                # take only confidence
                [x_v[5]] + x_extra_v
                for x_v, x_extra_v
                in zip(x, x_extra)
            ]],
            dtype=torch.float32,
            device=DEVICE
        )
        return x
        # # merge together with the inputs
        # x = torch.hstack((x, x_extra))
        # # create batch of size 1
        # # .reshape(1, len(x), -1)
        # x = torch.tensor([x.numpy().tolist()])
        # return torch.tensor([y], dtype=torch.float32)

    def eval_data(self, data):
        self.train(False)
        y_pred_all = []
        y_true_all = []
        with torch.no_grad():
            for xy in data:
                x = [x for x, y in xy]
                y = [y for x, y in xy]
                x = RNNTrustModel.prepare_xy_to_x(x, y)
                if TARGET_FEATURE != 1:
                    y_pred_all += (self.forward(x)[0].flatten() >= 0.5).cpu()
                    y_true_all += (torch.tensor([y[TARGET_FEATURE] * 1.0 for x, y in xy]) >= 0.5).cpu()
                else:
                    y_pred_all += (self.forward(x)[0].flatten()).cpu()
                    y_true_all += (torch.tensor([y[TARGET_FEATURE] * 1.0 for x, y in xy])).cpu()

        if TARGET_FEATURE != 1:
            return accuracy_score(y_true_all, y_pred_all), f1_score(y_true_all, y_pred_all)
        else:
            return mean_absolute_error(y_true_all, y_pred_all)

    def train_loop(self, data_train, data_dev, epochs=100000):
        for epoch in range(epochs):
            self.train(True)
            for user_xy in data_train:
                x = [x for x, y in user_xy]
                y = [y for x, y in user_xy]
                x = RNNTrustModel.prepare_xy_to_x(x, y)

                # take first item from the batch (of size 1) and flatten it because we are predicting just one thing
                y_pred = self.forward(x).flatten()
                y_true = torch.tensor([y[TARGET_FEATURE] * 1.0 for x, y in user_xy]).to(DEVICE)
                assert y_pred.shape == y_true.shape
                loss = self.loss_fn(y_pred, y_true)

                # optimize
                self.optimizer.zero_grad()
                loss.backward()
                self.optimizer.step()

            if epoch % 10 == 0:
                if TARGET_FEATURE != 1:
                    train_acc, train_f1 = self.eval_data(data_train)
                    dev_acc, dev_f1 = self.eval_data(data_dev)
                    print(
                        f"EPOCH {epoch:>4}",
                        f"TRAIN | ACC: {train_acc:.2%} | F1: {train_f1:.2%}",
                        f"DEV | ACC: {dev_acc:.2%} | F1: {dev_f1:.2%}",
                        sep="  |||  "
                    )
                else:
                    train_mae = self.eval_data(data_train)
                    dev_mae = self.eval_data(data_dev)
                    print(
                        f"EPOCH {epoch:>4}",
                        f"TRAIN | MAE: {train_mae:.5f}",
                        f"DEV | MAE: {dev_mae:.5f}",
                        sep="  |||  "
                    )

data_train, data_dev = utils.load_split_data(simple=True, path="data/collected.jsonl")
model = RNNTrustModel()
model.train_loop(data_train, data_dev)
