const express = require("express");
const mongoose = require("mongoose");
const config = require("../../Day2-Express/mongoose/config.json");
 
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
 
// Model 
let Player = mongoose.model("Player", new Schema({
    id : ObjectId,
    title : String,
    power : String
}));
let dburl = "mongodb+srv://ranjeetsyadav40:<password>sportz.<api-key>.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dburl)
.then( res => console.log("DB Connected"))


setTimeout(function(){
    Player.find().then(res => console.log("Records ", res) )
    
},2000)
 
const app = express();
 
app.listen(config.port, config.host);
 
console.log("server is now live on ",config.host, config.port);