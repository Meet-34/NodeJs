import read from 'fs'
//fs is file system module
let readData = read.createReadStream('test.txt', 'utf8')

readData.on('data', (chunk)=> {
    console.log(chunk)
})

// let readData = read.createReadStream('text.txt', {encoding: 'utf8', start:1, end:3})
// readData.on('data', (chunk)=> {
//     console.log(chunk)
// })

readData.on('end', ()=> {
    console.log("File has been read!")
})