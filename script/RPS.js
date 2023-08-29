
let score = {
  wins: 0, 
  losses: 0, 
  ties: 0,
}; 


function playGame(playerMove) {
  const computerPick = pickComputerMove();

  let result = ""; 

  if (playerMove === "Scissors") {
    if (computerPick === "Rock") {
      result = "You Lose."; 
       
    } else if (computerPick === "Paper") {
      result = "You win."; 
       
    } else if (computerPick === "Scissors") {
      result = "Tie."; 
       
    }
    
  } else if (playerMove === "Rock") {
    if (computerPick === "Rock") {
      result = "Tie."; 
       
    } else if (computerPick === "Paper") {
      result = "You Lose."; 
       
    } else if (computerPick === "Scissors") {
      result = "You win.";
       
    }
  } else if (playerMove === "Paper") {
    if (computerPick === "Rock") {
      result = "You win."; 
       
    } else if (computerPick === "Paper") {
      result = "Tie."; 
       
    } else if (computerPick === "Scissors") {
  
      result = "You Lose."; 
    }
  }

  if(result === "You win.") {
    score.wins += 1; 
  } else if (result === "You Lose.") {
    score.losses += 1; 
  } else if (result === "Tie.") {
    score.ties += 1; 
  }

  updateScoreElement(); 

  document.querySelector(".js-move").innerHTML = `You picked ${playerMove}. Computer picked ${computerPick}. ${result}`; 
}

function updateScoreElement() {
  document.querySelector(".js-score").innerHTML = `Wins: ${score.wins}, Losses ${score.losses}, Ties: ${score.ties}`
}


function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = ""; 

  if (randomNumber > 0 && randomNumber <= 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber > 2 / 3) {
    computerMove = "Scissors";
  }; 

  return computerMove; 
}
      

