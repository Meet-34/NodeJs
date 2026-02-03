import {createServer} from 'net'

let server = createServer(socket => {
    console.log('client connected');

    socket.on('data', (data) => {
        console.log(data.toString());
        socket.write('Server this side!');
    })

    socket.on('end', ()=>{
        console.log('client disconnected');
    })
})

server.listen(2000, ()=>{
    console.log('server is listening');
})