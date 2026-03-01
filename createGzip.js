// import { createGzip } from 'zlib'
// import fs from 'fs'

// let read = fs.createReadStream('text.txt')
// let write = fs.createWriteStream('text.txt.gz')

// let gzp = createGzip() 

// read.pipe(gzp).pipe(write)

// write.on('finish', ()=>{
//     console.log("Compressed");
// })

import { createGunzip } from 'zlib'
import fs from 'fs'

let read = fs.createReadStream('text.txt.gz')
let write = fs.createWriteStream('text2.txt')

let gzp = createGunzip() 

read.pipe(gzp).pipe(write)

write.on('finish', ()=>{
    console.log("Compressed");
})
