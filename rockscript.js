let playerScore = 0;
let computerScore = 0;


function getComputerChoice(){
    const array = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * array.length);
    const computerGuess = array[randomIndex];
    return computerGuess;
}

function playRound(playerSelection, ComputerSelection){
    let log = '';
    if(playerSelection ==='Rock'){
        if(ComputerSelection === 'Paper'){
            log = 'You Lose! Paper beats Rock';
        } else if(ComputerSelection === 'Scissors'){
            log = 'You Win! Rock beats Scissors';
        }else{
            log = "It's a tie";
        }
    } else if (playerSelection === 'Paper'){
        if(ComputerSelection === 'Scissors'){
            log = 'You Lose! Scissors beats Paper';
        } else if(ComputerSelection === 'Rock'){
            log = 'You Win! Paper beats Rock';
        } else {
            log = "It's  a  tie";
        }
    } else if(playerSelection === 'Scissors'){
        if (ComputerSelection === 'Rock'){
            log = 'You Lose! Rock beats Scissors';
        } else if(ComputerSelection === 'Paper'){
            log = 'You Win! Scissors beats Paper';
        } else {
            log = "It's a tie";
        }
    }

    return log;
}

function game(){

    for(let i = 0; i < 5; i++) {


    
        const playerSelect = window.prompt("Enter you choice.")
        let playerSelection = capitalize(playerSelect);
        let computerSelection = getComputerChoice();

        console.log("The computer chose: " + computerSelection);
        console.log("You chose: " + playerSelection);

        let roundResult = playRound(playerSelection, computerSelection);

        if(roundResult.search('You Win!') > -1){
            console.log(roundResult);
            playerScore++;
        } else if(roundResult.search('You Lose!') > -1){
            console.log(roundResult);
            computerScore++;
        } else if (roundResult.search("It's a tie") > -1 ) {
            console.log(roundResult);
        }
    

        if (playerScore >= 5 && computerScore < 5) {
        let message = 'Game Over. You Win!';
        console.log(message);
        } else if (playerScore < 5 && computerScore >= 5) {
            message = 'Game Over. You Lose!';
            console.log(message);
      }
    }

 }




function capitalize(string) {
    return (
      string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1)
    );
  }

  game();

  