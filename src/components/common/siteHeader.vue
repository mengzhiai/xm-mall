<template>
  <div>
    <div class="site-topbar">
        <div class="maxbox">
          <div class="containers clearfix">
          <div class="topbar-nav fl">
            <ul>
              <li v-for="item in items" :key="item.id">
                <a :href="item.link">{{item.name}}</a>
                <!-- <router-link :to="links">{{item.name}}</router-link> -->
              </li>
              <!-- <li>
            <a href="">{{link}}</a>
              </li>-->
            </ul>
          </div>
          <div class="topbar-cart fr">
            <a href>购物车(0)</a>
          </div>
          <div class="topbar-info fr">
            <!-- <a href="./login.html">登录</a> -->
            <router-link tag="a" to="/login">登录</router-link>
            <!-- <a href>注册</a> -->
            <a href>消息通知</a>
          </div>
        </div>
        </div>
      </div>
      <div class="maxbox">
        <div class="site-header">
        <div class="containers clearfix">
          <div class="header-logo fl">
            <a href="/" class="logo">
              <!-- <img src="@/assets/img/logo.jpg" alt> -->
            </a>
          </div>
          <div class="header-nav fl">
            <ul>
              <!-- <li v-for="item in navs" key="item.id">{{item.name}}</li> -->
              <li v-for="item in navs" :key="item.id">
                <!-- <a :href="url">{{item.name}}</a> -->
                <router-link tag="a" :to="{path: item.url}">{{item.name}}</router-link>
              </li>
            </ul>
          </div>
          <div class="header-search fr">
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
      items: [{ name: "ddd" }],
      navs: [
        {
          name: "小米手机",
          url: "/xm"
        },
        {
          name: "红米",
          url: "/redmi"
        },
        {
          name: "电视",
          url: "/demo"
        },
        {
          name: "笔记本",
          url: "/computer"
        },
        {
          name: "家电"
        },
        {
          name: "新品"
        },
        {
          name: "路由器"
        },
        {
          name: "智能硬件"
        },
        {
          name: "服务"
        },
        {
          name: "社区"
        }
      ]
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      // debugger;
      this.axios
        .get("https://easy-mock.com/mock/5c2877e55fb9ae228ab2f385/mall/topBar")
        .then(res => {
          // console.log(res.data.topName);
          // console.log(this);
          this.items = res.data.topName;
        })
        .catch(err => {
          // console.log("请求失败");
        });
      // debugger;
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
    color: #b0b0b0;
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
        width: 30px;
        height: 30px;
      }
    }
  }
  .header-nav {
    margin: 0 50px;
    float: left;
    li {
      float: left;
      margin: 0 15px;
      text-align: center;
      font-size: 18px;
    }
  }
}
</style>