
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const inputValue = document.getElementById("user-input-value").value;
  const radioInput = document.querySelector('input[name="unit"]:checked').value;
  let result;

  if (radioInput === "celcius") {
    result = (inputValue * 9/5) + 32;
    result = result.toFixed(2) + "°F";
  } else if (radioInput === "farenheit") {
    result = (inputValue - 32) * 5/9;
    result = result.toFixed(2) + "°C";
  }

  document.getElementById("result").innerHTML = `<p>Result: ${result}</p>`;
});

      