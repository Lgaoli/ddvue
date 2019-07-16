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
            <div class="tab-content" v-if="active==0">
              <div class="teamnum">团队列表(总数{{contentall.length}})</div>
              <div class="content" v-for="(conitem,conindex) in contentall" :key="conindex">
                <div class="img">
                  <img :src="conitem.headerimg">
                </div>
                <div style="padding:.3rem">
                  <div
                    style="font-size: 1.5rem;font-weight: 600;color:#333;    margin-bottom: 0.3rem;"
                  >{{conitem.name}}</div>
                  <div class="text" style="font-size:1rem;color:#999999">
                    <p v-if="conitem.grade=='0'">等级：普通会员</p>
                    <p v-else>等级：没有会员</p>
                    <p>{{conitem.phone}}</p>
                    <p>{{conitem.time}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-content" v-else-if="active==1">
              <div v-for="(conitem,conindex) in contentall" :key="conindex">内容1</div>
            </div>
            <div class="tab-content" v-else-if="active==2">
              <div v-for="(conitem,conindex) in contentall" :key="conindex">内容2</div>
            </div>
            <div class="tab-content" v-else-if="active==3">
              <div v-for="(conitem,conindex) in contentall" :key="conindex">内容3</div>
            </div>
            <div class="tab-content" v-else-if="active==4">
              <div v-for="(conitem,conindex) in contentall" :key="conindex">内容4</div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
      <div class="Order-main-main-shop-list" v-else-if="act1==1">
        <van-tabs v-model="active">
          <van-tab v-for="(item,index) in directtabs" :key="index">
            <div class="tab-title" slot="title" @click="onClick(item)">{{ item.title }}</div>
            <div class="tab-content">{{ item.content }}</div>
          </van-tab>
        </van-tabs>
      </div>
      <div class="Order-main-main-shop-list" v-else-if="act1==2">
        <van-tabs v-model="active">
          <van-tab v-for="(item,index) in indirecttabs" :key="index">
            <div class="tab-title" slot="title" @click="onClick(item)">{{ item.title }}</div>
            <div class="tab-content"></div>
          </van-tab>
        </van-tabs>
      </div>
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
        { id: "1", title: "普通会员", content: "全部普通会员内容" },
        { id: "2", title: "代言人", content: "全部代言人内容" },
        { id: "3", title: "店长", content: "全部店长内容" },
        { id: "4", title: "资深店长", content: "全部资深店长内容" }
      ],
      directtabs: [
        { id: "0", title: "全部", content: "直推全部内容" },
        { id: "1", title: "普通会员", content: "直推普通会员内容" },
        { id: "2", title: "代言人", content: "直推代言人内容" },
        { id: "3", title: "店长", content: "直推店长内容" },
        { id: "4", title: "资深店长", content: "直推资深店长内容" }
      ],
      indirecttabs: [
        { id: "0", title: "全部", content: "间推全部内容" },
        { id: "1", title: "普通会员", content: "间推普通会员内容" },
        { id: "2", title: "代言人", content: "间推代言人内容" },
        { id: "3", title: "店长", content: "间推店长内容" },
        { id: "4", title: "资深店长", content: "间推资深店长内容" }
      ],
      act1: "0",
      active: "0",
      contentall: [
        {
          headerimg:
            "https://api.ddjingxuan.cn/uploads/20190514/f0b80422a275b3f74b3bb1ec30345f7f.jpg",
          name: "安其拉",
          grade: "0",
          phone: "123467989",
          time: "2018-09-01"
        },
        {
          headerimg:
            "https://api.ddjingxuan.cn/uploads/20190514/f0b80422a275b3f74b3bb1ec30345f7f.jpg",
          name: "安其拉1",
          grade: "0",
          phone: "123467989",
          time: "2018-09-01"
        },
        {
          headerimg:
            "https://api.ddjingxuan.cn/uploads/20190514/f0b80422a275b3f74b3bb1ec30345f7f.jpg",
          name: "安其拉2",
          grade: "1",
          phone: "123467989",
          time: "2018-09-01"
        }
      ]
    };
  },
  created() {},
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    selected(index) {
      this.act1 = index;
    },
    onClick(item) {
      console.log(item);
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
  .tab-content {
    background: #fff;
    padding: 1rem;
    .content {
      display: flex;
      align-items: center;
      padding-bottom: 1.1rem;
      border-bottom: #dedede 1px solid;
      .img {
        width: 7.3rem;
        img {
          width: 100%;
        }
      }
    }
    .teamnum {
      color: #ccc;
      border-bottom: #ccc 1px solid;
      padding-bottom: 1.1rem;
    }
  }
}
</style>

