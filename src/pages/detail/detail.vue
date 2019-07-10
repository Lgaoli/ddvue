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
        <swiper-slide v-for="(item,index) in detileswiper" :key="index">
          <img :src="item.img_url" class="swiper-img">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination" style="text-align: right;"></div>
      </swiper>
      <div class="detail-main-main">
        <div class="vip" style="background:#fafafa">
          <div class="vipmain">
            <div class="dredge-vip" style="background:#fb7c37">
              <p>开通会员</p>
            </div>
            <div class="vipmain1">
              <div class="vipmain1-T">
                <div class="vipmain1-text" style="    padding-right:7.625rem;">
                  <p>立马享受最高5.8折优惠</p>
                </div>
                <div class="vipmain1-text1">
                  <i class="iconfont">&#xe632;</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="shopdetall">
          <div v-for="(items,indexs) in shopdetall" :key="indexs">
            <div class="shopmoney">
              <span class="supply_price">优惠价：￥ {{items.market_price}}</span>
              <div class="share" @click="show1=true">
                <span>
                  <i class="iconfont">&#xe63e;</i>
                  分享
                </span>
              </div>
              <van-popup v-model="show1" position="bottom" :overlay="true">
                <div>
                  <div class="popup" style="text-aligh:center;padding:0.8rem">
                    <div style @click="sharefriend">
                      <img
                        src="../../assets/img/share_ic_weixin.png"
                        alt
                        style="  width: 4.6875rem;height:4.6875rem"
                      >
                      <p style="padding:1.2rem">微信好友</p>
                    </div>
                    <div style="background:rgb(247, 247, 247);height:8.6rem;width:0.19rem"></div>
                    <div @click="sharefriendqs">
                      <img
                        src="../../assets/img/share_ic_moments.png"
                        style="  width: 4.6875rem;height4.6875rem"
                      >
                      <p style="padding:1.2rem">微信朋友圈</p>
                    </div>
                  </div>
                  <div style="width:100%;
          height: 0.6rem;
          background:#f7f7f7"></div>
                  <div class="close" @click="show1=false">取消</div>
                </div>
              </van-popup>
            </div>

            <div class="shopname">
              <p style="font-weight:600">{{items.goods_name}}</p>
            </div>
            <div class="goods_sales" style="padding:0.95rem">
              <div
                class="goods_sale_text"
                style="  text-decoration: line-through;"
              >原价:{{items.market_price}}</div>
              <div class="goods_sale_text">库存量:{{items.store_count}}</div>
              <div class="goods_sale_text">销量:{{items.good_sales}}</div>
            </div>
            <div class="detail-main-main-content" style="overflow: hidden;">
              <van-tabs v-model="active">
                <van-tab title="商品介绍" v-html="items.goods_content"></van-tab>
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
      <div class="detail-footer1">
        <div class="service">
          <div class="service1">
            <a>
              <i class="iconfont">&#xe61c;</i>
              <span>客服</span>
            </a>
          </div>
          <div class="collect">
            <a>
              <i class="iconfont">&#xe613;</i>
              <span>收藏</span>
            </a>
          </div>
        </div>
        <div class="detail-buy">
          <div @click="setMaskShow">
            <div
              @click="addCart(shopdetall1)"
              style="border-top-left-radius: 6.25rem; border-bottom-left-radius: 6.25rem;font-size: 1.25rem;"
            >
              <p>加入购物车</p>
            </div>
          </div>

          <div
            style=" border-top-right-radius: 6.25rem;border-bottom-right-radius: 6.25rem;background: #ef7634;font-size: 1.25rem; "
          >
            <router-link :to="{path:'/shop'}">
              <p style="color:#fff;font-size: 1.25rem;">立即购买</p>
            </router-link>
          </div>
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
import { Tab, Tabs, Rate, Popup } from "vant";
import { mapState, mapActions } from "vuex";

Vue.use(Tab)
  .use(Tabs)
  .use(Rate)
  .use(Popup);

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
      getdata: []
    };
  },
  beforeCreate() {
    var that = this;
    this.$axios({
      method: "get",
      url: "https://api.ddjingxuan.cn/api/v2/user/jdk",
      headers: {
        token: this.getToken
        // token: "4774c94460f64a01800f2672f7230f2d"
      },
      params: location.href.split("#")[0]
      // params: "http://pub.hqyulin.com/?token=4774c94460f64a01800f2672f7230f2d"
    }).then(rest => {
      that.getdata = rest.data;
      console.log(that.getdata.appId);
    });
  },
  created() {
    this.list();
    this.comment();
  },
  methods: {
    prev() {
      this.$router.go(-1);
    },
    //分享朋友
    sharefriend() {
      this.$axios({
        method: "get",
        url: "https://api.ddjingxuan.cn/api/v2/user/jdk",
        headers: {
          token: this.getToken
          // token: "4774c94460f64a01800f2672f7230f2d"
        },
        params: location.href.split("#")[0]
        // params: "http://pub.hqyulin.com/?token=4774c94460f64a01800f2672f7230f2d"
      }).then(shareres => {
        console.log(shareres);
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: appId, // 必填，公众号的唯一标识
          timestamp: timestamp, // 必填，生成签名的时间戳
          nonceStr: nonceStr, // 必填，生成签名的随机串
          signature: signature, // 必填，签名，见附录1
          jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
        });
      });
      console.log("分享朋友");
    },
    //分享朋友圈
    sharefriendqs() {
      console.log("分享朋友圈");
    },
    setMaskShow() {
      this.maskShow = !this.maskShow;
    },
    addCart(data) {
      this.$store.commit("addCart", data);
    },
    comment() {
      var newsID = this.$route.query.id;
      var that = this;
      this.$axios
        .get("https://api.ddjingxuan.cn/api/v2/comment/" + newsID)
        .then(function(res) {
          that.detilcomment = res.data;
          // console.log(that.detilcomment)
        })
        .catch(function(error) {
          // console.log(error);
        });
    },

    list() {
      var newsID = this.$route.query.id;
      var that = this;
      this.$axios
        .get("https://api.ddjingxuan.cn/api/v2/goods/" + newsID)
        .then(function(res) {
          that.detileswiper = res.data.banner;
          that.shopdetall.push(res.data.detail);
          that.shopdetall1 = res.data.detail;
          that.$set(that.shopdetall1, "shopimg", that.detileswiper[0].img_url);
          // console.log(that.shopdetall1);
        })
        .catch(function(error) {
          // console.log(error);
        });
    }
  },
  computed: {
    goods_num() {
      return this.$store.state;
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


