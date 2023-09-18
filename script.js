function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let firstNum;
let operator;
let secondNum;

function operate(a, operator, b) {
  return operator(+a, +b);
}



const numberDisplay = document.querySelector('#num-display');
let displayValue = '';

function populateDisplay() {
  numberDisplay.textContent = displayValue;
}

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((number) => {
  number.addEventListener('click', () => {
    displayValue += number.textContent;
    populateDisplay();
  })
})



const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalsButton = document.querySelector('#equals');

addButton.addEventListener('click', () => {
  operator = add;
  firstNum = displayValue;
  secondNum = displayValue;
  displayValue = '';
});

subtractButton.addEventListener('click', () => {
  operator = subtract;
});

multiplyButton.addEventListener('click', () => {
  operator = multiply;
});

divideButton.addEventListener('click', () => {
  operator = divide;
});

equalsButton.addEventListener('click', () => {
  // firstNum = displayValue;
  displayValue = operate(firstNum, operator, secondNum);
  populateDisplay();
})