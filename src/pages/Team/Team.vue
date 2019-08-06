<template>
  <div>
    <!-- <div class="team-header">
      <div class="back" @click="back">
        <i class="iconfont" style="font-size: 2.9rem;\">&#xe79b;</i>
      </div>
      <div class>我的团队</div>
      <div class="shop"></div>
    </div>
    -->
    <div class="team-main">
      <!-- <div class="team-main-header">
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
      </div>-->
      <div class="Order-main-main-shop-list">
        <!-- <van-tabs v-model="active">
          <van-tab v-for="(item,index) in tabs" :key="index">
            <div class="tab-title" slot="title" @click="onClick(item)">{{ item.name }}</div>
            <div class="tab-content" v-if="active==0">
              <div class="teamnum">团队列表(总数{{contentall.length}})</div>
              <div class="content" v-for="(conitem,conindex) in contentall" :key="conindex">
                <div class="img">
                  <img :src="conitem.headimgurl">
                </div>
                <div style="padding:.3rem">
                  <div
                    style="font-size: 1.5rem;font-weight: 600;color:#333;    margin-bottom: 0.3rem;"
                  >{{conitem.nickname}}</div>
                  <div class="text" style="font-size:1rem;color:#999999">
                    <div v-if="conitem[index].user==null">
                      <div v-if="conitem.user.grade==7">等级：普通会员</div>
                      <div v-else-if="conitem.user.grade==6">等级：黄金会员</div>
                      <div v-else-if="conitem.user.grade==5">等级：钻石会员</div>
                      <div v-else-if="conitem.user.grade==4">等级：至尊合伙人</div>
                      <div v-else-if="conitem.user.grade==3">等级：区代理</div>
                      <div v-else-if="conitem.user.grade==2">等级：市级代理</div>
                      <div v-else-if="conitem.user.grade==1">等级：省级代理</div>
                    </div>
                    <div v-else>暂无数据</div>
                    <p>{{conitem.phone}}</p>
                    <p>{{conitem.create_time}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-content" v-else-if="active==1">
              <div v-for="(conitem,conindex) in contentall" :key="conindex">暂无数据</div>
            </div>
            <div class="tab-content" v-else-if="active==2">
              <div v-for="(conitem,conindex) in contentall" :key="conindex">暂无数据</div>
            </div>
            <div class="tab-content" v-else-if="active==3">
              <div v-for="(conitem,conindex) in contentall" :key="conindex">暂无数据</div>
            </div>
            <div class="tab-content" v-else-if="active==4">
              <div v-for="(conitem,conindex) in contentall" :key="conindex">暂无数据</div>
            </div>
          </van-tab>
        </van-tabs>-->
        <van-tabs v-model="active" animated>
          <van-tab
            v-for="item in tabs"
            :title="item.name"
            :key="item"
            @click="onClick(item.grade_id)"
          >
    
            <div class="tab-content" v-if="active==0">
               <div v-if="contentall">
              <div class="teamnum">团队列表(总数{{contentall.length}})</div>
              <div class="content" v-for="(conitem,conindex) in contentall" :key="conindex">
                <div class="img">
                  <img :src="conitem.headimgurl">
                </div>
                <div style="padding:.3rem">
                  <div
                    style="font-size: 1.5rem;font-weight: 600;color:#333;    margin-bottom: 0.3rem;"
                  >{{conitem.nickname}}</div>
                  <div class="text" style="font-size:1rem;color:#999999">
                    <div v-if="conitem.user!=''" style="    padding-bottom: 0.5rem;">
                      <div v-if="conitem.user.grade==7">等级：普通会员</div>
                      <div v-else-if="conitem.user.grade==6">等级：黄金会员</div>
                      <div v-else-if="conitem.user.grade==5">等级：钻石会员</div>
                      <div v-else-if="conitem.user.grade==4">等级：至尊合伙人</div>
                      <div v-else-if="conitem.user.grade==3">等级：区代理</div>
                      <div v-else-if="conitem.user.grade==2">等级：市级代理</div>
                      <div v-else-if="conitem.user.grade==1">等级：省级代理</div>
                    </div>
                    <div v-else>暂无数据</div>
                    <p>{{conitem.phone}}</p>
                    <p>{{conitem.create_time}}</p>
                  </div>
                </div>
              </div>
              </div>
              <div v-else> 暂无数据</div>
            </div>

            <div class="tab-content" v-else-if="active==7">
              <div v-if="content_g1.length!=0">
                <div class="content" v-for="(conitem,conindex) in content_g1" :key="conindex">
                  <div class="img">
                    <img :src="conitem.headimgurl">
                  </div>
                  <div style="padding:.3rem">
                    <div
                      style="font-size: 1.5rem;font-weight: 600;color:#333;    margin-bottom: 0.3rem;"
                    >{{conitem.nickname}}</div>
                    <div class="text" style="font-size:1rem;color:#999999">
                      <div v-if="conitem.user!=''" style="    padding-bottom: 0.5rem;">
                        <div v-if="conitem.user.grade==7">等级：普通会员</div>
                        <div v-else-if="conitem.user.grade==6">等级：黄金会员</div>
                        <div v-else-if="conitem.user.grade==5">等级：钻石会员</div>
                        <div v-else-if="conitem.user.grade==4">等级：至尊合伙人</div>
                        <div v-else-if="conitem.user.grade==3">等级：区代理</div>
                        <div v-else-if="conitem.user.grade==2">等级：市级代理</div>
                        <div v-else-if="conitem.user.grade==1">等级：省级代理</div>
                      </div>
                      <div v-else>暂无数据</div>
                      <p>{{conitem.phone}}</p>
                      <p>{{conitem.create_time}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>暂无数据</div>
            </div>
            <div class="tab-content" v-else-if="active==6">
                   <div v-if="content_g2.length!=0">
                <div class="content" v-for="(conitem,conindex) in content_g2" :key="conindex">
                  <div class="img">
                    <img :src="conitem.headimgurl">
                  </div>
                  <div style="padding:.3rem">
                    <div
                      style="font-size: 1.5rem;font-weight: 600;color:#333;    margin-bottom: 0.3rem;"
                    >{{conitem.nickname}}</div>
                    <div class="text" style="font-size:1rem;color:#999999">
                      <div v-if="conitem.user!=''" style="    padding-bottom: 0.5rem;">
                        <div v-if="conitem.user.grade==7">等级：普通会员</div>
                        <div v-else-if="conitem.user.grade==6">等级：黄金会员</div>
                        <div v-else-if="conitem.user.grade==5">等级：钻石会员</div>
                        <div v-else-if="conitem.user.grade==4">等级：至尊合伙人</div>
                        <div v-else-if="conitem.user.grade==3">等级：区代理</div>
                        <div v-else-if="conitem.user.grade==2">等级：市级代理</div>
                        <div v-else-if="conitem.user.grade==1">等级：省级代理</div>
                      </div>
                      <div v-else>暂无数据</div>
                      <p>{{conitem.phone}}</p>
                      <p>{{conitem.create_time}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>暂无数据</div>
            </div>
            <div class="tab-content" v-else-if="active==5">
               <div v-if="content_g3.length!=0">
                <div class="content" v-for="(conitem,conindex) in content_g3" :key="conindex">
                  <div class="img">
                    <img :src="conitem.headimgurl">
                  </div>
                  <div style="padding:.3rem">
                    <div
                      style="font-size: 1.5rem;font-weight: 600;color:#333;    margin-bottom: 0.3rem;"
                    >{{conitem.nickname}}</div>
                    <div class="text" style="font-size:1rem;color:#999999">
                      <div v-if="conitem.user!=''" style="    padding-bottom: 0.5rem;">
                        <div v-if="conitem.user.grade==7">等级：普通会员</div>
                        <div v-else-if="conitem.user.grade==6">等级：黄金会员</div>
                        <div v-else-if="conitem.user.grade==5">等级：钻石会员</div>
                        <div v-else-if="conitem.user.grade==4">等级：至尊合伙人</div>
                        <div v-else-if="conitem.user.grade==3">等级：区代理</div>
                        <div v-else-if="conitem.user.grade==2">等级：市级代理</div>
                        <div v-else-if="conitem.user.grade==1">等级：省级代理</div>
                      </div>
                      <div v-else>暂无数据</div>
                      <p>{{conitem.phone}}</p>
                      <p>{{conitem.create_time}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>暂无数据</div>
            </div>
            <div class="tab-content" v-else-if="active==4">
                    <div v-if="content_g4.length!=0">
                <div class="content" v-for="(conitem,conindex) in content_g4" :key="conindex">
                  <div class="img">
                    <img :src="conitem.headimgurl">
                  </div>
                  <div style="padding:.3rem">
                    <div
                      style="font-size: 1.5rem;font-weight: 600;color:#333;    margin-bottom: 0.3rem;"
                    >{{conitem.nickname}}</div>
                    <div class="text" style="font-size:1rem;color:#999999">
                      <div v-if="conitem.user!=''" style="    padding-bottom: 0.5rem;">
                        <div v-if="conitem.user.grade==7">等级：普通会员</div>
                        <div v-else-if="conitem.user.grade==6">等级：黄金会员</div>
                        <div v-else-if="conitem.user.grade==5">等级：钻石会员</div>
                        <div v-else-if="conitem.user.grade==4">等级：至尊合伙人</div>
                        <div v-else-if="conitem.user.grade==3">等级：区代理</div>
                        <div v-else-if="conitem.user.grade==2">等级：市级代理</div>
                        <div v-else-if="conitem.user.grade==1">等级：省级代理</div>
                      </div>
                      <div v-else>暂无数据</div>
                      <p>{{conitem.phone}}</p>
                      <p>{{conitem.create_time}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>暂无数据</div>
            </div>
            <div class="tab-content" v-else-if="active==3">
                    <div v-if="content_g5.length!=0">
                <div class="content" v-for="(conitem,conindex) in content_g5" :key="conindex">
                  <div class="img">
                    <img :src="conitem.headimgurl">
                  </div>
                  <div style="padding:.3rem">
                    <div
                      style="font-size: 1.5rem;font-weight: 600;color:#333;    margin-bottom: 0.3rem;"
                    >{{conitem.nickname}}</div>
                    <div class="text" style="font-size:1rem;color:#999999">
                      <div v-if="conitem.user!=''" style="    padding-bottom: 0.5rem;">
                        <div v-if="conitem.user.grade==7">等级：普通会员</div>
                        <div v-else-if="conitem.user.grade==6">等级：黄金会员</div>
                        <div v-else-if="conitem.user.grade==5">等级：钻石会员</div>
                        <div v-else-if="conitem.user.grade==4">等级：至尊合伙人</div>
                        <div v-else-if="conitem.user.grade==3">等级：区代理</div>
                        <div v-else-if="conitem.user.grade==2">等级：市级代理</div>
                        <div v-else-if="conitem.user.grade==1">等级：省级代理</div>
                      </div>
                      <div v-else>暂无数据</div>
                      <p>{{conitem.phone}}</p>
                      <p>{{conitem.create_time}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>暂无数据</div>
            </div>
            <div class="tab-content" v-else-if="active==2">
                   <div v-if="content_g6.length!=0">
                <div class="content" v-for="(conitem,conindex) in content_g6" :key="conindex">
                  <div class="img">
                    <img :src="conitem.headimgurl">
                  </div>
                  <div style="padding:.3rem">
                    <div
                      style="font-size: 1.5rem;font-weight: 600;color:#333;    margin-bottom: 0.3rem;"
                    >{{conitem.nickname}}</div>
                    <div class="text" style="font-size:1rem;color:#999999">
                      <div v-if="conitem.user!=''" style="    padding-bottom: 0.5rem;">
                        <div v-if="conitem.user.grade==7">等级：普通会员</div>
                        <div v-else-if="conitem.user.grade==6">等级：黄金会员</div>
                        <div v-else-if="conitem.user.grade==5">等级：钻石会员</div>
                        <div v-else-if="conitem.user.grade==4">等级：至尊合伙人</div>
                        <div v-else-if="conitem.user.grade==3">等级：区代理</div>
                        <div v-else-if="conitem.user.grade==2">等级：市级代理</div>
                        <div v-else-if="conitem.user.grade==1">等级：省级代理</div>
                      </div>
                      <div v-else>暂无数据</div>
                      <p>{{conitem.phone}}</p>
                      <p>{{conitem.create_time}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>暂无数据</div>
            </div>
            <div class="tab-content" v-else-if="active==1">
                   <div v-if="content_g7.length!=0">
                <div class="content" v-for="(conitem,conindex) in content_g7" :key="conindex">
                  <div class="img">
                    <img :src="conitem.headimgurl">
                  </div>
                  <div style="padding:.3rem">
                    <div
                      style="font-size: 1.5rem;font-weight: 600;color:#333;    margin-bottom: 0.3rem;"
                    >{{conitem.nickname}}</div>
                    <div class="text" style="font-size:1rem;color:#999999">
                      <div v-if="conitem.user!=''" style="    padding-bottom: 0.5rem;">
                        <div v-if="conitem.user.grade==7">等级：普通会员</div>
                        <div v-else-if="conitem.user.grade==6">等级：黄金会员</div>
                        <div v-else-if="conitem.user.grade==5">等级：钻石会员</div>
                        <div v-else-if="conitem.user.grade==4">等级：至尊合伙人</div>
                        <div v-else-if="conitem.user.grade==3">等级：区代理</div>
                        <div v-else-if="conitem.user.grade==2">等级：市级代理</div>
                        <div v-else-if="conitem.user.grade==1">等级：省级代理</div>
                      </div>
                      <div v-else>暂无数据</div>
                      <p>{{conitem.phone}}</p>
                      <p>{{conitem.create_time}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>暂无数据</div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
      <!-- <div class="Order-main-main-shop-list" v-else-if="act1==1">
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
      </div>-->
    </div>
  </div>
</template>
<script>
import { Tab, Tabs } from "vant";
import { Config } from "../../uitls/config";
import Vue from "vue";
Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      wpList: [{ id: 0, name: "全部" }, { id: 1, name: "直推" }],
      tabs: [{ grade_id: 0, name: "全部", content: "全部内容" }],

      // directtabs: [
      //   { id: "0", title: "全部", content: "直推全部内容" },
      //   { id: "1", title: "普通会员", content: "直推普通会员内容" },
      //   { id: "2", title: "代言人", content: "直推代言人内容" },
      //   { id: "3", title: "店长", content: "直推店长内容" },
      //   { id: "4", title: "资深店长", content: "直推资深店长内容" }
      // ],
      // indirecttabs: [
      //   { id: "0", title: "全部", content: "间推全部内容" },
      //   { id: "1", title: "普通会员", content: "间推普通会员内容" },
      //   { id: "2", title: "代言人", content: "间推代言人内容" },
      //   { id: "3", title: "店长", content: "间推店长内容" },
      //   { id: "4", title: "资深店长", content: "间推资深店长内容" }
      // ],

      active: 0,
      contentall: [],
      content_g7: [],
      content_g6: [],
      content_g5: [],
      content_g4: [],
      content_g3: [],
      content_g2: [],
      content_g1: []
    };
  },
  created() {
    this.all();
    console.log(this);
    let that = this;
    // console.log(that);
    this.$axios({
      method: "get",
      url: Config.restUrl + "api/v2/grade/all"
      // headers: {
      //   token: that.getToken
      //   // token: "9b85bc5fa49dce8a5ef0e29f4f0076b5"
      // }
    }).then(res => {
      for (var i = 0; i < res.data.length; i++) {
        that.tabs.push(res.data[i]);
      }
    });
  },
  methods: {
    alllevel() {},
    all() {
      let that = this;
      // console.log(that);
      this.$axios({
        method: "get",
        url: Config.restUrl + "api/v2/agency/line",
        headers: {
          token: that.getToken
          // token: "9b85bc5fa49dce8a5ef0e29f4f0076b5"
        }
      }).then(res => {
        that.contentall = res.data;
        console.log(that.contentall);

        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].user.grade == 7) {
            that.content_g7 = res.data;
            return that.content_g7;
          } else if (res.data.user.grade == 6) {
            that.content_g6 = res.data;
            console.log(that.content_g6);
          } else if (res.data.user.grade == 5) {
            that.content_g5 = res.data;
            console.log(that.content_g5);
          } else if (res.data.user.grade == 4) {
            that.content_g4 = res.data;
            console.log(that.content_g4);
          } else if (res.data.user.grade == 3) {
            that.content_g3 = res.data;
            console.log(that.content_g3);
          } else if (res.data.user.grade == 2) {
            that.content_g5 = res.data;
            console.log(that.content_g2);
          } else if (res.data.user.grade == 1) {
            that.content_g1 = res.data;
            console.log(that.content_g1);
          } else {
            console.log("暂无数据");
          }
        }
      });
    },

    back() {
      this.$router.go(-1); //返回上一层
    },
    selected(index) {
      this.act1 = index;
    },
    onClick(item) {
      console.log(item);
      this.active = item;
    }
  },
  computed: {
    getToken() {
      return this.$store.getters.getToken;
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
      padding-bottom: 1.1rem;
      border-bottom: #dedede 1px solid;
      padding-top: 0.8rem;
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

