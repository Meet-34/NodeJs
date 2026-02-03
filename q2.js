//Write a node.js script that creates a writable stream to write "Hello World!" in sample.txt then 
//read context from same file and print it to console.

import fs from 'fs'

let create = fs.createWriteStream('Q2.txt')

create.write('Hello World!')

create.end()

create.on('finish', () => {
    let read = fs.createReadStream('Q2.txt', 'utf8')
    read.on('data', (data) => {
        console.log(data)
    })
})