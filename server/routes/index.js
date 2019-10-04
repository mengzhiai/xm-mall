var express = require('express');
var router = express.Router();

//实现与mysql交互

//引入mysql
var mysql = require('mysql');
var $conf = require('../conf/db.js');
var $util = require('../util/util.js');
//引入SQL模块
var $sql = require('../util/sql');
//使用连接池提升性能
var pool = mysql.createPool($util.extend({}, $conf.mysql));


// 向前台返回JSON方法的简单封装
var jsonWrite = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

const $navTop = $sql.navTop;
const $nav = $sql.nav;
let $login = $sql.login;
console.log($navTop);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

//顶部
router.get('/navTopList', function(req, res, next) {
    pool.getConnection(function(err, connection) {
        let param = req.query || req.params;
        connection.query($navTop.navTopData, [param.name], function(err, result) {
            if (!err) {
                res.json({ code: 1, ok: true, data: result })
            } else {
                res.json({ data: err })
            }
            connection.release();
        })
    })
});

//导航
router.get('/navList', (req, res, next) => {
    pool.getConnection((err, connection) => {
        let param = req.query || req.params;
        connection.query($nav.navData, [param.name], (err, result) => {
            if (!err) {
                res.json({ code: 1, ok: true, data: result })
            } else {
                res.json({ ok: false, data: err })
            }
            connection.release();
        })
    })
})


//登录
router.post('/login', (req, res, next) => {
    pool.getConnection((err, connection) => {
        var userName = req.body.userName; //获取前台请求的参数
        var password = req.body.password;
        connection.query($login.loginName, [userName], (err, result) => {
            var resultJson = result;
            if (resultJson.length === 0) {
                result = {
                    code: 300,
                    message: '该账号不存在,请注册后再登录'
                }
                res.json(result);
                connection.release();
            } else {
                connection.query($login.loginPassword, [userName], (err, result) => {
                    console.log("result", result);
                    var temp = result[0].password; //取得数据库查询字段值
                    console.log(temp);
                    if (temp == password) {
                        result = {
                            code: 200,
                            ok: true,
                            message: '登录成功',
                            data: { loginPerson: userName }
                        };
                    } else {
                        result = {
                            code: 400,
                            message: '用户名或密码错误,请重新输入'
                        };
                    }
                    res.json(result); // 以json形式，把操作结果返回给前台页面
                    connection.release(); // 释放连接
                })
            }
        })
    })

})

//注册
router.post('/register', (req, res, next) => {
    pool.getConnection((err, connection) => {
        let userName = req.body.userName; //获取前台请求的参数
        let password = req.body.password;
        connection.query($sql.register.regName, [userName], (err, result) => {
            console.log(result);
            if (result.length !== 0) {
                /* result = {
                    code: 300,
                    ok: true,
                    message: "该账号已存在,请登录"
                } */
                res.json({
                    ok: false,
                    message: '该账号已存在,请登录'
                })
                return;
            }
            connection.query($sql.register.userInset, [userName, password], (err, result) => {
                if (!err) {
                    res.json({
                        code: 200,
                        ok: true,
                        message: '注册成功',
                        data: result
                    })
                } else {
                    res.json({
                        ok: false,
                        message: '注册失败',
                        data: err
                    })
                }
            })
        })
    })
})




module.exports = router;