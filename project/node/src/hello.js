// var http = require("http");
// http.createServer(function (request, response) {
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//    response.end('Hello world\n');
// }).listen(8888);
// console.log('Server runnig at http://127.0.0.1:8888');

function Hello() {
    var name;
    this.setName = function (sName) {
        name = sName;
    };
    this.sayHello = function () {
        console.log('Hello ' + name);
    };
}

module.exports = Hello;