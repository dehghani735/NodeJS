const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    // res.sendFile('./views/shop.html');
    // res.send('<h1>Hello from Express!</h1>');
    // next();
}); 

module.exports = router;