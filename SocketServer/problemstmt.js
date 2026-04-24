/* Design and implement a Real-Time communication system using node.js, express and socket.io. 
The goal is to establish a bi-directional connection where: 
1-> The client can send a message from a web-based form to the server. 
2-> The server can receive that message and broadcast it to all connected clients in real-time.
3-> The server admin can also send messages directly from the terminal(Command Line) to all connected clients using the readline module. */

// import express from 'express';
// import http from 'http';
// import { dirname } from 'path';
// import readline from 'readline';
// import { Server } from 'socket.io';
// import { fileURLToPath } from 'url';

// const app = express();
// const ourserver = http.createServer(app);
// const io = new Server(ourserver);

// let __filename = fileURLToPath(import.meta.url);
// let __dirname = dirname(__filename);

// const r1 = readline.createInterface({
//     input : process.stdin, 
//     output : process.stdout
// });

// app.get('/', (req, res)=> {
//     res.sendFile(__dirname + '/problemstmt.html');
// })

// io.on('connection', (socket) => {
//     socket.on('client-msg', (value)=> {
//         console.log('client says : ', value);
//         io.emit('server-msg', value);
//     })
// })
// r1.on('line', (text)=>{
//     io.emit('server-msg', text);
// })
// ourserver.listen(3000, ()=> {
//     console.log("Server is listening on port 3000");
// })

/* Problem statement 2: 
Implement two specific POST routes with the following logic: 
1. Route: /user-form(User Registration)
Objective: Accept userID, password, and email from the form.
Storage: Save data in users.txt.
Logic: Read users.txt first.
Termination: If the incoming email already exists in the user list, terminate and send: " User email already registered."

2. Route: /student-form(Student Enrollment)
Objective: Accept studentName, rollNo, and studentEmail.
Storage: Save data in studentdata.txt.
Logic: Read studentdata.txt first.
Termination: If the studentEmail or rollNo already exists in the database, terminate the operation and send: "Student record already exists, data not saved"
Success: If unique, append the entry and update the file. Send "Student form submitted successfully." */

import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import express from 'express';

let __filename = fileURLToPath(import.meta.url);
let __dirname = dirname(__filename);

let server = express();
server.use(express.urlencoded({ extended: true }));

server.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'problemstmt.html'));
})

server.post('/lily', (req, res)=> {
    fs.readFile('userdata.txt', 'utf-8', (err, data)=> {
        if(err){
            console.log(err);
        }
        else{
            let parsedData = JSON.parse(data);
            let submitData = req.body;
            let existingUser = parsedData.find(user => user.usermail === submitData.usermail);

           
            if(existingUser){
                res.send('User already exists');
                return;
            }

            parsedData.push(submitData);
            
            fs.writeFile('userdata.txt', JSON.stringify(parsedData), err=>{
                if(err) console.log(err);
                else{
                    res.send("Successfully registered!");
                }
            })
        }
    })
})

server.listen(3000, ()=> {
    console.log('Server is listening on port : 3000');
});