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
