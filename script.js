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
  if (!operator && !numberTwo) {
    numberOne = displayValue;
    numberTwo = displayValue;
  } else {
    numberTwo = displayValue;
    numberOne = operate(numberOne, operator, numberTwo);
  }
  operator = add;
  console.log(numberOne, numberTwo);
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
  console.log(numberOne, numberTwo);
  displayValue = operate(numberOne, operator, numberTwo);
  populateDisplay();
})