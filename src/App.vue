<template>
  <div id="app" style="font-size:1.3rem;background:#fff">
    <router-view/>
  </div>
</template>

<script>
import Vue from "vue";
import wx from "weixin-js-sdk";
import { Tab, Tabs, Popup, Loading } from "vant";
Vue.use(Tab)
  .use(Tabs)
  .use(Popup)
  .use(Loading);
export default {
  name: "App",
  data() {
    return {};
  },
  beforeCreate() {
    let that = this;
    let url = window.location.href;
    let str = url.split("?")[1];
    let str1 = str.split("=")[1].split("#")[0];
    // let str1 = "cd46b59e00f7916d83d96c456dd6d50a";
    var curTime = new Date().getTime();
    var notime = 7200000; // 过期时间

    let obj = {};
    localStorage.setItem(
      "token",
      JSON.stringify({ data: str1, time: curTime, notime: notime })
    );
    var data = localStorage.getItem("token");
    var dataObj = JSON.parse(data);
    let _this = this;
    this.timer = setInterval(() => {
      if (
        parseInt(dataObj.time) + parseInt(dataObj.notime) <
        new Date().getTime()
      ) {
        localStorage.setItem("token", "");
        var newdata = localStorage.getItem("token");
        // var newdataObj = JSON.parse(newdata);

        this.$store.commit("setToken", newdata.data);

        //   if (this.$store.state.token) {
        //     this.$router.push("/");
        //   } else {
        //  window.location.href = "https://api.ddjingxuan.cn/api/v2/code/user"
        //   }
      } else {
        this.$store.commit("setToken", dataObj.data);
      }
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  }
};
</script>

<style>
@import "./common/iconf/iconfont.css";
@import "./uitls/base.css";
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
a {
  color: #000;
}
/* gaoli */
</style>
