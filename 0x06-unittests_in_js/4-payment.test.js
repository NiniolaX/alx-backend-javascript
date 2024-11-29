const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  // Stub calculateNumber
  const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
  calculateNumberStub.returns(10);

  // Create spy
  const consoleLogSpy = sinon.spy(console, 'log');

  // Call function
  sendPaymentRequestToApi(100, 20);

  it('always returns 10', () => {
    expect(calculateNumberStub.alwaysReturned(10)).to.be.true;
  });

  it('is being called with type = SUM, a = 100, and b = 20', () => {
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('always logs "The total is: 10" to console', () => {
    expect(consoleLogSpy.alwaysCalledWithExactly('The total is: 10')).to.be.true;
  });

  // Restore stub and spy
  calculateNumberStub.restore();
  consoleLogSpy.restore();
});
