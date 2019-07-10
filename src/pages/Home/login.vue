<template>
  <div  style="position: relative;">
    <div
      class="Catalog-main"
      :style="bg"
     style="width:100%; height:100%;position:fixed;left:0;top:0"
    >
      <div
        style="
    padding-top: 10rem;
    padding-right: 10rem;
    padding-bottom: 10rem;
    padding-left: 10rem;
 text-align: center;
"
      >
        <div style="background:#fff;padding:5rem">
          <div>
            <div class="logo">
              <img src="../../assets/img/img_logo.png" alt>
            </div>
            <a href="https://api.ddjingxuan.cn/api/v2/code/user">点击重新登录</a>
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
      bg: {
        backgroundImage:
          "url(" + require("../../assets/img/bg_img_integral.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      }
    };
  },
  beforeCreate() {},
  methods: {
    test() {}
  }
};
</script>
