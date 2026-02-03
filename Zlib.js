import {gzip, gunzip, createGzip} from 'zlib'
import fs from 'fs'

let data = 'Hello, node js'

/*gzip is a function that takes 2 parameters: 
1-> Data to compress 
2-> Callback fucntion */

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

