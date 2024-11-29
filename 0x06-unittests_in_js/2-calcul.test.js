const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./1-calcul');

describe('#calculateNumber() with SUM', () => {
  it('calculates sum of two positive numbers', () => {
    expect(calculateNumber('SUM', 1.8, 2.0)).to.equal(4);
  });

  it('calculates sum of two negative numbers', () => {
    expect(calculateNumber('SUM', -1.8, -2.0)).to.equal(-4);
  });

  it('calculates sum of one positive and one negative number', () => {
    expect(calculateNumber('SUM', -1.8, 2.0)).to.equal(0);
  });

  it('calculates sum of 0 and one negative number', () => {
    expect(calculateNumber('SUM', 0, -2.0)).to.equal(-2);
  });

  it('calculates sum of 0 and one positive number', () => {
    expect(calculateNumber('SUM', 0, 2.0)).to.equal(2);
  });
});

describe('#calculateNumber() with SUBTRACT', () => {
  it('calculates difference of two positive numbers', () => {
    expect(calculateNumber('SUBTRACT', 4.8, 2.0)).to.equal(3);
    expect(calculateNumber('SUBTRACT', 2.0, 4.8)).to.equal(-3);
  });

  it('calculates difference of two negative numbers', () => {
    expect(calculateNumber('SUBTRACT', -1.8, -2.0)).to.equal(0);
  });

  it('calculates difference of one positive and one negative number', () => {
    expect(calculateNumber('SUBTRACT', -1.8, 2.0)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 2.0, -1.8)).to.equal(4);
  });

  it('calculates difference of 0 and one negative number', () => {
    expect(calculateNumber('SUBTRACT', 0, -2.0)).to.equal(2);
    expect(calculateNumber('SUBTRACT', -2, 0)).to.equal(-2);
  });

  it('calculates difference of 0 and one positive number', () => {
    expect(calculateNumber('SUBTRACT', 0, 2.0)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 2.0, 0)).to.equal(2);
  });
});

describe('#calculateNumber() with DIVIDE', () => {
  it('calculates quotient of two positive numbers', () => {
    expect(calculateNumber('DIVIDE', 4.8, 2.0)).to.equal(2.5);
  });

  it('calculates quotient of two negative numbers', () => {
    expect(calculateNumber('DIVIDE', -1.8, -2.0)).to.equal(1);
  });

  it('calculates quotient with a positive dividend and a negative divisor', () => {
    expect(calculateNumber('DIVIDE', 2.0, -1.8)).to.equal(-1);
  });

  it('calculates quotient with negative dividend and positive divisor', () => {
    expect(calculateNumber('DIVIDE', -1.8, 2.0)).to.equal(-1);
  });

  it('calculates quotient of 0 dividend and negative divisor', () => {
    expect(calculateNumber('DIVIDE', 0, -2.0)).to.equal(0);
  });

  it('returns Error on division by 0', () => {
    expect(calculateNumber('DIVIDE', 2.0, 0)).to.equal('Error');
  });
});
