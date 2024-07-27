
function rollDice(){
    const numofDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImg = document.getElementById("diceImages");
    const values = [];
    const img = [];

    for(let i = 0; i<numofDice; i++){
        const value = Math.floor(Math.random() * 6) + 1
        values.push(value);
        img.push(`<img src= "${value}.png">`)
    }
    diceResult.textContent = `dice: ${values.join(', ')}`
    diceImg.innerHTML = img.join('  ');
    
}