let confirm = document.getElementById("password-submit");
let checkBoxes = document.getElementsByClassName("check-buttons");
let levers = document.getElementsByClassName("levers");

confirm.addEventListener("click", function () {
    let pwd = document.getElementById("password").value;
    if (pwd === "TrustNo1") {
        console.log("Check pass!");
        enableInputs();

    } else {
        console.log("Check fail...");

    }
});

for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener('click', checkControls);
}

for (let i = 0; i < levers.length; i++) {
    levers[i].addEventListener('click', checkControls);
}

document.getElementById("launch").addEventListener("click", function() {
    document.getElementById("rocket").animate([
        { // current position of your rocket
            left: '230px',
            top: '70px'
        },
        { //  final position of your rocket
            left: '540px',
            top: '-450px'
        }
    ], {
        // timing options
        duration: 2000,
        iterations: 1
    });
});

function enableInputs() {
    let inputs = document.querySelectorAll("input");
    for (let input of inputs) {
        input.disabled = false;
    }
    document.getElementById("password").disabled = true;
    document.getElementById("password-submit").disabled = true;
    document.getElementById("launch").disabled = true;
}

function checkControls() {
    let inputs = document.querySelectorAll("input");
    let inputCount = 0;
    for (let input of inputs) {
        if (input.checked || input.value == 100) {
            inputCount++;
        }
    }
    if (inputCount == 11) {
        document.getElementById("launch").disabled = false;
    } else {
        document.getElementById("launch").disabled = true;
    }
}