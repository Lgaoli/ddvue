<template>
  <div>
    <div class="Setup-header">
      <div class="back" @click="back">
        <i class="iconfont" style="font-size: 2.9rem;\">&#xe79b;</i>
      </div>
      <div class>我要开店</div>
      <div class="shop"></div>
    </div>
    <div class="Setup-main">
      <!-- <div v-if="Setuplist.length==0">商品不存在</div> -->

      <div>
        <router-link :to="{path:'/SetupDetail',query:{money:99}}" class="rec-list-a">
          <div style="border-bottom:1px solid #DEDEDE">
            <div class="Setup-main-img" style="padding:1.5rem 0px 0rem">
              <img
                src="http://d.wbgapp.com/uploads/20190712/6a168ea963696319d5eb719e285d9f8a.jpg"
                alt
                style="width: 100%;border-radius: 5px;"
              >
            </div>
            <div class="Setup-main-text" style="padding:0.8rem 0">
              <div style="padding:.8rem 0">黄金会员</div>
              <div
                style="display: flex;justify-content: space-between;align-items: center;justify-items: center;"
              >
                <div style="color:#EF7634">￥99</div>
                <div style="color: #fff;background: #F15E0E;padding:.3rem;border-radius: 5px;">
                  <p>立即购买</p>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div>
        <router-link :to="{path:'/SetupDetail',query:{money:299}}" class="rec-list-a">
          <div style="border-bottom:1px solid #DEDEDE">
            <div class="Setup-main-img" style="padding:1.5rem 0px 0rem">
              <img
                src="http://d.wbgapp.com/uploads/20190712/6a168ea963696319d5eb719e285d9f8a.jpg"
                alt
                style="width: 100%;border-radius: 5px;"
              >
            </div>
            <div class="Setup-main-text" style="padding:0.8rem 0">
              <div style="padding:.8rem 0">钻石会员</div>
              <div
                style="display: flex;justify-content: space-between;align-items: center;justify-items: center;"
              >
                <div style="color:#EF7634">￥299</div>
                <div style="color: #fff;background: #F15E0E;padding:.3rem;border-radius: 5px;">
                  <p>立即购买</p>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div>
        <router-link :to="{path:'/SetupDetail',query:{money:9680}}" class="rec-list-a">
          <div style="border-bottom:1px solid #DEDEDE">
            <div class="Setup-main-img" style="padding:1.5rem 0px 0rem">
              <img
                src="http://d.wbgapp.com/uploads/20190712/6a168ea963696319d5eb719e285d9f8a.jpg"
                alt
                style="width: 100%;border-radius: 5px;"
              >
            </div>
            <div class="Setup-main-text" style="padding:0.8rem 0">
              <div style="padding:.8rem 0">至尊合伙人</div>
              <div
                style="display: flex;justify-content: space-between;align-items: center;justify-items: center;"
              >
                <div style="color:#EF7634">￥9680元</div>
                <div style="color: #fff;background: #F15E0E;padding:.3rem;border-radius: 5px;">
                  <p>立即购买</p>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { Config } from "../../uitls/config";
export default {
  data() {
    return {
      Setuplist: []
    };
  },
  created() {
    let that = this;
    this.$axios({
      method: "get",
      url: Config.restUrl + "api/v2/goods/grade"
    })
      .then(res => {
        that.Setuplist = res.data;
      
      })
      .catch(err => {
        if (err.error_code) {
          that.Setuplist = "";
        }
      });
  },
  methods: {
    back() {
     this.$router.push({
        path: "/"
    
      })
    }
  },  beforeCreate() {
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
        // that.$router.push({ path: "/My" })
      },
      function(error) {
        that.$router.push({ path: "/Call" });
      }
    );
  },
};
</script>

<style lang="scss">
.Setup-header {
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
.Setup-main {
  margin-top: 4.5rem;
  padding: 0 1.3rem;
}
</style>
