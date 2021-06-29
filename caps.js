'use strict';


// -------------- requires and imports --------------------//
const events = require('./events.js');
const vendor = require('./vendor/vendor.js');
const driver = require('./driver/driver.js');
const delivered = require('./vendor/thanks.js');


//------------------- order object -----------------------//
const NewOrder = new vendor.Vendor();


// ---------------------- events -------------------------//
events.on('readyPickUp', driver.pickedUp);
events.on('inTransit', driver.inTransit);
events.on('delivered', delivered);


// ----------- customer order every 5 mins --------------//
setInterval(()=>{
  events.emit('readyPickup', {payload: NewOrder.create()})
}, 5000)

