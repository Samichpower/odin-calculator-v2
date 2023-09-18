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

function populateDisplay() {
  let displayValue = '';

  const numberButtons = document.querySelectorAll('.number');
  numberButtons.forEach((item) => {
    item.addEventListener('click', () => {
      displayValue += item.textContent;
      numberDisplay.textContent = displayValue;
    })
  })
}

populateDisplay();