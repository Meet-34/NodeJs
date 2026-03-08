//! Read & Write Stream

/* read and write streams show Asynchronous behaviour */

// import fs from 'fs';

// let writeStream = fs.createWriteStream('readwrite.txt');

// writeStream.write("Hello, text written using write stream.");

// writeStream.end();

// writeStream.on('finish', ()=>{
//     console.log("Finished writing");
//     let readStream = fs.createReadStream('readwrite.txt', 'utf-8');
//     readStream.on('data', (data)=>{
//         console.log(data);
//     })

//     readStream.on('end', ()=>{
//         console.log("Data has been read");
//     })
// })

//! Read & Write Stream -> append flag

import fs from "fs";

//? By default the flag is 'w' i.e write
let wrt = fs.createWriteStream("readwrite.txt", { flag: "a" });

wrt.write("New data appended into the Read&Write.txt file.");
wrt.end();

wrt.on("finish", () => {
  console.log("Finished writing data into the file");
  // let rd = fs.createReadStream("readwrite.txt", "utf-8");
  let rd = fs.createReadStream("readwrite.txt", {encoding: "utf-8", start : 1, end : 6});

  rd.on("data", (data) => {
    console.log(data);
  });

  rd.on("end", () => {
    console.log("End of the file reached");
  });
});
