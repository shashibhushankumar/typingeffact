/*
    © 2025 S.Bhushan. All rights reserved.
    This code is licensed under the MIT License.
    Contact: gitsecure.io@gmail.com
*/

let text = "Hello, welcome to typing effect!\\nThis is a new line.";
const speed = 100; // Typing speed in milliseconds
let index = 0;

// Function to type the text
function typeText() {
    if (index < text.length) {
        if (text.charAt(index) === '\\' && text.charAt(index + 1) === 'n') {
            document.getElementById("typed-text").innerHTML += '<br>';
            index += 2; // Skip the '\n' characters
        } else {
            document.getElementById("typed-text").innerHTML += text.charAt(index);
            index++;
        }
        setTimeout(typeText, speed);
    }
}

// Function to update the text
function updateText() {
    const newText = document.getElementById("input-text").value;
    if (newText) {
        text = newText;
        index = 0;
        document.getElementById("typed-text").innerHTML = ''; // Clear the current text
        typeText(); // Start typing the new text
    }
}

// Function to generate the HTML file with the updated text
function generateHtmlFile() {
    const content = `
<!DOCTYPE html>
<!--
    © 2025 S.Bhushan. All rights reserved.
    This code is licensed under the MIT License.
    Contact: gitsecure.io@gmail.com
-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typed Text Example</title>
    <!-- Link to Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body class="custom-body">
    <div class="container">
        <p id="typed-text" class="custom-style"></p>
    </div>
    <footer class="sb-footer">
        <p>© 2025 S.Bhushan. All rights reserved. | Contact: gitsecure.io@gmail.com</p>
    </footer>
    <script>
    ${typeText.toString()}
    window.onload = function() {
        ${text.split('').map((char, i) => {
            if (char === '\\' && text.charAt(i + 1) === 'n') {
                return `setTimeout(() => document.getElementById("typed-text").innerHTML += '<br>', ${i * speed});`;
            } else {
                return `setTimeout(() => document.getElementById("typed-text").innerHTML += '${char}', ${i * speed});`;
            }
        }).join('\n')}
    }
    </script>
</body>
</html>
`;
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'typed_text.html';
    a.click();
    URL.revokeObjectURL(url);
}

// Run the typing effect when the window loads
window.onload = function() {
    typeText();
}
