const numberButtons = document.querySelectorAll('.number');
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalsButton = document.querySelector('#equals');
const numberDisplay = document.querySelector('#num-display');

let numberOne = '';
let numberTwo = '';
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
    numberTwo += number.textContent;
    displayValue += number.textContent;
    populateDisplay();
  })
})

function doOperation(item) {
  if (!operator) {
    numberOne = numberTwo;
  } else if (!isEqualed) {
    numberOne = operate(numberOne, operator, numberTwo);
  }
  operator = item;
  console.log(numberOne, numberTwo);
  numberTwo = '';
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
  numberOne = operate(numberOne, operator, numberTwo);
  console.log(numberOne, numberTwo);
  displayValue = numberOne;
  populateDisplay();
})