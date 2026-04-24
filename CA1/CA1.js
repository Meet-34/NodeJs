import express from "express";
import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

let __filename = fileURLToPath(import.meta.url);
let __dirname = dirname(__filename);

let server = express();

server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

server.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

server.post("/submit", (req, res) => {
  fs.readFile("dataStorage.txt", "utf-8", (err, data) => {
    if(err) {
      console.log(err);
    } 
    else {
        let parsedData = JSON.parse(data);
        let submitData = req.body;
        parsedData.push(submitData);

        fs.writeFile("dataStorage.txt",JSON.stringify(parsedData), {flag: 'a'}, (err, data) => {
            if (err){
                console.log(err);
            } 
            else {
                // res.send("Form submitted successfully!");
                res.sendFile(path.join(__dirname, 'form.html'));
            }
        });
    }
  });
});

server.listen(3000, () => {
  console.log("Server is listening on port no: 3000");
});
