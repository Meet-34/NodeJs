//! Events 

import { EventEmitter } from 'events'

let booking = new EventEmitter();

//! Event listener - .on()

booking.on("start", (name) => {
    console.log(`Hey ${name}! Booking has started.`);
})
booking.on("done", (name)=>{
    console.log(`Hey ${name}! Your booking is done.`);
})

//! Event trigger - .emit()

booking.emit('start', 'Lily');
booking.emit('done', 'Lily');

//! One object can have multiple triggers.

//! Arrays : 

let data = [
    'Lily', 8, '9', true, 
    ['Rose', 20, 9], 
    {Name: 'abc', cgpa: 8}, 
    {Name: ['Pranay', 'Tanay', 'Taran'], add: function add(){  
}}]
console.log(data[6].Name[1]);

//console -> object, log() -> key whose value is a function

console.log(console);