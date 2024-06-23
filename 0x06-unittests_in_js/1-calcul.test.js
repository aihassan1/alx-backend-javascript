const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('tests for calculateNumber function', function () {
  it('should round 2 numbers then add them 2.5 + 1.4 = 4', () => {
    assert.strictEqual(calculateNumber('SUM', 2.5, 1.4), 4);
    assert.strictEqual(calculateNumber('SUM', 2, 1), 3);
  });

  it('should round the two numbers, and subtract b from a 5.5 - 3.4 = 3', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 3.4), 3);
    assert.strictEqual(calculateNumber('SUBTRACT', 6, 3), 3);
  });
  it(`DIVIDE, round the two numbers, and divide a with b -
    6.4 / 2.5 = 2,  5 / 0.3 => Error`, () => {
    assert.strictEqual(calculateNumber('DIVIDE', 5.5, 2.7), 2);
  });
  it(`should, return the string 'Error' if the rounded value of b is equal to 0
    6.4 / 2.5 = 2,  5 / 0.3 => Error`, () => {
    assert.strictEqual(calculateNumber('DIVIDE', 5, 0.3), 'Error');
  });
});
