'use strict';


// -------------- requires and imports --------------------//
const events = require('./events.js');
const vendor = require('./vendor/vendor.js');
const driver = require('./driver/driver.js');



//------------------- order object -----------------------//
const NewOrder = new vendor.Vendor();


// ---------------------- events -------------------------//
events.on('pickUp', driver.pickedUp);
events.on('inTransit', driver.inTransit);
events.on('delivered', vendor.delivered);


// ----------- customer order every 5 mins --------------//
setInterval(()=>{
  events.emit('pickUp', {payload: NewOrder.create()});

}, 5000)

