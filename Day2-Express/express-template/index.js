const express = require("express");
const config = require("./config.json");
 
let app = express();
app.use(express.urlencoded({ extended : true }));
 
let heroes = [];
 
app.get("/", (req, res) => {
 
    res.render("home.pug",{ company : "Sports Interactive Mumbai", heroes });
});
app.post("/", (req, res) => {
    heroes.push(req.body.nhero);
    res.redirect("/");
});
 
app.listen(config.port, config.host, error => {
    error 
    ? console.log("Error ", error)
    : console.log("Webserver is now live on "+config.host+":"+config.port)
})