import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';   
import fs from 'fs'; 

let fileName = fileURLToPath(import.meta.url);
let dirName = path.dirname(fileName);

let server = express();

server.get('/', (req, res)=>{
    res.sendFile(path.join(dirName, 'index.html'));                           //? To share html file over the port 
})

server.get('/about', (req, res)=>{
    res.sendFile(path.join(dirName, 'about.html'));
})

server.get('/contact', (req, res)=>{
    res.sendFile(path.join(dirName, 'contact.html'));
})

server.get('/submit', (req, res)=>{
//?    let {username, usermail, userpass} = req.query;
//?    let log = (`Name: ${username}, <br> Email: ${usermail}, <br> Password: ${userpass}`)
    // res.send(log);                                                          //? To write data onto the browser 
    // console.log(log)                                                        //? To write data onto the console 

    fs.readFile("studentData.txt", 'utf-8', (err, data)=>{
        if(err){
            console.log(err);
        }
        else{
            let stuData = JSON.parse(data);
            let moreData = req.query;
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


//? HOMEWORK -> VALIDATION FOR INPUT FIELDS from express-validator 