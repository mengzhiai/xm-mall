<template>
  <div class="wrap">
    <div class="maxbox">
      <div class="introduce">
        <div class="title">Redmi Note 7 Pro</div>
        <div class="information">
          <ul>
            <li>Redmi Note 7 概述</li>
            <span>|</span>
            <li>参数</li>
            <span>|</span>
            <li>F码通道</li>
            <span>|</span>
            <li>用户评价</li>
            <el-button type="warning" size="small">立即购买</el-button>
          </ul>
        </div>
      </div>
    </div>
    <div class="detailed">
      <div class="bac-img">
        <img src="@/assets/img/index_bg.jpg" alt>
      </div>
      <div class="maxbox">
        <div class="preload">
          <div class="item" v-for="item in items" :key="item">
            <p>{{item.txt}}</p>
            <div class="txt">{{item.info}}</div>
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
      items: [
        {
          txt: "旗舰相机",
          info: "索尼4800万超清双摄"
        },
        {
          txt: "旗舰相机",
          info: "索尼4800万超清双摄"
        },
        {
          txt: "旗舰相机",
          info: "索尼4800万超清双摄"
        },
        {
          txt: "旗舰相机",
          info: "索尼4800万超清双摄"
        },
        {
          txt: "旗舰相机",
          info: "索尼4800万超清双摄"
        },
        {
          txt: "旗舰相机",
          info: "索尼4800万超清双摄"
        },
        {
          txt: "旗舰相机",
          info: "索尼4800万超清双摄"
        },
        {
          txt: "旗舰相机",
          info: "索尼4800万超清双摄"
        },
        {
          txt: "旗舰相机",
          info: "索尼4800万超清双摄"
        },
        {
          txt: "旗舰相机",
          info: "索尼4800万超清双摄"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  .introduce {
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    ul {
      display: flex;
      justify-content: center;
      li {
        padding: 0 10px;
        // border-right: 1px solid #ccc;
      }
    }
  }
  .detailed {
    margin: 20px 0;
    .bac-img {
      background: url("../../assets/img/index_bg.jpg");
      background-repeat: no-repeat;
      width: 100%;
      height: 500px;
      background-position: top center;
      background-color: #f5f5f5;
      z-index: 3;
    }
    .preload {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      .item {
        margin-bottom: 20px;
        p {
          font-size: 14px;
        }
        .txt {
          font-size: 20px;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>