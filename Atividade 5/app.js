document.getElementById('fibForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const numElements = parseInt(document.getElementById('numElements').value);
  const fibResults = document.getElementById('fibResults');
  fibResults.innerHTML = '';

  let a = 0, b = 1;
  for (let i = 0; i < numElements; i++) {
    const next = a + b;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${i}</td>
      <td>${a}</td>
    `;
    fibResults.appendChild(row);
    a = b;
    b = next;
  }
});