const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Reset spy
    consoleLogSpy.restore();
  });

  it('logs the correct value with 100 and 20 to console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledWithExactly('The total is: 120')).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
  });

  it('logs the correct value with 10 and 10 to console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleLogSpy.calledWithExactly('The total is: 20')).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
  });
});
