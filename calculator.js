
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

let valOne
let valTwo
let symbol
let calcArray = []

const emptyCalcArray = () => {
  calcArray.length = 0
}

const operatorClick = document.getElementsByClassName('btnOperator')
for (let arg of operatorClick) {
  arg.addEventListener('click', () => {
    symbol = arg.innerHTML
  })
}

const numClick = document.getElementsByClassName('btnNum')
for (let arg of numClick) {
  arg.addEventListener('click', () => {
    displayVal.innerHTML = arg.innerHTML
    calcArray.push(arg.innerHTML)
    console.log('ARRAY', calcArray)
    valOne = calcArray[0]
    valTwo = calcArray[1]
  })
}

const evaluate = document.querySelector('#itemg')
evaluate.onclick = () => {
  const operators = {
    '+': add,
    '-': subtract,
    'x': multiply,
    '÷': divide
  }

  const res = operators[symbol](valOne, valTwo)

  displayVal.textContent = res
  emptyCalcArray()
}

const clearBtn = document.querySelector('#itema')
clearBtn.onclick = () => {
  displayVal.innerHTML = '0'
}
