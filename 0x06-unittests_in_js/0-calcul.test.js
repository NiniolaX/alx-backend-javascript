const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber()', () => {
  it('rounds the first number', () => {
    assert.equal(calculateNumber(1.2, 1), 2);
    assert.equal(calculateNumber(1.5, 1), 3);
    assert.equal(calculateNumber(1.8, 1), 3);
  });

  it('rounds the second number', () => {
    assert.equal(calculateNumber(1, 1.2), 2);
    assert.equal(calculateNumber(1, 1.5), 3);
    assert.equal(calculateNumber(1, 1.8), 3);
  });

  it('rounds two positive numbers', () => {
    assert.equal(calculateNumber(3.8, 3.2), 7);
    assert.equal(calculateNumber(0.1, 4.8), 5);
  });

  it('rounds 0 and a positive number', () => {
    assert.equal(calculateNumber(0, 4.8), 5);
    assert.equal(calculateNumber(5.2, 0), 5);
  });

  it('rounds 0 and a negative number', () => {
    assert.equal(calculateNumber(0, -3.2), -3);
    assert.equal(calculateNumber(-4.8, 0), -5);
  });

  it('rounds one positive and one negative numbers', () => {
    assert.equal(calculateNumber(-1.2, -1.4), -2);
    assert.equal(calculateNumber(0.0, -1.8), -2);
  });

  it('rounds two negative numbers', () => {
    assert.equal(calculateNumber(-3.5, -4.2), -7);
    assert.equal(calculateNumber(-1.7, -1.4), -3);
  });
});
