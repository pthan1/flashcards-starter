const chat = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js');
const Turn = require('../src/Turn.js');

describe('Turn', function() {
  this.beforeEach(function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');

    const turn = new Turn('sea otter', card);
  })
  
  it('should be a function', function () {
    expect(Turn).to.be.a('function');
  })

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should store the user\'s guess', function () {
    expect(turn.userGuess).to.equal('sea otter');
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
    const wrongAnswer = new Card('pug', card);

    expect(wrongAnswer.evaluateGuess()).to.equal(false);
  })

  it('should return \'Correct!\' if answer is correct', function () {
    expect(turn.giveFeedback()).to.equal('Correct!');
  })

  it('should return \'Incorrect!\' if answer is incorrect', function () {
    expect(turn.giveFeedback()).to.equal('Incorrect!');
  })

})