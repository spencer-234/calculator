// set up variables for numbers and operator
let num1;
let num2;
let operator;

// set up functions for expressions
function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 + num2;
            break;
        case 'x':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
    }
}

