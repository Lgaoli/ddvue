<template>
  <div>
    <div style="padding:1.35rem;background: #f7f7f7;">
      <img src="../../assets/img/Study_logo.png" style="width:100%">
    </div>
    <div class="Study-header">
      <ul>
        <li
          class="act"
          v-for="(item,index) in wpList"
          :key="index"
          :class="{actte : actte == index}"
          @click="selected(index)"
        >
          <div class="text">{{item.name}}</div>
        </li>
      </ul>
    </div>
    <div class="Study-main">
      <div v-if="actte==0">
        <router-link :to="{ path:'/StudyDetails' }">
          <div class="Study-mainlist">
            <div class="Study-main-img">
              <img src="../../assets/img/Study_test.png">
            </div>
            <div class="Study-main-text">
              <div class="Study-main-name">
                2018年中国近视患者已经超过4.5亿人
                --来自生活数据 2018年中国近视患者已经超过4.5亿人
                --来自生活数据
              </div>
              <div class="Study-main-time">
                <div>时间：2019/06/12</div>
                <div>阅读：2456</div>
              </div>
            </div>
          </div>
        </router-link>
        <router-link :to="{ path:'/StudyDetails' }">
          <div class="Study-mainlist">
            <div class="Study-main-img">
              <img src="../../assets/img/Study_test.png">
            </div>
            <div class="Study-main-text">
              <div class="Study-main-name">
                2018年中国近视患者已经超过4.5亿人
                --来自生活数据 2018年中国近视患者已经超过4.5亿人
                --来自生活数据
              </div>
              <div class="Study-main-time">
                <div>时间：2019/06/12</div>
                <div>阅读：2456</div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div v-if="actte==1">
        <router-link :to="{ path:'/StudyDetails' }">
          <div class="Study-mainlist">
            <div class="Study-main-img">
              <img src="../../assets/img/Study_test.png">
            </div>
            <div class="Study-main-text">
              <div class="Study-main-name">
                2018年中国近视患者已经超过4.5亿人
                --来自生活数据 2018年中国近视患者已经超过4.5亿人
                --来自生活数据
              </div>
              <div class="Study-main-time">
                <div>时间：2019/06/12</div>
                <div>阅读：2456</div>
              </div>
            </div>
          </div>
        </router-link>
        <router-link :to="{ path:'/StudyDetails' }">
          <div class="Study-mainlist">
            <div class="Study-main-img">
              <img src="../../assets/img/Study_test.png">
            </div>
            <div class="Study-main-text">
              <div class="Study-main-name">
                2018年中国近视患者已经超过4.5亿人
                --来自生活数据 2018年中国近视患者已经超过4.5亿人
                --来自生活数据
              </div>
              <div class="Study-main-time">
                <div>时间：2019/06/12</div>
                <div>阅读：2456</div>
              </div>
            </div>
          </div>
        </router-link>
        <router-link :to="{ path:'/StudyDetails' }">
          <div class="Study-mainlist">
            <div class="Study-main-img">
              <img src="../../assets/img/Study_test.png">
            </div>
            <div class="Study-main-text">
              <div class="Study-main-name">
                2018年中国近视患者已经超过4.5亿人
                --来自生活数据 2018年中国近视患者已经超过4.5亿人
                --来自生活数据
              </div>
              <div class="Study-main-time">
                <div>时间：2019/06/12</div>
                <div>阅读：2456</div>
              </div>
            </div>
          </div>
        </router-link>
        <router-link :to="{ path:'/StudyDetails' }">
          <div class="Study-mainlist">
            <div class="Study-main-img">
              <img src="../../assets/img/Study_test.png">
            </div>
            <div class="Study-main-text">
              <div class="Study-main-name">
                2018年中国近视患者已经超过4.5亿人
                --来自生活数据 2018年中国近视患者已经超过4.5亿人
                --来自生活数据
              </div>
              <div class="Study-main-time">
                <div>时间：2019/06/12</div>
                <div>阅读：2456</div>
              </div>
            </div>
          </div>
        </router-link>
        <router-link :to="{ path:'/StudyDetails' }">
          <div class="Study-mainlist">
            <div class="Study-main-img">
              <img src="../../assets/img/Study_test.png">
            </div>
            <div class="Study-main-text">
              <div class="Study-main-name">
                2018年中国近视患者已经超过4.5亿人
                --来自生活数据 2018年中国近视患者已经超过4.5亿人
                --来自生活数据
              </div>
              <div class="Study-main-time">
                <div>时间：2019/06/12</div>
                <div>阅读：2456</div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div v-if="actte==2">
        <router-link :to="{ path:'/StudyDetails' }">
          <div class="Study-mainlist">
            <div class="Study-main-img">
              <img src="../../assets/img/Study_test.png">
            </div>
            <div class="Study-main-text">
              <div class="Study-main-name">
                2018年中国近视患者已经超过4.5亿人
                --来自生活数据 2018年中国近视患者已经超过4.5亿人
                --来自生活数据
              </div>
              <div class="Study-main-time">
                <div>时间：2019/06/12</div>
                <div>阅读：2456</div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      wpList: [
        { id: 0, name: "新人推荐" },
        { id: 1, name: "初级修炼" },
        { id: 2, name: "点点新闻" }
      ],
      actte: "0"
    };
  },
  methods: {
    selected(index) {
      this.actte = index;
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
      width: 29.125rem;
      img {
        width: 100%;
      }
    }
    .Study-main-text {
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

