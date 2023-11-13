document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let currentInput = '';

    function updateDisplay() {
        display.value = currentInput;
    }

    function clear() {
        currentInput = '';
        updateDisplay();
    }

    function calculate() {
        try {
            currentInput = eval(currentInput).toString();
            updateDisplay();
        } catch (error) {
            currentInput = 'Error';
            updateDisplay();
        }
    }

   
    document.getElementById('btn-1').addEventListener('click', function () {
        currentInput += '1';
        updateDisplay();
    });

   
    document.getElementById('btn-clear').addEventListener('click', clear);
    document.getElementById('btn-equals').addEventListener('click', calculate);
});


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

function handleButtonClick(buttonId) {
    const buttonElement = document.getElementById(buttonId);

    // Добавим класс для анимации при нажатии
    buttonElement.classList.add('button-clicked');

    // Удалим класс анимации через короткий промежуток времени
    setTimeout(() => {
        buttonElement.classList.remove('button-clicked');
    }, 100);

    switch (buttonId) {
        case 'btn-add':
            currentInput += '+';
            break;
        case 'btn-subtract':
            currentInput += '-';
            break;
        case 'btn-multiply':
            currentInput += '*';
            break;
        case 'btn-divide':
            currentInput += '/';
            break;
        case 'btn-equals':
            calculate();
            break;
        case 'btn-clear':
            clear();
            break;
        case 'btn-square-root':
            currentInput = squareRoot(parseFloat(currentInput)).toString();
            updateDisplay();
            break;
        case 'btn-power':
            currentInput = power(parseFloat(currentInput)).toString();
            updateDisplay();
            break;
        default:
            currentInput += buttonElement.textContent;
    }
    updateDisplay();
}