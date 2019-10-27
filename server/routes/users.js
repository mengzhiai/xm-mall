var express = require('express');
var router = express.Router();

//引入公用模块
const baseModule = require('../util/base');

//sql模块
const $sql = baseModule.$sql;
//连接池
const pool = baseModule.pool;

/* 
登录
*/
router.post('/login', (req, res, next) => {
    let userName = req.body.userName;
    let password = req.body.password;
    pool.query($sql.login, [userName], (err, result) => {
        console.log(result);
        if (result.length === 0) {
            res.json({
                status: -1,
                code: 300,
                message: '该账号不存在,请注册后再登录'
            })
        } else {
            // console.log(result);
            let checkPwd = result[0].password;
            if (password == checkPwd) {
                res.json({
                    status: 1,
                    message: '登陆成功',
                    ok: true,
                    data: {
                        loginPerson: userName
                    }
                })
            } else {
                res.json({
                    status: -1,
                    message: '密码错误,请重新输入'
                })
            }
        }
    })
})

/* 
注册
*/
router.post('/register', (req, res, next) => {
    let userName = req.body.userName;
    let password = req.body.password;
    pool.query($sql.login, [userName], (err, result) => {
        if (result.length !== 0) {
            res.json({
                status: -1,
                code: 300,
                message: '该账号已存在,请登录'
            })
        } else {
            pool.query($sql.register, [userName, password], (err, result) => {
                if (!err) {
                    res.json({
                        ok: true,
                        status: 200,
                        message: '注册成功'
                    })
                } else {
                    res.json({
                        ok: false,
                        status: -1,
                        data: {
                            message: err
                        }
                    })
                }
            })
        }
    })

})

module.exports = router;