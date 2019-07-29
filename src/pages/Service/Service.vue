<template>
  <div class="Service">
    <div class="Service-main-header">
      <div>
        <p>客服点点</p>
        <div>每周一至周日9：00-18：00电话畅通为您服务</div>
      </div>
      <div @click="callPhone">
        <i class="iconfont">&#xe605;</i>
      </div>
      <div @click="back">关闭</div>
    </div>

    <div class="xw-content" @touchstart="toShowMaskInfo=false" ref="xwBody">
      <div class="xw-chat-wrap">
        <ul>
          <li v-for="(messageList,mssageindex) in records" :key="mssageindex">
            <div v-if="messageList.type==1">
              <div class="xw-chat-time">{{messageList.time}}</div>
              <div class="xw-chat-servicer">
                <div class="xw-servicer-avantar-wrap">
                  <img src="../Service/images/Sev.jpg" class="xw-servicer-avantar">
                </div>
                <div class="xw-chat-msg">
                  <span v-html="replaceFace(messageList.content)"></span>
                </div>
              </div>
            </div>

            <!-- 用户发送的消息模板-->
            <div v-else>
              <div class="xw-chat-time">{{messageList.time}}</div>
              <div class="xw-chat-customer">
                <div class="xw-chat-msg" style="display:inline-block">
                  <span v-html="replaceFace(messageList.content)"></span>
                </div>
                <div class="xw-customer-avantar-wrap">
                  <img src="../Service/images/female.jpg" class="xw-customer-avantar">
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="xw-footer-wrap" @touchstart="toShowMaskInfo=false">
      <div class="xw-footer-content">
        <div class="xw-vmodel-wrap">
          <textarea
            class="xw-content-textarea"
            placeholder="请输入您的问题"
            v-model="content"
            @focus="onFocusText"
          ></textarea>
        </div>
        <div class="xw-chat-tool">
          <div style="height:100%;width:100%;">
          <div class="xw-chat-tool-item" @click="sendMsg">
            <transition name="fade">
              <p
                
                
              >发送</p>
            </transition>
          </div>
</div>
          <!-- <div class="xw-chat-tool-item">
            <a
              href="javascript:;"
              :class="[showEmoji ? 'xw-face' :'xw-face-close','xw-chat-tool-btn']"
              @click="emojiFuc"
            >
              <i class="iconfont">&#xe61e;</i>
            </a>
          </div>
          <div class="xw-chat-tool-item">
            <a
              href="javascript:;"
              :class="[showEmoji ? 'xw-face' :'xw-face-close','xw-chat-tool-btn']"
              @click="emojiFuc"
            >
              <i class="iconfont">&#xe61d;</i>
            </a>
          </div>-->
        </div>
      </div>

      <!--  <emojiSlider :isShow="showEmoji" :EXPS="EXPS"></emojiSlider> -->
      <!-- 表情开始 -->
      <transition name="slide-fade" style="display:block">
        <div class="xw-window-text xw-face-emoji-ul" v-if="showEmoji">
          <!-- <div class="xw-chat-ul-box">
            <mt-swipe :auto="0">
              <mt-swipe-item v-for="(item, index) in Math.ceil(appData.length/15)" :key="index">
                <li v-for="(items, indexs) in getEmotionData(item,15)" class="xw-faceEmoji" :key="indexs">
                  <img :src="items.file" :data="items.code" v-on:click="content+=items.code">
                </li>
              </mt-swipe-item>
            </mt-swipe>
          </div>-->
        </div>
      </transition>
    </div>

    <!-- 提示音 -->

    <!-- 右上角的通话小窗口 -->

    <!-- 表情区域 -->
    <div class="browBox" v-if="faceShow">
      <ul>
        <li v-for="(item,index) in faceList" :key="index" @click="getBrow(index)">{{item}}</li>
      </ul>
    </div>

    <!-- <Toast :showToast="showToast">{{toastText}}</Toast> -->
  </div>
</template>

<script>


