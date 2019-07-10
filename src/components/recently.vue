<template>
  <div class="recently">
    <div class="recently-header">
      <div class="recently-header1">
        <img src="../assets/img/今日推荐.png" alt>
        <p class="rec-title">今日推荐</p>
      </div>
      <div class="rec-more">更多</div>
    </div>
    <div class="rec-list">
      <ul>
        <li class="rec-list-li" v-for="(item,index) in recentlylist" :key="index">
          <router-link :to="{path:'/Detail',query:{id:item.goods_id}}" class="rec-list-a">
            <div class="rec-list-a1">
              <div class="rec-list-img">
                <img :src="item.img_url" alt>
              </div>
              <div class="shopss">
                <div
                  class="rec-list-text"
                  style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp:2;-webkit-box-orient: vertical;"
                >{{item.goods_name}}
                </div>
                <div class="rec-list-buy">
                  <div class="price">
                    <span class="supply_price">￥{{item.market_price}}</span>
                    <span class="shop_price">原价:￥{{item.market_price}}</span>
                  </div>
                  <div class="buy">
                    <p>{{item.good_sales}}人购买</p>
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
</template>

<script>
export default {
  data() {
    return {
      recentlylist: []
    };
  },
  created() {
    var that = this;
    this.$axios
      .get("https://api.ddjingxuan.cn/api/v2/goods/recent")
      .then(function(res) {
        that.recentlylist = res.data;
      })
      .catch(function(error) {
        // console.log(error);
      });
  },
  methods: {}
};
</script>
<style lang="scss">
.recently {
  margin-bottom: 4.625rem;
  .rec-list {
    .rec-list-li {
      margin-top: 0.625rem;
      border: #ccc 0.0625rem solid;
      .rec-list-a {
        width: 100%;

        .rec-list-a1 {
          display: flex;
          justify-content: space-around;
          padding: 0.3125rem;
          .rec-list-img {
            width: 7.9375rem;
            float: left;
            img {
              width: 100%;
            }
          }
          .shopss {
            width: 21.5rem;
            .rec-list-text {
            }

            .rec-list-buy {
              display: flex;
              justify-content: space-between;
              .price {
                .supply_price {
                  color: #ff7441;
                  font-size: 1.396rem;
                  font-weight: 600;
                }
                .shop_price {
                  color: #ccc;
                  font-size: 0.65rem;
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
  .recently-header {
    padding: 1.25rem 1.25rem 0 1.25rem;
    .recently-header1 {
      height: 2.375rem;
      line-height: 2.375rem;
      display: inline-block;
      img {
        width: 2.4375rem;
        height: 2.375rem;
      }
      p {
        display: inline;
        font-size: 1.125rem;
      }
    }
  }

  .rec-more {
    display: inline-block;
    font-size: 13px;
    color: #ccc;
    float: right;
    padding: 0.3125rem;
  }
}
</style>


