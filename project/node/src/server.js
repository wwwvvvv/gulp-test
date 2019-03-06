var http = require('http');
var url = require('url');
// var route = require('./router');

function start(route) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        route(pathname);

        response.writeHead(200, {"Content-type": "text/plain"});
        response.write("Hello world");
        response.end();
    }

    http.createServer(onRequest).listen(5555);
    console.log('Server has started.');
}

// start();
exports.start = start;