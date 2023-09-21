const numberButtons = document.querySelectorAll('.number');
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalsButton = document.querySelector('#equals');
const numberDisplay = document.querySelector('#num-display');

let previousNum = '';
let currentNum = '';
let operator = null;
let displayValue = '';
let isEqualed = false;

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

function operate(a, chosenOperator, b) {
  return chosenOperator(+a, +b);
}

function populateDisplay() {
  numberDisplay.textContent = displayValue;
}

numberButtons.forEach((number) => {
  number.addEventListener('click', () => {
    currentNum += number.textContent;
    displayValue += number.textContent;
    populateDisplay();
  })
})

function doOperation(item) {
  if (!operator) {
    previousNum = currentNum;
  } else if (!isEqualed) {
    previousNum = operate(previousNum, operator, currentNum);
  }
  operator = item;
  console.log(previousNum, currentNum);
  currentNum = '';
  displayValue = '';
}

addButton.addEventListener('click', () => {
  doOperation(add);
});

subtractButton.addEventListener('click', () => {
  doOperation(subtract);
});

multiplyButton.addEventListener('click', () => {
  doOperation(multiply);
});

divideButton.addEventListener('click', () => {
  doOperation(divide);
});

equalsButton.addEventListener('click', () => {
  isEqualed = true;
  previousNum = operate(previousNum, operator, currentNum);
  console.log(previousNum, currentNum);
  displayValue = previousNum;
  populateDisplay();
})