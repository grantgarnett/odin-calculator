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