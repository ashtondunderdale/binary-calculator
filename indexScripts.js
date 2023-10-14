document.addEventListener("DOMContentLoaded", function () {
    var checkbox = document.getElementById("myCheckbox");
    var biLabel = document.querySelector(".biLbl");
    var deLabel = document.querySelector(".DeLbl");
    var darkModeButton = document.getElementById("darkModeButton");

    function updateDarkModePreference() {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("dark-mode-preference", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("dark-mode-preference", "light");
        }
    }

    // Check for the dark mode preference in local storage and apply it
    var savedDarkModePreference = localStorage.getItem("dark-mode-preference");
    if (savedDarkModePreference === "dark") {
        isDarkMode = true;
        updateDarkModePreference();
    }

    checkbox.addEventListener("change", function () {
        biLabel.style.display = checkbox.checked ? "inline" : "none";
        deLabel.style.display = checkbox.checked ? "inline" : "none";
        isDarkMode = checkbox.checked;
    });

    var isDarkMode = false;

    function updateDarkModeButtonText() {
        darkModeButton.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    }

    function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        updateDarkModeButtonText();
        updateDarkModePreference();
    }

    darkModeButton.addEventListener("click", toggleDarkMode);

    function calculateAndDisplayResult() {
        var num1 = document.getElementById("binOne").value;
        var num2 = document.getElementById("binTwo").value;
        var operation = document.getElementById("baseSelect").value;
        var outputBox = document.getElementById("binResult");

        if (num1 == "" && num2 == "") {
            outputBox.value = "Input Required";
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

    document.getElementById("calculateButton").addEventListener("click", calculateAndDisplayResult);
    document.getElementById("resetButton").addEventListener("click", resetFields);
});