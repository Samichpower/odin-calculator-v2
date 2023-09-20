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

addButton.addEventListener('click', () => {
  if (!operator) {
    numberOne = numberTwo;
    numberTwo = '';
  } else {
    // numberTwo = displayValue;
    numberOne = operate(numberOne, operator, numberTwo);
    numberTwo = '';
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
  // numberTwo = displayValue;
  numberOne = operate(numberOne, operator, numberTwo);
  console.log(numberOne, numberTwo);
  displayValue = numberOne;
  populateDisplay();
})