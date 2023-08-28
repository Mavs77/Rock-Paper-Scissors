

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

  document.querySelector(".js-move").innerHTML = `You picked ${playerMove}. Computer picked ${computerPick}. ${result}`; 
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
      

