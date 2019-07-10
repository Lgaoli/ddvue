<template>
  <div class="myNav">
    <div v-for="(item, index) in list" :key="index" class="myNav_item" >
      <span>{{item.msg}}</span>
      <Icon type="ios-arrow-forward"></Icon>
    </div>
  </div>
</template>
<script>
export default {
   data() {
    return {
      selectedId: 0,
      items: [],
  
    };
  },
  created() {
    this.nav();
  },
  methods: {
    nav() {
      let that = this;
      this.$axios
        .get("https://api.ddjingxuan.cn/api/v2/cate")
        .then(function(res) {
          that.items = res.data;
        })
        .catch(function(error) {
          // console.log(error);
        });
    },
 
  }

}
</script>
<style lang="scss">

  .myNav {
    margin: px2rem(20px) 0;
  }
  .myNav_item {
    line-height: px2rem(60px);
    background: #fff;
    text-align: center;

    span {
      display: inline-block;
      width: 86%;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    &:last-child span {
      border-bottom: 0;
    }
  }
</style>