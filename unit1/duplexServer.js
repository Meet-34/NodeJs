import { createServer } from 'net'

let server = createServer( (socket)=> {
    console.log('Client connected')

    socket.on('data', (data)=> {
        console.log(data.toString())
        socket.write('Hellow, Server this side!')
    })

    socket.on('end', ()=> {
        console.log('Client disconnected')
    })
})

server.listen(2000, ()=> {
    console.log('Server is listening')
})

