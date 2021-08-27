
const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard;
  }

  returnCurrentCard() {
    this.currentCard = this.deck[0];
    return this.currentCard;
  }

  takeTurn(guess) {
    this.returnCurrentCard();
    this.turns++

    switch(guess) {
      case this.currentCard.correctAnswer:
        this.deck.shift();
        return 'Correct!';
        break;
      default: 
        this.incorrectGuesses.push(this.deck.shift().id);
        return 'Incorrect!';
    }
  }

  calculatePercentCorrect() {
    return (1 - (this.incorrectGuesses.length / this.turns)) * 100;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return (`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round; 