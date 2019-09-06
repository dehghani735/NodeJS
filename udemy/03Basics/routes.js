const fs = require('fs');


const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end(); // for not to continue
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        // the data event listener will be fired whenever a new chunk is ready to be read
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
    
        // end event listener will be fired once it's done parsing incoming requests data or the incoming requests
        return req.on('end', () => {   // add return to not give error (end of video 034)
            // Buffer is like bus stop, now we have buffer all the body
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            // fs.writeFileSync('message.txt', message); // we should put this line here, because it should be called whenever the end event fired.
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Hello from my node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
};

// way 1
// module.exports = requestHandler;
// way 2
// module.exports = {
//     handler : requestHandler,
//     someText: 'Some hard coded text'
// };
// way 3
module.exports.handler = requestHandler;
module.exports.someText = 'Some hard coded text';
// way 4
exports.handler = requestHandler;
exports.someText = 'Some hard coded text';