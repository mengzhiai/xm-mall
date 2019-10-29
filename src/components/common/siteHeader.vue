<template>
<div>
    <div class="site-topbar">
        <div class="maxbox">
            <div class="containers xm-flexBetween">
                <div class="topbar-nav">
                    <ul>
                        <li v-for="item in topList" :key="item.id">
                            <a :href="item.link">{{item.name}}</a>
                            <!-- <router-link :to="links">{{item.name}}</router-link> -->
                        </li>
                    </ul>
                </div>
                <div class="xm-flex" v-show="isLogin==false">
                    <div class="topbar-info fr">
                        <router-link tag="a" to="/login">登录</router-link>
                        <router-link tag="a" to="/login">注册</router-link>
                        <a href>消息通知</a>
                    </div>
                    <div class="topbar-cart">
                        <a href>购物车(0)</a>
                    </div>
                </div>
                <div class="xm-flex" v-show="isLogin==true">
                    <div class="topbar-info fr">
                        <router-link tag="a" to="/"></router-link>
                        <el-dropdown @command="handleCommand">
                            <span class="el-dropdown-link">
                                {{loginPerson}}
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="a">个人中心</el-dropdown-item>
                                <el-dropdown-item command="b">评价晒单</el-dropdown-item>
                                <el-dropdown-item command="c">我的喜欢</el-dropdown-item>
                                <el-dropdown-item command="d">小米账户</el-dropdown-item>
                                <el-dropdown-item command="e">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <router-link tag="a" to="/">消息通知</router-link>
                        <router-link tag="a" to="/">我的订单</router-link>
                    </div>
                    <div class="topbar-cart">

                        <router-link tag="a" to="/">购物车(0)</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="maxbox">
        <div class="site-header">
            <div class="containers xm-flexBetween">
                <div class="xm-flex">
                    <div class="header-logo">
                        <a href="/">
                            <img src="@/assets/logo.png" alt />
                        </a>
                    </div>
                    <div class="header-nav">
                        <ul class="xm-flex">
                            <li v-for="item in navList" :key="item.id">
                                <router-link tag="a" :to="{path: item.link}">{{item.name}}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="header-search">
                    <el-input placeholder="请输入搜索内容" size="small">
                        <el-button class="el-icon-search" slot="append"></el-button>
                    </el-input>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// import axios from "axios";
export default {
    data() {
        return {
            links: "",
            topList: [{
                name: "ddd"
            }],
            navList: [],
            isLogin: false,
            loginPerson: "登录",
            loginStatus: false
        };
    },
    created() {
        this.init();
    },
    methods: {
        /* init() {
            let status = localStorage.getItem("loginStatus");
            if (status === "1") {
                this.isLogin = true;
                this.loginPerson = localStorage.getItem("user");
            }
            this.axios.all([this.getTopList(), this.getNavList()]).then(
                this.axios.spread((topData, navData) => {
                    this.topList = topData.data.data;
                    this.navList = navData.data.data;
                })
            );
        },
        getTopList() {
            return this.axios.get("/api/navTopList");
        },
        getNavList() {
            return this.axios.get("/api/navList");
        }, */

        init(){
            this.axios.get('/api/headerList').then(res=>{
                this.topList = res.data.data.topList;
                this.navList = res.data.data.navList;
            })
        },
        handleCommand(val) {
            if (val == "e") {
                this.$router.push('/login');
                this.isLogin = false;
                localStorage.removeItem("loginStatus")
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.site-topbar {
    position: relative;
    z-index: 30;
    height: 40px;
    font-size: 12px;
    color: #b0b0b0;
    background: #333;

    li {
        line-height: 40px;
        display: inline-block;
        margin-right: 20px;

        a {
            color: #b0b0b0;
            display: block;

            &:hover {
                color: #fff;
            }
        }
    }
}

.topbar-info,
.topbar-cart {
    a {
        line-height: 40px;
        display: inline-block;
        margin-left: 15px;
        color: #d4d4d4;

        &:hover {
            color: #fff;
        }
    }
}

.topbar-cart {
    margin-left: 30px;
    margin-right: 0;
}

.site-header {
    margin: 40px 0;

    a:hover {
        color: #ff6700;
    }

    .header-logo {
        .logo {
            img {
                width: 50px;
                height: 50px;
            }
        }
    }

    .header-nav {
        margin: 0 50px;
        line-height: 50px;

        li {
            margin: 0 15px;
            text-align: center;
            font-size: 18px;
        }
    }

    .header-search {
        line-height: 50px;
    }
}

.el-dropdown-link {
    color: #d4d4d4;
    cursor: pointer;
}
</style>
