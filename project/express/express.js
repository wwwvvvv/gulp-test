var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World!');
});

var server = app.listen(3003,'localhost' , function () {
   var host = server.address().address;
   var port = server.address().port;
    console.log('host', host);
    console.log('port', port);
    console.log("应用实例， 访问地址为 http://%s:%s", host, port);
});

