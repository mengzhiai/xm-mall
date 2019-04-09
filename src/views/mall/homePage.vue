<template>
  <div class="wrap">
    <div class="home-page">
      <div class="page">
        <ul>
          <li v-for="item in itemList" :key="item">
            <span>{{item.name}}</span>
            <i class="el-icon-arrow-right"></i>
          </li>
        </ul>
      </div>
      <div class="page">
        <!-- <ul>
        <li><img src="@/assets/img/pic1.jpg" alt=""></li>
        </ul>-->
        <el-carousel :interval="5000" arrow="always" height="420px">
          <el-carousel-item v-for="item in picList" :key="item">
            <img :src="item.pic" alt>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="sub">
      <div class="list box">
        <ul>
          <li>选购手机</li>
          <li>企业团购</li>
          <li>F码通道</li>
          <li>米粉卡</li>
          <li>以旧换新</li>
          <li>话费充值</li>
        </ul>
      </div>
      <div class="list">
        <img src="@/assets/img/sub1.jpg" alt>
      </div>
      <div class="list">
        <img src="@/assets/img/sub2.jpg" alt>
      </div>
      <div class="list">
        <img src="@/assets/img/sub3.jpg" alt>
      </div>
    </div>
    <div class="common-img">
      <img src="@/assets/img/img1.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemList: [
        {
          name: "222"
        }
      ],
      picList: [
        {
          pic: require("@/assets/img/pic1.jpg")
        },
        {
          pic: require("@/assets/img/pic2.jpg")
        },
        {
          pic: require("@/assets/img/pic3.jpg")
        },
        {
          pic: require("@/assets/img/pic4.jpg")
        }
      ],
      height: ""
    };
  },
  beforeMount: function() {
    this.height = 400 + "px";
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.axios
        .get("https://easy-mock.com/mock/5c2877e55fb9ae228ab2f385/mall/side")
        .then(res => {
          this.itemList = res.data.data;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-carousel__container {
  height: 420px !important;
}
.wrap {
  .home-page {
    display: grid;
    grid-template-columns: 200px repeat(1, 1fr);
    .page:nth-child(1) {
      // border: 1px solid #ccc;
      background-color: rgba(0, 0, 0, 0.6);
      ul {
        padding: 0 20px;
        li {
          line-height: 40px;
          text-align: left;
          color: #fff;
          cursor: pointer;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          i {
            text-align: right;
            line-height: 40px;
            font-weight: bold;
          }
          &:hover {
            color: #fff;
            background-color: #ff6700;
          }
        }
      }
    }
    .page:nth-child(2) {
      height: 400px;
      .el-carousel {
        > div {
          height: 500px !important;
        }
      }
      img {
        // width: 100%;
        height: 400px;
      }
    }
  }
  .sub {
    display: grid;
    grid-template-columns: 200px repeat(3, 1fr);
    grid-gap: 20px;
    margin-top: 20px;
    .box {
      border: 1px solid #ccc;
      ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items:center;
        li{
          height: 85px;
          line-height: 85px;
        }
      }
    }
    .list {
      img {
        width: 100%;
        height: 170px;
      }
    }
  }
  .common-img{
    margin: 20px 0;
    img{
      width: 100%;
    }
  }
}
</style>