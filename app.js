const player1Btn = document.querySelector("#player1Btn");
const player2Btn = document.querySelector("#player2Btn");
const resetBtn = document.querySelector("#resetBtn");
const player1ScoreDisplay = document.querySelector("#player1ScoreDisplay");
const player2ScoreDisplay = document.querySelector("#player2ScoreDisplay");
const winScoreSelection = document.querySelector("#winScoreSelection");

let player1Score = 0;
let player2Score = 0;
let winningScore = 3;
let gameOver = false;

player1Btn.addEventListener("click", function () {
  if (!gameOver) {
    player1Score += 1;
    if (player1Score === winningScore) {
      gameOver = true;
      player1ScoreDisplay.classList.add("winning-player");
      player2ScoreDisplay.classList.add("losing-player");
    }
    player1ScoreDisplay.textContent = player1Score;
  }
});

player2Btn.addEventListener("click", function () {
  if (!gameOver) {
    player2Score += 1;
    if (player2Score === winningScore) {
      gameOver = true;
      player2ScoreDisplay.classList.add("winning-player");
      player1ScoreDisplay.classList.add("losing-player");
    }
    player2ScoreDisplay.textContent = player2Score;
  }
});
