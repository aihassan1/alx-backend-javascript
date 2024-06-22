const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('calculates the sum of two round numbers correctly', function () {
    assert.strictEqual(calculateNumber(1.3, 2.3), 3);
    assert.strictEqual(calculateNumber(4.5, 2.5), 8);
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
  });
  it('should be -2 + 4 = 2', function () {
    assert.equal(calculateNumber(-2, 4), 2);
  });
});
