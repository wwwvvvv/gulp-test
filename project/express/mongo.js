var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/runoob";

MongoClient.connect(url, function (err, db) {
   console.log(url);
   if (err) {
       return console.error(err);
   }
   console.log("数据库已创建");
   db.close();
});