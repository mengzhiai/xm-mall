var express = require('express');
var router = express.Router();

//引入公用模块
const baseModule = require('../util/base');

//sql模块
const $sql = baseModule.$sql;
//连接池
const pool = baseModule.pool;


//顶部
router.get('/headerList', function(req, res, next) {
    /* pool.getConnection(function(err, connection) {
        let param = req.query || req.params;
        connection.query($sql.navTopData, function(err, result) {
            if (!err) {
                res.json({ code: 1, ok: true, data: result })
            } else {
                res.json({ data: err })
            }
            connection.release();
        })
    }) */
    // let sql = $sql.navTopData + $sql.navData;
    let sql = `${$sql.navTopData};${$sql.navData}`;
    pool.query(sql, (err, result) => {
        console.log(result[0]);
        console.log(result[1]);
        if (!err) {
            res.json({
                status: 200,
                ok: true,
                data: {
                    topList: result[0],
                    navList: result[1]
                }
            });
        } else {
            res.json({
                status: '-1',
                ok: false,
                msg: '获取数据失败',
                data: result
            });
        }
    })
});


/* 
主页轮播图
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



/* 
商品列表
*/

router.get('/productList', (req, res, next) => {
    pool.query($sql.productListSql, (err, result) => {
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