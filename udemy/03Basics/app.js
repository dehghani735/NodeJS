const http = require('http');


// function rqListener (req, res) {

// }

// old approach
// http.createServer(function(req, res){

// });

// new approach
const server = http.createServer((req, res) => {
    console.log (req.url, req.method, req.headers);
    // process.exit();
    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end(); // for not to continue
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Hello from my node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

const server2 = http.createServer((req, res) => {
    console.log (req);
    process.exit();
});

server.listen(3000);

server2.listen(4000);
