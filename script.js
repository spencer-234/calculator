// set up variables for numbers and operator
let num1 = "";
let num2 = "";
let selectedOp;
let displayNum = document.querySelector('.displaynum');
let displayExpression = document.querySelector('.expression');

// get first number
let numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (!num2) {
            num1 += number.textContent;
            displayNum.textContent = `${num1}`;
        }
    })
});

// get operator
let operators = document.querySelectorAll('.func');
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        selectedOp = operator.textContent;
        displayExpression.textContent = `${num1} ${selectedOp}`;
        console.log(selectedOp);
    })
});
// set up functions for expressions
function operate(num1, selectedOp, num2) {
    switch (selectedOp) {
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
};

