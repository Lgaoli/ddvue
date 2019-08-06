        
    <template>
  <div class="indent">
    <div class="detail-header">
      <div class="back" @click="back">
        <i class="iconfont">&#xe771;</i>
      </div>
      <div class>确认订单</div>
      <div class="shop"></div>
    </div>

    <div class="indent-cart">
      <div v-if="list.length">
        <div
          style="  border-bottom: 1px solid #ccc;padding:0 1.25rem  0  1.25rem"
          v-for="(item, index) in list"
          :key="index"
        >
          <van-radio-group
            v-model="radio"
            style="display: flex;justify-content:space-between;align-items: center;"
          >
            <div class="address">
              <div style="padding-top: 0.6rem">
                <div>
                  <span
                    style="font-size:1.4rem;font-weight:600;padding-right:0.3ren=m"
                  >{{item.name}}</span>
                  <span>{{item.tel}}</span>
                </div>
                <div>{{item.address}}</div>
              </div>
            </div>
            <router-link to="/AddressEdit">
              <div style="color:#f15e0e;width: 30px;">编辑</div>
            </router-link>
          </van-radio-group>
        </div>
      </div>
      <div v-else>
        <router-link to="/shippingAddress">
          <div class="shopping-cart-header" style="display: flex;padding: 0.8rem;">
            <div>
              <span>添加收货地址</span>
            </div>
          </div>
        </router-link>
      </div>
      <div style="width:100%;
              height: 0.6rem;
              background:#f7f7f7"></div>
      <div class="indent-main">
        <!-- 问题大全 -->
        <div>
          <div v-if="set.length>0">
            <div v-for="(item,index) in set" :key="index">
              <van-card :num="item.num" :desc="item.name" :thumb="item.image"/>
            </div>
          </div>
          <div v-else style="padding:1.25rem;">暂时无商品</div>
        </div>
      </div>
      <div style="width:100%;
              height: 0.6rem;
              background:#f7f7f7"></div>
    </div>
    <div>
      <div class="indent-cart-header">
        <div>
          <span>支付方式</span>
        </div>
        <div>
          <span>余额支付</span>
        </div>
      </div>

      <div class="indent-cart-header">
        <div>
          <span>运费</span>
        </div>
        <div>
          <span>0元</span>
        </div>
      </div>
    </div>
    <div style="width:100%;
              height: 0.6rem;
              background:#f7f7f7"></div>
    <div class="postscript">
      <textarea type="text" placeholder="备注信息"></textarea>
    </div>
    <div class="indent-footer">
      <van-submit-bar :price="money.money*100" button-text="立即支付" @submit="SubmitOrderHan"/>
    </div>
  </div>
</template>
    <script>
import Vue from "vue";
import wx from "weixin-js-sdk";
import { Config } from "../../uitls/config";
import {
  RadioGroup,
  Radio,
  AddressList,
  Checkbox,
  CheckboxGroup,
  Stepper,
  SubmitBar,
  Card,
  SwipeCell,
  Dialog
} from "vant";
Vue.use(Checkbox)
  .use(CheckboxGroup)
  .use(Stepper)
  .use(SubmitBar)
  .use(Card)
  .use(SwipeCell)
  .use(RadioGroup)
  .use(Radio)
  .use(AddressList);
