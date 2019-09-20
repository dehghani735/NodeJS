const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // it executes a function and returns an object

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// this function calls next function at the end automatically (so next middlewares will execute)
app.use(bodyParser.urlencoded({ extended: false })); // if this is not here, we get undefined in req.body
app.use(express.static(path.join(__dirname, 'public'))); // has read access to this folder
//note: epxress will automatically route the requests that are looking for a file to this path, so we should omit the 'public' in link tag

// the order is important
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).send('<h1>Page not found</h1>');
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// note: Express.js doesn't send a default response or anything like that

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);