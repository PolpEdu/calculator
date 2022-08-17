const buttons = document.querySelectorAll('.grid-element');
const result = document.getElementById('result');
const reset = document.getElementById('reset')

// All buttons
let op = 0;
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let val = e.currentTarget.textContent;

        if (val == 'AC') { // Check if operation is reset
            result.textContent = '0';
            return;
        } else if (e.currentTarget.classList.contains('operator')) {
            let num1 = result.textContent.split(val)[0]
            let num2 = result.textContent.split(val)[2]
            result.textContent = checkOperation(val, num1, num2)
            op++;
        } else if (val == '=') {
            console.log(eval(result.textContent.toString()))
            return;
        } else {
            op = 0; // reset op >> see if used operator twice
        }

        if (op > 1) return;

        console.log(e.currentTarget.textContent)
        if (result.textContent == 0) result.textContent = e.currentTarget.textContent;
        else result.textContent += e.currentTarget.textContent;
    })
})

const checkOperation = (operation, num1, num2) => {
    let res = 0;
    if (operation == '+') res = add(num1, num2)
    else if (operation == '-') res = minus(num1, num2)
    else if (operation == 'x') res = multiply(num1, num2)
    else if (operation == '/') res = reduce(num1, num2)
    return res;
}

// Operations
const add = (x, y) => x + y
const minus = (x, y) => x - y
const multiply = (x, y) => x * y
const reduce = (x, y) => x / y