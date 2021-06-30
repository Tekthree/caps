"use strict";

// ------------------ require -----------------------//
const io = require("socket.io");

// ------------------ socket.io hub and namespace -----------------------//
const server = io(3000);
const capsController = server.of("/caps");

// ------------------ create connnections with client -----------------------//

server.on("connection", (socket) => {
    console.log("Connection made with - ", socket.id);
});

capsController.on("connection", (socket) => {
    console.log("connection to capsController - ", socket.id);

    //------------ pickup ---------------------//
    socket.on("pickUp", (order) => {
        socket.broadcast.emit("pickUp", order);
        console.log("picked up", `Date-Time: ${new Date()}`, order);
    });

    //------------ inTransit ---------------------//
    socket.on("inTransit", (order) => {
        console.log("on the move", `Date-Time: ${new Date()}`, order);
    });

    //------------ delivered ---------------------//
    socket.on("delivered", (order) => {
        socket.broadcast.emit("delivered", order);
        console.log("delivered", `Date-Time: ${new Date()}`, order);
    });
});
