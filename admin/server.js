import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';    
import { dirname } from 'path';

let __filename = fileURLToPath(import.meta.url);
let __dirname = dirname(__filename);

let server = express();

server.use(express.urlencoded({extended:true}));

server.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})

server.get('/index', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})

server.get('/form', (req, res)=>{
    res.sendFile(path.join(__dirname, 'form.html'));
})

server.get('/user-submit', (req, res)=>{
    res.send("Form submitted using get method!");
})

server.post('/user-submit', (req, res)=>{
    res.send("Form submitted using post method!");
})

server.listen(3000, ()=>{
    console.log("The server is listening on 3000");
})
