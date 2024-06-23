const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require('chai');
// const chaiAsPromised = require('chai-as-promised');

// chai.use(chaiAsPromised);
const expect = chai.expect;

describe('async function', () => {
  it('should have an instance of a promise', () => {
    const result = getPaymentTokenFromAPI(true);
    expect(result).to.be.instanceOf(Promise);
  });

  it('should return a res obj when it is true', () => {
    const result = getPaymentTokenFromAPI(true);
    result.then((res) => {
      expect(res.data.to.be.equal('Successful response from the API'));
    });
  });
  it('should do nothing when it is not true', () => {
    const result = getPaymentTokenFromAPI(true);
    result.then((res) => {
      expect(res.to.equal(''));
    });
  });
});
