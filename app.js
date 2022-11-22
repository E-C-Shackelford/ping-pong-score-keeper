const player1 = {
  score: 0,
  button: document.querySelector("#player1Btn"),
  display: document.querySelector("#player1ScoreDisplay"),
};

const player2 = {
  score: 0,
  button: document.querySelector("#player2Btn"),
  display: document.querySelector("#player2ScoreDisplay"),
};

const resetBtn = document.querySelector("#resetBtn");
const winScoreSelection = document.querySelector("#winScoreSelection");

let winningScore = 3;
let gameOver = false;

function updateScores(player, opponent) {
  if (!gameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      gameOver = true;
      player.display.classList.add("winning-player");
      opponent.display.classList.add("losing-player");
    }
    player.display.textContent = player.score;
  }
}

player1.button.addEventListener("click", function () {
  updateScores(player1, player2);
});

player2.button.addEventListener("click", function () {
  updateScores(player2, player1);
});

winScoreSelection.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetBtn.addEventListener("click", reset);

function reset() {
  gameOver = false;
  for (let player of [player1, player2]) {
    player.score = 0;
    player.display.textContent = 0;
    player.display.classList.remove("winning-player", "losing-player");
  }
}
