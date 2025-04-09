const express = require("express");
// express ko reuire krne k bad ye hame ek value return krega 
//jis value ko ham ek variableme store kraate hain eg. app
const app = express();

// console.dir(app);

let port = 8080; // ports are logical endpoints of a network connection
//used to exchange info. b/w a webserver and webclient
//i.e. connect krne ke points
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})

// use() sab tareeke ki req ko listen krega aur us hisab se isme me ek callback hai
//jo execute hota h jab server pe koi req ati h
// app.use((req, res)=>{
//     console.log("request received");
//     // res.send("thisis a basic response");
//     res.send({
//         name:'arpit',
//         rollno:"220029"
//     })
// });

// get() bas unhi se response lega jitne routes hamare defined hain
app.get("/", (req, res) => {
    res.send("you contacted root path")
});
app.get("/home", (req, res) => {
    res.send("you contacted home path")
});
// app.get("*", (req, res) => {
//     res.send("This path does not exist");
// });
 //* means wildcard... mtlb kuch bhi ho skta h path

app.post("/", (req, res) => {
    res.send("you sent a post req to root")
});

// app.get("/:username/:id", (req, res) => {
//     console.log(req.params);
//     res.send("hello, i am root")
// })
app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    let htmlStr = `<h1>welcome to @${username}!</h1>`
    res.send(htmlStr)
})
