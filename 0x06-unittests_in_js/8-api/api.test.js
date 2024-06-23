const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index page', () => {
  it('responds with 200 status code', () => {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
    });
  });

  it('should return the correct body', () => {
    request('http://localhost:7865', (err, res, body) => {
      expect(body).to.be.contain('Welcome to the payment system');
    });
  });
});
