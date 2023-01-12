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

}