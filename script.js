function getComputerChoice() {
    const nChoices = 3;
    var randInt = Math.floor(Math.random() * nChoices);

    if (randInt === 0) {
        return "rock"
    }
    else if (randInt == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }

  }

function checkComputerDistribution() {
    const largeN = 100000
    var nRock = 0;
    var nPaper = 0;
    var nScissors = 0;

    for (let i = 0; i < largeN; i++) {
        thisChoice = getComputerChoice()
        if (thisChoice === "rock") {
            nRock += 1;
        }
        else if (thisChoice === "paper") {
            nPaper += 1;
        }
        else if (thisChoice === "scissors") {
            nScissors += 1;
        }
        else {
            console.log("unknown computer choice")
        }
    }

    outStr = `nRock: ${nRock*100/largeN}, nPaper: ${nPaper*100/largeN}, nScissors: ${nScissors*100/largeN} `
    console.log(outStr)
    return
}

function playRound(playerSelection, computerSelection) {
    // parse player input
    // does not check for valid input
    // win encoding is player-focused
    //   +1 if player wins
    //    0 if player ties
    //   -1 if player loses
    playerSelection = playerSelection.toLowerCase()

    // only add a round audit div if it does not already exist
    // locate the div before the result div
    const result = document.querySelector('.result');
    const body = document.querySelector('body');
    let roundLog = document.querySelector('.roundAudit');
    if (!roundLog) {
        roundLog = document.createElement('div')
        roundLog.setAttribute('class', 'roundAudit')
        body.insertBefore(roundLog, result)
    }
       

    let roundAudit = `player: ${playerSelection}\tcomputer: ${computerSelection}`
    roundLog.innerText = roundAudit;

    if (playerSelection === computerSelection) {
        return 0
    }

    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return 1
        }
        else {
            return -1
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return 1
        }
        else {
            return -1
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return 1
        }
        else {
            return -1
        }
    }
    
}

function playRoundWrapper(e) {

    const selection = e.target.innerText;
    const pScore = document.querySelector('.pScore');
    const cScore = document.querySelector('.cScore');

    let roundScore = playRound(selection, getComputerChoice());

    if (roundScore > 0) {
        pScore.innerText = parseInt(pScore.innerText) + 1;
    } else if (roundScore < 0) {
        cScore.innerText = parseInt(cScore.innerText) + 1;
    }
    
    if (parseInt(pScore.innerText) === 5) {
        const selections = document.querySelectorAll('.selection');
        selections.forEach(selection => selection.removeEventListener('click', playRoundWrapper));
        const result = document.querySelector('.result');
        result.innerText = "You win! Refresh to play again.";
        result.setAttribute('visibility', true)

    } else if (parseInt(cScore.innerText) === 5) {
        const selections = document.querySelectorAll('.selection');
        selections.forEach(selection => selection.removeEventListener('click', playRoundWrapper));
        const result = document.querySelector('.result');
        result.innerText = "Computer wins :(. Refresh to try again.";
        result.setAttribute('visibility', true)
    }

}

function startGame() {
    const selections = document.querySelectorAll('.selection');
    let pScore = 0;
    let cScore = 0;
    selections.forEach(selection => selection.addEventListener('click', playRoundWrapper)); 
}

window.addEventListener('load', startGame)
