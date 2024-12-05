
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

    scissors.addEventListener('click', function() {
        getBothChoices('s')
    })
};

getPlayerChoice()

function win() {
    meScore++
    arwinScore.innerHTML = meScore;
    result.innerHTML = 'You won this round!'
}
function lose() {
    pcScore++
    computerScore.innerHTML = pcScore;
    result.innerHTML =  'You loose this round, Loser!'
}
function tie() {
    result.innerHTML = 'This round was a tie!'
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

getBothChoices();

