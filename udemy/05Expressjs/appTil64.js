const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // it executes a function and returns an object

// this function calls next function at the end automatically (so next middlewares will execute)
app.use(bodyParser.urlencoded({extended: false})); // if this is not here, we get undefined in req.body

app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

// Note: the first argument [path] means that the beginning of the url is like /add-product, so it should come first than / url
app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'); // (we are sending a response) defualt header is text/html
});

app.post('/product', (req, res, next) => {
    console.log (req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>'); // (we are sending a response) defualt header is text/html
});

// note: Express.js doesn't send a default response or anything like that

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);