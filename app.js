

function operate(arr) {
    if (arr.length === 0) {
        return 0
    }
    if (arr.length === 1) {
        return +arr[0]
    }
    if (arr.length > 2) {
        arr[2] = arr.slice(2).join("");
        arr.length = 3;
    }
    if (arr[1][0] === '+') {
        return +arr[0] + +arr[2]
    } else if (arr[1][0] === '-') {
        return +arr[0] - +arr[2]
    } else if (arr[1][0] === '*') {
        return +arr[0] * +arr[2]
    } else if (arr[1][0] === '/') {
        return +arr[0] / +arr[2]
    };
}


const displayBoard = document.querySelector(".displayboard")
const solutionBoard = document.querySelector(".solution")

const operationArray = [];
let solution = 0;

const numbers = document.querySelectorAll('.number')
numbers.forEach(function (num) {
    num.addEventListener('click', function () {
        operationArray.push(this.id);
        console.log(operationArray);
        displayBoard.innerHTML = operationArray.join("");
    })
}
)
//all numbers are pushed into array as single element

const operators = document.querySelectorAll('.operator')
operators.forEach(function (operator) {
    operator.addEventListener('click', function () {
        if (operationArray.length === 0) {
            operationArray[0] = solution;
        } else if (typeof operationArray[1] === 'object') {
            solution = operate(operationArray).toFixed(5);
            solutionBoard.textContent = solution;
            operationArray.length = 0;
            operationArray[0] = solution;
            operationArray.push([this.id]);
            displayBoard.innerHTML = operationArray.join("");
            return;
        }
        console.log(operationArray)
        operationArray[0] = operationArray.join("");
        operationArray.length = 1;
        operationArray.push([this.id]);
        displayBoard.innerHTML = operationArray.join("");
    })
}
)
//1. while enter any operator, join the previous number to operationArray[0] as first operand
//2. while enter any operator when there's a solution haven't been cleared,
//   the solution will be set as the first operand.
//3. while enter any operator, if there is  already second operand there,
//   get the solution and clear the operationArray. after that, go to 2.

const operationKey = document.querySelector('#equal')
operationKey.addEventListener('click', function () {
    solution = operate(operationArray).toFixed(5);
    solutionBoard.textContent = solution;
    operationArray.length = 0;
})
//operationKey get the solution and clear the operationArray 


const allClear = document.querySelector('#allclear')
allClear.addEventListener('click', function () {
    solution = 0;
    operationArray.length = 0;
    displayBoard.innerHTML = '0';
    solutionBoard.textContent = '0'
})
//allClear clear all history (solution & operationArray)
//and displaying number

const clear = document.querySelector('#clear')
clear.addEventListener('click', function () {
    operationArray.length = 0;
    displayBoard.innerHTML = '0';
})
//clear just clear the operationArray, but doesn't clear solution