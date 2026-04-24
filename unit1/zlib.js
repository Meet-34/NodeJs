//! Compressing Data - using Streams(Best for large data)

// import { createGzip } from 'zlib'
// import fs from 'fs'

// let read = fs.createReadStream('text.txt')
// let write = fs.createWriteStream('text.txt.gz')

// let gzp = createGzip() 

// read.pipe(gzp).pipe(write)

// write.on('finish', ()=>{
//     console.log("Compressed");
// })

//! Decompressing Data - using Streams(Best for large data)

// import { createGunzip } from 'zlib'
// import fs from 'fs'

// let read = fs.createReadStream('text.txt.gz')
// let write = fs.createWriteStream('text2.txt')

// let gzp = createGunzip() 

// read.pipe(gzp).pipe(write)

// write.on('finish', ()=>{
//     console.log("Decompressed");
// })

//! Compressing and Decompressing Data - This compresses data in memory, not in files(Best for small data)

import {gzip, gunzip} from 'zlib'

let data = 'Hello, node js'

/*gzip is a function that takes 2 parameters: 
1-> Data to compress 
2-> Callback function */

//To compress the data, gzip - gives compressed buffer
gzip(data, (err, data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString('base64'));
    }

    // To decompress the compressed data - excepts compressed buffer
    gunzip(data, (err, data)=>{ 
        if(err){
            console.log(err);
        }
        else{
            console.log('Decompressed data: ' + data.toString());
        }
    })
})

