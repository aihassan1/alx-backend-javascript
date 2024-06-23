const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index page', () => {
  it('responds with 200 status code', () => {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
    });
  });

  it('should have the correct result with number id parameter', () => {
    request('http://localhost:7865/cart/12', (error, res, body) => {
      expect(body).to.contain('Payment methods for cart 12');
    });
  });

  it('should have the correct status code when non number id parameter is provided', () => {
    request('http://localhost:7865/cart/hello', (error, res, body) => {
      expect(res.statusCode).to.equal(404);
    });
  });

  it('should return the correct body', () => {
    request('http://localhost:7865', (err, res, body) => {
      expect(body).to.be.contain('Welcome to the payment system');
    });
  });
});
