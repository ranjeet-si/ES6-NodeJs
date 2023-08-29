const http = require("node:http");
const fs = require("node:fs");

let loadpage = function(url, res){
    fs.readFile(url+".html","utf-8", function(err, data){
        res.write(data);
        res.end();
    })
}
let server = http.createServer(function(req, res){
    if(req.url == "/"){
        loadpage("index",res)
    }else if(req.url == "/index"){
        loadpage("index",res)
    }else if(req.url == "/about"){
        loadpage("about",res)
    }else if(req.url == "/contact"){
        loadpage("contact",res)
    }else{
        loadpage("404",res)
    }
});
server.listen(2020, "localhost", function(error){
    error 
    ? console.log("Error ", error) 
    : console.log("server is now live on localhost:2020")
})