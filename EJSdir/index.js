const express = require("express");
const app = express();
const path = require("path")

const port = 8080;

app.set("view engine", "ejs");
// wo package jo hamare templates ko create krne ke kaam ayga wo hoga ejs

app.set("views", path.join(__dirname, "/views"))
// views ke path ko add kr dena h is constant path (i.e. ejsdir) ke saath
// taaki ham agr bahar se bhi server ko run krrhe hai to error na aye

app.get("/", (req, res) => {
    res.render("home.ejs");  //express apne aap views directory k andar jakar check krega
});
app.get("/hello", (req, res) => {
    res.send("hello");
});

app.get("/ig/:username", (req, res) => {
    const followers = ["adam", "eve", "steve"];
    let {username} = req.params;
    res.render("instagram.ejs", {username, followers});
});

app.get("/ig2/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");   
    const data = instaData[username]; 
    console.log(data);
    res.render("instagram2.ejs", {data});
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {num: diceVal});
});

app.listen(port, () => {
    console.log(`listning on port ${port}`);
});