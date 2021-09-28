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

    if (option_from === "Millilitres" && option_to === "Litres") {
        result.value = Number(input.value) * 0.001;
    } else if (option_from === "Millilitres" && option_to === "Gallons") {
        result.value = Number(input.value) * 0.000264;
    } else if (option_from === "Millilitres" && option_to === "Millilitres") {
        result.value = input.value
    }

    if (option_from === "Litres" && option_to === "Millilitres") {
        result.value = Number(input.value) * 1000;
    } else if (option_from === "Litres" && option_to === "Gallons") {
        result.value = Number(input.value) * 0.264172;
    } else if (option_from === "Litres" && option_to === "Litres") {
        result.value = input.value
    }

    if (option_from === "Gallons" && option_to === "Litres") {
        result.value = Number(input.value) * 3.7854117;
    } else if (option_from === "Gallons" && option_to === "Millilitres") {
        result.value = Number(input.value) * 3785.411784;
    } else if (option_from === "Gallons" && option_to === "Gallons") {
        result.value = input.value
    }
}