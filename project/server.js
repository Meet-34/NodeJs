// import express from 'express';
// import { fileURLToPath } from 'url';
// import path from 'path';
// import fs from 'fs';

// let ourdir = path.dirname(fileURLToPath(import.meta.url));

// let server = express();
// server.use(express.urlencoded({extended : true}));

// server.get('/', (req, res)=>{
//     res.sendFile(path.join(ourdir, 'index.html'));
// })

// server.get('/about', (req, res)=>{
//     res.sendFile(path.join(ourdir, 'about.html'));
// })

// server.get('/contact', (req, res)=>{
//     res.sendFile(path.join(ourdir, 'contact.html'));
// })

// server.get('/login', (req, res)=>{
//     res.sendFile(path.join(ourdir, 'login.html'));
// })

// server.get('/signup', (req, res)=>{
//     res.sendFile(path.join(ourdir, 'signup.html'));
// })

// server.post('/contact-submit', (req, res)=>{
//     fs.readFile('contact.txt', 'utf-8', (err, data)=>{
//         if(err) console.log(err);
//         else{
//             let parsedData = JSON.parse(data);
            
//             let userData = req.body();
//             parsedData.push(userData);
//             fs.writeFile('contact.txt', JSON.stringify(parsedData), {flag : 'a'}, (err)=>{
//                 if(err) console.log(err);
//                 else{
//                     res.sendFile(path.join(ourdir, 'contact.html'));
//                 }
//             })
//         }
//     })
// })

// server.post('/login-submit', (req, res)=>{
//     fs.readFile('login.txt', 'utf-8', (err, data)=>{
//         if(err) console.log(err);
//         else{
//             let parsedData = JSON.parse(data);
//             let userData = req.body;
//             let existinguser = parsedData.find(user => usermail === usermail)

//             if(existinguser){
//                 res.send("User already Exists!");
//             }
//             else{
//                 parsedData.push(userData);
//                 fs.writeFile('contact.txt', JSON.stringify(parsedData), {flag : 'a'}, (err)=>{
//                     if(err) console.log(err);
//                     else{
//                     res.sendFile(path.join(ourdir, 'contact.html'));
//                     }
//                 })
//             }
//         }
//     })
// })

// server.listen(3000, ()=>{
//     console.log("Server is listening on 3000");
// })

import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import mongoose from 'mongoose';

let ourdir = path.dirname(fileURLToPath(import.meta.url));

let server = express();
server.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/myDatabase")
    .then(() => {
        console.log("Database Connected");
    })
    .catch(err => {
        console.log(err);
    });


let userSchema = new mongoose.Schema({
    username: String,
    usermail: String,
    userpass: String
});

let User = mongoose.model('User', userSchema);

server.get('/', (req, res) => {
    res.sendFile(path.join(ourdir, 'index.html'));
});

server.get('/about', (req, res) => {
    res.sendFile(path.join(ourdir, 'about.html'));
});

server.get('/contact', (req, res) => {
    res.sendFile(path.join(ourdir, 'contact.html'));
});

server.get('/login', (req, res) => {
    res.sendFile(path.join(ourdir, 'login.html'));
});

server.get('/signup', (req, res) => {
    res.sendFile(path.join(ourdir, 'signup.html'));
});

server.post('/signup-submit', async (req, res) => {
    try {
        let { username, usermail, userpass, confirmpass } = req.body;

        if (userpass !== confirmpass) {
            return res.send("Passwords do not match!");
        }

        let existingUser = await User.findOne({ usermail: usermail });

        if (existingUser) {
            return res.send("User already exists!");
        }

        let newUser = new User({
            username: username,
            usermail: usermail,
            userpass: userpass
        });

        await newUser.save();

        res.send("Signup Successful!");
    } catch (err) {
        console.log(err);
        res.send("Error occurred");
    }
});

server.listen(3000, () => {
    console.log("Server is listening on 3000");
});