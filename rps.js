//fuction to that returns random from rock paper scissors
function computerSelection(){
    //create an array called draw that has rock paper & scissor
    //generate random number from zero to two store to roll var
    let roll = Math.floor(Math.random()*3);
    return cars[roll];
}
function playRound(playerSelection, computerSelection){
    //make playerSelectionPattern & computerSelectionPattern insensitive
    let playerSelectionPattern = playerSelection.toLowerCase();
    let computerSelectionPattern = computerSelection.toLowerCase();
    //if player selection is equal to computer, return This is a draw
    if(playerSelectionPattern == computerSelectionPattern){
        console.log("This is a draw");
    }
    //if player is rock and computer is paper, return computerWins
    else if(playerSelectionPattern == cars[0] && computerSelectionPattern == cars[1]){
        computerWins();
    }
    //if player is rock and computer is scissors return playerWins
    else if(playerSelectionPattern == cars[0] && computerSelectionPattern == cars[2]){

        playerWins();
    }
    //if player is paper and computer is rock, return playerWins
    else if(playerSelectionPattern == cars[1] && computerSelectionPattern == cars[0]){
        playerWins();
    }
    //if player is paper and computer is scissors return computerWins
    else if(playerSelectionPattern == cars[1] && computerSelectionPattern == cars[2]){
        computerWins();
    }
    //if player is scissors and computer is rock, return computerWins
    else if(playerSelectionPattern == cars[2] && computerSelectionPattern == cars[0]){
        computerWins();
    }
    //if player is scissors and computer is paper return playerWins
    else if(playerSelectionPattern == cars[2] && computerSelectionPattern == cars[1]){
        playerWins();
    }
}
function playerWins(){
    console.log("You win");
}
function computerWins(){
    console.log("Computer wins");
}
function game(){
    let i = 5;
    while(i != 0){
        let playerSelection = window.prompt("Rock, Paper or Scissors?").toLowerCase();
            //check if typed is rock paper or scissors
            if(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
                console.log("You: ",playerSelection[0].toUpperCase() + playerSelection.substring(1));
                console.log("Computer: ",computerSel[0].toUpperCase() + computerSel.substring(1));
                //re roll computer selection
                computerSelection();
                //play round
                playRound(playerSelection, computerSel);
                i -= 1;
            }else{
                playerSelection = window.alert("Please choose Rock, Paper or Scissors, Let's try again");
            }
        
        
    }
    
}
let cars = ["Rock", "Paper", "Scissors"].map(v => v.toLowerCase());
let computerSel = computerSelection();
game();

