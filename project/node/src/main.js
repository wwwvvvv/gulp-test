// var fs = require("fs");
// var data = fs.readFileSync('lib/input.txt');
// console.log(data);
// console.log('程序执行结束!');
// var EventEmitter = require('events').EventEmitter();
// function eventHandler(){
//     console.log(new Date(Date.now()), 'handler');
// }
//
// console.log(new Date(Date.now()));
// eventEmitter.on('eventName', eventHandler);
//
// setTimeout(function () {
//     console.log(new Date(Date.now()));
//     eventEmitter.emit('eventName');
// },2000);


// function connectHandler() {
//     console.log('连接成功!');
//     eventEmitter.emit('data_receive');
// }
//
// function receiveHandler() {
//     console.log('数据接收成功');
// }
//
// eventEmitter.on('data_receive', receiveHandler);
//
// eventEmitter.on('connection', connectHandler);
//
// eventEmitter.emit('connection');
//
// console.log('程序执行完毕.');

// fs.readFile('lib/input.txt',function (err, data) {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data.toString());
// });

// var EventEmitter = require('events').EventEmitter;
// var event = new EventEmitter();
//
// event.on('someEvent', function (arg1, arg2) {
//    console.log('listener1', arg1, arg2);
// });
//
// event.on('someEvent', function (arg1, arg2) {
//     console.log('listener2', arg1, arg2);
// });
//
// event.emit('someEvent','arg1', 'arg2');

// function someEventHandler(){
//     console.log('event_handler');
// }
//
// event.on('some_event',someEventHandler);
//
// event.emit('some_event');
// console.log(EventEmitter);

// var EventEmitter = require('events').EventEmitter;
// var event = new EventEmitter();
//
// var listener1 = function () {
//     console.log('监听器 listener1 执行');
// };
//
// var listener2 = function () {
//     console.log('监听器 listener2 执行');
// };
//
// event.addListener('connection', listener1);
//
// event.on('connection', listener2);
//
// var eventListeners = event.listenerCount('connection');
//
// console.log(eventListeners + '个监听器监听连接事件');
//
// event.emit('connection');
//
// event.removeListener('connection', listener1);
// console.log('listener1 不再受监听');
//
// event.emit('connection');
//
// eventListeners = event.listenerCount('connection');
// console.log(eventListeners + '个监听器监听连接事件');
//
// console.log('程序执行完毕');

// var EventEmitter = require('events').EventEmitter;
// var newEvent = new EventEmitter();
//
// const listener1 = function () {
//     console.log('监听器 listener1 执行');
// };
//
// const listener2 = function () {
//     console.log("监听器 listener2 执行");
// };
//
// newEvent.addListener('connection', listener1);
//
// newEvent.on('connection', listener2);
//
// newEvent.on('error', function () {
//     console.log('错误-------error!')
// });
//
//
// let eventListeners = newEvent.listenerCount('connection');
// console.log(eventListeners + '个监听器监听连接事件');
//
// newEvent.emit('connection');
// newEvent.emit('error');
//
// newEvent.removeListener('connection', listener2);
//
// eventListeners = newEvent.listenerCount('connection');
// console.log(eventListeners + '个监听器监听连接事件');
//
// newEvent.emit('connection');
//
// console.log('程序执行完毕');

// console.log(Buffer);

// const buf = Buffer.from('runoob', 'ascii');
// console.log(buf.toString('hex'));
// console.log(buf.toString('base64'));
// console.log(buf.toString('utf8'));

// const buf1 = Buffer.alloc(10);
// const buf2 = Buffer.alloc(10, 1);
// console.log(buf1);
// const buf3 = Buffer.allocUnsafe(10);
// const buf4 = Buffer.from([1,2,10]);
// const buf5 = Buffer.from('tést');
// const buf6 = Buffer.from('tést', 'latin1');
// console.log(buf6);
// let buf = Buffer.alloc(256);
// let len = buf.write('www.baidu.com');
// let bufStr = Buffer.toString('utf8');
// console.log(bufStr);
// let buf = Buffer.alloc(26);
// for(let i = 0; i < 26; i++) {
//     buf[i] = i + 97;
// }
// console.log(buf.toString('ascii',0,10));

