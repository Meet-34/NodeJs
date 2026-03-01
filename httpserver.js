import { createServer } from 'http';
import fs from 'fs';

let port = 3000;
//createServer returns an object type value (req & res both are objects)
let server = createServer((req, res)=>{
    //res.end() used to end the connection
    // res.end('Hello, this is server');
    res.write('Hello, this is server\n');
    res.write('Nice to meet you!\n');
    // console.log(req.url);
    // res.end();
    let log = `${new Date().toLocaleString()}, url : ${req.url}`

    fs.writeFile('file.txt', log + '\n', {flag: 'a'}, (err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('log added');
        }
    })

    if(req.url == '/about'){
        res.write('Welcome to about');
        fs.readFile('index.html', 'utf-8', (err, data)=>{
            if(err){
                console.log(err);
            }
            else{
                res.write(data);
            }
        })
        res.end();
    }
    else if(req.url == '/'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('Welcome to home');
        res.end();
    }
    else{
        res.writeHead(404, {'content-type' : 'text/html'});
        res.write('404, error found');
    }
    res.end(); 

});

server.listen(port,()=>{
    console.log(`Server is listening on port no: ${port}`);
})

