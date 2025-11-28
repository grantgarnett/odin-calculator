let input1 = "";
let input2 = "";
let operator = "";

function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    if(num2 !== 0) {
        return num1 / num2;
    } else return "ERROR";
}

function operate(operator, num1, num2) {
    if (operator === "+") {
        add(num1, num2);
    } else if (operator === "-") {
        subtract(num1, num2);
    } else if (operator === "x") {
        multiply(num1, num2);
    } else if (operator === "div") {
        divide(num1, num2);
    }
}

const display = document.querySelector("#display");

const oneButton = document.querySelector("#one-button");
const twoButton = document.querySelector("#two-button");
const threeButton = document.querySelector("#three-button");
const fourButton = document.querySelector("#four-button");
const fiveButton = document.querySelector("#five-button");
const sixButton = document.querySelector("#six-button");
const sevenButton = document.querySelector("#seven-button");
const eightButton = document.querySelector("#eight-button");
const nineButton = document.querySelector("#nine-button");
const zeroButton = document.querySelector("#zero-button");

oneButton.addEventListener("click", () => display.textContent += "1");
twoButton.addEventListener("click", () => display.textContent += "2");
threeButton.addEventListener("click", () => display.textContent += "3");
fourButton.addEventListener("click", () => display.textContent += "4");
fiveButton.addEventListener("click", () => display.textContent += "5");
sixButton.addEventListener("click", () => display.textContent += "6");
sevenButton.addEventListener("click", () => display.textContent += "7");
eightButton.addEventListener("click", () => display.textContent += "8");
nineButton.addEventListener("click", () => display.textContent += "9");
zeroButton.addEventListener("click", () => display.textContent += "0");