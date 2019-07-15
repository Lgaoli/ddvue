<template>
  <div>
    <div class="team-header">
      <div class="back" @click="back">
        <i class="iconfont" style="font-size: 2.9rem;\">&#xe79b;</i>
      </div>
      <div class>我的团队</div>
      <div class="shop"></div>
    </div>
    <div class="team-main">
      <div class="team-main-header">
        <ul>
          <li
            class="act"
            v-for="(item,index) in wpList"
            :key="index"
            :class="{act1 : act1 == index}"
            @click="selected(index)"
          >
            <div class="text">{{item.name}}</div>
          </li>
        </ul>
      </div>
      <div class="Order-main-main-shop-list" v-if="act1==0">
        <van-tabs v-model="active">
          <van-tab v-for="(item,index) in tabs" :key="index">
            <div class="tab-title" slot="title" @click="onClick(item)">{{ item.title }}</div>
            <div class="tab-content">{{ item.content }}</div>
          </van-tab>
        </van-tabs>
      </div>
      <div class="Order-main-main-shop-list" v-else-if="act1==1">内容2</div>
      <div class="Order-main-main-shop-list" v-else-if="act1==2">内容3</div>
    </div>
  </div>
</template>
<script>
import { Tab, Tabs } from "vant";
import Vue from "vue";
Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      wpList: [
        { id: 0, name: "全部" },
        { id: 1, name: "直推" },
        { id: 2, name: "间推" }
      ],
      tabs: [
        { id: "0", title: "全部", content: "全部内容" },
        { id: "1", title: "普通会员", content: "普通会员内容" },
        { id: "2", title: "代言人", content: "代言人内容" },
        { id: "3", title: "店长", content: "店长内容" },
        { id: "4", title: "资深店长", content: "资深店长内容" }
      ],
      act1: "0",
      active: "0"
    };
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    selected(index) {
      this.act1 = index;
    },
    onClick(item) {
      console.log(item)
      // this.active = index;
    }
  }
};
</script>
<style lang="scss">
.team-header {
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
.team-main {
  background: #f7f7f7;
  margin-top: 4.5rem;
  .team-main-header {
    background: #f7f7f7;

    ul {
      display: flex;
      justify-content: space-around;
      .act {
        border-bottom: #f7f7f7 2px solid;
        .text {
          padding: 0.704rem 0 0.704rem 0;
          font-size: 1.269333rem;
        }
      }
      .act1 {
        border-bottom: #f15e0e 2px solid;
        color: #f15e0e;
      }
    }
  }
}
</style>

