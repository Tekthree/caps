'use strict';

const io = require('socket.io');
const MessageQueue = require('./MessageQueue.js');
const server = io(3000);
const family = server.of('/queue');
