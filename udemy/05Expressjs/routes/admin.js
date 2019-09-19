const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// Note: the first argument [path] means that the beginning of the url is like /add-product, so it should come first than / url
router.get('/add-product', (req, res, next) => {
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'); // (we are sending a response) defualt header is text/html
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router; // the router object is exporting