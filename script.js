
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scisssors = document.getElementById('scissors')
const rockPaperScissors = ['rock', 'paper', 'scissors'];
let computerChoice;
let userChoice;
let roundNumber = 1;
let userScore = 0;
let computerScore = 0;
const winScore = 3;
let winner;
let gameWinner;

//get computerInput
const computerInput = () => {
    randomNum = Math.floor(Math.random() * 100);
    if (randomNum <= 33){
        computerChoice = 'rock';
    };
    if (randomNum > 33 && randomNum <= 66){
        computerChoice = 'paper';
    };
    if (randomNum > 67 && randomNum <= 100){
        computerChoice = 'scissors';
    };
    return computerChoice;
};

//Get userInput
const userInput = () => {
    userChoice = prompt('Choose rock, paper, or scissors').toLowerCase();
    if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice != 'scissors'){
        userInput()
    }
    return userChoice
};





//compare inputs
const singleRound = (computerChoice, userChoice) => {
    if (userChoice !== computerChoice){
        if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
            ) 
            {
                winner = 'player';
                userScore += 1;
            };
            if (
                (computerChoice === 'rock' && userChoice === 'scissors') ||
                (computerChoice === 'paper' && userChoice === 'rock') ||
                (computerChoice === 'scissors' && userChoice === 'paper')
                ){
                    winner = 'computer';
                    computerScore += 1;
                };
                return winner;
            };
            winner = 'draw';
            console.log(winner);
            return winner;
        };
        
        //run a game best of five
 const playGame = () => {
 while (roundNumber < Infinity){
     singleRound(computerInput(), userInput())
     if (userScore === 3){
         gameWinner = 'Player Wins!!'
         break
         }
         if (computerScore === 3){
             gameWinner = 'Computer Wins!!'
             break
         }
         roundNumber += 1;
         console.log(winner);
         console.log(computerScore);
         console.log(userScore);
     };
     if (userScore > computerScore) {
         gameWinner = 'Player Wins!!';
     };
     if (computerScore > userScore) {
         gameWinner = 'Computerer Wins!!';
     };
     if (userScore == computerScore) {
         gameWinner = 'Draw...';
     };
 };

 rock.addEventListener('click', () =>{
    singleRound(computerInput(), 'rock')
    console.log(winner);
 })
 paper.addEventListener('click', () =>{
    singleRound(computerInput(), 'paper')
    console.log(winner);
})
scisssors.addEventListener('click', () =>{
    singleRound(computerInput(), 'scissors')
    console.log(winner);
 })