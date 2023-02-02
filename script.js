
    let playerScore = 0;
    let computerScore = 0;

    //Funnction to enable computer to randomly pick between rock paper and scissors
    function getcomputerSelection(){
        const cChoices = ['rock','paper','scissors'];
            let computerChoice = cChoices [Math.floor(Math.random()*cChoices.length)];
            return computerChoice;
    }
    
    let computerSelection;
    
    //playRound function with condtitional to compare player and computer options
    
    // //For loop that allows the game to be played for 5 rounds 
    // for(let i = 0; i < 5; i++){
    //   let playerSelection = prompt("Rock, Paper or Scissors?");
    //   let computerSelection = getcomputerSelection();
    //   playRound (playerSelection, computerSelection);
    // }

    const buttons = document.querySelectorAll('button ');

    const button = buttons.forEach((button) => {
        button.addEventListener('click', ()=> {
           playerSelection = button.id;
           computerSelection = getcomputerSelection();
           playRound(playerSelection, computerSelection);
        });
    });

    
    function playRound(playerSelection, computerSelection){
        console.log(playerSelection, computerSelection);
        if (playerSelection === computerSelection){
            commentary.innerHTML = 'TIE';
            text.innerHTML = "Player: " + playerScore;
            text2.innerHTML = "Computer: " + computerScore;

        }else if (playerSelection == 'rock' && computerSelection =='scissors'){
            commentary.innerHTML = 'Player wins, +1 point!';
            playerScore += 1;
            text.innerHTML = "Player: " + playerScore;
            text2.innerHTML = "Computer: " + computerScore;

        }else if (playerSelection == 'paper' && computerSelection == 'rock'){
            commentary.innerHTML = 'Player wins, +1 point!';
            playerScore += 1;
            text.innerHTML = "Player: " + playerScore;
            text2.innerHTML = "Computer: " + computerScore;

        }else if (playerSelection == 'scissors' && computerSelection == 'paper'){
           commentary.innerHTML = 'player wins, +1 point';
            playerScore += 1;
            text.innerHTML = "Player: " + playerScore;
            text2.innerHTML = "Computer: " + computerScore;

        }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
           commentary.innerHTML = 'computer wins, +1 point!';
            computerScore += 1;
            text.innerHTML = "Player: " + playerScore;
            text2.innerHTML = "Computer: " + computerScore;

        }else if (playerSelection == 'rock' && computerSelection == 'paper'){
            commentary.innerHTML = 'computer wins, +1 point!';
            computerScore += 1;
            text.innerHTML = "Player: " + playerScore;
            text2.innerHTML = "Computer: " + computerScore;

        }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
            commentary.innerHTML = 'computer wins, +1 point';
            computerScore += 1;
            text.innerHTML = "Player: " + playerScore;
            text2.innerHTML = "Computer: " + computerScore;

        }
    if (playerScore == 5 || computerScore == 5){
            checkScore(playerScore, computerScore);
        }
    }

   

    function checkScore(playerScore, computerScore){
        if (playerScore == computerScore){
            WINNER.textContent = 'Nobody won!, its a TIE!';
        }else if(playerScore > computerScore){
            WINNER.textContent = `player won with ${playerScore} points!`;
        }else{
            WINNER.textContent = `computer won with ${computerScore} points!`;
        } 
    }

    const content = document.querySelector('#content');

    const text = document.querySelector('#text')
    text.innerHTML = "Player: " + playerScore;

    const text2 = document.querySelector('#text2');
    text2.innerHTML = "Computer: " + computerScore;

    const commentary = document.querySelector('#commentary');

    const WINNER = document.querySelector('#winner');
    
    