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
  while (display.offsetWidth > originalDisplayWidth) {
    backspace();
  }
}

const display = document.querySelector("#display");
originalDisplayWidth = display.offsetWidth;
window.addEventListener("resize", () => {
    originalDisplayWidth = display.offsetWidth;
});
window.addEventListener("visibilitychange", () => {
    originalDisplayWidth = display.offsetWidth;
});

const operationDisplay = document.querySelector("#operation-display");
operationDisplay.style.opacity = 0;

const buttonDisplay = document.querySelectorAll("button");
buttonDisplay.forEach(button => {
    button.addEventListener("mousedown", () => button.style.backgroundColor = "rgb(195, 199, 206)");
    button.addEventListener("mouseup", () => button.style.backgroundColor = "rgb(227, 231, 238)");
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

const backspaceButton = document.querySelector("#backspace-button");
const decimalButton = document.querySelector("#decimal-button");
const negativeButton = document.querySelector("#negative-button");
const resetButton = document.querySelector("#reset-button");

const addButton = document.querySelector("#add-button");
const subtractButton = document.querySelector("#subtract-button");
const multiplyButton = document.querySelector("#multiply-button");
const divideButton = document.querySelector("#divide-button");
const equalButton = document.querySelector("#equal-button");

oneButton.addEventListener("click", (event) => {
    currentValue += "1";
    display.textContent = currentValue;
    cancelOverflow();
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

backspaceButton.addEventListener("click", backspace);

decimalButton.addEventListener("click", () => {
    if (!currentValue.includes(".")) {
        currentValue += ".";
        display.textContent = currentValue;
    }
})

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

resetButton.addEventListener("click", () => {
    initialValue = "";
    currentValue = "";
    operator = "";
    display.textContent = "";
    operationDisplay.style.opacity = 0;
    operationDisplay.src = "";
})

addButton.addEventListener("click", () => {
    if (display.textContent !== "") {
        if (initialValue !== "" && currentValue !== "" && operator !== "") {
            display.textContent = operate(operator, +initialValue, +currentValue);
            while (display.offsetWidth > originalDisplayWidth) {
                display.textContent = display.textContent.slice(0,-1);
            }
        }

        initialValue = display.textContent;
        currentValue = "";
        operator = "+";
        operationDisplay.style.opacity = 1;
        operationDisplay.src = "./images/add.png";
}});    

subtractButton.addEventListener("click", () => {
    if (display.textContent !== "") {
        if (initialValue !== "" && currentValue !== "" && operator !== "") {
            display.textContent = operate(operator, +initialValue, +currentValue);
            while (display.offsetWidth > originalDisplayWidth) {
                display.textContent = display.textContent.slice(0,-1);
            }

        }

        initialValue = display.textContent;
        currentValue = "";
        operator = "-";
        operationDisplay.style.opacity = 1;
        operationDisplay.src = "./images/subtract.png";
}});

multiplyButton.addEventListener("click", () => {
    if (display.textContent !== "") {
        if (initialValue !== "" && currentValue !== "" && operator !== "") {
            display.textContent = operate(operator, +initialValue, +currentValue);
            while (display.offsetWidth > originalDisplayWidth) {
                display.textContent = display.textContent.slice(0,-1);
            }
        }

        initialValue = display.textContent;
        currentValue = "";
        operator = "x";
        operationDisplay.style.opacity = 1;
        operationDisplay.src = "./images/multiply.png";
}});

divideButton.addEventListener("click", () => {
    if (display.textContent !== "") {
        if (initialValue !== "" && currentValue !== "" && operator !== "") {
            display.textContent = operate(operator, +initialValue, +currentValue);
            while (display.offsetWidth > originalDisplayWidth) {
                display.textContent = display.textContent.slice(0,-1);
            }
        }

        initialValue = display.textContent;
        currentValue = "";
        operator = "div";
        operationDisplay.style.opacity = 1;
        operationDisplay.src = "./images/divide.png";
}});

equalButton.addEventListener("click", () => {
    if (initialValue !== "" && currentValue !== "" && operator !== "") {
            display.textContent = operate(operator, +initialValue, +currentValue);
            while (display.offsetWidth > originalDisplayWidth) {
                display.textContent = display.textContent.slice(0,-1);
            }
    }
    
    initialValue = "";
    currentValue = "";
    operator = "";
    operationDisplay.style.opacity = 0;
    operationDisplay.src = "";
});