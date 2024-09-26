let display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}


function clearDisplay(){
    display.value = ""
}

function calculate(){
    solution = eval(display.value)
    display.value = solution

}