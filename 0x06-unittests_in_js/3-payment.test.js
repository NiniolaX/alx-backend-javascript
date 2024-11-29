const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  // Create spy
  const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

  // Call function
  sendPaymentRequestToApi(100, 20);

  it('calls Utils.calculateNumber', () => {
    expect(calculateNumberSpy.calledOnce).to.be.true;
  });

  it('takes in the same arguments as Utils.calculateNumber', () => {
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('returns the same value as Utils.calculateNumber', () => {
    expect(calculateNumberSpy.returned(120)).to.be.true;
  });

  // Restore spy
  calculateNumberSpy.restore();
});
