<template>
  <div>
    <div style="padding:1.35rem;background: #f7f7f7;">
      <img src="../../assets/img/Study_logo.png" style="width:100%">
    </div>
    <div class="Study-header">
      <ul>
        <li
          class="act"
          v-for="item in wpList"
          :key="item.id"
          :class="{actte : actte == item.id}"
          @click="selected(item.id)"
        >
          <div class="text">{{item.name}}</div>
        </li>
      </ul>
    </div>
    <div class="Study-main">
      <div v-if="actte==4">
        <div v-for="(item,index) in Studylist" :key="index">
          <router-link :to="{ path:'/StudyDetails',query:{id:item.id} }">
            <div class="Study-mainlist">
              <div class="Study-main-img">
                <img :src="item.image">
              </div>
              <div class="Study-main-text">
                <div class="Study-main-name">{{item.title}}</div>
                <div class="Study-main-time">
                  <div>时间：{{item.create_time}}</div>
                  <div>
                    阅读：{{item.watch
                    }}
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div v-if="actte==3">
        <div><div v-for="(item,index) in actte3" :key="index">
          <router-link :to="{ path:'/StudyDetails',query:{id:item.id} }">
            <div class="Study-mainlist">
              <div class="Study-main-img">
                <img :src="item.image">
              </div>
              <div class="Study-main-text">
                <div class="Study-main-name">{{item.title}}</div>
                <div class="Study-main-time">
                  <div>时间：{{item.create_time}}</div>
                  <div>
                    阅读：{{item.watch
                    }}
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div></div>
      </div>
      <div v-if="actte==2">
        <div><div v-for="(item,index) in actte2 " :key="index">
          <router-link :to="{ path:'/StudyDetails',query:{id:item.id} }">
            <div class="Study-mainlist">
              <div class="Study-main-img">
                <img :src="item.image">
              </div>
              <div class="Study-main-text">
                <div class="Study-main-name">{{item.title}}</div>
                <div class="Study-main-time">
                  <div>时间：{{item.create_time}}</div>
                  <div>
                    阅读：{{item.watch
                    }}
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div></div>
      </div>
    </div>
  </div>
</template>
<script>
import { Config } from "../../uitls/config";
export default {
  data() {
    return {
      wpList: [],
      actte: 4,
      Studylist: [],
      actte4:[],
      actte3:[],
      actte2:[]
    };
  },
  created() {
    var that = this;
    console.log(that.actte)
//获取分类下的所有产品

      this.$axios
        .get(Config.restUrl + "api/v2/study/article/by_category?id="+this.actte)
        .then(function(res) {
          console.log(res);
          // that.Studylist = res.data;
        })
        .catch(function(error) {
          // console.log(error);
        });



    //学习中心的分类
    this.$axios
      .get(Config.restUrl + "api/v2/study/cate")
      .then(function(res) {
        that.wpList = res.data;
      })
      .catch(function(error) {
        // console.log(error);
      });

    //学习中心的文章列表
    this.$axios
      .get(Config.restUrl + "api/v2/study/paginate")
      .then(function(res) {

        that.Studylist = res.data;
      })
      .catch(function(error) {
        // console.log(error);
      });
  },
  methods: {
    selected(index) {
      let that=this
      this.actte = index;
                console.log(that.actte)
     this.$axios
        .get(Config.restUrl + "api/v2/study/article/by_category?id="+this.actte)
        .then(function(res) {
          
          // that.Studylist = res.data;

          if(that.actte==4){
            that.actte4=res.data
            console.log(that.actte4)
          }else if(that.actte==3){
            that.actte3=res.data
            console.log(that.actte3)
          }else{
            that.actte2=res.data
            console.log(that.actte2)
          }
        })
        .catch(function(error) {
          // console.log(error);
        });

    }
  }
};
</script>


<style lang="scss">
.Study-header {
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
    .actte {
      border-bottom: #f15e0e 2px solid;
      color: #f15e0e;
    }
  }
}
.Study-main {
  padding: 0 1.3rem 1.3rem;
  .Study-mainlist {
    display: flex;
    padding: 1.3rem 0;
    border-bottom: 1px #dedede solid;
    .Study-main-img {
      flex: 0.5;
      img {
        width: 100%;
      }
    }
    .Study-main-text {
      flex: 1;
      padding: 0 1rem;
      .Study-main-name {
        width: 100%;
        position: relative;
        overflow: hidden;
        font-weight: 600;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .Study-main-name::after {
        　　　　　content: "...";
        font-weight: bold;
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0 5px 0px 5px;
        background-color: #fff;
      }
      .Study-main-time {
        display: flex;
        justify-content: space-between;
        padding-top: 2.3rem;
        color: #999999;
        font-size: 1.1rem;
      }
    }
  }
}
</style>

