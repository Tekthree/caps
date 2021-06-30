"use strict";

// -------------- requires and imports --------------------//
const io = require("socket.io-client");
const url = "http://localhost:3000/caps";
const server = io.connect(url);

// ------------------- picked up --------------------------//

server.on("pickUp", (order) => {
    setTimeout(() => {
        console.log(`Driver: picked up ${order.payload.orderId}`);
        console.log(`Event: in transit`);
        console.log(`Date-Time: ${new Date()}`);
        console.log(order);
        events.emit("inTransit", order);
    }, 1000);

    // -------------- inTransit ----------------//
    setTimeout(() => {
        console.log(`Driver: in transit ${order.payload.orderId}`);
        console.log(`Event: in transit`);
        console.log(`Date-Time: in transit ${new Date()}`);
        console.log(order);
        events.emit("delivered", order);
    }, 3000);
});
