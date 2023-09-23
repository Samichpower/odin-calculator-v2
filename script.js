const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals');
const numberDisplay = document.querySelector('#num-display');
const clearButton = document.querySelector('#clear');

let previousNum = '';
let currentNum = '';
let operator = null;
let displayValue = '';
let isEqualed = false;
let isNewCalculation = true;

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
    if (isNewCalculation) {
      clearCalculator();
      isNewCalculation = false;
    }
    if (currentNum.length === 0 && number.textContent === '0') {
      return;
    }
    currentNum += number.textContent;
    displayValue += number.textContent;
    populateDisplay();
  })
})

operatorButtons.forEach((operator) => {
  operator.addEventListener('click', () => {
    onOperatorClick(operator.id);
  })
})

function onOperatorClick(item) {
  isNewCalculation = false;
  if (!operator) {
    previousNum = currentNum;
  } else if (!isEqualed) {
    previousNum = operate(previousNum, operator, currentNum);
  }
  console.log(previousNum, currentNum);
  operator = item;
  currentNum = '';
  displayValue = previousNum;
  populateDisplay();
  displayValue = '';
}

equalsButton.addEventListener('click', () => {
  if (previousNum === '') return;
  isNewCalculation = true;
  isEqualed = true;
  if (currentNum === '') currentNum = previousNum;
  previousNum = operate(previousNum, operator, currentNum);
  console.log(previousNum, currentNum);
  displayValue = previousNum;
  populateDisplay();
})

function clearCalculator() {
  previousNum = '';
  currentNum = '';
  operator = null;
  displayValue = '';
  isEqualed = false;
  numberDisplay.textContent = 0;
}

clearButton.addEventListener('click', clearCalculator);