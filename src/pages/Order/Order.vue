<template>
  <div>
    <div class="Order-header">
      <div class="back" @click="back">
        <i class="iconfont">&#xe79b;</i>
      </div>
      <div class>我的订单</div>
      <div class="shop"></div>
    </div>
    <div class="Order-main">
      <div class="Order-main-header">
        <ul>
          <li
            class="act"
            v-for="(item,index) in wpList"
            :key="index"
            :class="{act1 : act1 == index}"
            @click="selected(index,item)"
          >
            <div class="text">{{item.name}}</div>
          </li>
        </ul>
      </div>
      <div style="background: #f7f7f7;padding:0.3rem"></div>
      <div class="Order-main-main">
        <div class="Order-main-main-shop">
          <!---  循环遍历tabContents数组中的元素,v-show绑定事件,当循环的索引等于num中的值,显示该itemCon值  --->
          <div>
            <div class="Order-main-main-shop-list" v-if="act1==0" style>
              <div v-if="all.length" style="padding: 1.3rem;">
                <div
                  v-for="(item,index) in all"
                  :key="index"
                  style="background: #fff;border-radius: 5px;"
                >
                  <div
                    class="Order-main-main-shop-main"
                    v-for="(items,indexs) in item.og"
                    :key="indexs"
                  >
                    <div class="Order-main-main-shop-main-img">
                      <img :src="items.goods_image">
                    </div>
                    <div class="Order-main-main-shop-main-text">
                      <p class="Order-main-main-shop-main-name">{{items.goods_name}}</p>
                      <div style="display:flex;justify-content: space-between;">
                        <p style="color:#F15E0E">￥{{items.goods_price}}</p>
                        <p>x{{items.goods_num}}</p>
                      </div>
                    </div>
                  </div>
                  <div style="padding-top:0.8rem;padding-bottom:0.8rem">
                    <div>
                      合计:
                      <span style="color:#F15E0E;">{{item.goods_price}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else style="padding:10rem;    text-align: center;">
                <div>
                  <div class="shopimg" style="padding:1.3rem">
                    <img src="../../assets/img/img_empty_shopping_cart.png">
                  </div>
                  <p style="color:#9FA4A5;font-size:1.5rem">暂时没有订单，快去逛逛吧~</p>
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
              <div style="background: #f7f7f7;padding:0.3rem"></div>
            </div>
            <div class="Order-main-main-shop-list" v-else-if="act1==1">
              <div v-if="nopayment.length">
                <div>
                  <div>
                    <p></p>
                  </div>
                  <div>
                    <p>等待平台发货</p>
                  </div>
                </div>
                <div v-for="(item,index) in nopayment" :key="index">
                  <div class="Order-main-main-shop-main">
                    <div class="Order-main-main-shop-main-img">
                      <img :src="item.goods_image">
                    </div>
                    <div class="Order-main-main-shop-main-text">
                      <p class="Order-main-main-shop-main-name">{{item.goods_name}}</p>
                      <div style="display:flex;justify-content: space-between;">
                        <p style="color:#F15E0E">￥{{item .goods_price}}</p>
                        <p>x{{item.goods_num}}</p>
                      </div>
                    </div>
                  </div>
                  <div style="padding-top:0.8rem;padding-bottom:0.8rem">
                    <div>
                      合计:
                      <span style="color:#F15E0E;">{{item.goods_price}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else style="padding:10rem;    text-align: center;">
                <div>
                  <div class="shopimg" style="padding:1.3rem">
                    <img src="../../assets/img/img_empty_shopping_cart.png">
                  </div>
                  <p style="color:#9FA4A5;font-size:1.5rem">暂时没有订单，快去逛逛吧~</p>
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
              <div style="background: #f7f7f7;padding:0.3rem"></div>
            </div>
            <div class="Order-main-main-shop-list" v-else-if="act1==2">
              <div v-if="noshipments.length">
                <div style="background: #fff;padding:0.3rem">
                  <div style="display: flex;">
                    <div
                      style="text-align: center;display: flex;flex-direction: column;justify-content: center;    padding: 0.6rem 1.25rem;"
                    >
                      <i class="iconfont" style="color:#FC7E49;font-size: 2.45rem;">&#xe6d5;</i>
                      <span style="color:#999999">代发货</span>
                    </div>
                    <div
                      style="border-left: 1px solid #DEDEDE;padding-top: 0.8rem;padding-right:1.25rem;padding-bottom:0.8rem;padding-left: 1.25rem;    display: flex;    align-items: center;"
                    >
                      <p>等待平台发货</p>
                    </div>
                  </div>
                </div>
                <div style="background: #f7f7f7;padding:0.3rem"></div>
                <div v-for="(item,index) in noshipments" :key="index" style="background:#fff">
                  <div class="Order-main-main-shop-main">
                    <div class="Order-main-main-shop-main-img">
                      <img :src="item.goods_image">
                    </div>
                    <div class="Order-main-main-shop-main-text">
                      <p class="Order-main-main-shop-main-name">{{item.goods_name}}</p>
                      <div style="display:flex;justify-content: space-between;">
                        <p style="color:#F15E0E">￥{{item .goods_price}}</p>
                        <p>x{{item.goods_num}}</p>
                      </div>
                    </div>
                  </div>
                  <div style="padding-top:0.8rem;padding-bottom:0.8rem">
                    <div>
                      合计:
                      <span style="color:#F15E0E;">{{item.goods_price}}</span>
                    </div>
                  </div>
                </div>
                <div style="background: #f7f7f7;padding:0.3rem"></div>
              </div>
              <div v-else style="padding:10rem;    text-align: center;">
                <div>
                  <div class="shopimg" style="padding:1.3rem">
                    <img src="../../assets/img/img_empty_shopping_cart.png">
                  </div>
                  <p style="color:#9FA4A5;font-size:1.5rem">暂时没有订单，快去逛逛吧~</p>
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

            <div class="Order-main-main-shop-list" v-else-if="act1==3">
              <div v-if="nopaymentli1.length">
                <div style="background: #fff;padding:0.3rem">
                  <div style="display: flex;">
                    <div
                      style="text-align: center;display: flex;flex-direction: column;justify-content: center;    padding: 0.6rem 1.25rem;"
                    >
                      <i class="iconfont" style="color:#FC7E49;font-size: 2.45rem;">&#xe6d5;</i>
                      <span style="color:#999999">代发货</span>
                    </div>
                    <div
                      style="border-left: 1px solid #DEDEDE;padding-top: 0.8rem;padding-right:1.25rem;padding-bottom:0.8rem;padding-left: 1.25rem;    display: flex;    align-items: center;"
                    >
                      <p>等待平台发货</p>
                    </div>
                  </div>
                </div>
                <div style="background: #f7f7f7;padding:0.3rem"></div>
                <div v-for="(item,index) in nopaymentli1" :key="index" style="background:#fff">
                  <div class="Order-main-main-shop-main">
                    <div class="Order-main-main-shop-main-img">
                      <img :src="item.goods_image">
                    </div>
                    <div class="Order-main-main-shop-main-text">
                      <p class="Order-main-main-shop-main-name">{{item.goods_name}}</p>
                      <div style="display:flex;justify-content: space-between;">
                        <p style="color:#F15E0E">￥{{item .goods_price}}</p>
                        <p>x{{item.goods_num}}</p>
                      </div>
                    </div>
                  </div>
                  <div style="padding-top:0.8rem;padding-bottom:0.8rem">
                    <div>
                      合计:
                      <span style="color:#F15E0E;">{{item.goods_price}}</span>
                    </div>
                  </div>
                </div>
                <div style="background: #f7f7f7;padding:0.3rem"></div>
              </div>
              <div v-else style="padding:10rem;    text-align: center;">
                <div>
                  <div class="shopimg" style="padding:1.3rem">
                    <img src="../../assets/img/img_empty_shopping_cart.png">
                  </div>
                  <p style="color:#9FA4A5;font-size:1.5rem">暂时没有订单，快去逛逛吧~</p>
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
            <div class="Order-main-main-shop-list" v-else-if="act1==4">
              <div v-if="nopaymentli1.length">
                <div style="background: #fff;padding:0.3rem">
                  <div style="display: flex;">
                    <div
                      style="text-align: center;display: flex;flex-direction: column;justify-content: center;    padding: 0.6rem 1.25rem;"
                    >
                      <i class="iconfont" style="color:#FC7E49;font-size: 2.45rem;">&#xe6d5;</i>
                      <span style="color:#999999">代发货</span>
                    </div>
                    <div
                      style="border-left: 1px solid #DEDEDE;padding-top: 0.8rem;padding-right:1.25rem;padding-bottom:0.8rem;padding-left: 1.25rem;    display: flex;    align-items: center;"
                    >
                      <p>等待平台发货</p>
                    </div>
                  </div>
                </div>
                <div style="background: #f7f7f7;padding:0.3rem"></div>
                <div v-for="(item,index) in nopaymentli1" :key="index" style="background:#fff">
                  <div class="Order-main-main-shop-main">
                    <div class="Order-main-main-shop-main-img">
                      <img :src="item.goods_image">
                    </div>
                    <div class="Order-main-main-shop-main-text">
                      <p class="Order-main-main-shop-main-name">{{item.goods_name}}</p>
                      <div style="display:flex;justify-content: space-between;">
                        <p style="color:#F15E0E">￥{{item .goods_price}}</p>
                        <p>x{{item.goods_num}}</p>
                      </div>
                    </div>
                  </div>
                  <div style="padding-top:0.8rem;padding-bottom:0.8rem">
                    <div>
                      合计:
                      <span style="color:#F15E0E;">{{item.goods_price}}</span>
                    </div>
                  </div>
                </div>
                <div style="background: #f7f7f7;padding:0.3rem"></div>
              </div>
              <div v-else style="padding:10rem;    text-align: center;">
                <div>
                  <div class="shopimg" style="padding:1.3rem">
                    <img src="../../assets/img/img_empty_shopping_cart.png">
                  </div>
                  <p style="color:#9FA4A5;font-size:1.5rem">暂时没有订单，快去逛逛吧~</p>
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
            <div class="Order-main-main-shop-list" v-else-if="act1==5">
              <div v-if="nopaymentli1.length">
                <div style="background: #fff;padding:0.3rem">
                  <div style="display: flex;">
                    <div
                      style="text-align: center;display: flex;flex-direction: column;justify-content: center;    padding: 0.6rem 1.25rem;"
                    >
                      <i class="iconfont" style="color:#FC7E49;font-size: 2.45rem;">&#xe6d5;</i>
                      <span style="color:#999999">代发货</span>
                    </div>
                    <div
                      style="border-left: 1px solid #DEDEDE;padding-top: 0.8rem;padding-right:1.25rem;padding-bottom:0.8rem;padding-left: 1.25rem;    display: flex;    align-items: center;"
                    >
                      <p>等待平台发货</p>
                    </div>
                  </div>
                </div>
                <div style="background: #f7f7f7;padding:0.3rem"></div>
                <div v-for="(item,index) in nopaymentli1" :key="index" style="background:#fff">
                  <div class="Order-main-main-shop-main">
                    <div class="Order-main-main-shop-main-img">
                      <img :src="item.goods_image">
                    </div>
                    <div class="Order-main-main-shop-main-text">
                      <p class="Order-main-main-shop-main-name">{{item.goods_name}}</p>
                      <div style="display:flex;justify-content: space-between;">
                        <p style="color:#F15E0E">￥{{item .goods_price}}</p>
                        <p>x{{item.goods_num}}</p>
                      </div>
                    </div>
                  </div>
                  <div style="padding-top:0.8rem;padding-bottom:0.8rem">
                    <div>
                      合计:
                      <span style="color:#F15E0E;">{{item.goods_price}}</span>
                    </div>
                  </div>
                </div>
                <div style="background: #f7f7f7;padding:0.3rem"></div>
              </div>
              <div v-else style="padding:10rem;    text-align: center;">
                <div>
                  <div class="shopimg" style="padding:1.3rem">
                    <img src="../../assets/img/img_empty_shopping_cart.png">
                  </div>
                  <p style="color:#9FA4A5;font-size:1.5rem">暂时没有订单，快去逛逛吧~</p>
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
            <div class="Order-main-main-shop-list" v-else-if="act1==6">
              <div v-if="nopaymentli1.length">
                <div style="background: #fff;padding:0.3rem">
                  <div style="display: flex;">
                    <div
                      style="text-align: center;display: flex;flex-direction: column;justify-content: center;    padding: 0.6rem 1.25rem;"
                    >
                      <i class="iconfont" style="color:#FC7E49;font-size: 2.45rem;">&#xe6d5;</i>
                      <span style="color:#999999">代发货</span>
                    </div>
                    <div
                      style="border-left: 1px solid #DEDEDE;padding-top: 0.8rem;padding-right:1.25rem;padding-bottom:0.8rem;padding-left: 1.25rem;    display: flex;    align-items: center;"
                    >
                      <p>等待平台发货</p>
                    </div>
                  </div>
                </div>
                <div style="background: #f7f7f7;padding:0.3rem"></div>
                <div v-for="(item,index) in nopaymentli1" :key="index" style="background:#fff">
                  <div class="Order-main-main-shop-main">
                    <div class="Order-main-main-shop-main-img">
                      <img :src="item.goods_image">
                    </div>
                    <div class="Order-main-main-shop-main-text">
                      <p class="Order-main-main-shop-main-name">{{item.goods_name}}</p>
                      <div style="display:flex;justify-content: space-between;">
                        <p style="color:#F15E0E">￥{{item .goods_price}}</p>
                        <p>x{{item.goods_num}}</p>
                      </div>
                    </div>
                  </div>
                  <div style="padding-top:0.8rem;padding-bottom:0.8rem">
                    <div>
                      合计:
                      <span style="color:#F15E0E;">{{item.goods_price}}</span>
                    </div>
                  </div>
                </div>
                <div style="background: #f7f7f7;padding:0.3rem"></div>
              </div>
              <div v-else style="padding:10rem;    text-align: center;">
                <div>
                  <div class="shopimg" style="padding:1.3rem">
                    <img src="../../assets/img/img_empty_shopping_cart.png">
                  </div>
                  <p style="color:#9FA4A5;font-size:1.5rem">暂时没有订单，快去逛逛吧~</p>
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  data() {
    return {
      wpList: [
        { name: "全部" },
        {
          name: "待付款"
        },
        { id: 0, name: "待发货" },
        { id: 1, name: "待收货" },
        { id: 3, name: "待评价" },
        { id: 4, name: "已完成" },
        { id: 6, name: "退货" }
      ],
      act1: "0",
      tabContents: [this.all, "内容二", "内容三", "内容四", "内容五"],
      nopayment: [], //未付款
      noshipments: [], //待发货
      nopaymentli1: [], //待收货
      nopevaluate: [], //待评价
      all: [] //全部订单
    };
  },
  created() {
    this.nopaymentli();
    let that = this;
    this.$axios({
      method: "get",
      url: "https://api.ddjingxuan.cn/api/v2/order/all",

      headers: {
        token: "639b6ab402a8e9d00db9b11b72858f99"
      }
    }).then(res => {
      if (res.data.error_code == 0) {
        that.all = "";
      } else {
        that.all = res.data;
      }
    });
  },
  methods: {
    selectall() {},
    selected(index, item) {
      this.act1 = index;
      var that = this;
      if (item.id >= 0) {
        this.$axios({
          method: "get",
          url: "https://api.ddjingxuan.cn/api/v2/order/status",
          params: {
            id: item.id
          },
          headers: {
            token: "639b6ab402a8e9d00db9b11b72858f99"
          }
        }).then(res => {
          if (res.data.error_code == 0) {
            console.log("暂无订单");
          } else {
            if (item.id == 0) {
              console.log(res.data);
              that.noshipments = res.data;
            } else if (item.id) {
              that.nopaymentli1 = res.data;
            } else if (item.id) {
            }
          }
        });
      } else {
        console.log("没有id");
      }
    },
    back() {
      this.$router.go(-1); //返回上一层
    },

    //未付款的
    nopaymentli() {
      var that = this;
      this.$axios({
        method: "get",
        url: "https://api.ddjingxuan.cn/api/v2/order/pay",
        headers: {
          token: "45477fc38e40b7de258d5868d4ceaa08"
        }
      }).then(res => {
        console.log(res);
        if (res.data.error_code == 0) {
          that.nopayment = "";
        } else {
          that.nopayment = res.data;
        }
      });
    }
  }
};
</script>
<style lang="scss">
.Order-header {
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
.Order-main {
  background: #f7f7f7;
  margin-top: 4.5rem;
  .Order-main-header {
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
  .Order-main-main {
    background: #fff;
    .Order-main-main-shop {
      .Order-main-main-shop-list {
        .Order-main-main-shop-main {
          padding: 0.8rem;
          border-bottom: #dedede 1px solid;
          display: flex;
          justify-content: space-between;
          .Order-main-main-shop-main-img {
            width: 10.3rem;
            img {
              width: 100%;
            }
          }
          .Order-main-main-shop-main-text {
            width: 21.5rem;
            font-size: 1.625rem;
            .Order-main-main-shop-main-name {
              width: 100%;
              position: relative;
              overflow: hidden;
              height: 5.4rem;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }
            .Order-main-main-shop-main-name::after {
              counter: "...";
              font-weight: bold;
              position: absolute;
              bottom: 0;
              right: 0;
              padding: 0 5px 0px 5px;
              background-color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>

