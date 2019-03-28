// 1. Create math functions
const add = (x, y) => {
  return x + y
}

const subtract = (x, y) => {
  return x - y
}

const multiply = (x, y) => {
  return x * y
}

const divide = (x, y) => {
  return x / y
}

const operators = {
  '+': add,
  '-': subtract,
  'x': multiply,
  '÷': divide
}
// array
// for loop (UPPERCASE)

/* 2. Javascript step sequence:
- onclick handlers for number buttons
- onclick handlers for operator buttons
- function to execute math functions using '=' button that gives result of:
  initial value, operator, second value
    -declare variables, pass around and modify them
- display result of execute function
- function to clear display using 'clear' button
*/
const displayVal = document.getElementById('displayVal')

// Declare the variables we need
let display = ''
let valOne
let valTwo
let symbol

const numClick = document.getElementsByClassName('btnNum')
for (let arg of numClick) {
  arg.addEventListener('click', () => {
    display = display + arg.innerHTML
    displayVal.innerHTML = display
  })
}

const operatorClick = document.getElementsByClassName('btnOperator')
for (let arg of operatorClick) {
  arg.addEventListener('click', () => {
    valOne = display
    symbol = arg.innerHTML
    display = ''
  })
}

const evaluate = document.querySelector('#evaluate')
evaluate.onclick = () => {
  valTwo = display

  // call operator function, passing in two values, and limiting decimals
  const res = parseFloat(operators[symbol](valOne, valTwo)).toFixed(2)

  // display the result of the operator function
  displayVal.textContent = res
  display = ''
}

const clearBtn = document.querySelector('#clear')
clearBtn.onclick = () => {
  display = ''
  displayVal.innerHTML = 0
}
