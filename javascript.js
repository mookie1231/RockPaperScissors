function Computerchooses() {
    const options = ["rock","paper","scissors"];
    let x = Math.floor(Math.random() * 3);
    console.log(options[x]);
    return options[x];
    
}

function getUserChoice() {
    let choice;
    do {
        choice = prompt("Enter 'rock', 'paper', or 'scissors':").toLowerCase();
    } while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors');
    console.log(choice);
    return choice;
    
}

function round() {
    
    if (Computerchooses() == getUserChoice()){
        console.log("tie play again")
    }

    if("rock" > "paper") {
        console.log("larger string wins")
    }

    // rock beats paper - both ways 

    // scissor beats paper - if computer chooses scissor and user chooses paper 


}


Computerchooses();
getUserChoice();
round()