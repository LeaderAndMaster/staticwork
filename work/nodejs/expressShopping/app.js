/**
 * Created by LvHongwang on 2017-04-07.
 */
// 引入依赖
var express = require('express');
var utility = require('utility');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var browserSync = require('browser-sync').create();
global.dbHelper = require('./common/dbHelper');
var reload = browserSync.reload;
// require('./routes')(app); //app:express对象。;
// 建立 express 实例
var app = express();
app.set('view engine', 'html');
app.engine('.html', require('ejs').__express);
app.set('views', require('path').join(__dirname, 'views'));//视图路径
app.use(express.static(require('path').join(__dirname, 'public')));//静态资源路径

mongoose.connect("mongodb://127.0.0.1:27017/test");

app.use(session({
    secret: 'secret',
    cookie: {
        maxAge: 1000 * 60 * 30
    }
}));


app.get('/', function (req, res) {
    var q = req.query.q || '请输入参数';
    var md5Value = utility.md5(q);
    res.send(q);
});
app.listen(3000, function (req, res) {
    // gulp.watch(["public/*.*", "views/*.html"]).on('change', reload);
    console.log('app is running at port 3000');
});
app.get('/b', function (req, res, next) {
    console.log('response will be sent by the next function ...');
    console.log(module.filename);
    next();
}, function (req, res) {
    res.send('Hello from B!');
});


