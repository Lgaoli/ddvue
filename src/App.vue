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
    // let url = window.location.href;
    let url =
      "http://pub.hqyulin.com/?token=899a7451d56be0b3e66cf98fc8ea9f12#/";
    let str = url.split("?")[1].split("#")[0];
    let arr = str.split("=");

    // let strs = str.split("=")[1];

    let strs = "899a7451d56be0b3e66cf98fc8ea9f12";
    var curTime = new Date().getTime();
    var notime = 7200000; // 过期时间

    let obj = {};
    if (arr[0] === "token") {
      localStorage.setItem(
        "token",
        JSON.stringify({ data: strs, time: curTime, notime: notime })
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
          //  window.location.href = "https://d.wbgapp.com/api/v2/code/user"
          //   }
        } else {
          this.$store.commit("setToken", dataObj.data);
        }
      }, 1000);
    } else {
    }
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
