const sendPaymentRequestToAPI = require('./5-payment');
const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const { beforeEach } = require('mocha');

expect = chai.expect;

describe('sendPaymentRequestToAPI', function () {
  let spy;
  beforeEach(function () {
    spy = sinon.spy(console, 'log');
  });

  it('should call the func with(100,20) and result is 120', () => {
    sendPaymentRequestToAPI(100, 20);
    expect(spy.calledWith('The total is: 120')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });

  it('should call the func with(10,10) and result is 20', () => {
    sendPaymentRequestToAPI(10, 10);
    expect(spy.calledWith('The total is: 20')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });

  afterEach(function () {
    spy.restore();
  });
});
