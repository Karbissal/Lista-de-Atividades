// Function to add two numbers
function addNumbers() {
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    document.getElementById('result').innerText = (number1 + number2);
}

// Function to subtract two numbers
function subtractNumbers() {
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    document.getElementById('result').innerText = (number1 - number2);
}

// Function to multiply two numbers
function multiplyNumbers() {
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    document.getElementById('result').innerText = (number1 * number2);
}

// Function to divide two numbers
function divideNumbers() {
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    if (number2 === 0) {
        document.getElementById('result').innerText = "Cannot divide by zero";
    } else {
        document.getElementById('result').innerText = (number1 / number2);
    }
}