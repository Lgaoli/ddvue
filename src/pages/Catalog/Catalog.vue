<template>
  <div>
    <div class="Catalog-header">
      <div class="back"></div>
      <div class>我的二维码</div>
      <div class="shop"></div>
    </div>
    <div class="Catalog-main" :style="bg" v-if="calist.length">
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
      <div class="Catalog-main1" style>
        <div class="logo">
          <img src="../../assets/img/img_logo.png" alt>
        </div>
        <div class="Catalog-name">测试测试测试测试</div>
        <div class="Catalog-id">ID:123456</div>
        <div class="er">
          <div class="border border1"></div>
          <div class="border border2"></div>
          <div class="border border3"></div>
          <div class="border border4"></div>
          <div class="borderimg">
            <img
              src="http://www.wwei.cn/qrcode-viewfile?type=qrcode_text&k=xU6Nz&hash=fc351c112b29546c0e06453d17e830b3&timeout=1561516258&size=100"
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
      calist: []
    };
  },
  created() {
    let that = this;
    // var token= JSON.parse(sessionStorage.getItem("token"));
    let token = "fafa88ea62cbf9a1194121a563efcc1e";
    console.log(token);
    this.$axios({
      method: "get",
      url: "https://api.ddjingxuan.cn/api/v2/user/qr",
      headers: {
        token: token
      }
    })
      .then(res => {
        console.log(res);
        that.calist = res.data;
      })
      .catch(error => {
        if (error) {
          that.calist = "";
        }
      });
  }
};
</script>
<style lang="scss">
.Catalog-header {
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
}
.Catalog-main {
  padding: 5rem;
  margin-top: 4.5rem;
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


