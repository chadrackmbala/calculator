const numpads = document.querySelectorAll("button");
const display = document.getElementById("calcul");
const input = document.getElementById("input");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const divideby = document.getElementById("divideby");
const equals = document.getElementById("equals");
const percentage = document.getElementById("percentage");
let displayArray = [];
const backEndOperation = [];
let backEndOperationJoin;
let displayArrayJoin;

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

// FONCTION ADDITION

function addition(value) {
    if (input.value.includes("+") && value === "+") {
        const result = eval(input.value);
        display.textContent = `${input.value} = ${result}`;
        input.value = `${result} + `;
    } else {
        input.value += value;
    }
}

// FONCTION SOUSTRACTION

function soustraction(value) {
    if (input.value.includes("-") && value === "-") {
        const result = eval(input.value);
        display.textContent = `${input.value} = ${result}`;
        input.value = `${result} - `;
    } else {
        input.value += value;
    }
}

//CONVERTION DES SIGNES

function signConvarsion(value) {
    if (value === "×") {
        value = "*";
    } else if (value === "÷") {
        value = "/";
    } else {
        value = value;
    }
    backEndOperation.push(value);
    backEndOperationJoin = backEndOperation.join('');
    console.log(backEndOperation);
    console.log(backEndOperationJoin);
    if (value === "*") {
        value = "×";
    } else if (value === "/") {
        value = "÷";
    } else {
        value = value;
    }
    displayArray.push(value);
    displayArrayJoin = displayArray.join('');
    input.value += `${value}`;
    console.log(displayArray);
    console.log(displayArrayJoin);
}

// FONCTION DE REALISATION DE CALCUL

function calculation(value) {
    if(value === "=") {
        const result = eval(backEndOperationJoin);
        display.textContent = `${displayArrayJoin} = ${result}`;
        backEndOperation.splice(0);
        displayArray.splice(0);
        input.value = "";
        console.log(backEndOperation);
    }
}

//FONCTION GLOBALE

function entryInInput(value) {
    switch (value) {
        case "+":
            addition(value);
            break;
        case "-":
            soustraction(value);
            break;
        case "AC":
            reset();
            break;
        case "=":
            calculation(value);
            backEndOperation.splice(0);
            break;
        default:
            signConvarsion(value);
            break;
    }
}