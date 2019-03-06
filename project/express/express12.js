const child_process = require('child_process');
const fs = require('fs');

for(var i = 0; i < 3; i++) {
    var worker_process = child_process.fork('express10.js', [i]);

    worker_process.on('close', function (code) {
        console.log('子进程已退出，退出码' + code);
    });
}