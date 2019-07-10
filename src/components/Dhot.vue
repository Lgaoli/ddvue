<template>
  <div class="hot">
    <div class="hot-header">
      <img src="../assets/img/hot.png" alt>
      <span>热门单买</span>
    </div>
    <div class="hot-main">
      <ul>
        <li class="hotlist" v-for="(item,index) in hotlist" :key="index">
          <router-link :to="{path:'/Detail',query:{id:item.goods_id}}" class="rec-list-a">
            <div class="hot-img">
              <img :src="item.img_url" alt>
            </div>
            <div class="hot-main-main">
              <p>{{item.goods_name}}</p>
              <div class="hot-money">
                <span
                  style="color: #ff7441;font-weight:600;font-size:1.25rem"
                >￥{{item.market_price}}</span>
                <span style="text-decoration:line-through;color:#ccc">￥{{item.market_price}}</span>
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
      hotlist: []
    };
  },
  created() {
    var that = this;
    this.$axios
      .get("https://api.ddjingxuan.cn/api/v2/goods/hot")
      .then(function(res) {
   
        that.hotlist = res.data;
      })
      .catch(function(error) {
        // console.log(error);
      });
  },
  methods: {}
};
</script>
<style lang="scss">
.hot {
  padding: 1.25rem;
  .hot-header {
    padding-bottom: 1rem;
    height: 2.375rem;
    line-height: 2.375rem;
    display: inline-block;
    img {
      width: 2.4375rem;
      /* height: 2.375rem; */
      height: 100%;
    }
  }
  .hot-main {
    width: 100%;

    ul {
      display: flex;
      justify-content: space-around;
      .hotlist {
        padding: 0.5125rem;
        border: 1px #ccc solid;
        margin-right: 0.5125rem;
        border-radius: 10px;
        .hot-img {
          width: 7.5625rem;
          height: 8.5625rem;

          img {
            width: 100%;
            box-sizing: border-box;
          }
        }
        .hot-main-main {
          p {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .hot-money {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>
