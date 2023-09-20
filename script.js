const numberButtons = document.querySelectorAll('.number');
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalsButton = document.querySelector('#equals');
const numberDisplay = document.querySelector('#num-display');

let numberOne;
let operator;
let numberTwo;

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

function operate(a, operator, b) {
  return operator(+a, +b);
}

let displayValue = '';

function populateDisplay() {
  numberDisplay.textContent = displayValue;
}

numberButtons.forEach((number) => {
  number.addEventListener('click', () => {
    displayValue += number.textContent;
    populateDisplay();
  })
})

addButton.addEventListener('click', () => {
  operator = add;
  numberOne = displayValue;
  numberTwo = displayValue;
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
  numberTwo = displayValue;
  displayValue = operate(numberOne, operator, numberTwo);
  populateDisplay();
})