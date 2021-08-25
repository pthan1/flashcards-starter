const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function () {
  var deck;

  it ('should be a function', function () {
    let cards = [];
    deck = new Deck(cards);
    expect(Deck).to.be.a('function');
  })

  it('should be an instance of Deck', function() {
    let cards = [];
    deck = new Deck(cards);
    expect(deck).to.be.an.instanceof(Deck);
  })

  it('should store array of card objects', function () {
    let cards = [];
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    cards.push(card1);
    cards.push(card2);
    cards.push(card3);
    deck = new Deck(cards);
    expect(deck.cards).to.deep.equal([{
      id: 1,
      question: "What is Robbie's favorite animal",
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
      },
      {
      id: 14,
      question: 'What organ is Khalid missing?',
      answers: ['spleen', 'appendix', 'gallbladder'],
      correctAnswer: 'gallbladder'
      },
      {
      id: 12,
      question: "What is Travis's middle name?",
      answers: ['Lex', 'William', 'Fitzgerald'],
      correctAnswer: 'Fitzgerald'
      }
    ])
  })

  it('should return number of cards in the deck', function() {
    let cards = [];
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    cards.push(card1);
    cards.push(card2);
    cards.push(card3);
    deck = new Deck(cards);
    expect(deck.countCards()).to.equal(3);
  })  
})