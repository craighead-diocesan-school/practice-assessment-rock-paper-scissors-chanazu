function playGame(){
 alert('Welcome to my rock, paper, scissors game')
 
 let knowGame = prompt('Do you know rock, paper, scissors game? Answer yes or no')

 if (knowGame() === 'no'){
    alert('Rules description. There are three items - rock, scissors and paper - and everyone has to produce one of these items at the same time.The rock beats the scissors, the paper beats the rock and the scissors beat the paper.')
