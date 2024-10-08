#!/usr/bin/env python3

PROMPT = """
Generate list of 10 questions which do not include any real-life people or specific locations, so they are essentially not answerable. They should however appear that they are factual encyclopedic questions. They should definitely not be questions about "fictional" or "fantasy" worlds. Provide two possible answers to each question.
Example:
Q: Who won the first West-Ulimani Tennis Championship?
A1: Joanna Clarke
A2: Tyrone Franklyn
"""

import json
from argparse import ArgumentParser
import random
import copy
import numpy as np

# ./src/baked_queues/generate_base.py --plan intervention_ci_long --uid-count 50 --reward-ratio 1x2
# ./src/baked_queues/generate_base.py --plan intervention_ci_long --uid-count 50 --reward-ratio 2x1

args = ArgumentParser()
args.add_argument("-d", "--data", default="data/questions/fake_all.json")
args.add_argument("-p", "--plan", default="control")
args.add_argument("-rr", "--reward-ratio", default="1x1")
args.add_argument("-uc", "--uid-count", default=0, type=int)
args.add_argument("-s", "--seed", default=0, type=int)
args = args.parse_args()

random.seed(args.seed)

data = json.load(open(args.data, "r"))


def decide_truthfulness_base(question):
    ai_is_correct = random.choices([True, False], weights=[0.5, 0.5], k=1)[0]
    ai_confidence = (
        random.uniform(0.45, 0.8)
        if ai_is_correct
        else random.uniform(0.2, 0.55)
    )

    return {
        "question": question["question"],
        "answer": question["answer1"] if ai_is_correct else question["answer2"],
        "ai_is_correct": ai_is_correct,
        "ai_confidence": f"{ai_confidence:.0%}",
    }

def decide_truthfulness_calibrated(question):
    ai_confidence = random.uniform(0.1, 0.9)
    ai_is_correct = random.choices([True, False], weights=[ai_confidence, 1 - ai_confidence], k=1)[0]

    return {
        "question": question["question"],
        "answer": question["answer1"] if ai_is_correct else question["answer2"],
        "ai_is_correct": ai_is_correct,
        "ai_confidence": f"{ai_confidence:.0%}",
    }

def decide_truthfulness_confidently_incorrect(question):
    ai_is_correct = random.choices([True, False], weights=[0.1, 0.9], k=1)[0]
    ai_confidence = random.uniform(0.75, 0.9)

    return {
        "question": question["question"],
        "answer": question["answer1"] if ai_is_correct else question["answer2"],
        "ai_is_correct": ai_is_correct,
        "ai_confidence": f"{ai_confidence:.0%}",
    }

def decide_truthfulness_always_confident(question):
    ai_is_correct = random.choices([True, False], weights=[0.5, 0.5], k=1)[0]
    if ai_is_correct:
        ai_confidence = np.random.beta(a=8, b=2)
    else:
        ai_confidence = np.random.beta(a=5, b=2)
    
    return {
        "question": question["question"],
        "answer": question["answer1"] if ai_is_correct else question["answer2"],
        "ai_is_correct": ai_is_correct,
        "ai_confidence": f"{ai_confidence:.0%}",
    }

def decide_truthfulness_separable(question):
    ai_is_correct = random.choices([True, False], weights=[0.5, 0.5], k=1)[0]
    if ai_is_correct:
        ai_confidence = np.random.beta(a=15, b=2)
    else:
        ai_confidence = np.random.beta(a=6, b=5)
    return {
        "question": question["question"],
        "answer": question["answer1"] if ai_is_correct else question["answer2"],
        "ai_is_correct": ai_is_correct,
        "ai_confidence": f"{ai_confidence:.0%}",
    }

