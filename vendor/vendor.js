'use strict'

// -------------- requires and imports --------------------//
const faker = require('faker');



// ---------------- orders constructor -------------------//
class Vendor{
  constructor(){
    this.array = [];
  };


  create(){
    let order = {
      storeName: faker.name.findName(),
      orderId: faker.datatype.uuid(),
      customerName: faker.name.findName(),
      address: faker.address.streetAddress()
    }
    this.array.push(order);
    console.log(order);
    return order;
  }
}

function delivered(order){
  console.log(`Vendor: thank you for delivering ${order.payload.orderId}`);
  console.log(`Date-Time: ${new Date()}`);
  console.log(order);
}


module.exports = {
  Vendor: Vendor,
  delivered: delivered

}