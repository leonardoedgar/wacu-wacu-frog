const express = require('express');
const backEndStore = require('./store');
const {addCounter} = require('./actions');

const http = require('http');
const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.json());

io.on('connection', (client) => {
  io.emit('updateState', backEndStore.getState());
  client.on('addCounter', () => {
    backEndStore.dispatch(addCounter());
    console.log(backEndStore.getState());
    io.emit('updateState', backEndStore.getState());
  });
});

server.listen(port);
