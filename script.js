let HumanScore = document.querySelector(".HumanScoreDisplay") ,
 ComputerScore = document.querySelector(".ComputerScoreDisplay") ,
 Winner = document.querySelector(".Winner"); 
function getComputerChoice() {
  let ChoiceNum = Math.random();
  let Choice;
  if (ChoiceNum <= 0.35) Choice = "Rock";
  else if (ChoiceNum <= 0.7) Choice = "Paper";
  else Choice = "Scissors";
  return Choice.toLowerCase();
}
function playRound(HumanChoice, ComputerChoice) {
  if (
    (HumanChoice == "paper" && ComputerChoice == "rock") ||
    (HumanChoice == "rock" && ComputerChoice == "scissors") ||
    (HumanChoice == "scissors" && ComputerChoice == "paper")
  ) {
    HumanScore.textContent = parseInt(HumanScore.textContent,10) + 1 ; 
  } else {
    ComputerScore.textContent = parseInt(ComputerScore.textContent,10) + 1 ; 
  }
  if ( parseInt(HumanScore.textContent,10) == 5 )
    {
      Winner.textContent = "Human Wins " ; 
      HumanScore.textContent = 0 ; ComputerScore.textContent = 0 ;
      disableButtons(); 
    }
    else if ( parseInt(ComputerScore.textContent,10) == 5)
    {
      Winner.textContent = "Computer Wins " ; 
      HumanScore.textContent = 0 ; ComputerScore.textContent = 0 ;
      disableButtons(); 
    }
}
let btns = document.querySelectorAll(".button") ; 
btns.forEach( (btn) => 
{
  btn.addEventListener("click", (e) => 
  {
    playRound(e.target.innerText.toLowerCase(),getComputerChoice());
  });
});
function disableButtons() {
  let btns = document.querySelectorAll(".button");
  btns.forEach((btn) => {
    btn.disabled = true;
  });
}
