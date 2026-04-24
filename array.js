let numbers = [2, 4, 8, 10];
// numbers.forEach((y, a)=>{
//     console.log("Value of y:", y + " at index:", a);
// })

let ourNum = 20;
let found = 0;
numbers.forEach((y)=>{
    if(y == ourNum){
        found = 1;
    }
})

if(found){
    console.log(`${ourNum} Number found!`);
}
else{
    console.log(`${ourNum} Number not found!`);
}