<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in swiperList" :key="index">
        <img :src="item.img" class="swiper-img">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination" style="text-align: right;  background: none"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        // 参数选项,显示小点
        pagination: ".swiper-pagination",
        autoplayDisableOnInteraction: false, //手动滑动之后还能自动播放
        loop: true, //循环
        autoplay: 2000, //每张播放时长3秒，自动播放
        speed: 1000 //滑动速度
        // delay:1000
      },
      swiperList: []
    };
  },
  created() {
    this.swiper();
  },
  methods: {
    swiper() {
      var that = this;
      this.$axios
        .get("https://api.ddjingxuan.cn/api/v2/banner")
        .then(function(res) {
          that.swiperList = res.data;
          // console.log(that);
        })
        .catch(function(error) {
          // console.log(that);
        });
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
