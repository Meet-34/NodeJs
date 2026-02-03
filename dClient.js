import {createConnection} from 'net'

let client = createConnection({port : 2000}, ()=>{
    console.log('Connected to server');
    client.write('hello, Client this side');
})

client.on('data', (data) => {
    console.log(data.toString());
    client.end();
})

client.on('end', ()=>{
    console.log('connection terminated');
})

