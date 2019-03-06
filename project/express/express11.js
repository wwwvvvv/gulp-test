var child_process = require('child_process');
var fs = require('fs');

for(var i = 0; i < 3; i++) {
    var workerProcess = child_process.spawn('node', ['express10.js', i]);

    workerProcess.stdout.on('data', function (data) {
       console.log('stdout', data.toString('utf8'));
    });

    workerProcess.stderr.on('data', function (data) {
        console.log('stderr', data);
    });

    workerProcess.on('close', function (code) {
       console.log('子进程已退出，退出码' + code);
    });
}