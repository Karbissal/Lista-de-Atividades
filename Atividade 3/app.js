document.getElementById("submitBtn").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const cellphone = document.getElementById("cellphone").value;
    const email = document.getElementById("email").value;

    if (name === "" || address === "" || cellphone === "" || email === "") {
        alert("Please fill in all fields");
        if (name === "") {
            alert("Name field is empty");
        }
        if (address === "") {
            alert("Address field is empty");
        }
        if (cellphone === "") {
            alert("Cellphone field is empty");
        }
        if (email === "") {
            alert("Email field is empty");
        }
    }
    popup.innerHTML = message;
    document.body.appendChild(popup);

    setTimeout(function() {
        popup.remove();
    }, 3000);
    });