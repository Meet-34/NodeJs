import { createGunzip } from 'zlib'
import fs from 'fs'

let read = fs.createReadStream('text.txt')
let write = fs.createWriteStream('text.txt')

let gzp = createGunzip() 

read.pipe(gzp).pipe(write)

write.on('finish', ()=>{
    console.log("Compressed");
})
