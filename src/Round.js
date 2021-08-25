
const Turn = require('./Turn');

class Round{
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
    var turn = new Turn(guess, this.currentCard);
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
}

module.exports = Round; 