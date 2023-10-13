document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculateButton").addEventListener("click", calculateAndDisplayResult);
    document.getElementById("resetButton").addEventListener("click", resetFields); // Add event listener for the Reset button

    function calculateAndDisplayResult() {
        var num1 = document.getElementById("binOne").value;
        var num2 = document.getElementById("binTwo").value;

        var result = addBinaryNumbers(num1, num2);

        document.getElementById("binResult").value = result;
    }

    function addBinaryNumbers(binary1, binary2) {
        var int1 = parseInt(binary1, 2);
        var int2 = parseInt(binary2, 2);

        var sum = int1 + int2;

        return sum.toString(2);
    }

    function resetFields() {
        document.getElementById("binOne").value = "";
        document.getElementById("binTwo").value = "";
        document.getElementById("binResult").value = "";
    }
});
