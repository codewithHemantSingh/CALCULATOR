document.getElementById("calcForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    const resultBox = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        resultBox.textContent = "Please enter valid numbers.";
        return;
    }

    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                resultBox.textContent = "Cannot divide by zero!";
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = "Invalid Operation";
    }

    resultBox.textContent = `Result: ${result}`;
});
