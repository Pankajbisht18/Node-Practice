const http = require('http');

const server = http.createServer((req,res)=>{
    const pathName = req.url;

    if(pathName === '/' || pathName === '/home') {
        res.end('This is Home Page');
    }
    else if(pathName === '/about') {
        res.end('This is About us page');
    }
    else if(pathName === '/contact') {
        res.end('This is Contact us page');
    }
    else {
        res.writeHead(404, {
            'Content-type' : 'text/html'
        });
        res.end('<h1>404 Page Not Found</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port ' + 8000);
})