const operators = document.querySelectorAll('.operator')
const clear = document.querySelector('.clear')
const numbers = document.querySelectorAll('.number')
const rotate = document.querySelectorAll('.a')
const del = document.querySelector('.dele')
const equal = document.querySelector('.equal')
const previousValue = document.querySelector('.previous-value')
const currentValue = document.querySelector('.current-value')
let operation = ''
let previous = ''
let current = ''

equal.addEventListener('click', () => {
    if(previous !==''& current!== '') {
        count()
    }
    if( previous !== '' && current == '') {
        current= previous.slice(0,-1)
        previous = ''
    }
    upgradeResult()

})
const count = () => {
    console.log(operation)
    let operations = 0
    let currentv = parseFloat(current)
    let previousv = parseFloat(previous)
    console.log(current)

    switch (operation) {
        case '+':
            operations = currentv + previousv
            break;
        case '**':
            operations = Math.pow(previousv, currentv)
            break;
        case '-':
            operations = currentv - previousv
            break;
        case '*':
            operations = currentv * previousv
            break;
        case '/':
            operations = previousv / currentv
            break;
        case '%':
            operations = (previousv / 100) * currentv
            break;

        default:
            break;
    }


    previous = ''
    current = operations.toString()
    
}

clear.addEventListener('click', () => {
    operation = ''
    current = ''
    previous = ''
    upgradeResult()
})

const addOperator = (inp) => {
    if (previousValue.innerText !== '' && currentValue !== '') {
        count()
    }
    operation = inp
    console.log(operation)
    current = current + inp
    previous = current
    current = ''

}
operators.forEach((el) => {
    el.addEventListener('click', () => {
        if (operation.includes(el.innerText) && current == '') {
            return
        }
        addOperator(el.innerText)
        upgradeResult()
    })
})

const addNumber = (inp) => {
    if (inp === '.') {
        if (current.includes('.')) {
            return
        }
    }
    if (current.length == 15) {
        return
    }
    current = current + inp

}
del.addEventListener('click', () => {
    current = current.slice(0, -1)
    upgradeResult()
})

const upgradeResult = () => {

    currentValue.innerText = current
    previousValue.innerText = previous

}

numbers.forEach((el) => {
    el.addEventListener('click', () => {
        addNumber(el.innerText)
        upgradeResult()
    })

})