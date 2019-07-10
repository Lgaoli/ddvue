<template>
  <div>
    <div :class="{'cover':show}">
      <van-loading size="5.1rem" color="#1989fa" vertical>加载中...</van-loading>
    </div>

    <div class="main">
      <div class="nav">
        <van-tabs @click="onClick" v-model="selectedId">
          <van-tab v-for="(item,index) in items" :key="index" :title="item.name"></van-tab>
        </van-tabs>
      </div>
      <div v-if="selectedId=='0'">
        <div class="wrapper">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in swiperList" :key="index">
              <img :src="item.img" class="swiper-img">
            </swiper-slide>
            <div
              class="swiper-pagination"
              slot="pagination"
              style="text-align: right;  background: none"
            ></div>
          </swiper>
        </div>
        <Dsudoku></Dsudoku>
        <Dhot></Dhot>
        <Drecently></Drecently>
      </div>
      <div
        class
        v-else-if="shop.length=='0'"
        style="display:flex;justify-content: center;"
      >暂时没有此商品分类的商品</div>
      <div v-else>
        <div class="rec-list">
          <ul>
            <li class="rec-list-li" v-for="(item,index) in shop" :key="index">
              <router-link :to="{path:'/Detail',query:{id:item.goods_id}}" class="rec-list-a">
                <div class="rec-list-a1">
                  <div class="rec-list-img">
                    <img :src="item.img_url" alt>
                  </div>
                  <div class="shopss">
                    <div
                      class="rec-list-text"
                      style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp:2;-webkit-box-orient: vertical;"
                    >{{item.goods_name}}</div>

                    <div class="rec-list-buy">
                      <div class="price">
                        <span class="supply_price">￥{{item.market_price}}</span>
                        <span class="shop_price">原价:￥{{item.market_price}}</span>
                      </div>
                      <div class="buy">
                        <p style=" color: #ccc;">{{item.good_sales}}人购买</p>
                        <router-link :to="{path:'/Detail',query:{id:item.goods_id}}" class="around">
                          <img src="../assets/img/首页01_11.jpg" alt>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- <Dgotop></Dgotop> -->
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs, Popup, Loading } from "vant";
Vue.use(Tab)
  .use(Tabs)
  .use(Popup)
  .use(Loading);
import Dsudoku from "../components/Sudoku";
import Dswiper from "../components/Dswiper";
import Dgotop from "../components/Dgotop";
import Drecently from "../components/recently";
import Dhot from "../components/Dhot";
export default {
  components: {
    Dswiper,
    Dgotop,
    Drecently,
    Dsudoku,
    Dhot
  },
  data() {
    return {
      show: false,
      swiperOption: {
        // 参数选项,显示小点
        pagination: ".swiper-pagination",
        autoplayDisableOnInteraction: false, //手动滑动之后还能自动播放
        loop: true, //循环
        autoplay: 2000, //每张播放时长3秒，自动播放
        speed: 1000 //滑动速度
        // delay:1000
      },
      swiperList: [],
      hackReset: false,
      selectedId: 0,
      items: [{ name: "首页", cat_id: 0 }],
      shop: [],
      options: {
        activeColor: "#ef7634",
        // 可在这里指定labelKey为你数据里文字对应的字段
        labelKey: "name"
      }
    };
  },
  created() {
    let that = this;
    this.$axios
      .get("https://api.ddjingxuan.cn/api/v2/cate")
      .then(function(res) {
        that.items = that.items.concat(res.data);
      })
      .catch(function(error) {
        that.shop.length == "0";
        // console.log("暂时没有此商品分类的商品");
      });
    that.swiper();
  },

  mounted() {
    window.addEventListener("scroll", this.windowScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    swiper() {
      var that = this;
      this.$axios
        .get("https://api.ddjingxuan.cn/api/v2/banner")
        .then(function(res) {
          that.swiperList = res.data;

          that.show = false;
        })
        .catch(function(error) {
          that.show = true;
        });
    },
    windowScroll() {
      //滚动条距离页面顶部的距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; //原生兼容
    },
    onClick(index) {
      if (this.items[index].cat_id > 0) {
        let that = this;
        this.$axios
          .get("https://api.ddjingxuan.cn/api/v2/goods/by_category", {
            params: {
              id: this.items[index].cat_id
            }
          })
          .then(function(res) {
            that.shop = res.data;
            that.hackReset = true;
          })
          .catch(function(error) {
            that.show = false;
          });
      }
    },

    cat_id() {
      return this.$store.state;
    }
  }
};
</script>

<style lang="scss">
.cover {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.8);
}
.main {
  // margin-top: 5.625rem;
  margin-bottom: 5.625rem;
  .wrapper {
    height: 19.25rem;
    box-sizing: border-box;
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .swiper-pagination-bullet-active {
      background: #ef7634;
    }
  }
}
.rec-list {
  padding: 1.25rem;
  .rec-list-li {
    padding: 0.3125rem;
    margin-top: 0.625rem;
    border: #ccc 0.0625rem solid;
    .rec-list-a1 {
      display: flex;
      justify-content: space-between;
      .rec-list-img {
        width: 7.9375rem;
        float: left;
        img {
          width: 100%;
        }
      }
      .shopss {
        width: 21.5rem;
        font-size: 1.3rem;

        .rec-list-text {
        }

        .rec-list-buy {
          display: flex;
          justify-content: space-between;
          .price {
            padding: 0.6rem;
            .supply_price {
              color: #ff7441;
              font-size: 1.396rem;
              font-weight: 600;
            }
            .shop_price {
              color: #ccc;
              font-size: 1.25rem;
              text-decoration: line-through;
            }
          }
          .buy {
            width: 6.25rem;
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>

