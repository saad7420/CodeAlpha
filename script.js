let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let previousInput = '';
let isCalculatorOn = false;

function toggleCalculator() {
    if (isCalculatorOn) {
        display.textContent = 'Saadi Calculator';
        clearDisplay();
    } else {
        display.textContent = '0';
    }
    isCalculatorOn = !isCalculatorOn;
}

function clearDisplay() {
    if (isCalculatorOn) {
        currentInput = '';
        operator = null;
        previousInput = '';
        updateDisplay();
    }
}

function deleteDigit() {
    if (isCalculatorOn) {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    }
}

function appendDigit(digit) {
    if (isCalculatorOn && currentInput.length < 15) {
        currentInput += digit;
        updateDisplay();
    }
}

function appendOperator(op) {
    if (isCalculatorOn && currentInput !== '') {
        if (operator === null) {
            previousInput = currentInput;
            currentInput = '';
        }
        operator = op;
        updateDisplay();
    }
}

function calculate() {
    if (isCalculatorOn && operator !== null && currentInput !== '') {
        let result;
        let prev = parseFloat(previousInput);
        let current = parseFloat(currentInput);
        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
        }
        currentInput = result.toString();
        operator = null;
        previousInput = '';
        updateDisplay();
    }
}

function updateDisplay() {
    if (isCalculatorOn) {
        display.textContent = currentInput || '0';
    }
}
