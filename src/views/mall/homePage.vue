<template>
  <div class="wrap">
    <div class="page">
      <ul>
        <li v-for="item in itemList" :key="item">{{item.name}}<i class="el-icon-arrow-right"></i></li>
      </ul>
    </div>
    <div class="page"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemList: [
        {
          name:'222'
        }
      ]
    };
  },
  created(){
    this.init();
  },
  methods: {
    init(){
      this.axios.get('https://easy-mock.com/mock/5c2877e55fb9ae228ab2f385/mall/side')
      .then(res => {
        this.itemList = res.data.data;
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap{
  display: grid;
  grid-template-columns: 200px repeat(1, 1fr);
  .page:nth-child(1){
    // border: 1px solid #ccc;
    background-color: rgba(0,0,0,.6);
    ul{
      padding: 0 20px;
      li{
        line-height: 40px;
        text-align: left;
        color: #fff;
        cursor: pointer;
        padding: 0 20px;
        i{
          text-align: right;
          margin-left: 60px;
        }
        &:hover{
          color: #fff;
          background-color: #ff6700;
        }
      }
    }
  }
}
</style>