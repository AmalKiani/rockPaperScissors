function getComputerChoice(){
    var options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function getPlayerChoice(){
    var selection = prompt("Enter your Selection:");
    return selection;
}

function playRound(playerSelection, computerSelection){
    console.log("computer: " + computerSelection);
    console.log("Player: " + playerSelection);

    if(playerSelection === "rock" || playerSelection === "Rock" || playerSelection === "ROCK"){
        if(computerSelection === "Scissors"){
            return "You Win - Rock beats Scissors!"
        }else{
            return "You Lose! - Paper beats Rock"
        }
    }else if (playerSelection === "paper" || playerSelection === "Paper" || playerSelection === "PAPER"){
        if(computerSelection === "Rock"){
            return "You Win! - Paper beats Rock"
        }else{
            return "You Lose! - Scissors beats Paper"
        }
    }else if (playerSelection === "scissors" || playerSelection === "Scissors" || playerSelection === "SCISSORS"){
        if(computerSelection === "Paper "){
            return "You Win! - Scissors beats Paper"
        }else{
            return "You Lose! - Rock beats Scissors"
        }
    }else{
        alert("You have entered incorrectionly - Try again");       
    }
}

function game(){
    let rounds = prompt("How Many Rounds?");
    for(let i = 0; i < rounds; i++){
        console.log("Round " + (i+1));
        var playerSelection = getPlayerChoice();
        var computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();