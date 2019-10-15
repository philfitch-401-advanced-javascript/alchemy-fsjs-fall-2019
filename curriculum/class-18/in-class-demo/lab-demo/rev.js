const io = require('socket.io-client');
const socket = io.connect('http://192.168.1.156:7890');

socket.on('file-read', ({ path, content }) => {
  const revStr = (content || '').split('').reverse().join('');

  socket.emit('file-write', { path: `${path}-rev`, content: revStr })
});
