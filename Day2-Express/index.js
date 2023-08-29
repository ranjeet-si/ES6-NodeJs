const express = require("express");

let app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html")
}).get("/index", function(req, res){
    res.sendFile(__dirname+"/index.html")
}).get("/about", function(req, res){
    res.sendFile(__dirname+"/about.html")
}).get("/contact", function(req, res){
    res.sendFile(__dirname+"/contact.html")
}).get("**", function(req, res){
    res.sendFile(__dirname+"/404.html")
})

app.listen(5050, "localhost", function(error){
    error 
    ? console.log("Error ", error) 
    : console.log("server is now live on localhost:5050")
})