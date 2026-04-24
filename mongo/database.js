import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/myDatabase")
    .then(()=>{
        console.log("Database Connected");
    })
    .catch(err => {
        console.log(err);
});

// new is used to create an object of the class 
let newUserSchema = new mongoose.Schema({
    Name:String,
    Email:String,
    Password:String
})

let user = mongoose.model('project', newUserSchema);

let new_user = new user({
    Name: "Parmeet",
    Email: "Parmeet@123",
    Password: "12345"
});

new_user.save();