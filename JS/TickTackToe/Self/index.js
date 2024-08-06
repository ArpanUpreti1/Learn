let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn"); // Changed to querySelector
let turnO = true; // Player X, Player O
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("p");

// The below are all the winning patterns for a player to win
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msg.classList.add("hide");
};

// We add event listener to each box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerHTML === "") { // Ensure box is empty before placing a move
      if (turnO) {
        box.innerHTML = "O";
        turnO = false;
      } else {
        box.innerHTML = "X";
        turnO = true;
      }
      box.disabled = true;
      let winner = checkWinner();
      if (winner) {
        showWinner(winner);
      } else if (isDraw()) {
        showDraw();
      }
    }
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations🥳🥳, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
};

const showDraw = () => {
  msg.innerText = "It's a draw! 😞";
  msgContainer.classList.remove("hide");
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let position1Val = boxes[pattern[0]].innerText;
    let position2Val = boxes[pattern[1]].innerText;
    let position3Val = boxes[pattern[2]].innerText;
    if ((position1Val !== "") && (position2Val !== "") && (position3Val !== "")) {
      if (position1Val === position2Val && position2Val === position3Val) {
        return position1Val; // Return the winner
      }
    }
  }
  return null; // No winner
};

const isDraw = () => {
  // Check if all boxes are filled and there's no winner
  return Array.from(boxes).every(box => box.innerText) && !checkWinner();
};

newGameBtn.addEventListener("click", resetGame);
if (resetBtn) { // Check if resetBtn exists before adding event listener
  resetBtn.addEventListener("click", resetGame);
}
