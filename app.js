

function operate(arr) {
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
const numbers = document.querySelectorAll('.number')
numbers.forEach(function (num) {
    num.addEventListener('click', function () {
        operationArray.push(this.id);
        console.log(operationArray);
        displayBoard.innerHTML = operationArray.join("");
    })
}
)
const operators = document.querySelectorAll('.operator')
operators.forEach(function (operator) {
    operator.addEventListener('click', function () {
        if (operationArray.length === 0) {
            operationArray[0] = solution;
        }
        console.log(operationArray)
        operationArray[0] = operationArray.join("");
        operationArray.length = 1;
        operationArray.push([this.id]);
        displayBoard.innerHTML = operationArray.join("");
    })
}
)
let solution = 0;

const operationKey = document.querySelector('#equal')
operationKey.addEventListener('click', function () {

    solution = operate(operationArray);
    solutionBoard.textContent = solution;
    operationArray.length = 0;
})

const clear = document.querySelector('#clear')
clear.addEventListener('click', function () {
    operationArray.length = 0;
    displayBoard.innerHTML = '0';
    solutionBoard.textContent = '0'
    solution = 0;
})

