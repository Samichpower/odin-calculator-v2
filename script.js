const numberButtons = document.querySelectorAll('.number');
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalsButton = document.querySelector('#equals');
const numberDisplay = document.querySelector('#num-display');
const operatorButtons = document.querySelectorAll('.operator');

let previousNum = '';
let currentNum = '';
let operator = null;
let displayValue = '';
let isEqualed = false;

const allOperations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
}

function operate(a, chosenOperator, b) {
  return allOperations[chosenOperator](+a, +b);
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

operatorButtons.forEach((operator) => {
  operator.addEventListener('click', () => {
    doOperation(operator.id);
  })
})

equalsButton.addEventListener('click', () => {
  isEqualed = true;
  previousNum = operate(previousNum, operator, currentNum);
  console.log(previousNum, currentNum);
  displayValue = previousNum;
  populateDisplay();
})