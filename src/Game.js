const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound;
    this.cards = [];
    this.deck;
  }

  printMessage(deck) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    prototypeQuestions.forEach(question => this.cards.push(new Card(question.id, question.question, question.answers, question.correctAnswer)));
    this.deck = new Deck(this.cards);
    this.currentRound = new Round(this.deck.cards);
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }


}

module.exports = Game;