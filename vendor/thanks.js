'use strict'

const events = require('../events.js');

module.exports = function thanks(payload){
  console.log(`Vendor: thank you for delivering ${payload.orderId}`);
  console.log(`Time: ${new Date().getTime()}`);
  console.log(payload);
}