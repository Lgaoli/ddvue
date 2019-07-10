<template>
  <div class="Layout">
    <Dheader></Dheader>
    <Dmain></Dmain>
    <Dfooter :activeIndex="0"></Dfooter>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs, Popup, Loading } from "vant";
Vue.use(Tab)
  .use(Tabs)
  .use(Popup)
  .use(Loading);
import Dheader from "../../components/Dheader";
import Dfooter from "../../components/Dfooter";
import Dmain from "../../components/Dmain";
export default {
  name: "Layout",
  components: {
    Dheader,
    Dfooter,
    Dmain
  },
  data() {
    return {
      show: true
    };
  },
  beforeCreate() {
    let that = this;
    let url = window.location.href;
    let str = url.split("?")[1];
    let str1 = str.split("=")[1].split("#")[0];
    // let str1 = "92d0d88903107f6fa5a0730b9002cf3b";
    var curTime = new Date().getTime();
    var notime = 10000; // 过期时间

    let obj = {};
    localStorage.setItem(
      "token",
      JSON.stringify({ data: str1, time: curTime, notime: notime })
    );

    var data = localStorage.getItem("token");
    var dataObj = JSON.parse(data);
  
    setInterval(() => {
      if (
        parseInt(dataObj.time) + parseInt(dataObj.notime) <
        new Date().getTime()
      ) {
        localStorage.setItem("token", "");
        var newdata = localStorage.getItem("token");
        // var newdataObj = JSON.parse(newdata);

        this.$store.commit("setToken", JSON.stringify(newdata.data));

        if (this.$store.state.token) {
          this.$router.push("/");
        } else {
       window.location.href = "https://api.ddjingxuan.cn/api/v2/code/user"
        }
      } else {
        console.log(that);
        this.$store.commit("setToken", dataObj.data);
      }
    }, 1000);
  },
  created() {
    this.tokend();
    this.Token();
  },
  methods: {
    tokend() {
      // console.log(window.location.href);
    },
    getTime() {},
    Token() {}
  }, //通过computed获取的方式
  computed: {
    getToken() {
      return this.$store.getters.getToken;
    }
  }
};
</script>
<style lang="scss">
</style>



