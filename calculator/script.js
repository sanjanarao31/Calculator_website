let prevInput = '0'
let calculationOperator = ''
let currentInput = '0'
const inputNumber = (number) => {
    if (currentInput === '0') {
        currentInput = number
    } else {

        currentInput += number
    }
}
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener(("click"), (event) => {
        inputNumber(event.target.value)
        updateScreen(currentInput)
    })
})

const inputOperator = (operator) => {
    prevInput = currentInput
    calculationOperator = operator
    currentInput = '0'
}

const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener(("click"), (event) => {
        inputOperator(event.target.value)
        updateScreen(calculationOperator)
    })
})
const calculate = () => {
    let result = 0
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevInput) + parseFloat(currentInput)
            break
        case '-':
            result = parseFloat(prevInput) - parseFloat(currentInput)
            break
        case '*':
            result = parseFloat(prevInput) * parseFloat(currentInput)
            break
        case '/':
            result = parseFloat(prevInput) / parseFloat(currentInput)
            break
    }
    currentInput = result.toString()
    calculationOperator = ''
}
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener(("click"), () => {
    calculate()
    updateScreen(currentInput)
})
const clearAll = () => {
    prevInput = '0'
    calculationOperator = ''
    currentInput = '0'
}

const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener(("click"), () => {
    clearAll()
    updateScreen(currentInput)
})
inputDecimal = (dot) => {
    if (currentInput.includes(".")) {
        return
    }
    currentInput += dot
}
const decimalClick = document.querySelector(".decimal")
decimalClick.addEventListener(("click"), (event) => {
    inputDecimal(event.target.value)
})

inputPercentage = () => {
    if (currentInput.includes("%")) {
        return
    }
    currentInput /= 100
}

const percentageClick = document.querySelector(".percentage")
percentageClick.addEventListener(("click"), () => {
    inputPercentage()
    updateScreen(currentInput)
})