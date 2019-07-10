<template>
  <div>
    <div class="search-header">
      <div class="back">
        <router-link to="/">
          <i class="iconfont">&#xe771;</i>
        </router-link>
      </div>
      <div class="search-m" style="padding:0.95rem; ">
        <div
          style="border: 1px solid rgb(204, 204, 204);border-radius: 20px;overflow: hidden;display: flex;
    align-items: center;"
        >
          <i class="iconfont">&#xe601;</i>
          <input type="text" @input="search($event)" name id style>
        </div>
      </div>
      <div class="shop">
        <router-link to="/shop">
          <i class="iconfont icon-htmal5icon29"></i>
        </router-link>
      </div>
    </div>
    <div class="search-main">
      <div v-if="searchshop.length=='0'">暂无此商品</div>
      <div v-else>
        <div class="rec-list">
          <ul>
            <li class="rec-list-li" v-for="(item,index) in searchshop" :key="index">
              <router-link :to="{path:'/Detail',query:{id:item.goods_id}}" class="rec-list-a">
                <div class="rec-list-a1">
                  <div class="rec-list-img">
                    <img :src="item.img_url" alt>
                  </div>
                  <div class="shopss">
                    <div class="rec-list-text">
                      <p style="font-weight: 600;">{{item.goods_name}}</p>
                    </div>

                    <div class="rec-list-buy">
                      <div class="price">
                        <span class="supply_price">￥{{item.market_price}}</span>
                        <span class="shop_price">原价:￥{{item.market_price}}</span>
                      </div>
                      <div class="buy">
                        <p style=" color: #ccc;">{{item.good_sales}}人购买</p>
                        <router-link :to="{path:'/Detail',query:{id:item.goods_id}}" class="around">
                          <img src="../../assets/img/首页01_11.jpg" alt>
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
    </div>
  </div>
</template>
<script>
import Dheader from "../../components/Dheader";
export default {
  data() {
    return {
      searchshop: []
    };
  },
  components: {
    Dheader
  },
  methods: {
    search(event) {
      let that = this;

      if (event.currentTarget.value.length > 0) {
        this.$axios
          .get(
            "https://api.ddjingxuan.cn/api/v2/goods/search?keyword=" +
              event.currentTarget.value
          )
          .then(function(res) {
            that.searchshop = res.data;
            // console.log(that.searchshop);
          })
          .catch(function(error) {
            that.searchshop.length == "0";
          });
      } else {
      }
    }
  }
};
</script>
<style lang="scss">
.search-header {
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  height: 4.5rem;

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
.search-main {
  margin-top: 4.5rem;
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
            height: 3rem;
            p {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
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
}
</style>


