const buttons = document.querySelectorAll('.element');
const result = document.getElementById('result');
const holder = document.getElementById('operation');

const operators = ['−', '+', '×', '÷']

// All buttons
let op = 0;
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let value = e.currentTarget.textContent;
        if (value === 'AC') {
            result.textContent = '0';
            holder.textContent = '';
            return;
        } else if (!e.currentTarget.classList.contains('operator')) {
            let hasOperator = operators.some((o) => result.textContent.includes(o));

            if (result.textContent === '0') result.textContent = value;
            else if (hasOperator) result.textContent = value;
            else result.textContent += value;

            if (holder.textContent === '0') holder.textContent = value;
            else holder.textContent += value;

        } else if (e.currentTarget.classList.contains('operator')) {
            addOperator(result, value);
            addOperator(holder, value);
        } else if (value === '=') {
            holder.textContent += '='

        }
    })
})

const addOperator = (local, value) => {
    let hasOperator = operators.some((o) => local.textContent.includes(o))
    if (!hasOperator) local.textContent += value;
    else {
        local.textContent = local.textContent.replace(local.textContent[local.textContent.length - 1], value);
    }
}

const doOperation = (operation, num1, num2) => {
    let res = 0;
    if (operation === '+') res = add(num1, num2)
    else if (operation === '−') res = minus(num1, num2)
    else if (operation === '×') res = multiply(num1, num2)
    else if (operation === '÷') res = reduce(num1, num2)
    return res;
}

// Operations
const add = (x, y) => x + y
const minus = (x, y) => x - y
const multiply = (x, y) => x * y
const reduce = (x, y) => x / y