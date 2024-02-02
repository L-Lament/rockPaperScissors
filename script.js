const rockPaperScissors = ['rock', 'paper', 'scissors']
let computerChoice;

//get computerInput
const computerInput = () => {
    randomNum = Math.floor(Math.random() * (rockPaperScissors.length *2));
    if (randomNum === 0 || randomNum === 3){
        computerChoice = 'rock';
    }
    if (randomNum === 2 || randomNum === 5){
        computerChoice = 'paper';
    }
    if (randomNum === 1 || randomNum === 4){
        computerChoice = 'scissors'
    }
    return computerChoice
}
console.log(computerInput())
//Get userInput
//compare inputs
//run a game best of five