// const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
// const json = JSON.stringify(buf);
// const copy = JSON.parse(json, (key, value) => {
//     console.log(value, value.type);
//     return value && value.type === 'Buffer'? Buffer.from(value.data):value;
// });
// console.log(copy);
// let buffer1 = Buffer.from('菜鸟教程 ');
// let buffer2 = Buffer.from('www.runoob.com');
// let buffer3 = Buffer.concat([buffer1, buffer2]);
// console.log(buffer3.toString());

// let buffer1 = Buffer.from('ABCd');
// let buffer2 = Buffer.from('abcd');
// let result = buffer1.compare(buffer2);
// console.log(result);

// let buf1 = Buffer.from('abcdefghijkl');
// let buf2 = Buffer.from('RUNOOB');
// buf2.copy(buf1, 2);
// console.log(buf1.toString());

// let buf = Buffer.from('runoob');
// let buf2 = buf.slice(0,2);
// console.log(buf.length);

// var fs = require('fs');
// var data = '';
// var readerStream = fs.createReadStream('./lib/input2.txt');
// readerStream.setEncoding('UTF8');
// readerStream.on('data', function (chunk) {
//     console.log('chunk:', chunk);
//     data += chunk;
// });
//
// readerStream.on('end', function () {
//     console.log('end:', data);
// });
//
// readerStream.on('error', function (err) {
//     console.log(err.stack);
// });
//
// console.log('程序执行完毕');

// var fs = require('fs');
// var writeStream = fs.createWriteStream('./lib/output.txt');
// var data = '联发科OK发顺丰快递';
// writeStream.write(data, 'UTF8');
// writeStream.end();
// writeStream.on('finish', function () {
//     console.log('写入完成');
// });
// writeStream.on('error', function (err) {
//    console.log(err.stack);
// });
//
// console.log('程序执行完毕');

// var fs = require('fs');
// var readStream = fs.createReadStream('./lib/input.txt');
// var writeStream = fs.createWriteStream('./lib/output.txt');
// readStream.pipe(writeStream);
// readStream.on('end',function () {
//     console.log('read end');
// });
// writeStream.on('finish',function () {
//     console.log('write finish');
// });
// console.log('程序执行完毕');

// var fs = require('fs');
// var zlib = require('zlib');
// fs.createReadStream('./lib/input.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('./lib/input.txt.zip'));
// console.log('文件压缩完成');

// var fs = require('fs');
// var zlib = require('zlib');
// fs.createReadStream('./lib/input.txt.gz')
//     .pipe(zlib.createUnzip())
//     .pipe(fs.createWriteStream('./lib/output.txt'));
// console.log('文件解压完成');

// var Hello = require('./hello');
// var hello = new Hello();
// hello.setName('YD! 😄');
// hello.sayHello();

// var server = require('./server');
// var router = require('./router');
//
// server.start(router.route);

// console.log('__filename ------>', __filename);
// console.log('__dirname ------>', __dirname);

// var counter = 10;
// console.log('计数：%d', counter);
// console.time('获取数据');
// var a = 10;
// var b = 10;
// var c = a + b;
// console.timeEnd('获取数据');
// console.log('程序执行完毕');

// process.on('exit', function (code) {
//    setTimeout(function () {
//        console.log('该代码不会执行');
//    }, 0);
//
//    console.log('退出码为：', code);
// });
// console.log('程序执行结束');
// process.stdout.write('Hello World! \n');
// process.argv.forEach(function (val, index, array) {
//     console.log(index + '：' + val);
// });
// console.log(process.execPath);
// console.log(process.platform);

// console.log(`当前目录：${process.cwd()}`);
// console.log(`当前版本：${process.version}`);
// console.log(`${process.memoryUsage()}`);

// var util = require('util');
// function Base() {
//     this.name = 'base';
//     this.base = 1991;
//     this.sayHello = function () {
//         console.log(`Hello ${this.name}`);
//     }
// }
// Base.prototype.showName = function () {
//   console.log(this.name);
// };
//
// function Sub() {
//     this.name = 'sub';
// }
//
// util.inherits(Sub, Base);
// var objBase = new Base();
// objBase.showName();
// objBase.sayHello();
// console.log(objBase);
//
// var objSub = new Sub();
// objSub.showName();
// // objSub.sayHello();
// console.log(objSub);

// var util = require('util');
// function Person() {
//     this.name = 'byvoid';
//     this.toString = function () {
//         return this.name;
//     };
// }
// var obj = new Person();
// console.log(util.inspect(obj, true));

// var util = require('util');
// console.log(util.isArray([]));
// console.log(util.isArray(new Array()));
// console.log(util.isArray({}));

