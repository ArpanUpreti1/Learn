let previousInput = document.querySelector("#prevGuess");
let remainingGuess = document.querySelector("#remainingGuess");
const submit = document.querySelector('button');
let resultMessage = document.querySelector("#result");
let prevGuesses = [];
let guessesLeft = 10;
const random = parseInt(Math.random() * 100 + 1); // Generate random number once

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const userInput = parseInt(document.getElementById('userInput').value);

    if (verifyInput(userInput) && guessesLeft > 0) {
        guessesLeft--;
        prevGuesses.push(userInput);
        previousInput.innerHTML = 'Previous guesses: ' + prevGuesses.join(', ');
        remainingGuess.innerHTML = 'Remaining Guess: ' + guessesLeft;

        if (userInput === random) {
            message("w");
        } else if (isClose(userInput, random)) {
            resultMessage.innerHTML = "You're close! Try again.";
        } else {
            if (guessesLeft === 0) {
                message("l");
            } else {
                resultMessage.innerHTML = "Try again!";
            }
        }
    } else {
        resultMessage.innerHTML = "No more guesses left!";
    }
});

function verifyInput(userInput) {
    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
        if (userInput < 1) {
            alert('Please enter a number greater than or equal to 1!');
        } else if (userInput > 10) {
            alert('Please enter a number less than or equal to 10!');
        } else {
            alert('Please enter a valid number between 1 and 10!');
        }
        return false;
    } else {
        return true;
    }
}

function isClose(userInput, target) {
    const range = 20;
    return Math.abs(userInput - target) <= range;
}

function message(status) {
    if (status === "w") {
        resultMessage.innerHTML = "You won🥳🥳🥳🥳🥳!";
    } else if (status === "l") {
        resultMessage.innerHTML = "You lost😭😭😭😭😭! The number was " + random;
        
    }
}

function clearScreen() {
    resultMessage.innerHTML = "";
}
function endGame(){
    previousInput.innerHTML = ""
    userInput.innerHTML = ""
    resultMessage.innerHTML = ""
    remainingGuess.innerHTML = ""

}