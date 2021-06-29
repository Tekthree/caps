'use strict'

// -------------- requires and imports --------------------//
const { fake } = require('faker');



// ---------------- orders constructor -------------------//
class Vendor{
  constructor(){
    this.array = [];
  };


  create(){
    let order = {
      storeName: fake.name.findName(),
      orderId: fake.datatype.uuid(),
      customerName: fake.name.findName(),
      address: fake.address.streetAddress()
    }
    this.array.push(order);
    return order;
  }
}


module.exports = {
  Vendor: Vendor

}