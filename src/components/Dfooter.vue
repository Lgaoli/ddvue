<template>
  <div class="footer" style="font-size:1.5rem">
    <routerLink class="footer-nav" to="/" :class="{active:(activeIndex==0)}">
      <i class="iconfont">&#xe633;</i>
      <span>主页</span>
    </routerLink>
    <routerLink class="footer-nav" to="/shop" :class="{active:(activeIndex==1)}">
      <i class="iconfont">&#xe64c;</i>
      <span>购物车</span>
    </routerLink>
    <routerLink class="footer-nav" to="/Catalog" :class="{active:(activeIndex==2)}">
      <i class="iconfont">&#xe7b5;</i>
      <span>分享</span>
    </routerLink>
    <routerLink class="footer-nav" to="/My" :class="{active:(activeIndex==3)}">
      <i class="iconfont">&#xe629;</i>
      <span>个人中心</span>
    </routerLink>
  </div>
</template>
<script>
export default {
  props: ["activeIndex"],
  methods: {}
};
</script>
<style lang="scss">
.footer {
  border-top: 1px #ccc solid;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5.625rem;
  background-color: #fff;

  text-align: center;
  .footer-nav {
    padding: .625rem;
    flex: 1;
     font-size: 2.6875rem;
        color:#ccc;
      i{
        font-size: 2.6875rem;
        color:#ccc;
      }
    span {
      display: block;
      font-size: 1rem;
    
    }
    &.active i{
      color: #ef7634;
    }
  }
}
</style>
