<template>
  <div>
    <div class="detail-header">
      <div class="back" @click="prev">
        <i class="iconfont">&#xe771;</i>
      </div>
      <div class>商品详情</div>
      <div class="shop">
        <router-link to="/shop">
          <i class="iconfont icon-htmal5icon29"></i>
        </router-link>
      </div>
    </div>

    <div class="detail-main">
      <swiper :options="swiperOption">
        <swiper-slide :key="index">
          <img
            src="http://d.wbgapp.com/uploads/20190712/6a168ea963696319d5eb719e285d9f8a.jpg"
            class="swiper-img"
          >
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination" style="text-align: right;"></div>
      </swiper>
      <div class="detail-main-main">
        <div class="shopdetall">
          <div>
            <div class="shopmoney">
              <span class="supply_price">优惠价：￥ {{money}}</span>
            </div>

            <div class="shopname">
              <p style="font-weight:600">{{goods_name}}</p>
            </div>
            <div class="goods_sales" style="padding:0.95rem">
              <div class="goods_sale_text" style="  text-decoration: line-through;">原价:{{money}}</div>
              <div class="goods_sale_text">库存量:1000</div>
              <div class="goods_sale_text">销量:10000</div>
            </div>
            <div class="detail-main-main-content" style="overflow: hidden;">
              <van-tabs v-model="active">
                <van-tab title="商品介绍">暂无数据</van-tab>
                <van-tab title="评论" style="       padding: 0.5rem;">
                  <div v-if="detilcomment.length>0">
                    <div v-for="(items,indexs) in detilcomment" :key="indexs" class="commentitems">
                      <div class="comment">
                        <div class="comment_user">
                          <div style>{{items.user.user_name}}</div>
                          <div style="color:#ccc">{{items.add_time}}</div>
                        </div>
                        <div class="comment_main">{{items.content}}</div>
                      </div>
                      <van-rate v-model="items.goods_rank" readonly/>
                    </div>
                  </div>
                  <div v-else>暂时没有商品评论</div>
                </van-tab>
              </van-tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-footer">
      <div class="detail-buy" @click="SetupCart(shopdetall1)">
        <div
          style="background: #ef7634;font-size: 1.25rem;    padding: 1.25rem;text-align: center; "
        >
          <router-link :to="{path:''}">
            <p style="color:#fff;font-size: 1.25rem;etter-spacing: 8px;">立即购买</p>
          </router-link>
        </div>
      </div>
    </div>
    <!-- <van-popup v-model="show">加入购物车成功</van-popup> -->
    <div class="pop" v-show="maskShow" @click="setMaskShow">
      <div
        style="background:#fff;padding:2.05rem;border-radius: 10px;background: rgb(239, 118, 52);color:#fff"
      >
        <div>成功加入购物车</div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs, Rate, Popup, Toast } from "vant";
import { mapState, mapActions } from "vuex";
import wx from "weixin-js-sdk";
Vue.use(Tab)
  .use(Tabs)
  .use(Rate)
  .use(Popup)
  .use(Toast);