// import emojiSlider from '.././components/emojiSlide.vue'
export default {
  components: {
 
    // Toast
    // emojiSlider
  },
  data() {
    return {
      comment: {},
      showEmoji: false, //是否显示表情
      // showToast: false, //显示提示框
      toastText: "",
      faceList: [],
      // showMoreOpratin: false, //是否显示更多操作
      // toShowMaskInfo: false, //点击头部是否显示相信信息
      testContents: [
        "您好！欢迎来到点点客服，请问有什么能帮到您？如有疑问请在线咨询或者拨打400-926-2012咨询！感谢您的支持! "
      ],
      content: "",
      //聊天记录
      records: [
        {
          type: 1,
          time: new Date().toLocaleTimeString(),
          content:
            "您好！欢迎来到点点客服，请问有什么能帮到您？如有疑问请在线咨询或者拨打400-926-2012咨询！感谢您的支持! "
        }
        // {
        //   type: 2,
        //   time: new Date().toLocaleTimeString(),
        //   content: "谢谢您的帮助"
        // }
      ],
      faceShow: false,

      imgFile: {},
      EXPS: []
    };
  },
  created() {
    this._loadEmojiData();
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    callPhone() {
      window.location.href = "tel://" + 18319409837;
    },
    // // 表情
    // faceContent() {
    //   this.faceShow = !this.faceShow;
    //   if (this.faceShow == true) {
    //     for (let i in appData) {
    //       this.faceList.push(appData[i].char);
    //     }
    //   } else {
    //     this.faceList = [];
    //   }
    // },

    // showInfo() {
    //   this.toShowMaskInfo = true;
    // },
    //点击控制表情切换（显示和隐藏）
    // emojiFuc() {
    //   this.showEmoji = !this.showEmoji;
    // },
    // videoFuc() {
    //   this.videoVal = true;
    //   this.showNarrowPopVal = false;
    // },

    // showNarrowPopFuc() {
    //   this.showNarrowPopVal = true;
    //   this.videoVal = false;
    // },
    // showBigPopFuc() {
    //   this.showNarrowPopVal = false;
    //   this.videoVal = true;
    // },
    // showEvaluateFuc() {
    //   this.showScore = !this.showScore;
    // },
    sendMsg() {
      var content = this.content.trim();
      this.records.push({
        time: new Date().toLocaleTimeString(),
        content: content,
        type: 2
      });
      this.content = "";
      setTimeout(() => {
        this.records.push({
          time: new Date().toLocaleTimeString(),
          content: this.testContents[Math.floor(Math.random())],
          type: 1
        });
        // this.scrollToBottom();
      }, 800);
    },

    replaceFace(con) {
      if (!con) {
        return;
      }
      // if (con.toString().indexOf("/:") > -1) {
      //   var exps = this.appData;
      //   console.log(exps)
      //   for (var i = 0; i < exps.length; i++) {
      //     con = con.replace(
      //       exps[i].reg,
      //       '<img src="' + exps[i].file + '"  alt="" />'
      //     );
      //   }
      // }
      return con;
    },

    //滚动到底
    // scrollToBottom() {

    //   // setTimeout(() => {
    //   //   //滚动条长度

    //   //   var currentDistance =
    //   //     this.$refs.xwBody.scrollHeight - this.$refs.xwBody.clientHeight;
    //   //   //当前滚动条距离顶部的距离
    //   //   var currentScroll_y = this.$refs.xwBody.scrollTop;
    //   //   if (currentDistance > 0 && currentDistance > currentScroll_y) {
    //   //     currentScroll_y =
    //   //       Math.ceil((currentDistance - currentScroll_y) / 10) +
    //   //       currentScroll_y;
    //   //     currentScroll_y =
    //   //       currentScroll_y > currentDistance
    //   //         ? currentDistance
    //   //         : currentScroll_y;
    //   //     //微信和qq浏览器不支持 scrollTo？
    //   //     //this.$refs.xwBody.scrollTo(0,currentScroll_y);
    //   //     this.$refs.xwBody.scrollTop = currentScroll_y;
    //   //     this.scrollToBottom();
    //   //   }
    //   // }, 13);
    // },
    onFocusText() {},
    _loadEmojiData() {
      // getEmojiData().then(res => {
      //   var json = eval("(" + res + ")");
      //   this.EXPS = json.EXPS.slice(0);
      // });
    }
  }
};
</script>


