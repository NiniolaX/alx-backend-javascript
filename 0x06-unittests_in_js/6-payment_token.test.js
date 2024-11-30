const { expect } = require('chai');

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('returns resolved promise on success (true)', function(done) {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result.data).to.equal('Successful response from the API');
        done();
      });
  });

  it('returns undefined on fail (false)', () => {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined;
  });
});
