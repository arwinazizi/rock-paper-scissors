console.log("Hi, lets have somee fun!")

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}


function checkWinner(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === computerChoice) {
        return "tie";
     } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "Scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
     ) {
        return "player";
     } else {
        return "computer";
     }
}

function playRound(playerChoice, computerChoice) {
    const result = checkWinner(playerChoice, computerChoice);
    if (result == "tie") {
        return "Its a tie" 
    } else if (result == "player") {
        return `You win! ${playerChoice} beats ${computerChoice}`
    } else {
        return `Loser! ${computerChoice} beats ${playerChoice}`
    }
};

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt("Rock Paper Scissors");
        if (choice == null) {
            continue;
        } 
        const choiceInLower = choice.toLowerCase();
        if (choices.includes(choiceInLower))
        validatedInput = true;
        return choiceInLower;
    }
}
 

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!")

    for (let i = 0; i < 5; i++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice))
        console.log("---------")
        if (checkWinner(playerChoice, computerChoice) == "player") {
            scorePlayer++
        }
        else if (checkWinner(playerChoice, computerChoice) == "computer") {
            scoreComputer++
        }
    }
    console.log("Game over! ")
    if (scorePlayer > scoreComputer) {
        console.log("You was the winner!") 
    } else if (scoreComputer > scorePlayer) {
        console.log("You lose! Computer was the winner.")
    } else {
        console.log("We have a tie!")
    }
}

