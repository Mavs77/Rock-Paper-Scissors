function gameTime() {
  const computerMove = Math.random();

  let content = document.querySelector(".paragraphContent");

  if (computerMove > 0 && computerMove <= 1 / 3) {
    content.innerHTML = "Rock";
  } else if (computerMove > 1 / 3 && computerMove <= 2 / 3) {
    content.innerHTML = "Paper";
  } else if (computerMove > 2 / 3) {
    content.innerHTML = "Scissors";
  }
}