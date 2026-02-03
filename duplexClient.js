import { createConnection } from 'net'

let client = createConnection( {port:2000}, ()=> {
    console.log('Connected to server')
    client.write("Hellow, Client this side!")
})

client.on('data', (data)=> {
    console.log(data.toString())
    client.end()
})

client.on('end', ()=> {
    console.log('Connection terminated')
})