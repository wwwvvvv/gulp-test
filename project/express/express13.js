const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const hash = crypto.createHash('md5');
const express = require('express');
const app = express();

// var server = http.createServer(function (request, response) {
//     console.log(request.method);
//     console.log(request.url);
//
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.end('<h1>Hello world!</h1>')
// }).listen(3000);

// console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

// var workDir = path.resolve('.');
// var filePath = path.join(workDir, 'public', 'index.html');
// console.log(filePath);

// var root = path.resolve(process.argv[2] || '.');
// // console.log(root);
//
// var server = http.createServer(function (request, response) {
//    var pathname = url.parse(request.url).pathname;
//     pathname = pathname === '/' ? '/public/index.html': pathname;
//     var filepath = path.join(root, pathname);
//     console.log(filepath);
//     fs.stat(filepath, function (err, stats) {
//         if (!err && stats.isFile()) {
//             response.writeHead(200);
//             fs.createReadStream(filepath).pipe(response);
//         } else {
//             response.writeHead(404);
//             response.end('404 Not Found.');
//         }
//     })
// }).listen(3000);

// hash.update('hello, world!');
// hash.update(`hello, nodejs!`);
//
// console.log(hash.digest('hex'));