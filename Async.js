import fs from 'fs'

fs.writeFile('async.txt', 'This is async example file', (err, data) => {
    if(err){
        console.log(err)
    }
    console.log(data)
})

console.log('Hellow World!')
