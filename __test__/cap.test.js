const events = require('../events.js');
const vendor = require('../vendor/vendor.js');
const driver = require('../driver/driver.js');
const eventsEmitter = require('../events.js');

console.log = jest.fn();
events.emit = jest.fn();




