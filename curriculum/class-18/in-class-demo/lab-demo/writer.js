const io = require('socket.io-client');
const socket = io.connect('http://192.168.1.156:7890');
const fs = require('fs').promises;

socket.on('file-write', ({ path, content }) => {
  console.log('we are here!')
  fs.writeFile(__dirname + '/data/' + path, content)
    .then(() => {
      socket.emit('file-saved');
    })
    .catch(err => socket.emit('file-error', err));
});
