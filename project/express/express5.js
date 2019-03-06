var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false});

app.use(express.static('public'));

app.get('/index2.html', function (req, res) {
    console.log('__dirname', __dirname);
    res.sendFile(__dirname + '/index2.html');
});

app.post('/process_post', urlencodedParser, function (req, res) {
    var response = {
        firstName: req.body["first_name"],
        lastName: req.body["last_name"]
    };
    console.log('__dirname', __dirname);
    res.end(JSON.stringify(response));
});

var server = app.listen(3000, 'localhost', function (req, res) {
   var host = server.address().address;
   var port = server.address().port;

   console.log('应用实例，访问地址为：http://%s:%s', host, port);
});

