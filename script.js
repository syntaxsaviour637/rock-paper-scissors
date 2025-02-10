let btns = document.querySelectorAll(".options");
let gameBoard = document.querySelector(".game-board");
let scoreElement = document.querySelector(".score");
let result = document.querySelector(".result");
let userDisplay = result.children[0].children[1]; // User choice display
let opponentDisplay = result.children[1].children[1]; // Opponent choice display
let message = document.querySelector(".msg"); // Win/Lose text
let playAgainBtn = document.querySelector(".play-again"); // Play Again button


let choices = ["rock", "paper", "scissors"];
let score = 0;

// Border colors for choices
let borderColors = {
  rock: "#5672f4",
  paper: "#de3b58",
  scissors: "#eca916",
};

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    let userChoice = this.classList[8]; // Get user choice
    let opponentChoice = choices[Math.floor(Math.random() * 3)]; // Random choice
    gameBoard.classList.add("hidden"); // Hide game options
    result.classList.remove("hidden"); // Show result
    // Update visuals for User
    userDisplay.classList = `lg:h-[32vh] lg:w-[32vh] h-[21vh] w-[21vh] bg-[url('${userChoice}.webp')] bg-cover rounded-full shadow`;
    userDisplay.style.border = `18px solid ${borderColors[userChoice]}`;

    // Update visuals for Opponent
    opponentDisplay.classList = `lg:h-[32vh] lg:w-[32vh] h-[21vh] w-[21vh] bg-[url('${opponentChoice}.webp')] bg-cover rounded-full shadow`;
    opponentDisplay.style.border = `18px solid ${borderColors[opponentChoice]}`;

    document.querySelector(".msg-container").classList.remove("hidden");

    // Determine winner
    if (userChoice === opponentChoice) {
      message.innerText = "IT'S A TIE!";
    } else if (
      (userChoice === "rock" && opponentChoice === "scissors") ||
      (userChoice === "paper" && opponentChoice === "rock") ||
      (userChoice === "scissors" && opponentChoice === "paper")
    ) {
      message.innerText = "YOU WIN!";
      score++;
    } else {
      message.innerText = "YOU LOSE!";
      score = Math.max(0, score - 1); // Prevent negative scores
    }
    // Update score
    scoreElement.innerText = score;

    
  });
});

playAgainBtn.addEventListener("click", function () {
    result.classList.add("hidden"); // Hide result
    document.querySelector(".msg-container").classList.add("hidden");
    gameBoard.classList.remove("hidden"); // Show game board again
  });