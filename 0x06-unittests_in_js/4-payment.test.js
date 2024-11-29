const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  // Stub the Utils.calculateNumber function
  const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');

  // Set return value for stub
  calculateNumberStub.returns(10);

  // Spy on console.log
  const consoleLogSpy = sinon.spy(console, 'log');

  // Call the function
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
