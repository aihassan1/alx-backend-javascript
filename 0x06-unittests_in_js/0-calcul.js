function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}
module.exports = calculateNumber;

console.log(calculateNumber(1.6, 2.3));
