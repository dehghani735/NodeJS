const express = require('express');

// function rqListener (req, res) {

// }

// old approach
// http.createServer(function(req, res){

// });

// new approach

const app = express(); // it executes a function and returns an object

// use accepts an array of request handlers
// the function pass to this function will be executed for every incoming request
app.use((req, res, next) => {
    console.log ('In the middleware!');
    next(); // we have to call next to allow request to travel on to the next middleware
    // if we don't call next, we should actually send back a response because otherwise the request can't continue its journey,
    // so it will never reach a place where we might send the response 
});
// in this middleware we wouldn't call next, there also wouldn't be a next middleware
app.use((req, res, next) => {
    console.log ('In another middleware!');
    res.send('<h1>Hello from Express!</h1>'); // (we are sending a response) defualt header is text/html
});

// note: Express.js doesn't send a default response or anything like that

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);