const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe('Turn', function() {
  var card;
  var turn;
  beforeEach(function() {
    card = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('sea otter', card);
  })
  
  it('should be a function', function () {
    expect(Turn).to.be.a('function');
  })

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should store the user\'s guess', function () {
    expect(turn.guess).to.equal('sea otter');
  })

  it('should store a Card object for the current card in play', function () {
    expect(turn.card).to.deep.equal({
      "id": 1,
      "question": 'What is Robbie\'s favorite animal?',
      "answers": ['sea otter', 'pug', 'capybara'],
      "correctAnswer": 'sea otter'
    });
  })

  it('should return user\'s guess', function () {
    expect(turn.returnGuess()).to.equal('sea otter');
  })

  it('should return the Card object that\'s in play', function() {
    expect(turn.returnCard()).to.deep.equal({
      "id": 1,
      "question": 'What is Robbie\'s favorite animal?',
      "answers": ['sea otter', 'pug', 'capybara'],
      "correctAnswer": 'sea otter'
    });
  })

  it('should return true if guess is correct', function() {
    expect(turn.evaluateGuess()).to.equal(true);
  })

  it('should return false if guess is incorrect', function () {
    let wrongAnswer = new Turn('pug', card);

    expect(wrongAnswer.evaluateGuess()).to.equal(false);
  })

  it('should return \'Correct!\' if answer is correct', function () {
    expect(turn.giveFeedback()).to.equal('Correct!');
  })

  it('should return \'Incorrect!\' if answer is incorrect', function () {
    let wrongAnswer = new Turn('pug', card);
    expect(wrongAnswer.giveFeedback()).to.equal('Incorrect!');
  })

})