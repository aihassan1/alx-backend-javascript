const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const total_sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${total_sum}`);
}

module.exports = sendPaymentRequestToApi;
