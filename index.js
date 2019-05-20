// import http core module
const http = require('http');

// initialize variables for hostname and port
const port = 3000;
const hostname = 'localhost';

// create http server
const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => console.log(`Server is running on http://${hostname}:${port}`));