<style lang="scss">
.xw-chat-servicer .xw-chat-msg::after,
.xw-chat-servicer .xw-chat-msg::before {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  border: 10px solid transparent;
  border-bottom: 10px solid #ebedf0;
  left: -8px;
  border-left-width: 9px;
  bottom: -1px;
}

.xw-chat-customer .xw-chat-msg::after,
.xw-chat-customer .xw-chat-msg::before {
  content: "";
  position: absolute;
  height: 0;
  width: 0;

  display: inline-block;
  height: 0;
  width: 0;
  border: 10px solid transparent;
  border-bottom: 10px solid #ebedf0;
  right: -10px;
  bottom: 0;
}

.Service-main-header {
  padding: 0.3rem;
  background: #f15e0e;
  color: #fff;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
  .Service {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .xw-content {
    flex: 1;
    position: relative;
    overflow: auto;
  }
}
.xw-content {
  position: relative;
  overflow: auto;
  .xw-chat-wrap {
    background: #fff;
    border-color: #efefef;
    float: left;
    .xw-chat-time {
      text-align: center;
    }
    .xw-chat-servicer {
      display: flex;
      padding: 1.25rem;
      align-items: flex-end;
      .xw-servicer-avantar-wrap {
        height: 34px;
        width: 34px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .xw-chat-msg {
        background: #fff;
        border-color: #efefef;
        float: left;
        -webkit-font-smoothing: antialiased;
        -webkit-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
        word-wrap: break-word;
        word-break: normal;
        position: relative;
        clear: both;
        padding: 8px 16px;
        border: 1px solid #ebedf0;
        max-width: 100%;
        min-width: 50px;
        min-height: 22px;
        line-height: 1.6em;
        max-width: 70%;
        background: #ebedf0;
        margin-left: 8px;
      }
    }
    .xw-chat-customer {
      justify-content: flex-end;
      display: flex;
      padding: 1.25rem;
      align-items: flex-end;
      .xw-customer-avantar-wrap {
        height: 34px;
        width: 34px;
        min-width: 34px;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .xw-chat-msg {
        padding: 0.5rem;
        word-wrap: break-word;
        word-break: break-all;

        position: relative;
        float: right;
        text-align: left;
        background: #ebedf0;
        border-color: #ebedf0;
        color: #000;
        margin-right: 20px;
        min-width: 50px;
        min-height: 22px;
        line-height: 1.6em;
        // max-width: 70%;
      }
    }
  }
}
.xw-footer-wrap {
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.05);
  // background: #fff;
  z-index: 2;
  .xw-footer-content {
    position: relative;
    height: 52px;
    display: -ms-flexbox;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.05) 0px -1px 4px;
    align-items: center;
    .xw-vmodel-wrap {
      flex: 4;
      padding: 0.5rem;
      .xw-content-textarea {
        width: 100%;
      }
    }
    .xw-chat-tool {
      height: 100%;
      flex: 1;
      align-items: center;
    flex-direction: column;
    justify-content: center;
    display: flex;

  color: #f7f7f7;
      .xw-chat-tool-item {
              height: 100%;
        width: 100%;
              background: #f15e0e;
        display: flex;
        justify-content: center;
        align-items: center;
        .xw-send-btn-text {
          // color: #fff;
          border-radius: 5px;
            height: 100%;
        width: 100%;
  
        }
 
        .xw-chat-tool-btn {
          padding: 12px 10px;

          .xw-face-close {
            background: no-repeat 50%;
          }
          .xw-hide-operation {
            background: url(/Service/images/addOn.svg) no-repeat 50%;
            width: 38px;
            height: 38px;
            margin-right: 10px;
            transform: scale(0.7);
          }
          .xw-hide-operation-close {
            background: url(/Service/images/addClose.svg) no-repeat 50%;
            width: 38px;
            height: 38px;
            margin-right: 10px;
            transform: scale(0.7);
          }
        }
      }
    }
  }
}
.browBox {
  width: 100%;
  height: 200px;
  background: #e6e6e6;
  position: absolute;
  bottom: 0px;
  overflow: scroll;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    li {
      width: 14%;
      font-size: 26px;
      list-style: none;
      text-align: center;
    }
  }
}
</style>