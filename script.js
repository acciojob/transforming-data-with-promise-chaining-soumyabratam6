//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
    const inputValue = parseFloat(document.getElementById("ip").value);
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous results
    
    if (isNaN(inputValue)) {
        outputDiv.innerHTML = "Please enter a valid number.";
        return;
    }

    // Function to create a promise with a delay
    function delayedOperation(value, operation, delay) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = operation(value);
                outputDiv.innerHTML += `<p>Result: ${result}</p>`;
                resolve(result);
            }, delay);
        });
    }

    // Start promise chain
    new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.innerHTML += `<p>Result: ${inputValue}</p>`;
            resolve(inputValue);
        }, 2000);
    })
    .then((value) => delayedOperation(value, (num) => num * 2, 2000))
    .then((value) => delayedOperation(value, (num) => num - 3, 1000))
    .then((value) => delayedOperation(value, (num) => num / 2, 1000))
    .then((value) => delayedOperation(value, (num) => num + 10, 1000))
    .then((finalValue) => {
        outputDiv.innerHTML += `<p>Final Result: ${finalValue}</p>`;
    });
});