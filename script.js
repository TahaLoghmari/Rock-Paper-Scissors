let humanScore = 0,
  ComputerScore = 0;

function getComputerChoice() {
  let ChoiceNum = Math.random();
  let Choice;
  if (ChoiceNum <= 0.35) Choice = "Rock";
  else if (ChoiceNum <= 0.7) Choice = "Paper";
  else Choice = "Scissors";
  return Choice.toLowerCase();
}
function getHumanChoice() {
  const myChoice = prompt("Pick a Choice", "");
  return myChoice.toLowerCase();
}
function playRound(HumanChoice, ComputerChoice) {
  console.log(HumanChoice, ComputerChoice);
  if (
    (HumanChoice == "paper" && ComputerChoice == "rock") ||
    (HumanChoice == "rock" && ComputerChoice == "scissors") ||
    (HumanChoice == "scissors" && ComputerChoice == "paper")
  ) {
    humanScore++;
    console.log("human won this round");
  } else {
    console.log("computer won this round");
    ComputerScore++;
  }
}
function playGame() {
  for (let i = 0; i < 5; ++i) playRound(getHumanChoice(), getComputerChoice());
  return humanScore >= ComputerScore ? "Human Wins" : "Computer Wins";
}
console.log(playGame());
