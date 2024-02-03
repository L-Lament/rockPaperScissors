const rockPaperScissors = ['rock', 'paper', 'scissors'];
let computerChoice;
let userChoice;
let winner;

//get computerInput
const computerInput = () => {
    randomNum = Math.floor(Math.random() * (rockPaperScissors.length *2));
    if (randomNum === 0 || randomNum === 3){
        computerChoice = 'rock';
    };
    if (randomNum === 2 || randomNum === 5){
        computerChoice = 'paper';
    };
    if (randomNum === 1 || randomNum === 4){
        computerChoice = 'scissors';
    };
    return computerChoice;
};

//Get userInput
const userInput = () => {
    userChoice = prompt('Choose rock, paper, or scissors').toLowerCase();
    if (userChoice === ''){
        userInput()
    }
    return userChoice
};

//compare inputs
computerInput();
userInput();
const singleRound = (computerChoice, userChoice) => {
    if (userChoice !== computerChoice){
        if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
            ) 
            {
                winner = 'player';
        };
        if (
            (computerChoice === 'rock' && userChoice === 'scissors') ||
            (computerChoice === 'paper' && userChoice === 'rock') ||
            (computerChoice === 'scissors' && userChoice === 'paper')
            ){
                winner = 'computer';
            };
            return winner;
    };
    winner = 'draw';
    return winner;
};

singleRound(computerChoice, userChoice);
console.log(winner);
//run a game best of five