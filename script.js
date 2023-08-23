// set up variables for numbers and operator
let num1 = "";
let num2 = "";
let operator;
let displayNum = document.querySelector('.displaynum');
let displayExpression = document.querySelector('.expression');

// get first number
let numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (!num2) {
            num1 += number.textContent;
            displayNum.textContent = `${num1}`;
            console.log(num1);
        }
    })
});

// get operator

// set up functions for expressions
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
};

