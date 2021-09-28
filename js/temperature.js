var input = document.getElementById('inputFrom');
var result = document.getElementById('result');
var inputType = document.getElementById('quantity-select-from');
var resultType = document.getElementById('quantity-select-to');
var option_from, option_to;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

// taking initial value
option_from = inputType.value;
option_to = resultType.value;

function myResult() {
    option_from = inputType.value;
    option_to = resultType.value;

    if (option_from === "Celsius" && option_to === "Fahrenheit") {
        result.value = Number(input.value) + 32;
    } else if (option_from === "Celsius" && option_to === "Kelvin") {
        result.value = Number(input.value * 1) + 273.5;
    } else if (option_from === "Celsius" && option_to === "Celsius") {
        result.value = input.value
    }
 
    if (option_from === "Fahrenheit" && option_to === "Celsius") {
        result_IS = input.value - 32;
        result.value = Number(result_IS) * 0.5556;
    } else if (option_from === "Fahrenheit" && option_to === "Kelvin") {
        result.value = Number(input.value - 32) * (5/9) + 273.5;
    } else if (option_from === "Fahrenheit" && option_to === "Fahrenheit") {
        result.value = input.value
    }

    if (option_from === "Kelvin" && option_to === "Celsius") {
        result.value = Number(input.value * 1) - 273.5;
    } else if (option_from === "Kelvin" && option_to === "Fahrenheit") {
        result.value = Number(input.value - 273.5) * (9/5) + 32;
    } else if (option_from === "Kelvin" && option_to === "Kelvin") {
        result.value = input.value
    }
}
