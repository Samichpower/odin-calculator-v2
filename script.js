const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals');
const numberDisplay = document.querySelector('#num-display');
const clearButton = document.querySelector('#clear');
const decimalButton = document.querySelector('#decimal');
const percentButton = document.querySelector('#percent');
const backspaceButton = document.querySelector('#backspace');

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
  if (displayValue === '') {
    numberDisplay.textContent = 0;
  } else {
    numberDisplay.textContent = displayValue;
  }
  appendFontSize();
}

function appendFontSize() {
  const displayValueLength = displayValue.toString().length;
  if (displayValueLength > 20) {
    numberDisplay.style.fontSize = '24px';
  } else if (displayValueLength > 15) {
    numberDisplay.style.fontSize = '28px';
  } else if (displayValueLength > 10) {
    numberDisplay.style.fontSize = '36px';
  } else {
    numberDisplay.style.fontSize = '48px';
  }
  console.log(displayValue, displayValueLength);
}

function checkForDecimal(number) {
  if (number.textContent != '.') return false;
  if ((currentNum + '').indexOf('.') > -1) {
    return true;
  }
}

numberButtons.forEach((number) => {
  number.addEventListener('click', () => {
    if (checkForDecimal(number)) return;
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
  appendFontSize();
}

clearButton.addEventListener('click', clearCalculator);

percentButton.addEventListener('click', () => {
  if (previousNum) {
    currentNum = currentNum / 100;
    displayValue = currentNum;
    populateDisplay();
  }
});

backspaceButton.addEventListener('click', () => {
  if (currentNum.length > 0) {
    currentNum = currentNum.slice(0, -1);
    displayValue = currentNum;
    populateDisplay();
  }
})