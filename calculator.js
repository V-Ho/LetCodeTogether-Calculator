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

// 2. Create operate function that takes an operator and 2 numbers, the calls one of the math functions on the numbers
const operate = (operator, num1, num2) => {
  let result = 0
  switch (operator) {
    case '+': result = add(num1, num2)
      break
    case '-': result = subtract(num1, num2)
      break
    case 'x': result = multiply(num1, num2)
      break
    case '÷': result = divide(num1, num2)
      break
  }
  return result
}

// 3. Declare variables will be changed by our actions on the calculator
let displayVal = ''
let valOne // number passed into operator
let valTwo // number after operator
let symbol // operator calculator symbol

// 4. Store buttons as variables that can be called later
const display = document.getElementById('display')
const numbers = document.getElementsByClassName('btnNum')
const operators = document.getElementsByClassName('btnOperator')
const evaluate = document.querySelector('#evaluate')
const clearBtn = document.querySelector('#clear')

// 5. Create functions for handling number, operator, evaluate and clear buttons

// Number buttons event handler
const numbersArr = Array.from(numbers) // convert numbers from nodelist to Array
numbersArr.forEach((num) => {
  num.addEventListener('click', () => {
    // update display each time number is clicked
    displayVal = num.innerHTML
    display.innerHTML = displayVal
  })
})

// Operator buttons event handler
const operatorArr = Array.from(operators)
operatorArr.forEach((opr) => {
  opr.addEventListener('click', () => {
    valOne = displayVal
    symbol = opr.innerHTML

    // set display value to empty in order to recieve second value
    displayVal = ''
  })
})

// Evaluate button event handler
evaluate.onclick = () => {
  valTwo = displayVal

  // call operator function, passing in two values
  const res = operate(symbol, valOne, valTwo)

  // displayVal the result of the operator function
  display.innerHTML = res
  console.log(`Calculate: ${valOne} + ${valTwo} = ${res}`)

  // set displayVal to empty after calculator evaluates two numbers
  displayVal = ''
}

// Clear button event handler
clearBtn.onclick = () => {
  displayVal = ''
  display.innerHTML = 0
}

/* Next steps:
- Limit decimals to 2
- Make +/- button work (convert to positive/negative)
- Calulate numbers greater than 1 digit
*/
