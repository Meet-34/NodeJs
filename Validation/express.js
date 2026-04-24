import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';   
import fs from 'fs';
import { body, validationResult } from 'express-validator'; 

let fileName = fileURLToPath(import.meta.url);
let dirName = path.dirname(fileName);

let server = express();
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get('/', (req, res)=>{
    res.sendFile(path.join(dirName, 'index.html'));                           //? To share html file over the port 
})

server.get('/about', (req, res)=>{
    res.sendFile(path.join(dirName, 'about.html'));
})

server.get('/contact', (req, res)=>{
    res.sendFile(path.join(dirName, 'contact.html'));
})

server.post('/lily', [
    body('username').notEmpty().isAlpha().withMessage("Please give correct input!"),
    body('usermail').notEmpty().isEmail().withMessage("Please enter valid email"),
], (req, res)=>{
    let errors = validationResult(req);
    if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
    }

    fs.readFile("studentData.txt", 'utf-8', (err, data)=>{
        if(err){
            console.log(err);
        }
        else{
            let stuData = JSON.parse(data);
            let moreData = req.body;
            stuData.push(moreData);
            fs.writeFile("studentData.txt", JSON.stringify(stuData), ()=>{
                res.send("Form submitted successfully");
            })
        }
    })


})

server.listen(3000, ()=>{
    console.log("Server is listening on port no. 3000");
})
