document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculateButton").addEventListener("click", calculateAndDisplayResult);
    document.getElementById("resetButton").addEventListener("click", resetFields);
    document.getElementById("darkModeButton").addEventListener("click", toggleDarkMode);

    var isDarkMode = false;

    updateDarkModeButtonText();

    function calculateAndDisplayResult() {
        var num1 = document.getElementById("binOne").value;
        var num2 = document.getElementById("binTwo").value;
        var outputBox = document.getElementById("binResult");

        var checkbox = document.getElementById("myCheckbox");
        var isConversionMode = checkbox.checked;

        if (num1 == "" || num2 == "" && isConversionMode) {
            outputBox.value = "Error";
        }

        if (isConversionMode) {
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
            var operation = document.getElementById("baseSelect").value;
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

    function addBinaryNumbers(binary1, binary2) {
        var int1 = parseInt(binary1, 2);
        var int2 = parseInt(binary2, 2);
        var sum = int1 + int2;
        return sum.toString(2);
    }

    function subtractBinaryNumbers(binary1, binary2) {
        var int1 = parseInt(binary1, 2);
        var int2 = parseInt(binary2, 2);
        var difference = int1 - int2;
        return difference.toString(2);
    }

    function multiplyBinaryNumbers(binary1, binary2) {
        var int1 = parseInt(binary1, 2);
        var int2 = parseInt(binary2, 2);
        var product = int1 * int2;
        return product.toString(2);
    }

    function resetFields() {
        document.getElementById("binOne").value = "";
        document.getElementById("binTwo").value = "";
        document.getElementById("binResult").value = "";
    }

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        isDarkMode = !isDarkMode;
        updateDarkModeButtonText();
    }

    function updateDarkModeButtonText() {
        var darkModeButton = document.getElementById("darkModeButton");
        darkModeButton.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    }
});
