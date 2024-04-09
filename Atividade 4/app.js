function findFibonacci() {
  const position = document.getElementById('position').value;
  const result = document.getElementById('result');

  if (position <= 0) {
    result.textContent = "Please enter a valid position (greater than 0).";
    return;
  }

  let a = 0, b = 1;
  for (let i = 2; i <= position; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  result.textContent = `The number at position ${position} in the Fibonacci sequence is ${b}.`;
}