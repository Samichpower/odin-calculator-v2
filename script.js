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
    doOperation(operator.id);
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
  displayValue = previousNum;
  populateDisplay();
  displayValue = '';
}

equalsButton.addEventListener('click', () => {
  if (previousNum === '') return;
  isEqualed = true;
  if (currentNum === '') currentNum = previousNum;
  previousNum = operate(previousNum, operator, currentNum);
  console.log(previousNum, currentNum);
  displayValue = previousNum;
  populateDisplay();
})

clearButton.addEventListener('click', () => {
  previousNum = '';
  currentNum = '';
  operator = null;
  displayValue = '';
  isEqualed = false;
  numberDisplay.textContent = 0;
})