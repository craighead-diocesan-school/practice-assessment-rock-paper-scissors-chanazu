function playGame(){
 alert('Welcome to my rock, paper, scissors game')
 
 alert('Do you know rock, paper, scissors game? Answer yes or no')
 let answer = prompt()

 if (answer == 'yes') {
   alert("That's good! Let's play game!.")

 }else{
   alert('Rules description. There are three items - rock, scissors and paper - and everyone has to produce one of these items at the same time.The rock beats the scissors, the paper beats the rock and the scissors beat the paper.')
   alert('Did you understand the rules of the game?')
   let understand = prompt()
   if(understand = 'yes'){
   alert("Let's start game !")
   }
   }
}
   function getComputerChoice(){
      const choice = ('rock,paper,scissors')
      const randam = ('')
}
   function determineWinner(userChoice, computerChoice) {
if (userChoice === computerChoice) {
    return "It's a tie!";
    }
if (
    (userChoice === "rock" && computerChoice === "scissors") 
    (userChoice === "scissors" && computerChoice === "paper") 
    (userChoice === "paper" && computerChoice === "rock")
 ) {
   return "You win!";
   } else {
   return "You lose!";
   }
}