const express = require('express');
const app = express();

let logger = function (req, res, next) {
  console.log(req.url);
  next();
};

let hello = function (req, res, next) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('hello world');
};

function admin(req, res) {
    console.log('req.url', req.url);
    switch (req.url) {
        case '/':
            res.end('try user');
            break;
        case '/user':
            res.end('user router');
            break;
    }
}

app.use(logger);
app.use('/admin', admin);
app.use(hello);
app.listen(3002);

