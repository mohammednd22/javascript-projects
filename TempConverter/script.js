const textbox = document.getElementById("textbox");
const farenheit = document.getElementById("Farenheit");
const celsius = document.getElementById("Celsius");
const result = document.getElementById("result");
let temp;

function convert() {
    if(farenheit.checked) {
        temp = Number(textbox.value);
        temp = temp * 9 /5 + 32;;
        result.textContent = temp.toFixed(1) + " Farenheit";
    } else if (celsius.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1)+ " Celsius";
    } else {
        result.textContent = "Please Select a Unit"
    }
}