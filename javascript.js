function Computerchooses() {

    let x = Math.floor(Math.random() * 3);
    
    return x;
    
}

function getUserChoice() {
    let choice;
    do {
        choice = prompt("Enter 'rock', 'paper', or 'scissors':").toLowerCase();
    } while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors');
    
    if(choice == "rock"){
        choice = 0
    }
    if (choice == "paper"){
        choice = 1
    }
    if (choice == "scissors") {
        choice = 2
    }
    
    return choice;
    
}

function round() {
    let computerChoice = Computerchooses();
    let userChoice = getUserChoice();

    console.log("Computer choice:", computerChoice);
    console.log("User choice:", userChoice);

    if (computerChoice === userChoice) {
        console.log("tie play again");
    } else if (computerChoice === 0 && userChoice === 2) {
        console.log("You Lose! Rock beats scissors");
    } else if (computerChoice === 2 && userChoice === 0) {
        console.log("You Win! Rock beats scissors");
    } else if (computerChoice === 1 && userChoice === 0) {
        console.log("You Lose! Paper beats rock");
    } else if (computerChoice === 0 && userChoice === 1) {
        console.log("You Win! Paper beats rock");
    } else if (computerChoice === 2 && userChoice === 1) {
        console.log("You Lose! Scissors beats paper");
    } else if (computerChoice === 1 && userChoice === 2) {
        console.log("You Win! Scissors beats paper");
    }
}

round()