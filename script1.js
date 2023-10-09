const numpads = document.querySelectorAll("button");
const display = document.getElementById("calcul");
const input = document.getElementById("input");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const divideby = document.getElementById("divideby");
const equals = document.getElementById("equals");
const percentage = document.getElementById("percentage");

//PREVENTS DEFAULTS

plus.addEventListener("click", e => e.preventDefault());
minus.addEventListener("click", e => e.preventDefault());
times.addEventListener("click", e => e.preventDefault());
divideby.addEventListener("click", e => e.preventDefault());
equals.addEventListener("click", e => e.preventDefault());
percentage.addEventListener("click", e => e.preventDefault());

function clickButton(button) {
    button.addEventListener("click", (e) => {
        const value = e.target.textContent;
        entryInInput(value);
    })
}

numpads.forEach(digit => clickButton(digit));

function reset() {
    input.value = "0";
    display.textContent = "";
}
function clearInput() {
    input.value = "";
}

//FONCTION ADDITION

function addition(value) {
    if (input.value.includes("+") ||
        input.value.includes("-") ||
        input.value.includes("×") ||
        input.value.includes("÷")) {
        const result = eval(input.value);
        input.value = result;
    } else {
        input.value += value;
    }
}

//FONCTION SOUSTRACTION

function soustraction(value) {
    if (input.value.includes("+") ||
        input.value.includes("-") ||
        input.value.includes("×") ||
        input.value.includes("÷")) {
        const result = eval(input.value);
        input.value = result;
    } else {
        input.value += value;
    }
}

//FONCTION MULTIPLICATION

function multiplication(value) {
    if (input.value.includes("+") ||
        input.value.includes("-") ||
        input.value.includes("×") ||
        input.value.includes("÷")) {
        const result = eval(input.value);
        input.value = result;
    } else {
        input.value += value;
    }
}

//FUNCTION DIVISION

function division(value) {
    if (input.value.includes("+") ||
        input.value.includes("-") ||
        input.value.includes("×") ||
        input.value.includes("÷")) {
        const result = eval(input.value);
        input.value = result;
    } else {
        input.value += value;
    }
}

//FONCTION OPERATION

function operation() {
    const result = eval(input.value);
    input.value = result;
}

function entryInInput(value) {
    switch (value) {
        case ".":
            if (input.value.includes(".") || input.value === "") {

            } else {
                input.value += "."
                displayArray.push('.');
                backEndOperation.push('.');
            }
            break;
        case "AC":
            reset();
            break;
        case "C":
            clearInput();
            break;
        case "+":
            addition(value);
            break;
        case "-":
            soustraction(value);
            break;
        case "×":
            multiplication(value);
            break;
        case "÷":
            division(value);
            break;
        case "=":
            operation(value);
            break;
        default:
            input.value += value;
            break;
    }
}