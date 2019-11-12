<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 10:39:03
 * @LastEditTime: 2019-08-26 10:39:05
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="wrap">
    <div class="maxbox">
      <div class="home-page">
        <div class="page">
          <!-- <ul>
            <li v-for="(item,i) in itemList" :key="i">
              <span>{{item.name}}</span>
              <i class="el-icon-arrow-right"></i>
            </li>
          </ul>-->
        </div>
        <div class="page">
          <!-- <ul>
        <li><img src="@/assets/img/pic1.jpg" alt=""></li>
          </ul>-->
          <el-carousel :interval="5000" arrow="always" height="420px">
            <el-carousel-item v-for="(item,i) in picList" :key="i">
              <img
                :src="require('../../../public/images/banner/' + item.pic)"
                class="click-cursor"
                @click="bannerDeail(item.productId)"
              />
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
          <img src="@/assets/img/sub1.jpg" alt />
        </div>
        <div class="list">
          <img src="@/assets/img/sub2.jpg" alt />
        </div>
        <div class="list">
          <img src="@/assets/img/sub3.jpg" alt />
        </div>
      </div>
      <div class="common-img">
        <img src="@/assets/img/img1.jpg" alt />
      </div>
    </div>
    <div class="all">
      <div class="maxbox">
        <div class="common-title">
          <div class="name">手机</div>
          <div class="more">
            查看全部
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
        <div class="phone">
          <div class="side">
            <img :src="sideImg" alt />
          </div>
          <div class="page">
            <div
              class="item"
              v-for="(item,i) in productArr"
              :key="i"
              @click="productDetail(item.productId)"
            >
              <div class="top-txt" v-if="item.isNew==1">新品</div>
              <div class="cen-img">
                <!--<img :src="require('../../../public/images/' + item.productImg)"  alt />-->
                <img :src="require('../../../public/images/' + item.productImg)" alt />
              </div>
              <div class="describe">{{item.productName}}</div>
              <div class="detail">{{item.productDescription}}</div>
              <div class="price">{{item.productPrice}}元</div>
            </div>
          </div>
        </div>
        <div class="common-img">
          <img src="@/assets/img/tv.jpg" alt />
        </div>
        <div class="common-title">家电</div>
        <div class="electric">
          <div class="item" v-for="(item,i) in electric" :key="i">
            <div class="top-txt" v-if="item.isNew==1">新品</div>
            <div class="cen-img">
              <img :src="require('../../../public/images/' + item.productImg)" alt />
            </div>
            <div class="name">{{item.productName}}</div>
            <div class="detail">{{item.productDescription}}</div>
            <div class="price">{{item.productPrice}}元</div>
          </div>
        </div>
      </div>
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
        },
        {
          name: "222"
        },
        {
          name: "222"
        }
      ],
      picList: [
        {
          // pic: require("../../../static/banner/2.jpg")
        }
        /* {
                          pic: require("@/assets/img/pic2.jpg")
                        },
                        {
                          pic: require("@/assets/img/pic3.jpg")
                        },
                        {
                          pic: require("@/assets/img/pic4.jpg")
                        } */
      ],
      productArr: [
        {
          txt: "新品",
          describe: "小米9 8GB+128GB",
          detail: "好看又能打",
          price: "2999"
        },
        {
          txt: "新品",
          describe: "小米9 8GB+128GB",
          detail: "好看又能打",
          price: "2999"
        },
        {
          txt: "新品",
          describe: "小米9 8GB+128GB",
          detail: "好看又能打",
          price: "2999"
        },
        {
          txt: "新品",
          describe: "小米9 8GB+128GB",
          detail: "好看又能打",
          price: "2999"
        },
        {
          txt: "新品",
          describe: "小米9 8GB+128GB",
          detail: "好看又能打",
          price: "2999"
        },
        {
          txt: "新品",
          describe: "小米9 8GB+128GB",
          detail: "好看又能打",
          price: "2999"
        },
        {
          txt: "新品",
          describe: "小米9 8GB+128GB",
          detail: "好看又能打",
          price: "2999"
        },
        {
          txt: "新品",
          describe: "小米9 8GB+128GB",
          detail: "好看又能打",
          price: "2999"
        }
      ],
      sideImg: require("@/assets/img/xm9.jpg"),
      electric: [
        {
          img: require("@/assets/img/xyj.jpg"),
          name: "米家互联网洗烘一体机10kg",
          price: 2499
        },
        {
          img: require("@/assets/img/xyj.jpg"),
          name: "米家互联网洗烘一体机10kg",
          price: 2499
        },
        {
          img: require("@/assets/img/xyj.jpg"),
          name: "米家互联网洗烘一体机10kg",
          price: 2499
        },
        {
          img: require("@/assets/img/xyj.jpg"),
          name: "米家互联网洗烘一体机10kg",
          price: 2499
        },
        {
          img: require("@/assets/img/xyj.jpg"),
          name: "米家互联网洗烘一体机10kg",
          price: 2499
        },
        {
          img: require("@/assets/img/xyj.jpg"),
          name: "米家互联网洗烘一体机10kg",
          price: 2499
        },
        {
          img: require("@/assets/img/xyj.jpg"),
          name: "米家互联网洗烘一体机10kg",
          price: 2499
        },
        {
          img: require("@/assets/img/xyj.jpg"),
          name: "米家互联网洗烘一体机10kg",
          price: 2499
        },
        {
          img: require("@/assets/img/xyj.jpg"),
          name: "米家互联网洗烘一体机10kg",
          price: 2499
        },
        {
          img: require("@/assets/img/xyj.jpg"),
          name: "米家互联网洗烘一体机10kg",
          price: 2499
        }
      ]
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.axios.get("/api/banner").then(res => {
        this.picList = res.data.data;
      });
      //获取产品列表
      this.axios.get("/api/productList").then(res => {
        // this.productArr = res.data.data;
        let dataList = res.data.data;
        let [phoneList, applianceList] = [[], []];
        dataList.forEach(item => {
          if (item.type === "phone") {
            phoneList.push(item);
          }
          if (item.type === "appliances") {
            applianceList.push(item);
          }
        });
        this.productArr = phoneList;
        console.log(applianceList);
        this.electric = applianceList;
      });
    },
    // banner详情页
    bannerDeail() {},
    //商品详情页
    productDetail(id) {
      // console.log(id);
      this.$router.push("/detail");
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
        align-items: center;

        li {
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

  .common-img {
    margin: 30px 0;

    img {
      width: 100%;
    }
  }

  .common-title {
    text-align: left;
    padding: 30px 0 20px;
    display: flex;
    justify-content: space-between;

    .name {
      font-size: 20px;
      font-weight: 900;
    }

    .more {
      &:hover {
        color: #ff6700;
        cursor: pointer;
      }
    }
  }

  .all {
    width: 100%;
    background-color: #f5f5f5;
  }

  .phone {
    display: grid;
    grid-gap: 0 15px;
    justify-content: space-between;
    grid-template-columns: 240px repeat(1, 1fr);

    .side {
      img {
        width: 100%;
      }
    }

    .page {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-gap: 15px;

      .item {
        cursor: pointer;
        text-align: center;
        background-color: #fff;
        transition: all 0.2s linear;

        &:hover {
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          transform: translate3d(0, -2px, 0);
        }

        .top-txt {
          width: 60px;
          height: 25px;
          line-height: 25px;
          margin: 0 auto;
          color: #fff;
          background-color: #83c44e;
        }

        .cen-img {
          margin: 20px 0;

          img {
            width: 160px;
            height: 160px;
          }
        }

        .describe {
          color: #333;
          font-size: 16px;
        }

        .detail {
          color: #b0b0b0;
          line-height: 30px;
        }

        .price {
          color: #ff6700;
        }
      }
    }
  }

  .electric {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;

    .item {
      background-color: #fff;
      text-align: center;
      cursor: pointer;
      transition: all 0.2s linear;

      &:hover {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        transform: translate3d(0, -2px, 0);
      }

      .top-txt {
        width: 60px;
        height: 25px;
        line-height: 25px;
        margin: 0 auto;
        color: #fff;
        background-color: #83c44e;
      }

      .cen-img {
        margin: 10px 0;

        img {
          width: 100%;
        }
      }

      .name {
        margin: 10px 0;
      }

      .price {
        color: #ff6700;
        margin: 15px 0;
      }
    }
  }
}

.click-cursor {
  cursor: pointer;
}
</style>
