//Main Variable declaration
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
const roundWinner = document.createElement('h1')
const results = document.getElementById('resultsDiv')

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
//  const playGame = () => {
//  while (roundNumber < Infinity){
//      singleRound(computerInput(), userInput())
//      if (userScore === 3){
//          gameWinner = 'Player Wins!!'
//          break
//          }
//          if (computerScore === 3){
//              gameWinner = 'Computer Wins!!'
//              break
//          }
//          roundNumber += 1;
//          console.log(winner);
//          console.log(computerScore);
//          console.log(userScore);
//      };
//      if (userScore > computerScore) {
//          gameWinner = 'Player Wins!!';
//      };
//      if (computerScore > userScore) {
//          gameWinner = 'Computerer Wins!!';
//      };
//      if (userScore == computerScore) {
//          gameWinner = 'Draw...';
//      };
//  };

 //Events
 const checkScore = () => {
     const winMessage = document.createElement('p')
     winMessage.setAttribute('id', 'winMessage')
     winMessage.textContent = `${winner} wins the game!`
     
     let HTMLBody = document.querySelector('body')
     if (userScore == 5) {
         HTMLBody.innerHTML = ''
         HTMLBody.append(winMessage)
        }
        if (computerScore == 5) {
            HTMLBody.innerHTML = ''
            HTMLBody.append(winMessage)
        }
 }
 const displayUserScore = document.getElementById('playerScore')
 const displayComputerScore = document.getElementById('computerScore')
 const trackUserScore = document.createElement('p')
 const trackComputerScore = document.createElement('p')
 displayComputerScore.appendChild(trackComputerScore)
 displayUserScore.appendChild(trackUserScore)
 trackUserScore.setAttribute('id', 'trackedUserScore')
 trackComputerScore.setAttribute('id', 'trackedComputerScore')
 
 const updateScore = () => {
     trackUserScore.textContent = userScore
     trackComputerScore.textContent = computerScore
 }

 rock.addEventListener('click', () =>{
    singleRound(computerInput(), 'rock')
    console.log(roundWinner.textContent)
    if (roundWinner.textContent === '') {
        results.appendChild(roundWinner)
    }
    roundWinner.innerText = `${winner} wins the round!`
    if (winner === 'draw') {
        
        roundWinner.innerText = winner
    }
    updateScore()
    checkScore()
})



paper.addEventListener('click', () =>{
    singleRound(computerInput(), 'paper')
    console.log(roundWinner.textContent)
    if (roundWinner.textContent === '') {
        results.appendChild(roundWinner)
    }
    roundWinner.innerText = `${winner} wins the round!`
    if (winner === 'draw') {
        
        roundWinner.innerText = winner
    }
    updateScore()
    checkScore()
    
})
scisssors.addEventListener('click', () =>{
    singleRound(computerInput(), 'scissors')
    console.log(roundWinner.textContent)
    if (roundWinner.textContent === '') {
        results.appendChild(roundWinner)
    }
    roundWinner.innerText = `${winner} wins the round!`
    if (winner === 'draw') {
        
        roundWinner.innerText = winner
    }
    checkScore()
    
})