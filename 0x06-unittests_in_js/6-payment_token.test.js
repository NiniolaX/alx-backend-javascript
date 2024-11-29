const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('returns resolved promise with success(bool)', () => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result.data).to.equal('Successful response from the API');
      })
  })
})