function rps() {
    const input = document.getElementById("input").value.toLowerCase();
    const result = document.getElementById("result");
    let user;
    const computer = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    if (input === "rock") {
        user = 1;
    } else if (input === "paper") {
        user = 2;
    } else if (input === "scissors") {
        user = 3;
    } else {
        result.innerHTML = "Please enter a valid choice: rock, paper, or scissors.";
        return;
    }

    if (computer === 1) {
        computerChoice = "rock";
    } else if (computer === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    if (user === computer) {
        result.innerHTML = `Draw! Computer chose ${computerChoice}.`;
    } else if (
        (user === 1 && computer === 3) ||
        (user === 2 && computer === 1) ||
        (user === 3 && computer === 2)
    ) {
        result.innerHTML = `You won! Computer chose ${computerChoice}.`;
    } else {
        result.innerHTML = `You lost! Computer chose ${computerChoice}.`;
    }
}
