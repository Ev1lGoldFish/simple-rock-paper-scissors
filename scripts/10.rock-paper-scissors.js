let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScoreElement();
document.querySelector(".js-result").innerHTML = result;
document.querySelector(
  ".js-moves"
).innerHTML = `You ${playerMove} X ${computerMove} Computer `;

// if (score === null) {
//   score = {
//     wins: 0,
//     losses: 0,
//     ties: 0,
//   };
// }
function pickComputerMove() {
  let computerMove = "";
  randomNumber = Math.random();

  if (0 <= randomNumber && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (1 / 3 <= randomNumber && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissors";
  }
  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";
  if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "Lose";
    } else {
      result = "Win";
    }
  }
  if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "Lose";
    } else if (computerMove === "Paper") {
      result = "Win";
    } else {
      result = "Tie";
    }
  }

  if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "Win";
    } else if (computerMove === "Paper") {
      result = "Tie";
    } else {
      result = "Lose";
    }
  }

  if (result === "Win") {
    score.wins += 1;
  } else if (result === "Lose") {
    score.losses += 1;
  } else {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `You
  <img class="move-icon" src="images/${playerMove}-emoji.png" alt="" />
  <img class="move-icon" src="images/${computerMove}-emoji.png" alt="" />
  Computer`;

  //     alert(
  //       `Player picked ${playerMove} and computer picked ${computerMove}. ${result}
  //   Wins: ${score.wins} Losses: ${score.losses}  Ties: ${score.ties}
  //             `
  //     );
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses},  Ties: ${score.ties}`;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  updateScoreElement();
  document.querySelector(".js-result").innerHTML = "";
  document.querySelector(".js-moves").innerHTML = "";
}
