  <template>
  <div class="picking">
    <div v-if="GiveList.length>0">
      <!-- 收货地址 -->
      <div class="picking-header" style="background: #fff;padding:0.5rem" @click="back()">
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
                <div class="address">
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
            <img :src="giveitem.gproduct.image">
          </div>
          <div class="picking-main-text">
            <div style="margin-bottom: 5px;">{{giveitem.gproduct.name}}</div>
            <div style="margin-bottom: 5px;"></div>
            <div style="    position: absolute;bottom: 0;width:100%">
              <div class="num" style>
                <div>
                  <!-- <div style="background:#F15E0E;color:#fff;padding:0.3rem;border-radius: 10%;"></div> -->
                </div>
                <div>
                  X{{giveitem.num}}
                  <!-- <van-stepper v-model="value" integer  :max="giveitem.num" min=0/> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="picking-footer" @click="submit">
        <div>提交</div>
      </div>
    </div>

    <div v-else style="padding:10rem;    text-align: center;">
      <div v-if="list.statusText==='ok'">订单已经在后台为你加急发货</div>
      <div v-else>
        <div>
          <div class="shopimg" style="padding:1.3rem">
            <img src="../../assets/img/img_empty_shopping_cart.png">
          </div>
          <p style="color:#9FA4A5;font-size:1.5rem">暂时没有数据，快去逛逛吧~</p>
          <router-link to="/My">
            <div
              class="shopbut"
              style="color:#9FA4A5;font-size:1.5rm;padding:1.16rem;border:#dedede 1px solid;margin-top:1rem;border-radius: 10px;"
            >
              <p>个人中心</p>
            </div>
          </router-link>
          <router-link to="/">
            <div
              class="shopbut"
              style="color:#9FA4A5;font-size:1.5rm;padding:1.16rem;border:#dedede 1px solid;margin-top:1rem;border-radius: 10px;"
            >
              <p>立即逛逛</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

  <script>
import Vue from "vue";
import { Stepper, Toast } from "vant";
import { Config } from "../../uitls/config";
Vue.use(Stepper).use(Toast);
export default {
  data() {
    return {
      ste: [],
      GiveList: [],
      list: []
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
      url: Config.restUrl + "api/v2/agency/give",
      headers: {
        token: that.getToken
        // token: "9b85bc5fa49dce8a5ef0e29f4f0076b5"
      }
    }).then(Gres => {
      console.log(Gres);
      that.GiveList = Gres.data;
      that.list = Gres;
    });
  },
  methods: {
    back() {
      shippingAddress;
      this.$router.push({ path: "/AddressEdit" });
    },
    submit() {
      let that = this;
      let datas = [];
      for (let i = 0; i < that.GiveList.length; i++) {
        datas.push({
          gdetail_id: that.GiveList[i].id
        });
      }
      console.log(datas);

      this.$axios({
        method: "post",
        url: Config.restUrl + "api/v2/agency/take",
        data: { take: JSON.stringify(datas) },
        headers: {
          token: that.getToken
          // token: "9b85bc5fa49dce8a5ef0e29f4f0076b5"
        }
      }).then(Gres => {
        console.log(Gres);
        alert("提货成功，请等待商家发货");
        //this.$router.go(0);
      });
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
        width: 8rem;
        height: 8rem;
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
    padding: 1.3rem 0;
    color: #fff;
    font-size: 1.5rem;
  }
}
</style>
