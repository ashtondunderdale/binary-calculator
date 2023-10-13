document.addEventListener("DOMContentLoaded", function () {
    var checkbox = document.getElementById("myCheckbox");
    var biLabel = document.querySelector(".biLbl");
    var deLabel = document.querySelector(".DeLbl");

    // Add an event listener to the checkbox
    checkbox.addEventListener("change", function () {
        // If the checkbox is checked, show the labels; otherwise, hide them
        biLabel.style.display = checkbox.checked ? "inline" : "none";
        deLabel.style.display = checkbox.checked ? "inline" : "none";
    });

    var isDarkMode = false;
    var darkModeButton = document.getElementById("darkModeButton");

    // Function to update the text content of the dark mode button
    function updateDarkModeButtonText() {
        darkModeButton.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    }

    // Function to toggle dark mode
    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        isDarkMode = !isDarkMode;
        updateDarkModeButtonText();
    }

    // Event listener for the dark mode button
    darkModeButton.addEventListener("click", toggleDarkMode);

    // Function to calculate and display the result
    function calculateAndDisplayResult() {
        var num1 = document.getElementById("binOne").value;
        var num2 = document.getElementById("binTwo").value;
        var operation = document.getElementById("baseSelect").value;
        var outputBox = document.getElementById("binResult");

        if (num1 == "" && num2 == "") {
            outputBox.value = "Error: invalid input";
        } else if (checkbox.checked) {
            if (num1.match(/^[01]+$/)) {
                var decimalResult = parseInt(num1, 2);
                outputBox.value = decimalResult;
            } else if (/^[0-9]+$/.test(num2)) {
                var decimalValue = parseInt(num2, 10);
                var binaryResult = decimalValue.toString(2);
                outputBox.value = binaryResult;
            } else {
                outputBox.value = "NaN";
            }
        } else {
            var result;

            if (operation === "Addition") {
                result = addBinaryNumbers(num1, num2);
            } else if (operation === "Subtraction") {
                result = subtractBinaryNumbers(num1, num2);
            } else if (operation === "Multiplication") {
                result = multiplyBinaryNumbers(num1, num2);
            } else {
                result = "Select an operation";
            }

            outputBox.value = result;
        }
    }

    // Function to add binary numbers
    function addBinaryNumbers(binary1, binary2) {
        var int1 = parseInt(binary1, 2);
        var int2 = parseInt(binary2, 2);
        var sum = int1 + int2;
        return sum.toString(2);
    }

    // Function to subtract binary numbers
    function subtractBinaryNumbers(binary1, binary2) {
        var int1 = parseInt(binary1, 2);
        var int2 = parseInt(binary2, 2);
        var difference = int1 - int2;
        return difference.toString(2);
    }

    // Function to multiply binary numbers
    function multiplyBinaryNumbers(binary1, binary2) {
        var int1 = parseInt(binary1, 2);
        var int2 = parseInt(binary2, 2);
        var product = int1 * int2;
        return product.toString(2);
    }

    // Function to reset input fields
    function resetFields() {
        document.getElementById("binOne").value = "";
        document.getElementById("binTwo").value = "";
        document.getElementById("binResult").value = "";
    }

    // Event listeners for buttons
    document.getElementById("calculateButton").addEventListener("click", calculateAndDisplayResult);
    document.getElementById("resetButton").addEventListener("click", resetFields);
});
