const http = require('http');
const fs= require('fs');

const index=fs.readFileSync('index.html','utf-8');

const data={age:20};

const server = http.createServer((req,res)=>{
    console.log('Server Started')

    res.setHeader('Dummy','DummyValue')
    // res.setHeader('Content-Type','text/html');

    res.end(index);
    
    
})

server.listen(8080)