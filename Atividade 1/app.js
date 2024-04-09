// Function to generate a random size string
function generateRandomString() {
    const size = Math.floor(Math.random() * 10) + 1; // Random size between 1 and 10
    return "string";
}

// Function to generate a random font family
function generateRandomFontFamily() {
    const fontFamilies = ["Arial, sans-serif", "Times New Roman, serif", "Courier New, monospace", "Comic Sans MS, cursive", "Verdana, sans-serif", "Georgia, serif", "Lucida Console, monospace", "Trebuchet MS, sans-serif", "Brush Script MT, cursive", "Impact, fantasy", "Palatino Linotype, serif"];
    const randomIndex = Math.floor(Math.random() * fontFamilies.length);
    return fontFamilies[randomIndex];
}

// Generate 10 random size strings with random font families and font sizes
const randomStringsDiv = document.getElementById('randomStrings');
for (let i = 0; i < 10; i++) {
    const stringDiv = document.createElement('div');
    stringDiv.textContent = generateRandomString();
    stringDiv.style.fontFamily = generateRandomFontFamily();
    stringDiv.style.fontSize = Math.floor(Math.random() * 20) + 12 + "px"; // Random font size between 12px and 31px
    randomStringsDiv.appendChild(stringDiv);
}