<template>
  <div style="font-size:1.3rem;background:#fff">
    <!-- <div v-for="(items,indexs) in item" :key="indexs">{{items}}</div> -->
    <div class="detail-header">
      <div class="back">
        <router-link to="/">
          <i class="iconfont">&#xe771;</i>
        </router-link>
      </div>
      <div class>购物车</div>
      <div class="shop"></div>
    </div>
    <div v-if="addCart.length">
      <div class="shopping-cart">
        <div v-if="list.length">
          <div
            style="  border-bottom: 1px solid #ccc;padding:1rem  1.25rem"
            v-for="(item, index) in list"
            :key="index"
          >
            <van-radio-group
              v-model="radio"
              style="display: flex;justify-content:space-between;align-items: center;"
            >
       
                <div class="address" @click="back()">
                  <div style="padding-top: 0.6rem">
                    <div>
                      <span
                        style="font-size:1.4rem;font-weight:600;padding-right:0.3ren=m"
                      >{{item.consigner}}</span>
                      <span>{{item.phone}}</span>
                    </div>
                    <div>{{item.province}}{{item.city}}{{item.district}}{{item.address}}  </div>
                  </div>
                </div>
          
              <router-link :to="{path:'/testadd',query:{id:item.ua_id}}">
                <div style="color:#f15e0e;width: 30px;">编辑</div>
              </router-link>
            </van-radio-group>
          </div>
        </div>
        <div v-else>
          <router-link to="/shippingAddress">
            <div class="shopping-cart-header">
              <div>
                <i class="iconfont">&#xe611;</i>
                <span>添加收货地址</span>
              </div>
              <div>
                <i class="iconfont">&#xe632;</i>
              </div>
            </div>
          </router-link>
        </div>

        <div style="width:100%;
          height: 0.6rem;
          background:#f7f7f7"></div>
        <div class="shopping-cart-main">
          <div v-if="addCart.length">
            <div class="shopping-main" v-for="(item,index) in  addCart" :key="index">
              <!-- <div v-for="(itemss,indexss) in item" :key="indexss">
              <div class="shopping-cart-main1">
                <div class="shopping-cart-img">{{itemss.goods_name}}</div>
                <div class="shopping-cart-img">{{itemss.goods_num}}</div>
              </div>
              </div>-->
              <div class="shopping-cart-main1">
                <!-- <van-checkbox v-model="item.index" @click="CheckItem(item)" class="checkedBox"></van-checkbox> -->
                <div class=" an-checkbox">
                  <div
                    class="van-checkbox__icon van-checkbox__icon--round"
                    :class="{'van-checkbox__icon--checked':item.checked}"
                    @click="checkeds(item.goods_id)">
                    <i class="van-icon van-icon-success">
                      <!---->
                    </i>
                  </div>
                </div>
                <div style="
                width:100%;display: flex;justify-content: space-between;">
                  <div class="shoping-cart-img">
                    <img :src="item.shopimg" alt style="width:100%;">
                  </div>
                  <div class="shopname">
                    <div class style="height:2.8rem">
                      <p>{{item.goods_name}}</p>
                    </div>

                    <div class="shoppr">
                      <div class="supply_price" style="display:flex;align-items: center;">
                        <p
                          style="font-size: 1.8125rem;
                        font-weight:600;
    color: rgb(239, 118, 52);"
                        >现价:￥{{item.market_price}}</p>
                        <p
                          style="font-size:1.1rem;color:#ccc;text-decoration:line-through;margin-left: 1.4rem;"
                        >原价:￥{{item.market_price}}</p>
                      </div>
                      <div class="goods_num">
                        <div>
                          <van-stepper
                            v-model="item.goods_num"
                            integer
                            min="1"
                            max="10"
                            @plus="add_num(item.goods_id)"
                            @minus="min_num(item.goods_id)"
                            disable-input
                          />
                        </div>
                        <div class="del" @click="del(item.goods_id)">
                          <i class="iconfont">&#xe61b;</i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="width:100%;
          height: 0.6rem;
          background:#f7f7f7"></div>
            </div>
          </div>
          <div v-else style="padding:10rem;    text-align: center;">
            <div>
              <div class="shopimg" style="padding:1.3rem">
                <img src="../../assets/img/img_empty_shopping_cart.png">
              </div>
              <p style="color:#9FA4A5;font-size:1.5rem">购物车还是空的，快去逛逛吧~</p>
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

      <div class="detail-footer" style="border-">
        <!--:price="parseFloat(shoplists[index].shop_price*100)" -->
        <van-submit-bar button-text="结算" :price="checkedmoney*100" @submit="indent">
          <!--         :disabled="{flase:checkedcount<0}" -->
          <div class="van-checkbox">
            <div
              class="van-checkbox__icon van-checkbox__icon--round"
              :class="{'van-checkbox__icon--checked':checkedAll}"
              @click="allcheck(checkedAll)"
            >
              <i class="van-icon van-icon-success">
                <!---->
              </i>
            </div>
            <span class="van-checkbox__label">全选</span>
          </div>
          <!-- <span slot="tip">你的收货地址不支持同城送,</span> -->
        </van-submit-bar>
      </div>
    </div>
    <div v-else style="padding:10rem;    text-align: center;">
      <div>
        <div class="shopimg" style="padding:1.3rem">
          <img src="../../assets/img/img_empty_shopping_cart.png">
        </div>
        <p style="color:#9FA4A5;font-size:1.5rem">购物车还是空的，快去逛逛吧~</p>
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
</template>
<script>
import Vue from "vue";
import { mapState, mapGetters } from "vuex";
import {Config}from '../../uitls/config.js'
import {
  RadioGroup,
  Radio,
  AddressList,
  Checkbox,
  CheckboxGroup,
  Stepper,
  SubmitBar,
  Card,
  SwipeCell
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
import Dfooter from "../../components/Dfooter";
export default {
  components: {
    Dfooter
  },
  data() {
    return {
      value: 1,
      Num: {},
      checkedNames: [],
      checked: false,
      dialogshow: false,
      chosenAddressId: "1",
      list: [],
      radio: "1"
    };
  },
  
  created() {
    this.testlist();
    console.log(this)
  },
    beforeCreate() {
    let that = this;
    let url = window.location.href;
    //let url =
    //  "http://pub.hqyulin.com/?token=899a7451d56be0b3e66cf98fc8ea9f12#/";
    let str = url.split("?")[1].split("#")[0];
    let arr = str.split("=");
    let strs = str.split("=")[1];
    this.$axios({
      //调用接口
      method: "post",
      url: Config.restUrl + "api/v2/user/isb",
      // params: {
      //   token: Token
      // },
      headers: {
        token: strs
        // token: "221f8fd0ca0be03bdefccf62b1f5ff6b"
      }
    }).then(
      function(res) {
        //接口返回数据
        console.log(res);
      //  that.$router.push({ path: "/My" })
      }
    ).catch(err=>{
        window.location.href = "http://d.wbgapp.com/api/v2/code/user"
    });
  },
  computed: {
    //购物车的商品
    addCart() {
      return this.$store.state.addCart;
    },
    //总数
    goods_num() {
      return this.$store.getters.totleCount;
    },
    //总价
    zmoney() {
      return this.$store.getters.totlemoney;
    },
    //全选
    checkedAll() {
      return this.$store.getters.allcheck;
    },
    //选中数量
    checkedcount() {
      return this.$store.getters.checkedcount;
    },
    //选中价格
    checkedmoney() {
      return this.$store.getters.checkedmoney;
    },
    getToken() {
      return this.$store.getters.getToken;
    }
  },
  methods: {
    testlist() {
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
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].is_default == 1) {
          that.list.push(res.data[i]);
        }
      }
    });
    },
    indent() {
      this.$router.push("/Indent");
    },
    //删除
    del(id) {
      // console.log(id);
      this.$store.commit("delCart", id);
      console.log(id)
    },
    //增加
    add_num(id) {
      // console.log("增加" + id);
      this.$store.commit("plusCart", id);
    },
    min_num(id) {
      // console.log("减少" + id);
      this.$store.commit("minCart", id);
    },
    checkeds(id) {
      // console.log(id);
      this.$store.commit("checkGoods", id);
    }, //全选
    allcheck(checkedAll) {
      this.$store.commit("checkedAll", checkedAll);
    }
  },
  watch: {}
};
</script>
<style lang="scss" >
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
.shopping-cart {
  margin-top: 4.5rem;
  margin-bottom: 4.5rem;
  .shopping-cart-header {
    background: #fff;
    padding: 1.25rem;
    display: flex;
    justify-content: space-between;
  }
  .shopping-cart-main {
    .shopping-main {
      .shopping-cart-main1 {
        padding: 0.8rem;
        align-items: center;
        display: flex;
        .shoping-cart-img {
          padding: 0.5rem;
          width: 8.25rem;
          height: 8.25rem;
          img {
            box-sizing: border-box;
            height: 100%;
          }
          .shoping-cart-de {
            .shoping-name {
              padding: 0.375rem;
            }
            .shoping-money {
              padding: 0.375rem;
              display: flex;
              justify-content: flex-start;
            }
            .Stepper {
              padding: 0.375rem;
            }
          }
        }
        .shopname {
          flex: 1;
          p {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
          .shoppr {
            margin-top: 1.25rem;
            .supply_price {
            }
            .goods_num {
              align-items: center;
              display: flex;
              justify-content: space-between;
              .del {
            padding: 0.7rem;
              }
              .van-stepper{
                .van-stepper__input{
                  color: #333;
                }
              }
            }
          }
        }
      }
    }
  }
 
}
 .shoping-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .van-submit-bar>>>.van-submit-bar__bar{
        height: 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .van-checkbox{
      flex: 1;
      .van-checkbox__icon{
        padding-left:0.8rem;
      }
      .van-checkbox__label{
        margin-left: 0
      }
    }
    .van-button--danger{
      background-color: #f15e0e;
    }
    .van-submit-bar__text{
      .van-submit-bar__price{
        color: #f15e0e
      }
    }
  }
</style>