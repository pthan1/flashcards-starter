const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Game', function() {
  let cards, card1, card2, card3, deck, round, game;

  this.beforeEach(function() {
    // cards = [];
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    // cards.push(card1);
    // cards.push(card2);
    // cards.push(card3);
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck.cards);
    game = new Game();
    game.start();
  })

  
  it('should create a full deck of Cards', function() {
    expect(game.cards.length).to.equal(30);
  })
    
    
    
    it('should place cards in a Deck', function () {
      expect(game.deck.cards.length).to.equal(30);

            })
            
    it('should create a new Round', function() {
      expect(game.currentRound.deck.length).to.equal(30);
    })

    it('should keep track of the current round', function() {
      
      expect(game.currentRound.deck.length).to.equal(30);
    })
})
