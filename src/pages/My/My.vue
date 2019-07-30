<template>
  <div style="margin-bottom:5.625rem;">
    <!-- <div class="detail-header">
      <div class="back"></div>
      <div class>个人中心</div>
      <div class="shop"></div>
    </div>-->
    <div class="My-main" :style="mainimg">
      <div class="My-main-main">
        <div class="My-img">
          <img :src="pe.headimgurl" alt>
        </div>
        <div style="padding:1.1rem;color:#F5F5F5;">
          <div style="font-weight:600;font-size:1.8rem;margin-bottom: 0.3rem;">昵称：{{pe.nickname}}</div>
          <div v-if="pe.grade=='7'">
            <div
              style="padding:0.3rem;background:rgba(0,0,0,0.4);margin-bottom: 0.3rem;border-radius: 8px;"
            >普通会员</div>
          </div>
          <div v-else-if="pe.grade=='6'">
            <div
              style="padding:0.3rem;background:rgba(0,0,0,0.4);margin-bottom: 0.3rem;border-radius: 8px;"
            >黄金会员</div>
          </div>
          <div v-else-if="pe.grade=='5'">
            <div
              style="padding:0.3rem;background:rgba(0,0,0,0.4);margin-bottom: 0.3rem;border-radius: 8px;"
            >钻石会员</div>
          </div>
          <div v-else-if="pe.grade=='4'">
            <div
              style="padding:0.3rem;background:rgba(0,0,0,0.4);margin-bottom: 0.3rem;border-radius: 8px;"
            >至尊合伙人</div>
          </div>
          <div v-else-if="pe.grade=='3'">
            <div
              style="padding:0.3rem;background:rgba(0,0,0,0.4);margin-bottom: 0.3rem;border-radius: 8px;"
            >区代</div>
          </div>
          <div v-else-if="pe.grade=='2'">
            <div
              style="padding:0.3rem;background:rgba(0,0,0,0.4);margin-bottom: 0.3rem;border-radius: 8px;"
            >市代</div>
          </div>
          <div v-else-if="pe.grade=='1'">
            <div
              style="padding:0.3rem;background:rgba(0,0,0,0.4);margin-bottom: 0.3rem;border-radius: 8px;"
            >省代</div>
          </div>
          <div>邀请人：{{pe.inviter}}</div>
        </div>
      </div>
      <div class="My-main-mian1" style="
    position: relative;
">
        <div>
          <div></div>
        </div>
        <router-link :to="{ path:'/Integral' }">
          <div style="
    position: absolute;
    bottom: 0;
    right: 0;
">
            <img src="../../assets/img/ing_mine_integral.png">
          </div>
        </router-link>
      </div>
    </div>
    <div style="
   
">
      <div class="My-main1" style="padding:1.25rem; ">
        <div class="My-main1-header" style="border-bottom: 1px #ccc solid;padding:1.35rem;">
          <span>
            <img src="../../assets/img/ic_mine_Order.png" alt>
          </span>
          <span>我的订单</span>
        </div>
      </div>
    </div>
    <div style="padding: 0 1.65rem 0rem;">
      <router-link :to="{ path:'/Order' }">
        <div style="border-bottom: 1px #ccc solid;padding-bottom: 1.65rem;" class="My-main2">
          <div>
            <i class="iconfont">&#xe614;</i>
            <p>待支付</p>
          </div>
          <div>
            <i class="iconfont">&#xe6d5;</i>
            <p>待发货</p>
          </div>
          <div>
            <i class="iconfont">&#xe6e1;</i>
            <p>待收货</p>
          </div>
          <div>
            <i class="iconfont">&#xe60b;</i>
            <p>待评价</p>
          </div>
          <div>
            <i class="iconfont">&#xe603;</i>
            <p>退货</p>
          </div>
        </div>
      </router-link>
    </div>
    <div style class="My-main3">
      <router-link :to="{ path:'/shippingAddress' }">
        <div class="My-main3-main">
          <div style="display: flex;align-items: center;;">
            <div style="width: 2.125rem;height: 2.5rem;margin-right: .625rem">
              <img src="../../assets/img/ic_mine_location@2x.png" alt style="width:100%">
            </div>
            <span>收货地址</span>
          </div>
          <div>
            <i class="iconfont">&#xe632;</i>
          </div>
        </div>
      </router-link>
      <router-link :to="{ path:'/Team'}">
        <div class="My-main3-main">
          <div style="display: flex;align-items: center;;">
            <div style="width: 2.125rem;height: 2.5rem;margin-right: .625rem">
              <img src="../../assets/img/ic_mine_team@2x.png" alt style="width:100%">
            </div>
            <span>我的团队</span>
          </div>
          <div>
            <i class="iconfont">&#xe632;</i>
          </div>
        </div>
      </router-link>
      <router-link :to="{ path:'/Study'}">
        <div class="My-main3-main">
          <div style="display: flex;align-items: center;;">
            <div style="width: 2.125rem;height: 2.5rem;margin-right: .625rem">
              <img src="../../assets/img/ic_mine_study@2x.png" alt style="width:100%">
            </div>
            <span>学习中心</span>
          </div>
          <div>
            <i class="iconfont">&#xe632;</i>
          </div>
        </div>
      </router-link>
      <router-link :to="{ path:'/Agency'}">
        <div class="My-main3-main">
          <div style="display: flex;align-items: center;;">
            <div style="width: 2.125rem;height: 2.5rem;margin-right: .625rem">
              <img src="../../assets/img/ic_mine_Apply@2x.png" alt style="width:100%">
            </div>
            <span>申请代理</span>
          </div>
          <div>
            <i class="iconfont">&#xe632;</i>
          </div>
        </div>
      </router-link>
      <router-link to="/picking">
        <div class="My-main3-main">
          <div style="display: flex;align-items: center;;">
            <div style="width: 2.125rem;height: 2.5rem;margin-right: .625rem">
              <img
                src="../../assets/img/ic_mine_Take delivery of goods@2x.png"
                alt
                style="width:100%"
              >
            </div>
            <span>提货</span>
          </div>
          <div>
            <i class="iconfont">&#xe632;</i>
          </div>
        </div>
      </router-link>

      <router-link :to="{ path:'/Catalog' }">
        <div class="My-main3-main">
          <div style="display: flex;align-items: center;;">
            <div style="width: 2.125rem;height: 2.5rem;margin-right: .625rem">
              <img src="../../assets/img/ic_mine_share@2x.png" alt style="width:100%">
            </div>
            <span>分享推广</span>
          </div>
          <div>
            <i class="iconfont">&#xe632;</i>
          </div>
        </div>
      </router-link>
    </div>
    <Dfooter :activeIndex="3"></Dfooter>
  </div>
