const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('#calculateNumber() with SUM', () => {
  it('calculates sum of two positive numbers', () => {
    assert.equal(calculateNumber('SUM', 1.8, 2.0), 4);
  });

  it('calculates sum of two negative numbers', () => {
    assert.equal(calculateNumber('SUM', -1.8, -2.0), -4);
  });

  it('calculates sum of one positive and one negative number', () => {
    assert.equal(calculateNumber('SUM', -1.8, 2.0), 0);
  });

  it('calculates sum of 0 and one negative number', () => {
    assert.equal(calculateNumber('SUM', 0, -2.0), -2);
  });

  it('calculates sum of 0 and one positive number', () => {
    assert.equal(calculateNumber('SUM', 0, 2.0), 2);
  });
});

describe('#calculateNumber() with SUBTRACT', () => {
  it('calculates difference of two positive numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 4.8, 2.0), 3);
    assert.equal(calculateNumber('SUBTRACT', 2.0, 4.8), -3);
  });

  it('calculates difference of two negative numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', -1.8, -2.0), 0);
  });

  it('calculates difference of one positive and one negative number', () => {
    assert.equal(calculateNumber('SUBTRACT', -1.8, 2.0), -4);
    assert.equal(calculateNumber('SUBTRACT', 2.0, -1.8), 4);
  });

  it('calculates difference of 0 and one negative number', () => {
    assert.equal(calculateNumber('SUBTRACT', 0, -2.0), 2);
    assert.equal(calculateNumber('SUBTRACT', -2, 0), -2);
  });

  it('calculates difference of 0 and one positive number', () => {
    assert.equal(calculateNumber('SUBTRACT', 0, 2.0), -2);
    assert.equal(calculateNumber('SUBTRACT', 2.0, 0), 2);
  });
});

describe('#calculateNumber() with DIVIDE', () => {
  it('calculates quotient of two positive numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 4.8, 2.0), 2.5);
  });

  it('calculates quotient of two negative numbers', () => {
    assert.equal(calculateNumber('DIVIDE', -1.8, -2.0), 1);
  });

  it('calculates quotient with a positive dividend and a negative divisor', () => {
    assert.equal(calculateNumber('DIVIDE', 2.0, -1.8), -1);
  });

  it('calculates quotient with negative dividend and positive divisor', () => {
    assert.equal(calculateNumber('DIVIDE', -1.8, 2.0), -1);
  });

  it('calculates quotient of 0 dividend and negative divisor', () => {
    assert.equal(calculateNumber('DIVIDE', 0, -2.0), 0);
  });

  it('returns Error on division by 0', () => {
    assert.equal(calculateNumber('DIVIDE', 2.0, 0), 'Error');
  });
});
