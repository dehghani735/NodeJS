const express = require('express');

const app = express(); // it executes a function and returns an object

app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

// Note: the first argument [path] means that the beginning of the url is like /add-product, so it should come first than / url
app.use('/add-product', (req, res, next) => {
    console.log ('In another middleware!');
    res.send('<h1>The "Add Product" Page</h1>'); // (we are sending a response) defualt header is text/html
});

app.use('/', (req, res, next) => {
    console.log ('In another middleware!');
    res.send('<h1>Hello from Express!</h1>'); // (we are sending a response) defualt header is text/html
});

// note: Express.js doesn't send a default response or anything like that

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);