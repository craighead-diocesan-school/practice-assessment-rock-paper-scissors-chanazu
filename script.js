function playGame() {
   alert('Welcome to my rock, paper, scissors game!😄');
 
   let answer = prompt('Do you know rock, paper, scissors game? Answer yes or no');
 
   if (answer.toLowerCase() === 'yes') {
     alert("That's good! Let's play game!")
   } else {
     alert('Rules description: There are three items - rock, scissors, and paper - and everyone has to produce one of these items at the same time. The rock beats the scissors, the paper beats the rock, and the scissors beat the paper.');
     let understand = prompt('Did you understand the rules of the game? Answer yes or no');
     if (understand.toLowerCase() === 'yes') {
       alert("Let's start the game!")
     } else {
       alert('Please review the rules again before starting.')
       return; 
     }
   }
 
   let userChoice = prompt('Please enter your choice: rock, paper, or scissors').toLowerCase()
   let computerChoice = getComputerChoice()
   alert('Computer chose' + computerChoice)
 
   let result = Winner(userChoice, computerChoice);
   alert(result);
 }
 
 function getComputerChoice() {
   const choices = ['rock', 'paper', 'scissors']
   const randomIndex =Mathfloora(random() * choices.length)
   return choices[randomIndex]
 }
 
 function determineWinner(userChoice, computerChoice) {
   if (userChoice === computerChoice) {
     return "It's a tie!👍";
   }
   if (
     (userChoice === "rock" && computerChoice === "scissors") 
     (userChoice === "scissors" && computerChoice === "paper") 
     (userChoice === "paper" && computerChoice === "rock")
   ) {
     return "You win!😊"
   } else {
     return "You lose!🥹"
   }
 }
 