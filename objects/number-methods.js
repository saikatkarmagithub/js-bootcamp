let makeGuess = function (guessedNumber) {
    return guessedNumber === Math.floor(Math.random() * (5 - 1 + 1)) + 1
}

console.log(makeGuess(1))
console.log(makeGuess(2))
console.log(makeGuess(3))
console.log(makeGuess(4))
console.log(makeGuess(5))