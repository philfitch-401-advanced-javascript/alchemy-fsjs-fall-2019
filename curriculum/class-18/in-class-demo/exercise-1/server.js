const io = require('socket.io')(7890);

io.on('connection', socket => {
  socket.emit('hello');

  socket.on('what??', () => {
    console.log('what??')
  });
});
