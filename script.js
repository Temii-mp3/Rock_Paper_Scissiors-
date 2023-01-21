
    let playerScore = 0;
    let computerScore = 0;

    //Funnction to enable computer to randomly pick between rock paper and scissors
    function getcomputerSelection(){
        const cChoices = ['rock','paper','scissors'];
            let computerChoice = cChoices [Math.floor(Math.random()*cChoices.length)];
            return computerChoice;
    }
    
    
    //playRound function with condtitional to compare player and computer options
    function playRound(playerSelection, computerSelection){
        console.log(playerSelection, computerSelection);
        if (playerSelection === computerSelection){
            console.log('TIE');
            console.log (playerScore, computerScore);
        }else if (playerSelection == 'rock' && computerSelection =='scissors'){
            console.log ('Player wins, +1 point!');
            playerScore += 1;
            console.log (playerScore, computerScore);
        }else if (playerSelection == 'paper' && computerSelection == 'rock'){
            console.log('Player wins, +1 point!');
            playerScore += 1;
            console.log (playerScore, computerScore);
        }else if (playerSelection == 'scissors' && computerSelection == 'paper'){
            console.log('player wins, +1 point');
            playerScore += 1;
            console.log (playerScore, computerScore);
        }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
            console.log('computer wins, +1 point!');
            computerScore += 1;
            console.log (playerScore, computerScore);
        }else if (playerSelection == 'rock' && computerSelection == 'paper'){
            console.log('computer wins, +1 point!');
            computerScore += 1;
            console.log (playerScore, computerScore);
        }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
            console.log('computer wins, +1 point');
            computerScore += 1;console.log (playerScore, computerScore);

        }
    }
    //For loop that allows the game to be played for 5 rounds 
    for(let i = 0; i < 5; i++){
      let playerSelection = prompt("Rock, Paper or Scissors?");
      let computerSelection = getcomputerSelection();
      playRound (playerSelection, computerSelection);
    }

    //Conditional to check and announce the winner
    if (playerScore == computerScore){
        console.log('Nobody won!, its a TIEEE');
    }else if(playerScore > computerScore){
        console.log(`player won with ${playerScore} points`);
    }else{
        console.log(`computer won with ${computerScore} points`);
    } 