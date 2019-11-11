// conf/db.js
// MySQL数据库联接配置
module.exports = {
    /* mysql: {
        host: '39.97.253.71',
        user: 'root',
        password: '12345678',
        database: 'xm', // 前面建的user表位于些数据库中
        port: 3306,
        multipleStatements: true // 支持执行多条 sql 语句
    }, */
    mysql: {
        host: 'localhost',
        user: 'root',
        password: '458677',
        database: 'xm', // 前面建的user表位于些数据库中
        port: 3306,
        multipleStatements: true // 支持执行多条 sql 语句
    }
};