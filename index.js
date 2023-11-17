function getUserChoice(userInput) {
    let computerChoice = Math.floor(Math.random() * 3)
    let result

    if (userInput === computerChoice) {
        result = 'The game is a tie'
    } else if (userInput === 0 && computerChoice === 1) {
        result = 'You win'
    } else if (userInput === 1 && computerChoice === 2) {
        result = 'You win'
    } else if (userInput === 2 && computerChoice === 0) {
        result = 'You win'
    } else {
        result = 'You lost'
    }

    document.getElementById("jankenImg1").src="images/janken" + computerChoice + ".png"
    document.getElementById("jankenImg2").src="images/janken" + userInput + ".png"
    document.getElementById("result").innerHTML = result
}

