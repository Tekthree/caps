'use strict';


// -------------- requires and imports --------------------//
const events = require('../events.js');



// ------------------- picked up --------------------------//
function pickedUp(order){
  console.log("this is order",order);
  setTimeout(()=>{
    console.log(`Driver: picked up ${order.payload.orderId}`);
    console.log(`Event: in transit`);
    console.log(`Date-Time: ${new Date()}`);
    console.log(order);
    events.emit('inTransit', order)
  }, 1000)
}


// ------------------- inTransit --------------------------//
function inTransit(order){
  setTimeout(()=>{
    console.log(`Driver: in transit ${order.payload.orderId}`);
    console.log(`Event: in transit`);
    console.log(`Date-Time: in transit ${new Date()}`);
    console.log(order);
    events.emit('delivered', order);

    
  }, 3000);
}





module.exports = { pickedUp, inTransit};

