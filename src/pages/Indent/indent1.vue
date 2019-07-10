<template>
  <div class="indent1" style="  background: #fff;">
    <div class="indent1-header">
      <div class="back">
        <router-link to="/">
          <i class="iconfont">&#xe771;</i>
        </router-link>
      </div>
      <div class>支付成功</div>
      <div class="shop">
        <p>完成</p>
      </div>
    </div>
    <div class="indent1-main">
      <div>
        <div class="shopimg" style="padding: 5.3rem 4.3rem 1.3rem">
          <img src="../../assets/img/ic_Successful submission@2x.png" style="width: 100%;">
        </div>
        <div style="color:#9FA4A5;font-size:1.5rem">
          <p style="color:#000;font-size:1.8rem">订单号为：<span>123456789255532323232</span></p>
          <p style="">您已经购买成功，感谢支持！</p>
        </div>
        <router-link to="/Order">
          <div
            class="shopbut"
            style="color:#F15E0E;font-size:1.5rm;padding:1.16rem;border:#F15E0E 1px solid;margin-top:2rem;border-radius: 10px;"
          >
            <p>查看订单</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.indent1 {
  background: #fff;
  .indent1-header {
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
      width: 3.125rem;
      text-align: center;
      height: 100%;
      line-height: 4.5rem;
    }
    .shop {
      width: 3.125rem;
      text-align: center;
      height: 100%;
      line-height: 4.5rem;
      font-size: 1.218667rem;
    }
  }
  .indent1-main {
    padding: 7rem;
    text-align: center;
  }
}
</style>

