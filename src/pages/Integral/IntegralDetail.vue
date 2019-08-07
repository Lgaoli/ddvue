<template>
  <div style="background:#fff">
    <div class="IntegralD-header">
      <div class="back" @click="back" style="
    font-size: 2.9rem;">
        <i class="iconfont">&#xe79b;</i>
      </div>
      <div class>积分明细</div>
      <div class="shop"></div>
    </div>
    <div class="IntegralD-main">
      <div v-if="de">
        <div class="IntegralD-main-text" v-for="(item,index) in de" :key="index">
          <div style="line-height: 1.8rem;">
            <div style="font-size:1.6rem;">{{item.type}}</div>
            <p>{{item.create_time}}</p>
          </div>
          <div v-if="item.ad_type=='-'">
            <div style="font-size: 2rem;">{{item.ad_type}}{{item.money}}</div>
          </div>
          <div v-else>
            <div style="font-size: 2rem;color:#FE821B">{{item.ad_type}}{{item.money}}</div>
          </div>
        </div>
      </div>
      <div v-else>
        <div>
          <div class="shopimg" style="padding:1.3rem">
            <img src="../../assets/img/img_empty_shopping_cart.png">
          </div>
          <p style="color:#9FA4A5;font-size:1.5rem">暂时没有数据，快去逛逛吧~</p>
          <router-link to="/My">
            <div
              class="shopbut"
              style="color:#9FA4A5;font-size:1.5rm;padding:1.16rem;border:#dedede 1px solid;margin-top:1rem;border-radius: 10px;"
            >
              <p>个人中心</p>
            </div>
          </router-link>
          <router-link to="/">
            <div
              class="shopbut"
              style="color:#9FA4A5;font-size:1.5rm;padding:1.16rem;border:#dedede 1px solid;margin-top:1rem;border-radius: 10px;"
            >
              <p>立即逛逛</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Config } from "../../uitls/config";
export default {
  data() {
    return {
      de: [
        // {
        //   name: "支付宝",
        //   time: "2019-06-25 11：48：47",
        //   money: "60",
        //   st: "+"
        // },
        // {
        //   name: "微信",
        //   time: "2019-06-25 11：48：47",
        //   money: "60",
        //   st: "-"
        // }
      ]
    };
  },
  created() {
    let that = this;
    this.$axios({
      method: "get",
      url: Config.restUrl + "api/v2/user/earns",
      headers: {
        token: that.getToken
        // token: "237cf94848711e2399fa1e8c1a74a395"
      }
    }).then(res => {
      console.log(res);
      that.de = res.data.data.data;
    });
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    }
  },
  computed: {
    getToken() {
      return this.$store.getters.getToken;
    }
  }
};
</script>



<style lang="scss">
.IntegralD-header {
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
    font-size: 2.9rem;
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
.IntegralD-main {
  margin-top: 4.5rem;
  padding: 1.1rem;
  .IntegralD-main-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: #dedede solid 1px;
    padding-bottom: 0.5rem;
    padding-top: 0.8rem;
  }
}
</style>
