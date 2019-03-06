let express = require('express');
let logger = require('morgan');
let path = require('path');

const app = express();

//配置模板引擎
app.set("view engine", 'ejs'); // 设置 view engine , 使用ejs模板引擎
app.set('views', path.resolve(__dirname, 'views')); // 设置views ---> 模板引擎所在的位置



app.get('/', function (req, res) {
   res.render('index', {
       message: 'this is a ejs view.'
   });
});

app.get('/about', function (req, res) {
   res.end('about');
});

app.get('/weather', function (req, res) {
   res.end('the current weather is nice.');
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('short'));

app.use(function (req, res) {
   // res.writeHead(200, {'content-type': 'text/palin'});
   // res.end('hello world!');
    res.statusCode = 404;
    res.end("404!");
});

app.listen(3002);





// let path = require('path');
// let http = require('http');
// node
// let app = function (req, res) {
//     res.writeHead(200, {'content-type': 'text/plain'});
//     res.end('Hello World! hah~');
// };
// http.createServer(app).listen(3002);

// express

// let app = express();
// app.use(function (req, res) {
//    res.writeHead(200, {'content-type': 'text/html'});
//    res.end('<h1>HELLO WORLD</h1>');
// });
//
// http.createServer(app).listen(3002);

// const app = express();
//
// app.use(logger('short'));

// app.use(function (req, res, next) {
//     console.log(`In comes a ${req.method} to ${req.url}`);
//     next();
// });

// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use(function (req, res) {
//     res.writeHead(200, {'content-type': 'text/plain'});
//     res.end('Hello world!!!!!');
// });
//
// app.listen(3002);