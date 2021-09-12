//import http module
const http = require('http');

//create a server
const server = http.createServer((req,res) => {
    res.end('Hello from the server');
});

//listening the port
const port = 8000;
const ip = '127.0.0.1';

server.listen(port, ip, () => {
    console.log('Listening to requests on port ' + port);
});