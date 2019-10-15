const io = require('socket.io')(7890);

io.on('connection', socket => {
  socket.on('log', data => {
    console.log(data);
  });
});
