function generateTable() {
    let table = document.getElementById("random-table");
    table.innerHTML = "";

    for (let i = 0; i < 4; i++) {
        let row = table.insertRow();
        for (let j = 0; j < 4; j++) {
            let cell = row.insertCell();
            cell.textContent = Math.floor(Math.random() * 100); // Generate random number between 0 and 99
        }
    }
}