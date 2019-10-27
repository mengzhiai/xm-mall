var express = require('express');
var router = express.Router();

//引入公用模块
const baseModule = require('../util/base');

//sql模块
const $sql = baseModule.$sql;
//连接池
const pool = baseModule.pool;


const $navTop = $sql.navTop;
const $nav = $sql.nav;
let $login = $sql.login;

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


/* 
主页
*/
router.get('/banner', (req, res, nex) => {
    pool.query($sql.banner, (err, result) => {
        if (err) {
            res.json({
                status: '-1',
                ok: false,
                msg: err.message
            });
        } else {
            res.json({
                status: 1,
                ok: true,
                msg: '获取数据成功',
                data: result
            });
        }
    })
})

module.exports = router;