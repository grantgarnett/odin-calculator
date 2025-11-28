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

function backspace() {
    display.textContent = display.textContent.slice(0, -1);
}

function cancelOverflow() {
  if (display.offsetWidth > originalDisplayWidth) {
    backspace();
  }
}

const display = document.querySelector("#display");
originalDisplayWidth = display.offsetWidth;
window.addEventListener("resize", () => {
    originalDisplayWidth = display.offsetWidth;
});

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

oneButton.addEventListener("click", (event) => {
    display.textContent += "1";
    cancelOverflow();
});
twoButton.addEventListener("click", () => {
    display.textContent += "2";
    cancelOverflow();
});
threeButton.addEventListener("click", () => {
    display.textContent += "3";
    cancelOverflow();
});
fourButton.addEventListener("click", () => {
    display.textContent += "4";
    cancelOverflow();
});
fiveButton.addEventListener("click", () => {
    display.textContent += "5";
    cancelOverflow();
});
sixButton.addEventListener("click", () => {
    display.textContent += "6";
    cancelOverflow();
});
sevenButton.addEventListener("click", () => {
    display.textContent += "7";
    cancelOverflow();
});
eightButton.addEventListener("click", () => {
    display.textContent += "8";
    cancelOverflow();
});
nineButton.addEventListener("click", () => {
    display.textContent += "9";
    cancelOverflow();
});
zeroButton.addEventListener("click", () => {
    display.textContent += "0";
    cancelOverflow();
});

const backspaceButton = document.querySelector("#backspace-button");

backspaceButton.addEventListener("click", () => {
    backspace();
});