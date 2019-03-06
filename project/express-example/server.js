const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
// const fs = require("fs");
const app = express();

var entries = []; // 创建一个数组
app.locals.entries = entries;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// 利用body-parser 中间件获取用户上传的数据，通过这个中间件，用户上传的数据都会
// 附在req.body的属性上。
app.use(bodyParser.urlencoded({extended: false}));

app.use(logger('dev'));
// app.use(logger('combined', {stream}));

app.get('/', (req, res) => {
   res.render('index');
});

app.get('/new-entry', (req, res) => {
    res.render('new-entry');
});

app.post('/new-entry', (req, res) => {
    console.log(req.body);
    var queries = req.body;
    if(!queries.tit || !queries.ctn) {
        res.status(400).send('entris have a title and body');
        return;
    }
    entries.push({
        tit: queries.tit,
        ctn: queries.ctn,
        publishDate: new Date()
    });
    res.redirect('/');
});

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(function (request, response) {
   // response.statusCode = 404;
   // response.end('404 not found.')
    response.status(404).render('404');
});

app.listen(3002);