import { createServer } from 'http';
import fs from 'fs';

let port = 3000;
//createServer returns an object type value (req & res both are objects)
let server = createServer((req, res)=>{
    //res.end() used to end the connection
    // console.log(req.url);
    let log = `${new Date().toLocaleString()}, url : ${req.url}\n`

    fs.writeFile('file.txt', log + '\n', {flag: 'a'}, (err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('log added');
        }
    })

    if(req.url === '/about'){
        res.writeHead(200, { 'content-type': 'text/html' });
        fs.readFile('index.html', 'utf-8', (err, data)=>{
            if(err){
                console.log(err);
            }
            else{
                res.write(data);
            }
            res.end();
        });
 
    }
    else if(req.url == '/'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('Welcome to home');
        res.end();
    }
    else{
        res.writeHead(404, {'content-type' : 'text/html'});
        res.write('404, error found');
        res.end(); 
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port no: ${port}`);
});

// import { createServer } from 'http';
// import fs from 'fs';

// let port = 3000;
// let server = createServer((req, res)=>{
//     let log = `Request received on: ${new Date().toLocaleString()}, url: ${req.url}`

//     if(req.url === '/about'){
//         res.write('Welcome to about page');
//         res.end();
//     }
//     else if(req.url === '/contact'){
//         res.write('Welcome to contact page');
//         res.end();
//     }
//     else if(req.url === '/'){
//         fs.appendFile('log.txt', log + '\n', (err)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(`${log}`);
//             }
//         })
//         res.write('Welcome to home page');
//         res.end();
//     }
// })

// server.listen(port,()=>{
//     console.log(`Server is listening on port: ${port}`)
// })