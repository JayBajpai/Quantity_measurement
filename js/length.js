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

    if (option_from === "meter" && option_to === "Kilometer") {
        result.value = Number(input.value) * 0.001;
    } else if (option_from === "meter" && option_to === "Centimeter") {
        result.value = Number(input.value) * 100;
    } else if (option_from === "meter" && option_to === "meter") {
        result.value = input.value
    }
    else if (option_from === "meter" && option_to === "Inch") {
        result.value = Number(input.value) * 39.3701;
    }

    if (option_from === "Kilometer" && option_to === "meter") {
        result.value = Number(input.value) * 1000;
    } else if (option_from === "Kilometer" && option_to === "Centimeter") {
        result.value = Number(input.value) * 100000;
    } else if (option_from === "Kilometer" && option_to === "Kilometer") {
        result.value = input.value
    }
    else if (option_from === "Kilometer" && option_to === "Inch") {
        result.value = Number(input.value) * 39370.1;
    }

    if (option_from === "Centimeter" && option_to === "Kilometer") {
        result.value = Number(input.value) * 0.00001;
    } else if (option_from === "Centimeter" && option_to === "meter") {
        result.value = Number(input.value) * 0.01;
    } else if (option_from === "Centimeter" && option_to === "Centimeter") {
        result.value = input.value
    }
    else if (option_from === "Centimeter" && option_to === "Inch") {
        result.value = Number(input.value) * 0.393701;
    }
    if (option_from === "Inch" && option_to === "Kilometer") {
        result.value = Number(input.value) * 0.000025400276352;
    } else if (option_from === "Inch" && option_to === "meter") {
        result.value = Number(input.value) * 0.025400276352;
    } else if (option_from === "Inch" && option_to === "Inch") {
        result.value = input.value
    } else if (option_from === "Inch" && option_to === "Centimeter") {
        result.value = Number(input.value) * 2.5400276352;
    }
}
