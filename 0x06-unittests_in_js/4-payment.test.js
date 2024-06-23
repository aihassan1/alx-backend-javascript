const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const Utils = require('./utils');
const chai = require('chai');

const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub = null;
  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  it('should be called once', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnce).to.be.true;
  });

  it('should be called with 2 args', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct sum', () => {
    sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith('The total is: 10')).to.be.true;
  });

  afterEach(() => {
    sinon.restore();
  });
});
