const mongoose = require('mongoose');

main()
  .then((res) => {     //then tab execute krta h jab promise resolve hota h
     console.log("connection successful");
  })             
  .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');  // isme ham individual books ka data store karayege
}

const bookSchema = new mongoose.Schema({   
    title: {
        type: String,
        required: true,    //i.e. ye field required h
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
});
const Book = mongoose.model('Book', bookSchema); // "Book" is the name of the collection in the database

let book1 = new Book({
    title: "The Alchemist",
    author: "rd sharma",
    price: 500
});
book1
  .save().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});