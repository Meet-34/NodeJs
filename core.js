import * as fs from 'fs';

//? After creating the new file and writing in it, It will return some value and for that value we use an arrow function
fs.writeFile('test.txt', 'This is a file created in class to test the Core Module', 
    (err,data) => {
        if(err){
            console.log(err);
        }
        console.log(data);
} );

fs.readFile('text.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data);
});

let data = fs.readFileSync('text.txt', 'utf8');
console.log(data);


