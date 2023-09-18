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
  return operator(a, b);
}

const numberDisplay = document.querySelector('#num-display');
let displayValue = '';

function populateDisplay() {
  const numberButtons = document.querySelectorAll('.number');
  numberButtons.forEach((item) => {
    item.addEventListener('click', () => {
      displayValue += item.textContent;
      numberDisplay.textContent = displayValue;
    })
  })
}

populateDisplay();

const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');

addButton.addEventListener('click', () => {
  operator = add;
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