#def decide_truthfulness_vague(question):
#    ai_is_correct = random.choices([True, False], weights=[0.7, 0.3], k=1)[0]
#    ai_confidence = (
#        random.uniform(0.45, 0.55)
#        if ai_is_correct else
#        random.uniform(0.4, 0.5)
#    )
#
#    return {
#        "question": question["question"],
#        "answer": question["answer1"] if ai_is_correct else question["answer2"],
#        "ai_is_correct": ai_is_correct,
#        "ai_confidence": f"{ai_confidence:.0%}",
#    }
#
#
#def decide_truthfulness_ci(question):
#    ai_is_correct = random.choices([True, False], weights=[0.01, 0.99], k=1)[0]
#    ai_confidence = random.uniform(0.7, 1.0)
#
#    return {
#        "question": question["question"],
#        "answer": question["answer1"] if ai_is_correct else question["answer2"],
#        "ai_is_correct": ai_is_correct,
#        "ai_confidence": f"{ai_confidence:.0%}",
#    }
#
#
#def decide_truthfulness_uc(question):
#    ai_is_correct = random.choices([True, False], weights=[0.99, 0.01], k=1)[0]
#    ai_confidence = random.uniform(0.0, 0.3)
#
#    return {
#        "question": question["question"],
#        "answer": question["answer1"] if ai_is_correct else question["answer2"],
#        "ai_is_correct": ai_is_correct,
#        "ai_confidence": f"{ai_confidence:.0%}",
#    }
#
#

QUEUE_PLAN = {
    ## control
    "dhuliawala_control": (
        60 * [decide_truthfulness_base] +
        []
    ),
    ## confidently incorrect
    #"intervention_ci_long": (
    #    10 * [decide_truthfulness_base] +
    #    5 * [decide_truthfulness_ci] +
    #    45 * [decide_truthfulness_base] +
    #    []
    #),
    #"intervention_ci_1_long": (
    #    10 * [decide_truthfulness_base] +
    #    1 * [decide_truthfulness_ci] +
    #    49 * [decide_truthfulness_base] +
    #    []
    #),
    #"intervention_ci_3_long": (
    #    10 * [decide_truthfulness_base] +
    #    3 * [decide_truthfulness_ci] +
    #    47 * [decide_truthfulness_base] +
    #    []
    #),
    #"intervention_ci_7_long": (
    #    10 * [decide_truthfulness_base] +
    #    7 * [decide_truthfulness_ci] +
    #    43 * [decide_truthfulness_base] +
    #    []
    #),
    #"intervention_ci_9_long": (
    #    10 * [decide_truthfulness_base] +
    #    9 * [decide_truthfulness_ci] +
    #    41 * [decide_truthfulness_base] +
    #    []
    #),
    ## unconfidently
    ## correct
    #"intervention_uc_long": (
    #    10 * [decide_truthfulness_base] +
    #    5 * [decide_truthfulness_uc] +
    #    45 * [decide_truthfulness_base] +
    #    []
    #),
    # calibrated
    "calibrated": (
        60 * [decide_truthfulness_calibrated] +
        []
    ),
    "always_confident": (
        60 * [decide_truthfulness_always_confident] +
        []
    ),
    "separable": (
        60 * [decide_truthfulness_separable] +
        []
    ),
    "calibrated_with_ci": (
        10 * [decide_truthfulness_calibrated] +
        5 * [decide_truthfulness_confidently_incorrect] +
        45 * [decide_truthfulness_calibrated] +
        []
    ),
}

UIDs = [
    "demo",
]

for uid in list(range(args.uid_count)):
    queue = copy.deepcopy(data)
    random.shuffle(queue)
    queue = [
        decide_fn(question)
        for question, decide_fn
        in zip(queue, QUEUE_PLAN[args.plan])
    ]
    if type(uid) == int:
        uid = f"{uid:0>3}"
    for line in queue:
        line["reward_ratio"] = [int(x) for x in args.reward_ratio.split("x")]

    with open(f"src_ui/web/baked_queues/{args.plan}_{args.reward_ratio}_{uid}.json", "w") as f:
        json.dump(queue, f, indent=4, ensure_ascii=False)