import { Config } from "../../uitls/config";
export default {
  data() {
    return {
      swiperOption: {
        // 参数选项,显示小点
        pagination: ".swiper-pagination",
        autoplayDisableOnInteraction: false, //手动滑动之后还能自动播放
        loop: true, //循环
        autoplay: 2000, //每张播放时长3秒，自动播放
        speed: 1000 //滑动速度
        // delay:1000
      },
      detileswiper: [], //商品轮播图
      shopdetall: [], //商品信息
      shopdetall1: [], //传进购物车的商品
      detilcomment: [], //商品评论
      detail: [],
      active: 0,
      show: false,
      show1: false,
      maskShow: false,
      getdata: [],
      money: 0,
      goods_name: ""
    };
  },
  beforeCreate() {
    // var that = this;
    // this.$axios({
    //   method: "get",
    //   url: "http://d.wbgapp.com/api/v2/user/jdk",
    //   headers: {
    //     token: this.getToken
    //     // token: "4774c94460f64a01800f2672f7230f2d"
    //   },
    //   params: location.href.split("#")[0]
    //   // params: "http://pub.hqyulin.com/?token=4774c94460f64a01800f2672f7230f2d"
    // }).then(rest => {
    //   that.getdata = rest.data;
    //   console.log(that.getdata.appId);
    // });
  },
  created() {
    this.list();
    this.comment();
  },
  methods: {
    prev() {
      this.$router.go(-1);
    },
    fixUrlFormat(text) {
      let reg = new RegExp("http://api.ddjingxuan.cn/", "g");
      return text.replace(reg, "http://d.wbgapp.com/");
    },

    setMaskShow() {
      this.maskShow = !this.maskShow;
    },
    SetupCart(data) {
      this.$axios({
        //调用接口
        method: "post",
        url: Config.restUrl + "api/v2/agency/is_buy",
       data: {
          price: this.money
        },
        headers: {
          token: this.getToken
          // token: "221f8fd0ca0be03bdefccf62b1f5ff6b"
        }
      }).then(res => {
        console.log(res);
       
          
         this.$router.push({
           path: "/SetupPicking",
           query: { money: this.money }
         });
      
      }).catch(err=>{
             Toast('请勿重复购买或低于当前等级');
      });
    },
    comment() {
      this.money = this.$route.query.money;
      if (this.money) {
        if (this.money == 99) {
          this.goods_name = "黄金会员";
        } else if (this.money == 299) {
          this.goods_name = "钻石会员";
        } else if (this.money == 9680) {
          this.goods_name = "至尊合伙人";
        }
      } else {
        this.$router.push({
          path: "/Setup"
        });
      }

      // this.$axios
      //   .get(Config.restUrl + "api/v2/comment/" + this.newsID)
      //   .then(function(res) {
      //     that.detilcomment = res.data;

      //     // let alter = that.fixUrlFormat(res.data.detail.goods_content);
      //     // console.log(that.detilcomment)
      //   })
      //   .catch(function(error) {
      //     // console.log(error);
      //   });
    },

    list() {
      //   var newsID = this.$route.query.id;
      //   var that = this;
      //   this.$axios
      //     .get(Config.restUrl + "api/v2/goods/" + newsID)
      //     .then(function(res) {
      //       that.detileswiper = res.data.banner;
      //       let alter = that.fixUrlFormat(res.data.detail.goods_content);
      //       that.$set(res.data.detail, "goods_content", alter);
      //       that.shopdetall.push(res.data.detail);
      //       that.shopdetall1 = res.data.detail;
      //       that.$set(that.shopdetall1, "shopimg", that.detileswiper[0].img_url);
      //       // console.log(that.shopdetall1);
      //     })
      //     .catch(function(error) {
      //       // console.log(error);
      //     });
    }
  },
  computed: {
    goods_num() {
      return this.$store.state;
    },

    getToken() {
      return this.$store.getters.getToken;
    }
  }
};
</script>
<style lang="scss">
.pop {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}
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

.detail-main {
  margin-top: 4.5rem;
  margin-bottom: 4.4375rem;
  .swiper-container {
    height: 30.57rem;
    img {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
  }
  .vip {
    .vipmain {
      display: flex;
      justify-content: flex-start;
      padding: 0.8125rem;
      .dredge-vip {
        display: inline-block;

        border-top-left-radius: 10%;
        border-bottom-left-radius: 10%;
        p {
          color: #ffd9ad;
          font-size: 1.4375rem;
          padding: 0.89rem;
        }
      }
      .vipmain1 {
        display: inline-block;
        background: #f5f5f5;
        margin-left: -0.225rem;
        border-top-right-radius: 10%;
        border-bottom-right-radius: 10%;
        .vipmain1-T {
          color: #fc7a33;
          display: flex;
          justify-content: space-evenly;
          padding: 0.89rem;

          i {
            font-size: 1.75rem;
          }
        }
      }
    }
  }
  .shopdetall {
    padding: 1.189rem;
    .shopmoney {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .van-popup--bottom {
        text-align: center;
        .popup {
          display: flex;
          justify-content: space-around;
          align-items: center;
          text-align: center;
        }
        .close {
          padding: 1.1rem;
        }
      }
      .supply_price {
        color: #ff7441;
        font-size: 1.496rem;
        font-weight: 600;
        margin-right: 3.75rem;
      }
      .shop_price {
        color: #ccc;
        font-size: 0.65rem;
        text-decoration: line-through;
      }
    }
    .share {
      padding: 0.863rem;
      text-align: right;
      span {
        padding: 0.958rem;
        background: #dedede;
        border-radius: 6.25rem;
      }
    }
    .goods_sales {
      display: flex;
      justify-content: space-between;
      div {
        color: #ccc;
      }
    }
    .shopname {
      font-size: 1.1rem;
      padding: 0.7rem;
    }
    .detail-main-main-content {
      .comment {
        .comment_user {
          display: flex;
          justify-content: space-between;
        }
        .comment_main {
          padding: 0.3rem;
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.detail-footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #ccc;
  z-index: 999;
  background: #fff;
  .detail-footer1 {
    display: flex;
    justify-content: flex-start;
    height: 4.4375rem;
    padding: 0.625rem;
    .service {
      display: flex;
      flex: 1;
      div {
        flex: 0.4;
      }
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.25rem;
        i {
          font-size: 1.25rem;
        }
      }
    }

    .detail-buy {
      line-height: 4.4375rem;
      flex: 1;
      border: #ef7634 1px solid;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6.25rem;
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
        }
      }
    }
    a {
      height: 100%;
      display: flex;
      flex-direction: column;
      font-size: 12px;
    }
  }
}
</style>


