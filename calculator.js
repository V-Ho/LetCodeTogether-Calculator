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

// 3. Declare variables will be used in the calculator
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

// 5. Create functions that update the display for the calculator using number, operator, evaluate and clear buttons

// Number buttons are displayed when clicked, and stored as variable
// convert numbers from nodelist to Array
const numbersArr = Array.from(numbers)

// loop over all number buttons and attach event listeners to them
numbersArr.forEach((num) => {
  num.addEventListener('click', () => {
    // update display when number is clicked
    display.innerHTML = num.innerHTML
    // update displayVal
    displayVal = num.innerHTML
  })
})

// Operator buttons store operator symbol to be used in calculator
const operatorArr = Array.from(operators)

// loop over all operator buttons and attach event listener to them
operatorArr.forEach((opr) => {
  opr.addEventListener('click', () => {
    // set current display value to valOne
    valOne = displayVal
    // set symbol to operator button's innerHTML value
    symbol = opr.innerHTML
    // set display value to empty in order to recieve second value
    displayVal = ''
  })
})

// Evaluate button uses operate function using two numbers and displays result
evaluate.onclick = () => {
  valTwo = displayVal
  // call operator function with operator symbol and two values
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
