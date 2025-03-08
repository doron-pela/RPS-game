const getComputerChoice = () =>{
    let choice;
    let n = Math.random()*0.9;

    if (n>=0 && n<0.3){
        choice = 'rock';
    }else if (n>=0.3 && n<0.6){
        choice = 'paper';
    }else{
        choice ='scissors';
    }
    console.log(`Computer choice: ${choice}`);
    return choice;
}


const playGame = ()=>{
    
    //Game stores the computer and player scores
    let humanScore = 0;
    let computerScore = 0;

    //playRound function is defined in the playGame scope (logically, as rounds are for a game)

    const playRound = (humanChoice, computerChoice) => {
        
        //rules function is defined in the playRound scope (logically, as rules are for a round)

        const rules = (choiceOne, choiceTwo)=>{
            switch (choiceOne){
                case "rock":
                    if (choiceTwo === "scissors"){
                        return 1;
                    }else if (choiceTwo === choiceOne){
                        return 0;
                    }else if (choiceTwo === "paper"){
                        return -1;
                    }
                case "paper":
                    if (choiceTwo === "rock"){
                        return 1;
                    }else if (choiceTwo === choiceOne){
                        return 0;
                    }else if (choiceTwo === "scissors"){
                        return -1;
                    }
                case "scissors":
                    if (choiceTwo === "paper"){
                        return 1;
                    }else if (choiceTwo === choiceOne){
                        return 0;
                    }else if (choiceTwo === "rock"){
                        return -1;
                    }
            } 
        }

        //Conditional logic for the round to be played based on its rules, and a winner notice is given for each round

        let winnerNotice = ``;
        if (rules(humanChoice, computerChoice) === 1){
            winnerNotice = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }else if (rules(humanChoice, computerChoice) === -1){
            winnerNotice = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }else{
            winnerNotice = `It's a tie!`;
        }

        //Notice is displayed to the DOM, no longer the console
        
        let player = document.querySelector('#playerScore');
        let computer = document.querySelector('#computerScore');

        player.textContent = `Your score - ${humanScore}`;
        computer.textContent = `Computer score - ${computerScore}`;

    }


    let humanChoice;

    const div = document.querySelector('div');

    //Handler for what should happen everytime any button (with specific ids inside their parent - div) is clicked
    div.addEventListener("click", (e)=>{
        humanChoice = e.target.id;
        switch(humanChoice){
            case "rock":
                humanChoice = "rock";
            case "paper":
                humanChoice = "paper";
            case "scissors":
                humanChoice = "scissors";
        }
        console.log(`Human choice: ${humanChoice}`); //log for debugging to check what button was clicked

        const computerSelection = getComputerChoice();

        //We need to only play this round if someone's score is still less than 5; 
        //Since the entire round's play is dependent on a click (i.e if event has been dispatched, then play round inside the handler's callback), 
        //we need to stop playing rounds for each click if the score condition has been met. We can do this by closing the callback's execution context (with return statement) every time the condition is met,
        // or continue playing rounds if it is not.

        if (computerScore < 5 && humanScore < 5){
            playRound(humanChoice, computerSelection);
        }

        let winnerNotice = '';
        // const winningScore = 5;
        if (humanScore === 5){
            winnerNotice = `Congratulations user, You won in 5 games with a score of ${humanScore}`;
            document.querySelector('#winner').textContent = winnerNotice;
            return;
        }

        if (computerScore === 5){
            winnerNotice = `Sorry user, You lost to the computer ${humanScore} to ${computerScore}`;
            document.querySelector('#winner').textContent = winnerNotice;
            return;
        }

    });


    // for (let i=0; i<5; i++){
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
        
    //     playRound(humanSelection, computerSelection);
    //     console.log(`Score: You - ${humanScore}, Computer - ${computerScore}`);
    // }
}

playGame();