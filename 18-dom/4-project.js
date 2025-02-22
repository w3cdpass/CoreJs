const RandomGuess = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt')
const usrInput = document.querySelector('#guessField')
const guess = document.querySelector('.guesses')

const lastResult = document.querySelector('.leastResult')
const lowOrHigh = document.querySelector('.lowOrhi')

const p = document.createElement('p')
let preGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(usrInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess) {
    // validate first
    if (isNaN(guess)) {
        alert("please enter a valid number")
    } else if (guess <= 1) {
        alert("please enter a number to 1 or above")
    } else if (guess >= 100) {
        alert("please enter a number below and equal to 100")
    } else {
        preGuess.push(guess)
        if (numGuess === 11) {
            displayMsg(guess)
            displayMsg
        }
    }
}

function checkGuess(guess) {
    // then check
}
// it will show in dom
function displayMsg(msg) {
    // then show in dom 
}

function endGame() {
    // game End
}
function newGame() {
    // game End
}