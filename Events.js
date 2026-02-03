// let eventEmitter = require("events");
import {EventEmitter} from "events";

let booking = new EventEmitter;

booking.on("done", (name)=> {
    console.log("Booking Done", name);
})

// booking.on("done", ()=> {
//     console.log("Booking Done");
// })

booking.on("start", (name)=> {
    console.log("Booking Start", name);
})

booking.emit("start", "abc");
booking.emit("done", "def");


