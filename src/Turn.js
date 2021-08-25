class Turn{
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.isCorrect;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }


  evaluateGuess() {
    switch(this.guess) {
      case `${this.card.correctAnswer}`:
        return this.isCorrect = true;
        break;
      default:
        return this.isCorrect = false;
    }
  }

  giveFeedback() {
    this.evaluateGuess();
    switch(this.isCorrect) {
      case true:
        return 'Correct!';
        break;
      default:
        return 'Incorrect!';
    }
  }  
}
module.exports = Turn;