</template>
<script>
import Vue from "vue";
import Dfooter from "../../components/Dfooter";
import { Config } from "../../uitls/config";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  components: {
    Dfooter
  },
  data() {
    return {
      mainimg: {
        backgroundImage:
          "url(" + require("../../assets/img/bg_ing_mime.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      mainimg1: {
        backgroundImage:
          "url(" + require("../../assets/img/ing_mine_integral.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      pe: [],
        timer: null  // 定时器名称     
    };
  },
  computed: {
    getToken() {
      return this.$store.getters.getToken;
    }
  },
  beforeCreate() {
    let that = this;
    let url = window.location.href;
    //let url =
    //  "http://pub.hqyulin.com/?token=899a7451d56be0b3e66cf98fc8ea9f12#/";
    let str = url.split("?")[1].split("#")[0];
    let arr = str.split("=");

    let strs = str.split("=")[1];

    this.$axios({
      //调用接口
      method: "post",
      url: Config.restUrl + "api/v2/user/isb",
      // params: {
      //   token: Token
      // },
      headers: {
        token: strs
        // token: "221f8fd0ca0be03bdefccf62b1f5ff6b"
      }
    }).then(
      function(res) {
        //接口返回数据
        console.log(res);
        that.$router.push({ path: "/My" })
      },
      function(error) {
        that.$router.push({ path: "/Call" })
        
      }
    );
  },
  created() {
    this.pes();
  },
  methods: {
    pes() {
      let that = this;
      //发送get请求
      // let Token = "218a146a0ec1548a3d6f0b252061c120";
      this.$axios({
        //调用接口
        method: "GET",
        url: Config.restUrl + "api/v2/user/info",
        // params: {
        //   token: Token
        // },
        headers: {
          token: that.getToken
          // token: "221f8fd0ca0be03bdefccf62b1f5ff6b"
        }
      }).then(
        function(res) {
          //接口返回数据
          console.log(res.data);
          that.pe = res.data;
        },
        function(error) {}
      );
    }
  }
};
</script>

<style lang="scss">
.detail-header {
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
  }
}
.My-main {
  display: flex;
  justify-content: space-between;
  .My-main-main {
    padding: 2rem;
    display: flex;
    .My-img {
      border: #fff 2px solid;
      width: 7.5rem;
      height: 7.5rem;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .My-main-main1 {
    display: flex;
    width: 15.0625rem;
    height: 8.375rem;
  }
}
.My-main2 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  i {
    font-size: 3.0625rem;
    color: #fe8549;
  }
  p {
    font-size: 1.5rem;
    font-weight: 500;
    color: #666666;
  }
}
.My-main3 {
  padding: 1.65rem;
  .My-main3-main {
    display: flex;
    padding: 0.7rem;
    font-size: 1.8rem;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
