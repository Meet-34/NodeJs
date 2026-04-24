import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import readline from 'readline';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import cookie from 'cookie-parser';
import cookieParser from 'cookie-parser';

const app = express();
const ourserver = http.createServer(app);
ourserver.use(cookieParser);
const io = new Server(ourserver);                                               //? Creating an instance of the Server function that we have imported from 'socket.io'

let __filename = fileURLToPath(import.meta.url);
let __dirname = dirname(__filename);

const r1 = readline.createInterface({
    input : process.stdin,                                                     //? Key:value pairs -> standard input and standard output
    output : process.stdout
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/setcookie', (req, res) => {
    res.cookie('username', 'name', { maxAge : 1000})
});

//?  Sending a single string from server(type in terminal)
io.on('connection', (socket) => {
    //? A single string coming from client
    socket.on('client-msg', (val) =>{
        console.log('Client sent a message: ', val);                            //? The value will show up in the terminal 
        io.emit('server-msg', "Client says: " + val);                           //? To show it to everyone
    });
});

r1.on('line', (text) => {
    io.emit('server-msg', text);                                                //? Only sending the text, not the object 
});

ourserver.listen(3000, () => {
    console.log('Server: http://localhost:3000');
});