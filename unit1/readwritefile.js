//! Asynchronous -> writeFile and readFile
//? Non-Blocking, uses callbacks/promises

// import fs from 'fs';

// fs.writeFile('readwrite.txt', `${Date.now()}\n`, {flag : 'a'}, (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
    
//     fs.readFile('readwrite.txt', 'utf-8', (err, data)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(data);
//         }
//     })
// })

//! Synchronous -> writeFileSync and readFileSync
//? Blocking, uses Sync methods

import fs from 'fs';

fs.writeFileSync('readwrite.txt', 'Hi, i am writeFileSync\n' , {flag : 'a'});

let data = fs.readFileSync('readwrite.txt', 'utf-8');
console.log(data);

fs.appendFileSync('readwrite.txt', 'Hey, there\n');
let data2 = fs.readFileSync('readwrite.txt', 'utf-8');
console.log(data2);