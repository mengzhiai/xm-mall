var express = require('express');
var router = express.Router();

//实现与mysql交互

//引入mysql
var mysql = require('mysql');
var $conf = require('../conf/db.js');
var $util = require('../util/util.js');
//引入SQL模块
let $sql = require('../util/sql');
//使用连接池提升性能
let pool = mysql.createPool($util.extend({}, $conf.mysql));


// 向前台返回JSON方法的简单封装
/* var jsonWrite = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
}; */

module.exports = {
    $sql,
    pool
}