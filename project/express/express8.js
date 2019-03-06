var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('public'));

app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname + '/public/users.json', 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
};

app.get('/addUser', function (req, res) {
    var jsonFile = __dirname + '/public/users.json';
    fs.readFile(jsonFile, 'utf8', function (err, data) {
        let file_data = JSON.parse(data);
        file_data["user4"] = user.user4;
        console.log(file_data);
        fs.writeFile(jsonFile, JSON.stringify(file_data), function (err) {
            res.end(JSON.stringify(file_data));
        });
    });
});

app.get('/deleteUser/:user', function (req, res) {
    var jsonFile = __dirname + '/public/users.json';
    fs.readFile(jsonFile, 'utf8', function (err, data) {
        data = JSON.parse(data);
        let deleteUser = req.params.user;
        delete data[deleteUser];
        fs.writeFile(jsonFile, JSON.stringify(data), function (err) {
            console.log(data);
            res.end(JSON.stringify(data));
        });
    });
});

app.get('/:user', function (req, res) {
    var jsonFile = __dirname + '/public/users.json';
    fs.readFile(jsonFile, 'utf8', function (err, data) {
        data = JSON.parse(data);
        let findUserInfo = data [req.params.user];
        res.end(JSON.stringify(user));
    });
});

var server = app.listen(3000, 'localhost', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});