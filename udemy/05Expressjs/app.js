const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // it executes a function and returns an object

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// this function calls next function at the end automatically (so next middlewares will execute)
app.use(bodyParser.urlencoded({extended: false})); // if this is not here, we get undefined in req.body

// the order is important
app.use(adminRoutes); 
app.use(shopRoutes);

// note: Express.js doesn't send a default response or anything like that

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);