// var util = require('util');
// console.log(util.isRegExp(/some reg/));
// console.log(util.isRegExp(new RegExp('another exp')));
// console.log(util.isRegExp({}));
// console.log(util.isDate(Date()))
// console.log(util.isDate(new Date()))
// console.log(util.isDate({}))
// console.log(util.isError(new Error()));
// console.log(util.isError(new TypeError()));

// var fs = require('fs');
//
// fs.readFile('./lib/input.txt', (err, data) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log('异步读取：' + data.toString());
// });
//
// var data = fs.readFileSync('./lib/input.txt');
// console.log('同步读取：' + data.toString());
//
// console.log('程序执行完毕.');

// var fs = require('fs');
// fs.open('./lib/input2.txt', 'wx', function (err, fd) {
//     if(err) {
//         return console.error(err);
//     }
//     console.log('文件打开成功！');
// });

// fs.stat('./lib/input.txt', function (err, stats) {
//     console.log(stats.isFile());
// });

// fs.writeFile('./lib/input.txt', '通过writeFile写入文件内容', function (err) {
//     if (err) {
//        return console.log(err);
//     }
//     console.log('数据写入成功!');
//     fs.readFile('./lib/input.txt', function (err, data) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log('异步读取文件：' + data.toString());
//     });
// });

// var buf = new Buffer.alloc(1024);
// console.log('准备打开已存在的文件');
// fs.open('./lib/input.txt', 'r+', function (err, fd) {
//     if (err) {
//         return console.log(err);
//     }
//     fs.read(fd, buf, 0 , buf.length, 0, function (err, bytes) {
//        if (err) {
//            return console.log(err);
//        }
//        console.log(bytes + '个字节被读取');
//        if(bytes > 0) {
//            console.log(buf.slice(0,bytes).toString());
//        }
//     });
// });
// var fs = require('fs');
// var buf = new Buffer.alloc(200);
// fs.open('./lib/output.txt', 'r+', function (err, fd) {
//     if (err) {
//         return console.log(err);
//     }
//     fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//         console.log(bytes + '个字节被读取');
//         if (err) {
//             return console.log(err);
//         }
//         if (bytes > 0) {
//             console.log(buf.slice(0, bytes).toString('utf8'));
//         }
//
//         fs.close(fd, function (err) {
//             if (err) {
//                 return console.log(err);
//             }
//             console.log('文件关闭成功!');
//         });
//     });
// });
// var buf = new Buffer.alloc(1024);
// fs.open('./lib/input.txt', 'r+', function (err, fd) {
//    if (err) {
//        return console.log(err);
//    }
//    console.log('文件成功打开');
//
//    fs.ftruncate(fd, 10, function (err) {
//        if (err) {
//            return console.log(err);
//        }
//       console.log('文件成功截取');
//
//        fs.read(fd, buf, 0 , buf.length, 0, function (err, bytes) {
//            if (err) {
//                return console.log(err);
//            }
//            console.log(bytes + '个字节被读取');
//            console.log(buf.slice(0,bytes).toString());
//
//            fs.close(fd, function (err) {
//               if (err) {
//                   return console.log(err);
//               }
//               console.log('文件关闭成功');
//            });
//        });
//    });
// });

// fs.unlink('./lib/input.txt.gz', function (err) {
//     if (err) {
//         return console.log(err);
//     }
//    console.log('文件删除成功');
// });

// var fs = require('fs');
// fs.mkdir('./../dist',{recursive: true}, function (err) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log('目录创建成功！');
// });

// fs.readdir('./../dist', function (err, files) {
//     if (err) {
//         return console.log(err);
//     }
//     for( let [index, value] of files.entries()) {
//         console.log(index, value);
//     }
// });

// fs.rmdir('./../dist', function (err) {
//     if (err) {
//         return console.log(err);
//     }
//    console.log('删除成功');
//     fs.readdir('/../dist', function (err, files) {
//         console.log(files);
//     });
// });

// fs.readdir('./../images', (err, files) => {
//     if (err) {
//         return console.log(err);
//     }
//     const numReg = /[0-9]+/;
//     files.forEach(function (file) {
//         let picIdx = file.match(numReg)[0];
//         fs.rename(`./../images/${file}`, `./../images/player${picIdx}.png`, function (err) {
//             if (err) {
//                 return console.log(err);
//             }
//             console.log(`${file} 重命名成功！`);
//         });
//     });
// });