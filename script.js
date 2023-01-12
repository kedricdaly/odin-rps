function getComputerChoice() {
    const nChoices = 3;
    var randInt = Math.floor(Math.random() * nChoices);

    if (randInt === 0) {
        return "Rock"
    }
    else if (randInt == 1) {
        return "Paper"
    }
    else {
        return "Scissors"
    }

  }

function checkComputerDistribution() {
    const largeN = 100000
    var nRock = 0;
    var nPaper = 0;
    var nScissors = 0;

    for (let i = 0; i < largeN; i++) {
        thisChoice = getComputerChoice()
        if (thisChoice === "Rock") {
            nRock += 1;
        }
        else if (thisChoice === "Paper") {
            nPaper += 1;
        }
        else if (thisChoice === "Scissors") {
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