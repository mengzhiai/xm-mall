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
const navTop = {
        //获取navTop
        navTopData: 'select * from navTopName'
    }
    //导航
const nav = {
        navData: 'select * from nav'
    }
    //登录
let login = {
    loginName: `select * from login where userName=?`,
    loginPassword: `select password from login where userName=?`,

}
const register = {
    regName: `select * from login where userName=?`,
    regPassword: `select password from login where userName=?`,
    userInset: 'INSERT INTO `login` (`id`,`userName`,`password`) VALUES(0,?,?)',
}

module.exports = {
    navTop,
    nav,
    login,
    register
}