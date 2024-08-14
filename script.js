function playGame() {
  alert('Welcome to my rock, paper, scissors game!😄');

  let answer = prompt('Do you know rock, paper, scissors game? Answer yes or no');

  if (answer.toLowerCase() === 'yes') {
    alert("That's good! Let's play the game!");
  } else {
    alert('Rules description: There are three items - rock, scissors, and paper - and everyone has to produce one of these items at the same time. The rock beats the scissors, the paper beats the rock, and the scissors beat the paper.');
    let understand = prompt('Did you understand the rules of the game? Answer yes or no');
    if (understand.toLowerCase() === 'yes') {
      alert("Let's start the game!");
    } else {
      alert('Please review the rules again before starting.');
      return; 
    }
  }

  let userAttempt = prompt('Please enter your choice: rock, paper, or scissors').toLowerCase();
  let azuChoice = getComputerChoice();
  alert('Computer chose ' + azuChoice);

  let result = determineWinner(userAttempt, azuChoice);
  alert(result);
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userAttempt, azuChoice) {
  if (userAttempt === azuChoice) {
    return "It's a tie!👍";
  }
  if (
    (userAttempt === "rock" && azuChoice === "scissors") ||
    (userAttempt === "scissors" && azuChoice === "paper") ||
    (userAttempt === "paper" && azuChoice === "rock")
  ) {
    return "You win!😊";
  } else {
    return "You lose!🥹";
  }
}
