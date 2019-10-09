const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890')

socket.on('hello', () => {
  console.log('HI!');
  socket.emit('what??');
});
