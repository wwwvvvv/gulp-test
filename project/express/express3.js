var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('hello world');
});

var server = app.listen(3000, 'localhost', function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log('应用实例， 访问地址 http://%s:%s', host, port);
});