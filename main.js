const buttons = document.querySelectorAll('.grid-element');
const result = document.getElementById('result');
const reset = document.getElementById('reset')

// All buttons
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let val = e.currentTarget.textContent;

        if (val == 'AC') { // Check if operation is reset
            result.textContent = '0';
            return;
        }

        console.log(e.currentTarget.textContent)
        if (result.textContent == 0) result.textContent = e.currentTarget.textContent;
        else result.textContent += e.currentTarget.textContent;
    })
})