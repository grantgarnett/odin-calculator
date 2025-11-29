let initialValue = "";
let currentValue = "";
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

function operate (operator, num1, num2) {
        if (operator === "+") {
            return add(num1, num2);
        } else if (operator === "-") {
            return subtract(num1, num2);
        } else if (operator === "x") {
            return multiply(num1, num2);
        } else if (operator === "div") {
            return divide(num1, num2);
        }
}

function backspace() {
    currentValue = currentValue.slice(0, -1);
    display.textContent = currentValue;
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
    currentValue += "1";
    display.textContent = currentValue;
    cancelOverflow();
    console.log(`${initialValue}, ${currentValue}, ${operator}, ${display.textContent}`);
});
twoButton.addEventListener("click", () => {
    currentValue += "2";
    display.textContent = currentValue;
    cancelOverflow();
});
threeButton.addEventListener("click", () => {
    currentValue += "3";
    display.textContent = currentValue;
    cancelOverflow();
});
fourButton.addEventListener("click", () => {
    currentValue += "4";
    display.textContent = currentValue;
    cancelOverflow();
});
fiveButton.addEventListener("click", () => {
    currentValue += "5";
    display.textContent = currentValue;
    cancelOverflow();
});
sixButton.addEventListener("click", () => {
    currentValue += "6";
    display.textContent = currentValue;
    cancelOverflow();
});
sevenButton.addEventListener("click", () => {
    currentValue += "7";
    display.textContent = currentValue;
    cancelOverflow();
});
eightButton.addEventListener("click", () => {
    currentValue += "8";
    display.textContent = currentValue;
    cancelOverflow();
});
nineButton.addEventListener("click", () => {
    currentValue += "9";
    display.textContent = currentValue;
    cancelOverflow();
});
zeroButton.addEventListener("click", () => {
    currentValue += "0";
    display.textContent = currentValue;
    cancelOverflow();
});

const backspaceButton = document.querySelector("#backspace-button");

backspaceButton.addEventListener("click", backspace);

const decimalButton = document.querySelector("#decimal-button");

decimalButton.addEventListener("click", () => {
    if (!currentValue.includes(".")) {
        currentValue += ".";
        display.textContent = currentValue;
    }
})

const negativeButton = document.querySelector("#negative-button");

negativeButton.addEventListener("click", () => {
    if (currentValue.startsWith("-")) {
        currentValue = currentValue.slice(1);
        display.textContent = currentValue;
    }
    else if (currentValue.length !== 0){
        let textArray = currentValue.split("");
        textArray.unshift("-");
        currentValue = textArray.join("");
        display.textContent = currentValue;
    }
});

const addButton = document.querySelector("#add-button");
const subtractButton = document.querySelector("#subtract-button");
const multiplyButton = document.querySelector("#multiply-button");
const divideButton = document.querySelector("#divide-button");
const equalButton = document.querySelector("#equal-button");

addButton.addEventListener("click", () => {
    if (display.textContent !== "") {
        if (initialValue !== "" && currentValue !== "" && operator !== "") {
            display.textContent = operate(operator, +initialValue, +currentValue);
        }

        initialValue = display.textContent;
        currentValue = "";
        operator = "+";
}});

subtractButton.addEventListener("click", () => {
    if (display.textContent !== "") {
        if (initialValue !== "" && currentValue !== "" && operator !== "") {
            display.textContent = operate(operator, +initialValue, +currentValue);
        }

        initialValue = display.textContent;
        currentValue = "";
        operator = "-";
}});

multiplyButton.addEventListener("click", () => {
    if (display.textContent !== "") {
        if (initialValue !== "" && currentValue !== "" && operator !== "") {
            display.textContent = operate(operator, +initialValue, +currentValue);
        }

        initialValue = display.textContent;
        currentValue = "";
        operator = "x";
}});

divideButton.addEventListener("click", () => {
    if (display.textContent !== "") {
        if (initialValue !== "" && currentValue !== "" && operator !== "") {
            display.textContent = operate(operator, +initialValue, +currentValue);
        }

        initialValue = display.textContent;
        currentValue = "";
        operator = "div";
}});

equalButton.addEventListener("click", () => {
    if (initialValue !== "" && currentValue !== "" && operator !== "") {
            display.textContent = operate(operator, +initialValue, +currentValue);
    }
    
    initialValue = "";
    currentValue = "";
    operator = "-";
});