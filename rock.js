
let pcScore = 0;
let meScore = 0;
const computerScore = document.querySelector('#computerscore')
const arwinScore = document.querySelector('#arwinscore')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const result = document.querySelector('.result')
const reset = document.querySelector('.reset')


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}

function getPlayerChoice() {
    
    rock.addEventListener('click', function() {
        getBothChoices('r')
    })

    paper.addEventListener('click', function() {
        getBothChoices('p')
    })

<<<<<<< HEAD
    scissors.addEventListener('click', function() {
        getBothChoices('s')
    })
};
getPlayerChoice()

function win() {
    meScore++
    arwinScore.innerHTML = meScore;
    result.innerHTML = 'You won this round boss!'
}
function lose() {
    pcScore++
    computerScore.innerHTML = pcScore;
    result.innerHTML =  'You loose this round, Loser!'
}
function tie() {
    result.innerHTML = 'This round was a tie mr bossman'
=======
    if (playerChoice === computerChoice) {
        return "tie";
     } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "Scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoise === "rock")
     ) {
        return "player";
     } else {
        return "computer";
     }
>>>>>>> c055617356525b604cfac0498f28827016abdac0
}


function restart() {
    reset.addEventListener('click', function() {
        meScore = 0;
        pcScore = 0;
        arwinScore.innerHTML = meScore;
        computerScore.innerHTML = pcScore;
    })
}
restart()


function getBothChoices(meChoice) {

    const pcChoice = getComputerChoice();

    switch(meChoice + pcChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win()
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            lose()
            break;
        case 'rr':
        case 'ss':
        case 'pp':
            tie()
            break;
    }
};
<<<<<<< HEAD
getBothChoices()
=======

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
    } else if (scoreComputer < scorePlayer) {
        console.log("You lose! Computer was the winner.")
    } else {
        console.log("We have a tie!")
    }
}

>>>>>>> c055617356525b604cfac0498f28827016abdac0