export default {
  data() {
    return {
      list: [],
      getJsSdkData: [],
      addCart: [],
      money: []
    };
  },
  created() {
    this.set = this.$route.query.set;

    let num = 0;
    for (var i = 0; i < this.set.length; i++) {
      num += this.set[i].num;
      if (num === 30) {
        this.$set(this.money, "money", 9680);
      } else if (num === 2) {
        this.$set(this.money, "money", 299);
        console.log(this.money);
      } else if (num * 1 === 1) {
        this.$set(this.money, "money", 99);
      }
    }

    this.addCart.push(this.addSetupCart);
    this.testlist();
    let self = this;
    this.$axios({
      method: "post",
      url: Config.restUrl + "api/v2/user/jdk",
      data: {
        url: location.href.split("#")[0]
      },
      headers: {
        token: this.getToken
      }
    }).then(rest => {
      self.getdata = rest.data;
      wx.config({
        debug: false,
        appId: rest.data.appId,
        timestamp: rest.data.timestamp,
        nonceStr: rest.data.nonceStr,
        signature: rest.data.signature,
        jsApiList: ["chooseWXPay"]
      });
    });
  },
  computed: {
    addSetupCart() {
      return this.$store.getters.addSetupCart;
    },

    getToken() {
      return this.$store.getters.getToken;
    }

    // freight() {
    //   let freight = 8;
    //   if (this.checkedmoney >= 88) {
    //     freight = 0;
    //   }
    //   return freight;
    // }
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    testlist() {
      var that = this;
      // console.log(that);
      this.$axios({
        method: "get",
        url: Config.restUrl + "api/v2/address",
        headers: {
          token: that.getToken
          // token: "237cf94848711e2399fa1e8c1a74a395"
        }
      }).then(res => {
        // console.log(res.data);
        that.list.name = res.data.consigner;
        that.list.id = res.data.user_id;
        that.list.address =
          res.data.province +
          res.data.city +
          res.data.district +
          res.data.address;
        that.list.tel = res.data.phone * 1;
        that.list = [
          {
            name: res.data.consigner,
            id: res.data.user_id,
            address:
              res.data.province +
              res.data.city +
              res.data.district +
              res.data.address,
            tel: res.data.phone * 1
          }
        ];
        // console.log(that.list);
      });
    },
    SubmitOrderHan() {
      var that = this;

      if (that.set.length) {
        var datas = [];
        for (let i = 0; i < that.set.length; i++) {
          datas.push({
            give_product_id: that.set[i].id,
            num: that.set[i].num,
            price: that.money.money
          });
        }

        //下订单
        this.$axios({
          method: "POST",
          url: Config.restUrl + "api/v2/order",
          data: { grade: JSON.stringify(datas) },
          headers: {
            token: this.getToken
            // token: "237cf94848711e2399fa1e8c1a74a395"
          }
        }).then(ress => {
          console.log(ress.data);
          window.localStorage.setItem(
            "order_no",
            JSON.stringify(ress.data.order_no)
          );
          //支付
          if (ress.data.type == "grade") {
            this.$axios({
              method: "POST",
              url: Config.restUrl + "api/v2/pay/grade_pre_order",
              headers: {
                token: that.getToken
                // token: "237cf94848711e2399fa1e8c1a74a395"
              },
              data: { id: ress.data.order_id }
            }).then(pre_order => {
              let jsapi = pre_order.data;
              wx.ready(function() {
                wx.chooseWXPay({
                  timestamp: jsapi.timeStamp,
                  nonceStr: jsapi.nonceStr,
                  package: jsapi.package,
                  signType: jsapi.signType,
                  paySign: jsapi.paySign,
                  success: function(res) {
                    if (res.errMsg === "chooseWXPay:ok") {
                      that.$router.push({
                        name: "Indent1",
                        query: {
                          orderNo: res.data
                        }
                      });
                    }
                  },
                  fail: function(res) {
                    alert("支付失败");
                  },
                  cancel: function(res) {
                    alert("支付取消");
                  }
                });
              });
            });
          }
        });
      } else {
        alert("收货地址有误");
      }
    }
  }
};
</script>

    <style lang="scss">
.indent {
  margin-top: 4.5rem;
  margin-bottom: 4.5rem;
  .detail-header {
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
      width: 3.125rem;
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
  .postscript {
    padding: 1.25rem;
    textarea {
      width: 100%;
      height: 6.25rem;
    }
  }
  .indent-cart {
    a {
      .indent-cart-header {
        background: #fff;
        padding: 1.25rem;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .indent-cart-header {
    background: #fff;
    padding: 1.25rem;
    display: flex;
    justify-content: space-between;
    border-bottom: #c8c9cc 1px solid;
  }
}
</style>