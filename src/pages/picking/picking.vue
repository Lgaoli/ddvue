<template>
  <div class="picking">
    <!-- 收货地址 -->
    <div class="picking-header" style="background: #fff;padding:0.5rem">
      <div style="display: flex;">
        <!-- <div
          style="text-align: center;display: flex;flex-direction: column;justify-content: center;    padding: 0.6rem 1.25rem;"
        >
          <i class="iconfont" style="font-size: 2.45rem;">&#xe611;</i>
        </div>-->
        <div v-if="ste.length" style="width:100%">
          <div style="padding:0 1.25rem  0  1.25rem" v-for="(item, index) in ste" :key="index">
            <van-radio-group
              v-model="radio"
              style="display: flex;justify-content:space-between;align-items: center;"
            >
              <div class="address" @click="back()">
                <div style="padding-top: 0.6rem">
                  <div class style="display: flex;    align-items: center;">
                    <div style="padding-right: 0.5rem;">
                      <i class="iconfont" style="font-size:2.1rem">&#xe611;</i>
                    </div>
                    <div style="font-size:1.4rem;font-weight:600;padding-right:0.3ren=m">
                      <div>
                        收货人：{{item.consigner
                        }}&nbsp;&nbsp;&nbsp;&nbsp;{{item.phone}}
                      </div>
                      <div>收货地址：{{item.province}}{{item.city}}{{district}}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <router-link to="/AddressEdit">
                  <div style>
                    <i class="iconfont">&#xe632;</i>
                  </div>
                </router-link>
              </div>
            </van-radio-group>
          </div>
        </div>
        <div v-else>
          <router-link to="/shippingAddress">
            <div class="shopping-cart-header">
              <div>
                <i class="iconfont">&#xe611;</i>
                <span>暂无收货地址</span>
              </div>
              <div></div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div style="background: #f7f7f7;padding:0.7rem"></div>
    <div class="picking-main">
      <div class="picking-main-list" v-for="(giveitem,giveindex) in GiveList" :key="giveindex">
        <div class="picking-main-img">
          <img :src="giveitem.image">
        </div>
        <div class="picking-main-text">
          <div style="margin-bottom: 5px;">
            {{giveitem.name}}
          </div>
          <div style="margin-bottom: 5px;"></div>
          <div style="    position: absolute;bottom: 0;width:100%">
            <div class="num" style>
              <div>
                <!-- <div style="background:#F15E0E;color:#fff;padding:0.3rem;border-radius: 10%;"></div> -->
              </div>
              <div>
                <van-stepper v-model="value" integer  max="3"/>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
    <div class="picking-footer">
      <div>提交</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Stepper } from "vant";
import { Config } from "../../uitls/config";
Vue.use(Stepper);
export default {
  data() {
    return {
      ste: [],
      GiveList:[]
    };
  },
  created() {
    //收货地址
    let that = this;
    // console.log(that);
    this.$axios({
      method: "get",
      url: Config.restUrl + "api/v2/address",
      headers: {
        token: that.getToken
        // token: "9b85bc5fa49dce8a5ef0e29f4f0076b5"
      }
    }).then(res => {
      that.ste.push(res.data);
  
    });



      this.$axios({
      method: "get",
      url: Config.restUrl + "api/v2/product/give",
      headers: {
        token: that.getToken
        // token: "9b85bc5fa49dce8a5ef0e29f4f0076b5"
      }
    }).then(Gres => {
 console.log(Gres)
 that.GiveList=Gres.data
   
    });

















  },
  methods: {},
  computed: {
    getToken() {
      return this.$store.getters.getToken;
    }
  }
};
</script>
<style lang="scss">
.picking {
  // border-bottom: 1px #f7f7f7 solid;
  .picking-main {
    padding: 1.1rem;
    margin-bottom: 32px;
    .picking-main-list {
      display: flex;
      border-bottom: #dedede 1px solid;
      padding: 1rem 0;
      .picking-main-img {
        width: 11rem;
        height: 11rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .picking-main-text {
        padding: 0 0.84rem;
        position: relative;
        flex: 1;
        .num {
          display: flex;
          justify-content: space-between;
          padding: 0 0.8rem;
              align-items: center;
        }
      }
    }
  }
  .picking-footer {
    position: fixed;
    bottom: 0;
    background: #f15e0e;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    color: #fff;
  }
}
</style>
