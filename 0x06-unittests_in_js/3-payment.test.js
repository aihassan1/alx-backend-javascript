const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const Utils = require('./utils');
const chai = require('chai');


const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  beforeEach(() => {
    // create a spy
    sinon.spy(Utils, 'calculateNumber');
  });

  it('should be called once', () => {
    sendPaymentRequestToApi(10, 12);
    expect(Utils.calculateNumber.calledOnce).to.be.true;
  });

  it('should be called with 2 args', () => {
    sendPaymentRequestToApi(10, 20);
    expect(Utils.calculateNumber.calledWith('SUM', 10, 20)).to.be.true;
  });

  it('should log the correct sum', () => {
    sinon.spy(console, 'log');
    sendPaymentRequestToApi(20, 40);
    expect(console.log.calledWith('The total is: 60'));
  });

  afterEach(() => {
    sinon.restore();
  });
});
