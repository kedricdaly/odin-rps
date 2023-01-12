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



const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(`player: ${playerSelection}  computer: ${computerSelection}`)
console.log(playRound(playerSelection, computerSelection));