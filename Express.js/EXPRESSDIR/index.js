const express = require("express");
const app = express();

console.dir(app);



let port = 8080;


app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

app.get("/",(req,res) => {
    res.send("hello ,i am root");
});

app.get("/:username/:id",(req,res) => {
    console.log(req.params);
    res.send(`welcome to the page of @${req.params.username}`);
});
app.get("/search",(req,res)=>{
    let {q} = req.query;
    res.send(`search results for query: ${q}`);
});
/*
app.get("/apple",(req,res) => {
    res.send("you contacted apple path");
});
app.get("/orange",(req,res) => {
    res.send("you contacted orange path");
});
app.post("/",(req,res) => {
    res.send("you sent a post request to root");
});

app.use((req,res)=>{
   // console.log(req);
    console.log("request recieved");
    res.send(
        //{name:"apple",
        //color:"red"},
        "<h1>Fruits</h1> <ul><li>apple</li><li>banana</li><li>orange</li></ul>");
});*/
