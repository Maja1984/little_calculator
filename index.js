// reference html elements
const form = document.getElementById("form");
const numOneInput = document.getElementById("num1");
const numTwoInput = document.getElementById("num2");
const resultText = document.getElementById("result");

// form event listener
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const num1 = Number(numOneInput.value);
    const num2 = Number(numTwoInput.value);

    // now the numbers add up correctly
    resultText.textContent = `${num1} + ${num2} = ${num1 + num2}`;
});