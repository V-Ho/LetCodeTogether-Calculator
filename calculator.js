
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

const displayVal = document.getElementById('displayVal')

let display = ''
let valOne
let valTwo
let symbol

const numClick = document.getElementsByClassName('btnNum')
for (let arg of numClick) {
  arg.addEventListener('click', () => {
    display += arg.innerHTML
    displayVal.innerHTML = display
  })
}

const operatorClick = document.getElementsByClassName('btnOperator')
for (let arg of operatorClick) {
  arg.addEventListener('click', () => {
    valOne = parseInt(display)
    console.log('VAL1', valOne)
    symbol = arg.innerHTML
    display = ''
  })
}

const evaluate = document.querySelector('#itemg')
evaluate.onclick = () => {
  valTwo = parseInt(display)
  const operators = {
    '+': add,
    '-': subtract,
    'x': multiply,
    '÷': divide
  }

  const res = operators[symbol](valOne, valTwo)

  displayVal.textContent = res
  display = ''
}

const clearBtn = document.querySelector('#itema')
clearBtn.onclick = () => {
  displayVal.innerHTML = '0'
}
