import express from 'express';
import http from 'http';
import path from 'path';
import socket from 'socket.io';

const log = (...args: Array<unknown>) =>
  // eslint-disable-next-line no-console
  console.log(`[evolut1on] ${args.join(', ')}`);

const app = express();
const server = http.createServer(app);
const io = new socket.Server(server);
const PORT = 3000;

// Serial connection to Arduino
/*
serial.on("message", (pageId) => {
  io.emit('show-page', pageId)
});
*/

app.use('/static', express.static(path.join(__dirname, '..', '..', 'public')));
app.get('/', (_req, res) => res.redirect('/static'));

io.on('connection', () => log('Socket connection'));

server.listen(PORT, () => {
  log(`Listening on http://localhost:${PORT}.`);
});
