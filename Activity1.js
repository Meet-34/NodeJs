import { createServer } from 'http';
import fs from 'fs';

let port = 3000;
let server = createServer((req, res)=>{
    let log = `Request received on: ${new Date().toLocaleString()}, url: ${req.url}`

    if(req.url === '/about'){
        res.write('Welcome to about page');
        res.end();
    }
    else if(req.url === '/contact'){
        res.write('Welcome to contact page');
        res.end();
    }
    else if(req.url === '/'){
        fs.appendFile('log.txt', log + '\n', (err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(`${log}`);
            }
        })
        res.write('Welcome to home page');
        res.end();
    }
})

server.listen(port,()=>{
    console.log(`Server is listening on port: ${port}`)
})