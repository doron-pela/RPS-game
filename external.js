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

const getHumanChoice = () =>{
    let choice;
    choice = prompt("Input your choice: ").trim();
    choice = choice.toLowerCase();
    console.log(`Your choice: ${choice}`);
    return choice;
}

const playGame = ()=>{
        
    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanChoice, computerChoice) => {
        
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
        
        console.log(winnerNotice);

    }

    for (let i=0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        console.log(`Score: You - ${humanScore}, Computer - ${computerScore}`);
    }
}

playGame();