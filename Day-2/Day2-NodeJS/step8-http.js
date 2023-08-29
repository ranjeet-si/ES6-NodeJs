const http = require("node:http");
let server = http.createServer(function(req,res){
    res.write("welcome to your life");
    res.end();
});

server.listen(1010, "localhost", function(e){
    e?console.log("Error",e):console.log("server is now live on localhost:1010")
})