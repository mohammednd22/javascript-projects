let count_var = document.getElementById("counter");
let increase_button = document.getElementById("increase");
let decrease_button = document.getElementById("decrease");
let reset_button = document.getElementById("reset");
let current_count = 0;

count_var.textContent = `${current_count}`

increase_button.onclick = function(){
    current_count++;
    count_var.textContent = `${current_count}`
    if (current_count == 5) {
        window.alert("Max Limit Reached")
    }
}

decrease_button.onclick = function(){
    current_count--;
    count_var.textContent = `${current_count}`
}

reset_button.onclick = function(){
    current_count = 0;
    count_var.textContent = `${current_count}`
}

