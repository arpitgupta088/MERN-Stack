const mongoose = require('mongoose');

// let url  = "https://localhost:8080/users"

main()
  .then((res) => {     //then tab execute krta h jab promise resolve hota h
     console.log("connection successful");
  })             
  .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({   // schema = blueprint of the data
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model('User', userSchema); // "User" is the name of the collection in the database
                                                 //jo collection ka naam hoga wo hi const ke aage likha hoga
  // mongodb will automatically convert User to Users
// const user1 = new User({ 
//   name: "John Doe",
//   email: "john@yahoo.in",
//   age: 25,
// });

// user1.save()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// User.insertMany([
//   { name: "John Doe", email: "tony@gmail.com", age: 25 },
//   { name: "peter", email: "peter@gmail.com", age: 30 },
//   { name: "Steve", email: "steve@gma.com", age: 35 },
// ]).then((res) => {
//   console.log(res);
// });

//user find() = find the specific users-----------------

// User.find({ age: { $gt: 28 } })  // $gt = greater than
// .then((res) => {      // then tab execute krta h jab promise resolve hota h
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// there are other methods like findOne(), findById(id) 

// update methods:------------
User.updateOne({ name: "peter" }, {age: 26})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// User.updateMany({ age: { $gt: 28 } }, { age: 28 }) //set age value to 28 for all users whose age is greater than 28

// User.findOneAndUpdate({name: "Steve"}, {age: 40})  // ek user ko dhudega jiska name steve se match hoga aur use return ya print krega

User.deleteOne({ name: "John Doe" })
  .then((res) => {
    console.log(res);
  });

// User.deleteMany({ age: 28 }) // delete all users whose age is 28

User.findByIdAndDelete("68313b5f7f556362eb1f49b2").then((res) => {
    console.log(res);
});