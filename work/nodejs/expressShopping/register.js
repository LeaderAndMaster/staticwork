/**
 * Created by LvHongwang on 2017-04-11.
 */
module.exports = function ( app ) {
  app.get('/register', function(req, res) {
      res.render('register');
  });
  app.post('/register', function (req, res) {
     var User = global.dbHelper.getModel('user'),
     uname = req.body.uname;
     User.findOne({name: uname}, function (error, doc) {
       if (doc) {
            req.session.error = '用户名已存在！';
            res.send(500);
        } else {
            User.create({
                name: uname,
                password: req.body.upwd
            }, function (error, doc) {
                if (error) {
                    res.send(500);
                } else {
                    req.session.error = '用户名创建成功！';
                    res.send(200);
                }
            });
        }
    });
  });
}


var bodyParser = require('body-parser');
var multer = require('multer');
var session = require('express-session');

//调用中间件使用
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(multer());