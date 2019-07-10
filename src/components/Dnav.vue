<template>
  <div class="nav">
    <van-tabs @click="onClick" v-model="items.cat_id">
      <van-tab v-for="(item,index) in items" :key="index" :title="item.name" >
      </van-tab>
    </van-tabs>
  </div>
</template>
 
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";


Vue.use(Tab).use(Tabs);

export default {
  data() {
    return {
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
        // console.log(error);
      });
  },
  methods: {
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
            // console.log(that.shop);
          })
          .catch(function(error) {
            // console.log("当前没有商品");
          });
      }
    },

    cat_id() {
      return this.$store.state
    }
  }
};
</script>
<style lang="scss">
.nav {
  margin-top: 5.625rem;
}
</style>

