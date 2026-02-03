// import * as fs from 'fs'

// fs.writeFile('unit1.txt', 'This is the unit 1 file', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// })

// fs.readFile('unit1.txt', 'utf8', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// })

// let data = fs.readFileSync('unit1.txt', 'utf8');
// console.log(data);


// import write from 'fs'

// let create = write.createWriteStream('unit1_p2.txt')

// create.write('This is unit 1 part 2 file')

// create.on('finish', ()=>{
//     console.log("Ending here")
// })

// create.on('error', (err)=>{
//     console.log(err)
// })

// import read from 'fs'

// let readData = read.createReadStream('unit1_p2.txt', 'utf8')

// readData.on('data', (chunk) => {
//     console.log(chunk);
// })

// readData.on('end', ()=>{
//     console.log('Data has been read');
// })


