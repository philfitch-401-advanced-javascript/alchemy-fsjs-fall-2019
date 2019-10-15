const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const chance = require('chance').Chance();
const fs = require('fs').promises;

setInterval(() => {
  socket.emit('log', chance.animal());
}, 1000);

