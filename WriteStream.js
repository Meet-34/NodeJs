import write from 'fs'

// let Create = write.createWriteStream('WrieStreamfile.txt')


let Create = write.createWriteStream('text.txt',{
    flags: 'a'
})

// Create.write("Creating a file by writng data using writing stream\n")
// Create.write("Creating a file by writng data using writing stream\n")
// Create.write("Creating a file by writng data using writing stream\n")
// Create.write("Creating a file by writng data using writing stream\n")

Create.write("New js data")
Create.end()

Create.on('finish', ()=> {
    console.log('Ending here')
})

Create.on('error', (err)=> {
    console.log(err)
})
 
