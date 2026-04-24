//! Post method
import express from 'express'
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

let filename = fileURLToPath(import.meta.url);
let directoryname = dirname(filename);

let server = express();

server.use(express.urlencoded({extended : false}));

server.get('/register', (req,res) => {
    res.sendFile(path.join(directoryname, 'register.html'));
})

server.get('/login', (req,res) => {
    res.sendFile(path.join(directoryname, 'login.html'));
})

//?  Action here and in express should match 

server.post('/lily', (req, res)=>{                                        //? Change server.get -> server.post
    fs.readFile('studentData.txt', 'utf-8', (err, data)=>{
        if(err){
            console.log(err);
        }
        else{
            let parsedData = JSON.parse(data);
            let submitData = req.body;                                   //? Change req.query -> req.body
            parsedData.push(submitData);
            fs.writeFile('studentData.txt', JSON.stringify(parsedData), (err, data)=>{
                if(err){
                    console.log(err);
                }
                else{
                    res.send("Data Stored");
                }
            })
        }
    })
    res.sendFile(path.join(directoryname, "register.html"));
})

server.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
})