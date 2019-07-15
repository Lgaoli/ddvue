<template>
  <div>
    <div class="Service-header">
      <div class="back" @click="back">
        <i class="iconfont" style="font-size: 2.9rem;\">&#xe79b;</i>
      </div>
      <div class>联系客服</div>
      <div class="shop"></div>
    </div>
    <div class="Service-main">
      <div class="Service-main-header">
        <div>
          <p>客服点点</p>
          <div>每周一至周日9：00-18：00电话畅通为您服务</div>
        </div>
        <div @click="callPhone">
          <i class="iconfont">&#xe605;</i>
        </div>
        <div @click="back">关闭</div>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    callPhone() {
      window.location.href = "tel://" + 18319409837;
    }
  }
};
</script>


<style lang="scss">
.Service-header {
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  height: 4.5rem;
  line-height: 4.5rem;
  top: 0;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  position: fixed;
  justify-content: space-between;
  z-index: 9999;
  font-size: 1.9375rem;

  i {
    color: #060606;
    font-size: 2.125rem;
  }
  .back {
    font-size: 1.682667rem;
    text-align: center;
    height: 100%;
    line-height: 4.5rem;
  }
  .shop {
    width: 3.125rem;
    text-align: center;
    height: 100%;
    line-height: 4.5rem;
  }
}
.Service-main {
  margin-top: 4.5rem;
  .Service-main-header {
      padding: .3rem;
    background: #f15e0e;
    color: #fff;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: space-around;
  }
}
</style>

