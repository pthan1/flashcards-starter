const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', function() {

  it('should be a function', function () {
    var cards = [];
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    cards.push(card1);
    cards.push(card2);
    cards.push(card3);
    let deck = new Deck(cards);
    var round = new Round(deck.cards);
    expect(Round).to.be.a('function');
  })

  it('should be an instance of Deck', function () {
    let cards = [];
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    cards.push(card1);
    cards.push(card2);
    cards.push(card3);
    deck = new Deck(cards);
    round = new Round(deck.cards);
    expect(round).to.be.an.instanceof(Round);
  })
  
  it('should store a deck of cards', function () {
    let cards = [];
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    cards.push(card1);
    cards.push(card2);
    cards.push(card3);
    deck = new Deck(cards);
    round = new Round(deck.cards);
    expect(round.deck).to.deep.equal([{
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
    ]
  )})

  it('should have a default turns count of 0', function () {
      let cards = [];
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      cards.push(card1);
      cards.push(card2);
      cards.push(card3);
      deck = new Deck(cards);
    round = new Round(deck.cards);
      expect(round.turns).to.equal(0);
    })

  it('should have no incorrect guesses by default', function() {
      let cards = [];
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      cards.push(card1);
      cards.push(card2);
      cards.push(card3);
      deck = new Deck(cards);
    round = new Round(deck.cards);
      expect(round.incorrectGuesses).to.deep.equal([]);
    })


  it('should return the current card being played', function() {
    let cards = [];
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    cards.push(card1);
    cards.push(card2);
    cards.push(card3);
    deck = new Deck(cards);
    round = new Round(deck.cards);
    expect(round.returnCurrentCard()).to.deep.equal({
      id: 1,
      question: "What is Robbie's favorite animal",
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
    })
  })

  it('should evalute a correct answer', function () {
    let cards = [];
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    cards.push(card1);
    cards.push(card2);
    cards.push(card3);
    deck = new Deck(cards);
    round = new Round(deck.cards);
    expect(round.takeTurn('sea otter')).to.equal('Correct!');
  })

  it('should evalute an incorrect answer', function () {
    let cards = [];
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    cards.push(card1);
    cards.push(card2);
    cards.push(card3);
    deck = new Deck(cards);
    round = new Round(deck.cards);
    expect(round.takeTurn('spleen')).to.equal('Incorrect!');
  })

  it('should record number of guesses taken', function() {
    let cards = [];
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    cards.push(card1);
    cards.push(card2);
    cards.push(card3);
    deck = new Deck(cards);
    round = new Round(deck.cards);
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    expect(round.turns).to.equal(2);
  })
  
  it('should store incorrect guesses \(via card id\)', function() {
    let cards = [];
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    cards.push(card1);
    cards.push(card2);
    cards.push(card3);
    deck = new Deck(cards);
    round = new Round(deck.cards);
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    expect(round.incorrectGuesses).to.deep.equal([14]);
  })

  it('should return the percentage of correct guesses', function() {
    let cards = [];
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    cards.push(card1);
    cards.push(card2);
    cards.push(card3);
    deck = new Deck(cards);
    round = new Round(deck.cards);
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    expect(round.calculatePercentCorrect()).to.equal(50);
  })
})
