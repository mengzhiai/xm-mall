/* var blogTable = {
    //增
    blogInset: 'INSERT INTO `blogTable` (`id`,`title`,`content`,`name`) VALUES(0,?,?,?)',
    //删
    blogDelete: 'delete from blogTable where id=?',
    //改
    editUpdate: 'UPDATE `blogTable` SET `title`=?,`content`=?,`name`=? WHERE `id`=?',
    //查
    blogAll: 'select * from blogTable',
    goodById: 'select * from good where id=?'
}

module.exports = blogTable; */

//顶部
let navTopData = 'select * from navTopName';
//导航
let navData = 'select * from nav';
let login = `select * from login where userName=?`;

/* const register = {
    regName: `select * from login where userName=?`,
    regPassword: `select password from login where userName=?`,
    userInset: 'INSERT INTO `login` (`id`,`userName`,`password`) VALUES(0,?,?)',
} */
let register = 'INSERT INTO `login` (`id`,`userName`,`password`) VALUES(0,?,?)'

let productListSql = "select * from productList";

let banner = "select * from banner"
module.exports = {
    navTopData,
    navData,
    login,
    register,
    banner,
    productListSql
}