class Turn{
  constructor(guess, card) {
    this.guess;
    this.card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    switch(this.guess) {
      case 'this.card.correctAnswer':
        return true;
        break;
      default:
        return false;
    }
  }

  giveFeedback() {
    switch(this.evaluateGuess()) {
      case 'true':
        return 'Correct!';
        break;
      default:
        return 'Incorrect!';
    }
  }  
}
module.exports = Turn;