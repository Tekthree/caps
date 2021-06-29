'use strict';


// -------------- requires and imports --------------------//
const events = require('../events.js');



// ------------------- picked up --------------------------//
function pickedUp(payload){
  setTimeout(()=>{
    console.log(`Driver: picked up${payload.order.orderId}`);
    console.log(`Event: in transit`);
    console.log(`Time: ${new Date().getTime()}`);
    console.log(payload);
    events.emit('inTransit', payload)
  }, 1000)
}


// ------------------- inTransit --------------------------//
function inTransit(payload){
  setTimeout(()=>{
    console.log(`Driver: in transit ${payload.order.orderId}`);
    console.log(`Event: in transit`);
    console.log(`Time: in transit ${new Date().getTime()}`);
    console.log(payload);
    events.emit('delivered', payload);

    
  }, 3000);
}




module.exports = {
  inTransit: inTransit,
  pickedUp: pickedUp
};

