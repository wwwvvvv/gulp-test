// var fs = require('fs');
// var util = require('util');
// var url = require('url');
// var http = require('http');

// http.createServer(function (req, res) {
//     // console.log('req', req);
//     res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
//     // res.end(util.inspect(url.parse(req.url, true)));
//     // console.log(req.url);
//     // let r = util.inspect(url.parse(req.url, true));
//     // console.log(r);
// }).listen(4000);

// http.createServer(function (req, res) {
//     res.writeHead(200 , {'Content-type': 'text/plain'});
//
//     let params = url.parse(req.url, true).query;
//     res.write(`name is: ${params.name}`);
//     res.write('\n');
//     res.write(`type is: ${params.type}`);
//     res.end();
//     console.log(params);
// }).listen(4000);
// var http = require('http');
// var querystring = require('querystring');
// var fs = require('fs');
// var postHTML = fs.readFileSync('index.html').toString('utf8');

// var postHTML =
//     '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
//     '<body>' +
//     '<form method="post">' +
//     '网站名： <input name="name"><br>' +
//     '网站 URL： <input name="url"><br>' +
//     '<input type="submit">' +
//     '</form>' +
//     '</body></html>';

// http.createServer(function (req, res) {
//     var body = "";
//     req.on('data', function (chunk) {
//         body += chunk;
//     });
//
//     req.on('end', function () {
//         // post = querystring.parse(post);
//         // res.end(util.inspect(post));
//         body = querystring.parse(body);
//         // console.log(body);
//         res.writeHead(200, {'Content-type': 'text/html; charset=utf8'});
//         if (body.name && body.url) {
//             res.write("网站名：" + body.name);
//             res.write("<br>");
//             res.write("网站 URL：" + body.url);
//         } else {
//             res.write(postHTML);
//         }
//         res.end();
//     });
//     // console.log(req);
// }).listen(3000);

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log(`Request for ${pathname} received.`);
    console.log(pathname);
    fs.readFile(pathname.substr(1), function (err, data) {
        console.log(data);
        if (err) {
            console.log(err);
            response.writeHead(404, {'Content-type': 'text/html'});
        } else {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(data.toString());
        }
        response.end();
    });
}).listen(8080);