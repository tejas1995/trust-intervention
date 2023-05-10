import { DEVMODE } from "./globals"
export var UID: string
import { load_data, log_data } from './connector'
import { paramsToObject } from "./utils"

var data: any[] = []
let question_i = -1
let question = null
let prev_time = Date.now()
let user_decision: null | boolean = null
let balance = 0
let bet_val:number

$("#button_next").on("click", () => {
    if (question_i != -1) {
        let time = Date.now() - prev_time
        let config = data[question_i]["config"]
        let logged_data = { id: data[question_i]["id"], time: time, config: config }

        logged_data['caption'] = $("#caption_val").val()
        logged_data['confidence'] = $("#cap_confidence").val()
        log_data(logged_data)
    }
    next_question()
});

$('#range_val').on('input change', function () {
    bet_val = ($(this).val()! as number) / 5 * 0.15
    $("#range_text").text(`If you are right, you get $${bet_val}. If you are wrong, you lose $${bet_val}.`)
    $("#button_place_bet").show()
});

function flip_user_decision(correct) {
    user_decision = correct
    if (correct) {
        $("#button_decision_correct").attr("activedecision", "true")
        $("#button_decision_incorrect").removeAttr("activedecision")
    } else {
        $("#button_decision_correct").removeAttr("activedecision")
        $("#button_decision_incorrect").attr("activedecision", "true")
    }
    $("#how_confident_div").show()
}

$("#button_decision_correct").on("click", () => {
    flip_user_decision(true)
})
$("#button_decision_incorrect").on("click", () => {
    flip_user_decision(false)
})

function show_result() {
    let message = "You guessed that the system was "
    let success : boolean
    if (user_decision) {
        message += "<span class='color_correct'>correct</span> "
        if (question!["ai_is_correct"]) {
            message += "and the system was <span class='color_correct'>correct</span>."
            success = true
        } else {
            message += "but the system was <span class='color_incorrect'>not correct</span>."
            success = false
        }
    } else{
        message += "<span class='color_incorrect'>incorrect</span> "
        if (!question!["ai_is_correct"]) {
            message += "and the system was <span class='color_incorrect'>not correct</span>."
            success = true
        } else {
            message += "but the system was <span class='color_correct'>correct</span>."
            success = false
        }
    }
    message += "<br>"
    if (success) {
        message += `You gain $${bet_val}.`
        balance += bet_val        
    } else {
        message += `You lose $${bet_val}.`
        balance -= bet_val
        balance = Math.max(0, balance)
    }
    $("#balance").text(`Balance: $${balance} + $1`)
    $("#result_span").html(message)
    $("#button_next").show()
    $("#result_span").show()
    $("#button_place_bet").hide()

    $("#button_decision_incorrect").attr("disabled", "true")
    $("#button_decision_correct").attr("disabled", "true")
}

$("#button_place_bet").on("click", show_result)

function next_question() {
    // restore previous state
    $("#button_decision_incorrect").removeAttr("activedecision")
    $("#button_decision_correct").removeAttr("activedecision")
    $("#button_decision_incorrect").removeAttr("disabled")
    $("#button_decision_correct").removeAttr("disabled")
    $("#how_confident_div").hide()
    $("#button_place_bet").hide()
    $("#button_next").hide()
    $("#result_span").hide()

    question_i += 1
    if (question_i >= data.length) {
        alert("Annotations done, please navigate to TODO")
        question_i = 0
    }
    question = data[question_i]

    // $("#config_info").text("Mode: " + data[question_i]["config"])
    $("#question_span").text(question!["question"])
    $("#confidence_span").text(question!["confidence"])

    prev_time = Date.now()
    $("#progress").text(`Progress: ${question_i + 1} / ${data.length}`)
}

// get user id and load queue
// try to see if start override was passed
const urlParams = new URLSearchParams(window.location.search);
const startOverride = urlParams.get('start');
const UIDFromURL = urlParams.get("uid")
globalThis.url_data = paramsToObject(urlParams.entries())

if (UIDFromURL != null) {
    globalThis.uid = UIDFromURL as string
} else if (DEVMODE) {
    globalThis.uid = "demo"
    UID = "demo"
} else {
    let UID_maybe: any = null
    while (UID_maybe == null) {
        UID_maybe = prompt("Enter your user id. Please get in touch if you were not assigned an id but wish to participate in this experiment.")
    }
    globalThis.uid = UID_maybe!
}

load_data().catch((_error) => {
    alert("Invalid user id")
    window.location.reload()
}
).then((new_data) => {
    data = new_data
    if (startOverride != null) {
        question_i = parseInt(startOverride) - 1
        console.log("Starting from", question_i)
    }
    next_question()
})

console.log("Starting session with UID:", globalThis.uid!)