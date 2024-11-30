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
        expect(body).to.equal('Payment methods for cart 3');
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

  describe('POST /login, body "username: John Doe"', () => {
    let options;
    before(() => {
      options = {
        url: 'http://localhost:7865/login',
        method: 'POST',
        json: { userName: "John Doe" },
      };
    })

    it('should return correct status code ', (done) => {
      request(options, (error, response, body) => {
          expect(response.statusCode).to.equal(200);
          done();
        }
      );
    });

    it('should return correct response', (done) => {
      request(options, (error, response, body) => {
        expect(body).to.equal('Welcome John Doe');
        done();
      })
    });
  });

  describe('GET /available_payments', () => {
    let options;
    before(() => {
      options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET',
      }
    });
    it('should return status code 200', (done) => {
      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('response body should have payment_methods property', (done) => {
      request(options, (error, response, body) => {
        parsedBody = JSON.parse(body);
        expect(parsedBody).to.have.property('payment_methods');});
        done();
    });

    it('payment_methods returned should have credit_card', (done) => {
      request(options, (error, response, body) => {
        parsedBody = JSON.parse(body);
        expect(parsedBody.payment_methods).to.have.property('credit_cards', true);});
        done();
    });

    it('payment_methods returned should have paypal', (done) => {
      request(options, (error, response, body) => {
        parsedBody = JSON.parse(body);
        expect(parsedBody.payment_methods).to.have.property('paypal', false);});
        done();
    });
  })
});
