+const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({ //this line creates a connection to the database
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: "optroot"
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), 
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)"; //this line creates a query to insert data into the database
// let user = ["123", "123_newuser", "abc@gmail.com", "123456abc"]; //this line creates an array of data to be inserted into the database

let q = "INSERT INTO user (id, username, email, password) VALUES ?";  //multiple users ka data ke liye single ? use hota h
// let users = [
//   ["125", "123_newsuser", "abcd@gmal.com", "12346abc"],
//   ["124", "124_newuser", "bcf@gmail.com", "456abc"],
// ];   //multiple users ka array

//suppose we want to insert data of 100 persons...so using faker we will do that:-
let data = [];
for (let i = 1; i <= 100; i++) {
    data.push(getRandomUser());  //this line pushes the random user data into the array
}

try{
   connection.query(q, [data], (err, result) => { //this line shows the tables in the database)
        if (err) throw err; 
        console.log(result);
    });
} catch(err) {
    console.log(err);
}

connection.end(); //this line ends the connection to the database
    
//   console.log(getRandomUser());
  