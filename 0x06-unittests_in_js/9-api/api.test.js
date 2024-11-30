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

  describe('GET /cart/:id', () => {
    it('should return correct status code for integer id', (done) => {
      request('http://localhost:7865/cart/3', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return correct response for integer id', (done) => {
      request('http://localhost:7865/cart/3', (error, response, body) => {
        expect(body).to.equal('Payment methods for cart :3');
        done();
      });
    });

    it('should return status code 404 for non-integer id', (done) => {
      request('http://localhost:7865/cart/hello', (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});
