// express -> is framework for Node.js
import express from 'express';

let server = express();
let port = 3000;

//Route 1
server.get('/', (req, res) => {
    res.send('Welcome to home');
});

//Route 2
server.get('/about', (req, res) => {
    res.send('About us');
});

//Route 3
server.get('/contact', (req, res) => {
    res.send('Contact us');
});

server.listen(port, () => {
    console.log(`Server running on: ${port}`);
});