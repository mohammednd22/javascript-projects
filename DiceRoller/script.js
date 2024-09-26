// DICE ROLLER

function rollDice() {
    const number = document.getElementById("number").value;
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < number; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="DiceImages/${value}.png">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImage.innerHTML = images.join('')

    

}