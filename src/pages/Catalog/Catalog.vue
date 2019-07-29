<template>
  <div>
    <!-- <div class="Catalog-header">
      <div class="back"></div>
      <div class>我的二维码</div>
      <div class="shop"></div>
    </div> -->
    <div class="Catalog-main" :style="bg" v-if="is_qrcode===1">
      <div
        style="
    padding-top: 0.5rem;
    padding-right: 1.3rem;
    padding-bottom: 0.5rem;
    padding-left: 1.3rem;
"
      >
        <p style="padding:0.3rem;color:#fff">长按图片，保存二维码图片到手机上，使用二维码进行推广！</p>
      </div>
      <div class="Catalog-main1" style >
        <div class="logo">
          <img src="../../assets/img/img_logo.png" alt>
        </div>
        <div class="Catalog-name">{{nickname}}</div>
        <div class="Catalog-id">ID:{{user_id}}</div>
        <div class="er">
          <div class="border border1"></div>
          <div class="border border2"></div>
          <div class="border border3"></div>
          <div class="border border4"></div>
          <div class="borderimg">
           
            <img
              :src= qrcode
              alt
            >
          </div>
        </div>
      </div>
    </div>
    <div v-else style="padding:10rem;    text-align: center;">
      <div>
        <div class="shopimg" style="padding:1.3rem">
          <img src="../../assets/img/img_no_message.png">
        </div>
        <p style="color:#9FA4A5;font-size:1.5rem">请先成为代理</p>
        <router-link to="/My">
          <div
            class="shopbut"
            style="color:#9FA4A5;font-size:1.5rm;padding:1.16rem;border:#dedede 1px solid;margin-top:1rem;border-radius: 10px;"
          >
            <p>成为代理</p>
          </div>
        </router-link>
      </div>
    </div>
    <Dfooter :activeIndex="2"></Dfooter>
  </div>
</template>

<script>
import Dfooter from "../../components/Dfooter";
export default {
  components: {
    Dfooter
  },
  data() {
    return {
      bg: {
        backgroundImage:
          "url(" + require("../../assets/img/bg_img_integral.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      headimgurl:'',
      is_qrcode:'',
      nickname:'',
      qrcode:'',
      user_id:''
    };
  },
  created() {
    let that = this;
    // var token= JSON.parse(sessionStorage.getItem("token"));
    // let token = "fafa88ea62cbf9a1194121a563efcc1e";

    this.$axios({
      method: "get",
      url: "http://d.wbgapp.com/api/v2/user/qr",
      headers: {
        token: that.getToken
        // token: "221f8fd0ca0be03bdefccf62b1f5ff6b"
      }
    })
      .then(res => {

        that.headimgurl=res.data.headimgurl ;
        that.is_qrcode=res.data.is_qrcode
        that.nickname=res.data.nickname
        that.qrcode=res.data.qrcode
        that.user_id=res.data.user_id
        console.log(that)
        
      })
     ;
  },
  computed: {
    getToken() {
      return this.$store.getters.getToken;
    }
  }
};
</script>
<style lang="scss">

.Catalog-main {
  padding: 5rem;

  text-align: center;
  .Catalog-main1 {
    padding: 1.25rem;
    background-color: #fff;
    border-radius: 20px;
    .Catalog-name {
      margin: 0.625rem;
    }
    .Catalog-id {
      margin: 0.625rem;
    }
    .er {
      .borderimg {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      margin-left: 0.5rem;
      width: 23.8125rem;
      height: 23.8125rem;

      position: relative;
      .border {
        position: absolute;
        width: 20px;
        height: 20px;
      }
      .border1 {
        top: 0;
        left: 0;
        border-left: 2px solid #ff7b58;
        border-top: 3px solid #ff7b58;
      }
      .border2 {
        top: 0;
        right: -2px;
        border-right: 2px solid #ff7b58;
        border-top: 3px solid #ff7b58;
      }
      .border3 {
        bottom: 0;
        left: 0;
        border-bottom: 3px solid #ff7b58;
        border-left: 2px solid #ff7b58;
      }
      .border4 {
        bottom: 0;
        right: -2px;
        border-right: 2px solid #ff7b58;
        border-bottom: 3px solid #ff7b58;
      }
    }
  }
}
</style>


