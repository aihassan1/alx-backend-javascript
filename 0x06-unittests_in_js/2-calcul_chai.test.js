const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./1-calcul');

describe('tests for calculateNumber function', function () {
  it('should round 2 numbers then add them 2.5 + 1.4 = 4', () => {
    expect(calculateNumber('SUM', 2.5, 1.4)).to.equal(4);
    expect(calculateNumber('SUM', 2, 1)).to.equal(3);
  });

  it('should round the two numbers, and subtract b from a 5.5 - 3.4 = 3', () => {
    expect(calculateNumber('SUBTRACT', 5.5, 3.4)).to.equal(3);
    expect(calculateNumber('SUBTRACT', 6, 3)).to.equal(3);
  });

  it(`DIVIDE, round the two numbers, and divide a with b ->
      6.4 / 2.5 = 2,  5 / 0.3 => Error`, () => {
    expect(calculateNumber('DIVIDE', 5.5, 2.7)).to.equal(2);
  });

  it(`should, return the string 'Error' if the rounded value of b is equal to 0
      6.4 / 2.5 = 2,  5 / 0.3 => Error`, () => {
    expect(calculateNumber('DIVIDE', 5, 0.3)).to.equal('Error');
  });
});
