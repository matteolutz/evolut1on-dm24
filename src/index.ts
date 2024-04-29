import express from 'express';
import http from 'http';
import path from 'path';
import * as process from 'process';
import { SerialPort } from 'serialport';
import socket from 'socket.io';

const serial = new SerialPort({
  path: process.argv[2],
  baudRate: 115200
});

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

serial.on('open', () => {
  log('Serial connection opened.');
  serial.on('data', (data) => {
    io.emit('show-page', (data as Uint8Array).join());
  });
});

app.use('/', express.static(path.join(__dirname, '..', '..', 'public')));

io.on('connection', () => log('Socket connection'));

server.listen(PORT, () => {
  log(`Listening on http://localhost:${PORT}.`);
});
