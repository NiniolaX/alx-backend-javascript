const { expect } = require('chai');
const request = require('request');

describe('Express Server Integration tests', () => {
  describe('GET /', () => {
    it('should return correct response with status code 200', (done) => {
      const options = {
        url: 'http://localhost:7865/',
        method: 'GET',
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});
