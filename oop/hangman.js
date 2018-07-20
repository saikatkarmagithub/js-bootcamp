const Hangman = function (word, guesses, array = []) {
  this.word = word
  this.guesses = guesses
  this.array = array
}

Hangman.prototype.setName = function (word2) {
  this.word = word2
}

const saikat = new Hangman('Pota', 3, ['a','ba','cd'])
saikat.setName('Deep')
console.log(saikat)

const babuda = new Hangman('Diptajit', 2)
babuda.setName('bhogoban')
console.log(babuda)