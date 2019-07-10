<template>
  <div>
    <div class="call-header">
      <div class="back">
        <router-link to="/shippingAddress">
          <i class="iconfont">&#xe771;</i>
        </router-link>
      </div>
      <div class>绑定手机</div>
      <div class></div>
    </div>
    <div class="call-main" style="margin-top: 4.5rem;">
      <div style="width:100%;
          height: 1.3rem;
          background:#f7f7f7"></div>
      <div>
        <div style="border-bottom: 1px solid #DEDEDE">
          <div class="call-main-header" style="padding:1.25rem">请绑定手机</div>
        </div>
        <div>
          <div style="padding-top:1.25rem;padding-right: 1.25rem;padding-left: 1.25rem;">
            <div
              style="padding-bottom:1.25rem;padding-right: 1.25rem;padding-left: 1.25rem;;border-bottom: 1px solid #DEDEDE"
            >
              <van-row type="flex">
                <van-col span="6">手机号</van-col>
                <van-col span="6">
                  <input type="text" placeholder="请输入手机号码" v-model="phone">
                </van-col>
                <van-col span="6"></van-col>
              </van-row>
            </div>
          </div>
          <div style="padding-top: 1.25rem;padding-right: 1.25rem;padding-left: 1.25rem;">
            <div
              class="login_list"
              style="padding-bottom:1.25rem;padding-right: 1.25rem;padding-left: 1.25rem;;border-bottom: 1px solid #DEDEDE"
            >
              <span class="login_title">短信验证码：</span>
              <input class="auth_input" type="text" placeholder="输入验证码" v-model="phones">
              <span v-show="sendAuthCode" class="auth_text" @click="getAuthCode">获取验证码</span>
              <span v-show="!sendAuthCode" class="auth_text">
                <span class="auth_text_blue">{{auth_time}}</span> 秒后重试
              </span>
            </div>
          </div>
        </div>

        <div style="padding:1.25rem;">
          <div style="padding-right: 1.25rem;padding-bottom: 1.25rem;padding-left: 1.25rem;">
            <div
              style="padding:1.25rem;background-color:#F15E0E;border-radius:10px"
              @click="submit"
            >
              <div style="color:#fff;text-align: center;">
                <p>绑定手机号码</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Row, Col, Toast } from "vant";
Vue.use(Row)
  .use(Col)
  .use(Toast);
export default {
  data() {
    return {
      sendAuthCode: true /*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */,
      auth_time: 0 /*倒计时 计数器*/,
      phone: "",
      phones: ""
    };
  },
  computed: {
    getToken() {
      return this.$store.getters.getToken;
    }
  },
  methods: {
    getAuthCode() {
      this.sendAuthCode = false;
      this.auth_time = 60;
      // console.log(this.phone * 1);
      let url = "https://api.ddjingxuan.cn/api/v2/send/code";
      let data = {
        phone: this.phone * 1,
        type: "2"
      };
      this.$axios
        .post(url, data)
        .then(res => {
          // console.log(res); //返回的数据
        })
        .catch(err => {});
      var auth_timetimer = setInterval(() => {
        this.auth_time--;
        if (this.auth_time <= 0) {
          this.sendAuthCode = true;
          clearInterval(auth_timetimer);
        }
      }, 1000);
    },

    submit() {
      // console.log(this.phones);
      var that = this;
      this.$axios({
        method: "post",
        url: "https://api.ddjingxuan.cn/api/v2/user/bind",
        data: {
          code_phone: this.phone,
          code_yzm: this.phones
        },
        headers: {
          token: that.getToken
        }
      })
        .then(response => {
          // console.log(response);
          Toast.fail(error.msg);
        })
        .catch(error => {
          // console.log(1); //错误信息
          Toast.fail(error.msg);
        });
    }
  }
};
</script>


<style lang="scss" scoped>
.call-header {
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
.call-main {
  .login_list {
    display: flex;
    .auth_text {
      color: #fe811a;
    }
  }
}
</style>

