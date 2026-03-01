import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

//? Converts file URL string or URL abject into a platform specific filesystem path string
// Get the path of the current file
let __filename = fileURLToPath(import.meta.url)
// Get the directory of the current file
let __dirname = dirname(__filename)

let server = express();

server.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index1.html'));
})

server.get('/submit', (req,res) => {
    let {username, usermail, userpass} = req.query
    let log = (`Username : ${username} <br> User Mail : ${usermail} <br> User Password : ${userpass}`);
    fs.writeFile('userinfo.txt', log + '\n' , {flag : 'a'}, (err)=> {
        if(err){
            console.log(err);
        }
        else{
            console.log('logged');
        }
    })

    //? Another way to write: 
    //? fs.writeFileSync('userinfo.txt', log + '\n' , {flag : 'a'})
})

server.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
})

server.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
})

// server.get('/', (req, res) => {
//     let index = fs.readFileSync('index1.html', 'utf-8');
//     res.writeHead(200, {'content-type' : 'text/html'});
//     res.write(index);
//     res.end();
// })

// server.get('/register', (req, res) => {
//     let page = fs.readFileSync('register.html', 'utf-8');
//     res.writeHead(200, {'content-type' : 'text/html'});
//     res.write(page);
//     res.end();
// })

// server.get('/login', (req, res) => {
//     let page = fs.readFileSync('login.html', 'utf-8');
//     res.writeHead(200, {'content-type' : 'text/html'});
//     res.write(page);
//     res.end();
// });

// server.listen(3000, () => {
//     console.log('server is listening');
// })

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});