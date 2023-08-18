const playerScore = document.getElementById('player-score')
const computerScore = document.getElementById('computer-score')
const rockBtn = document.getElementById('rock-button')
const paperBtn = document.getElementById('paper-button')
const scissorsBtn = document.getElementById('scissors-button')
const result = document.getElementById('result')
const resultDiv = document.getElementById('result-div')
const playerSelection = document.getElementById('player-selection')
const computerSelection = document.getElementById('computer-selection')

function playerWins() {
    result.innerText = 'You Win!'
    resultDiv.style.backgroundColor = 'green'
    playerScore.innerText++
}

function computerWins() {
    result.innerText = 'Computer Wins!'
    resultDiv.style.backgroundColor = 'red'
    computerScore.innerText++
}

function draw() {
    result.innerText = 'Draw!'
    resultDiv.style.backgroundColor = '#cc9900'
}

function test(choice) {
    let computerChoices = ['rock', 'paper', 'scissors']
    let computerChoice = computerChoices[Math.floor(Math.random()*3)]
    playerSelection.innerText = choice
    computerSelection.innerText = computerChoice
    switch(choice) {
        case 'rock':
            switch(computerChoice) {
                case 'rock': 
                    draw()
                    break
                case 'paper': 
                    computerWins()
                    break
                case 'scissors': 
                    playerWins()
                    break
            }
            break
        case 'paper':
            switch(computerChoice) {
                case 'rock': 
                    playerWins()
                    break
                case 'paper': 
                    draw()
                    break
                case 'scissors': 
                    computerWins()
                    break
            }
            break

        case 'scissors':
            switch(computerChoice) {
                case 'rock': 
                    computerWins()
                    break
                case 'paper': 
                    playerWins()
                    break
                case 'scissors': 
                    draw()
                    break
            }
    }
}

rockBtn.onclick = ()=> test('rock')
paperBtn.onclick = ()=> test('paper')
scissorsBtn.onclick = ()=> test('scissors')
