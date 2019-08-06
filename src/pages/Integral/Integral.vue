<template>
  <div style="background:#fff">
    <div class="Integral-header">
      <div class="back" @click="back">
        <i class="iconfont" style="
    font-size: 2.9rem;
">&#xe79b;</i>
      </div>
      <div class>我的积分</div>
      <div class="shop"></div>
    </div>
    <div class="Integral-main">
      <div v-if="money">
        <div v-for="(item,index) in money" :key="index">
          <div class="Integral-main-header" :style="bg" >
            <div style="text-align: right;">
              <router-link :to="{ path:'/IntegralDetail' }">
                <span
                  style="padding:0.1rem 0.8rem;border:1px solid #fff;    border-radius: 50px;color:#fff"
                >积分明细</span>
              </router-link>
            </div>
            <div style="text-align: center;">
              <p>我的余额（积分）</p>

              <div style="padding:1.25rem;font-size:4rem;    font-weight: 700;">
                <p>{{item.money}}</p>
              </div>
              <div style="padding:1.25rem">
                <span style="padding:0.3rem 3rem;border:1px solid #fff;    border-radius: 50px;">可提现</span>
              </div>
            </div>
          </div>
          <div class="Integral-main-main">
            <div>
              <p>{{item.total_income}}</p>
              <p style="font-size:1.3rem;color:#666666">累计收入</p>
            </div>
            <div style="width:1px;background:#999999"></div>
            <div>
              <p>{{item.today_income}}</p>
              <p style="font-size:1.3rem;color:#666666">今日收入</p>
            </div>
          </div>
          <div class="Integral-main-footer">
            <p style="
    line-height: 1.8rem;
">
              备注说明：复销规则，新购买一件商品，可以总计获取
              1500的收益，收益达到1500后没继续购买不再产生收
              益！重新偶买订单后有收益产生，代理商不受此规则限
              制。
            </p>
            <router-link :to="{ path:'/IntegralExplain' }">
              <div style="margin-top: 130px;
    text-align: center;color:#495587">
                <p>提现说明</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <div v-else style="padding:10rem;    text-align: center;">
        <div>
          <div class="shopimg" style="padding:1.3rem">
            <img src="../../assets/img/img_empty_shopping_cart.png">
          </div>
          <p style="color:#9FA4A5;font-size:1.5rem">暂时无数据，快去逛逛吧~</p>
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
import {Config} from '../../uitls/config'
export default {
  data() {
    return {
      bg: {
        backgroundImage:
          "url(" + require("../../assets/img/bg_ing_mime.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      money: []
    };
  },
  computed: {
    getToken() {
      return this.$store.getters.getToken;
    }
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    }
  },
  created() {
    let that = this;
    this.$axios({
      method: "get",
      url: Config.restUrl + "api/v2/user/money",
      headers: {
        token: that.getToken
        // token: "237cf94848711e2399fa1e8c1a74a395"
      }
    }).then(res => {
       console.log(res)
      this.$set(that.money,'money',res.data.money)
      this.$set(that.money,'today_income',res.data.today_income)
      this.$set(that.money,'total_income',res.data.total_income)  
      console.log(that.money)
     
    });
  }
};
</script>
<style lang="scss">
.Integral-header {
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
.Integral-main {
  margin-top: 4.5rem;
  .Integral-main-header {
    padding: 1.25rem;
    color: #fff;
  }
  .Integral-main-main {
    background: #feefe2;
    padding: 1.25rem;
    display: flex;
    justify-content: space-around;
    font-size: 2.125rem;
    text-align: center;
  }
  .Integral-main-footer {
    padding: 1.25rem;
  }
}
</style>
