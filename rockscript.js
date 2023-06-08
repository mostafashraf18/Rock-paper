
let choices = ['Paper', 'Scissors', 'Rock'];
let playerScore = 0;
let computerScore = 0;


const message = document.querySelector('#Message');
const score = document.querySelector('#Score');

let computerPlay = () => {
    return choices[Math.floor(Math.random() * choices.length)];
};

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (winGame(playerSelection, computerSelection)) {
        ++playerScore;
    }
    else if (loseGame(playerSelection, computerSelection)) {
        ++computerScore;
    }
    score.textContent = `Current Score: ${playerScore};Computer Score: ${computerScore}`;
    message.textContent = (winMessage()) ? winMessage():
    winGame(playerSelection, computerSelection) || loseGame(playerSelection, computerSelection) ||"It's a tie!"; 
    
}

function winGame(playerSelection, computerSelection) {
    return results = playerSelection == 'PAPER' && computerSelection == 'ROCK' ? 'You Win! Paper beats Rock':
    playerSelection == 'ROCK' && computerSelection == 'SCISSORS' ? 'You Win! Rock beats Scissors':
    playerSelection == 'SCISSORS' && computerSelection == 'PAPER' ? 'You Win! Scissors beats Paper':
    false;
}

function loseGame(playerSelection, computerSelection) {
    return results = playerSelection == 'PAPER' && computerSelection == 'SCISSORS' ? 'You Lose! Scissors beats Paper':
    playerSelection == 'ROCK' && computerSelection == 'PAPER' ? 'You Lose! Paper beats Rock':
    playerSelection == 'SCISSORS' && computerSelection == 'ROCK' ? 'You Lose! Rock beats Scissors':
    false;
}

function winMessage() {
    return (playerScore == 5) ? 'You Win': (computerScore == 5) ? 'Computer Wins':false;
}

  