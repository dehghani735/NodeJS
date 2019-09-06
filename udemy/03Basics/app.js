const http = require('http');

const routes = require('./routes');

// function rqListener (req, res) {

// }

// old approach
// http.createServer(function(req, res){

// });

// new approach

console.log(routes.someText);

const server = http.createServer(routes.handler);

const server2 = http.createServer((req, res) => {
    console.log(req);
    process.exit();
});

server.listen(3000);

server2.listen(4000);

