//! Get method - write data in file

import express from 'express'
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

let filename = fileURLToPath(import.meta.url);
let directoryname = dirname(filename);

let server = express();

server.get('/register', (req,res) => {
    res.sendFile(path.join(directoryname, 'register.html'));
})

server.get('/login', (req,res) => {
    res.sendFile(path.join(directoryname, 'login.html'));
})

//?  Action here and in express should match 

server.get('/lily', (req, res)=>{
    fs.readFile('studentData.txt', 'utf-8', (err, data)=>{
        if(err){
            console.log(err);
        }
        else{
            let parsedData = JSON.parse(data);
            let submitData = req.query;
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
})

server.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
})