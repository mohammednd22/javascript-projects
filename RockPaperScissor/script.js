let choices = ['rock', 'paper', 'scissor'];
let playerchoice = document.getElementById("playerchoice");
let computerchoice = document.getElementById("computerchoice");
let result = document.getElementById("result");
let outcome; // Define outcome outside the function

function playGame(choice) {
    outcome = null; // Reset outcome at the beginning of each function call

    let computerOption = choices[Math.floor(Math.random() * 3)];
    let playerOption = choice;

    if (computerOption === playerOption) {
        outcome = "ITS A TIE"
    } else {
        switch(playerOption) {
            case 'rock':
                outcome = (computerOption === 'scissor') ? 'YOU WIN' : 'YOU LOSE';
                break;
            case 'scissor':
                outcome = (computerOption === 'paper') ? 'YOU WIN' : 'YOU LOSE';
                break;
            case 'paper':
                outcome = (computerOption === 'rock') ? 'YOU WIN' : 'YOU LOSE';
                break;
        }
    }

    playerchoice.textContent = `Player Choice: ${playerOption}`;
    computerchoice.textContent = `Computer Choice: ${computerOption}`;
    result.textContent = `${outcome}`;

    result.classList.remove("greencolor", "redcolor");

    switch(outcome) {
        case 'YOU WIN':
            result.classList.add("greencolor");
            break;
        case 'YOU LOSE':
            result.classList.add("redcolor");
            break;
    }
}
