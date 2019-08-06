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
          <div style="margin-bottom: 5px;">{{giveitem.name}}</div>
          <div style="margin-bottom: 5px;"></div>
          <div style="    position: absolute;bottom: 0;width:100%">
            <div class="num" style>
              <div>
                <!-- <div style="background:#F15E0E;color:#fff;padding:0.3rem;border-radius: 10%;"></div> -->
              </div>
              <div>
                <van-stepper
                  v-model="giveitem.num"
                  integer
                  max="30"
                  min="0"
                  @plus="add_num(giveitem)"
                  @minus="min_num(giveitem)"
                
                  disable-input
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="picking-footer" @click="cilck">
      <div>提交</div>
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
      Setupshop: []
    };
  },
  created() {
    this.money = this.$route.query.money;

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
      for (var i = 0; i < Gres.data.length; i++) {
        that.$set(Gres.data[i], "num", 0);
      }
      that.GiveList = Gres.data;
      that.$set(that.GiveList, "totalnum", 0);
    });
  },
  methods: {
    cilck(e) {
      var znum = 0;
      this.GiveList.forEach(item => {
        //遍历num，并累加
        znum += item.num;
      });
      this.GiveList.totalnum = znum;
      this.$set(this.Setupshop, "money", this.money);

      this.abo();
    },
    //判断传的价格是否是有的
    abo() {
      if (this.money * 1 == 99) {
        if (this.GiveList.totalnum == 1) {
          this.$router.push({
            path: "/SetupIndent",
            query: { set: this.Setupshop }
          });
        } else {
          Toast("请选择一套商品");
        }
      } else if (this.money * 1 == 299) {
        if (this.GiveList.totalnum == 2) {
          this.$router.push({
            path: "/SetupIndent",
            query: { set: this.Setupshop }
          });
        } else {
          Toast("请选择两套商品");
        }
      } else if (this.money * 1 == 9680) {
        if (this.GiveList.totalnum === 30) {
          console.log(this.Setupshop);
          this.$router.push({
            path: "/SetupIndent",
            query: { set: this.Setupshop }
          });
        } else {
          Toast("请选择三十套商品");
        }
      }
    },
    add_num(e) {
      var znum = 0;

      var ter = e;

      this.GiveList.forEach(item => {
        //遍历num，并累加
        znum += item.num;
      });
      this.GiveList.totalnum = znum;

      if (this.money * 1 == 99) {
        if (this.GiveList.totalnum == 1) {
        } else {
          Toast("请选择一套商品");

          if (this.Setupshop.length == 0) {
            this.Setupshop.push(ter);
          } else {
            for (var i = 0; i < this.Setupshop.length; i++) {
              if (this.Setupshop[i].id == ter.id) {
                this.Setupshop[i].num++;
              } else {
                this.Setupshop.push(ter);
              }
            }
          }
          this.Setupshop = [...new Set(this.Setupshop)];
          console.log(this.Setupshop);
        }
      } else if (this.money * 1 == 299) {
        if (this.GiveList.totalnum == 2) {
          Toast("两套商品已经够了");
        } else {
          Toast("请选择两套商品");

          if (this.Setupshop.length == 0) {
            this.Setupshop.push(ter);
          } else {
            for (var i = 0; i < this.Setupshop.length; i++) {
              if (this.Setupshop[i].id == ter.id) {
                this.Setupshop[i].num++;
              } else {
                this.Setupshop.push(ter);
              }
            }
          }
          this.Setupshop = [...new Set(this.Setupshop)];
          console.log(this.Setupshop);
        }
      } else if (this.money * 1 == 9680) {
        if (this.GiveList.totalnum == 30) {
          Toast("三十套商品已经够了");
        } else {
          Toast("请选择三十套商品");

          if (this.Setupshop.length == 0) {
            this.Setupshop.push(ter);
          } else {
            for (var i = 0; i < this.Setupshop.length; i++) {
              if (this.Setupshop[i].id == ter.id) {
                this.Setupshop[i].num++;
              } else {
                this.Setupshop.push(ter);
              }
            }
          }
          this.Setupshop = [...new Set(this.Setupshop)];
        }
      }
    },
    min_num(e) {
      var znum = 0;

      this.GiveList.forEach(item => {
        //遍历num，并累加
        znum -= item.num;
      });
      this.GiveList.totalnum = znum;
    },
    // blur(e) {
    //   var znum = 0;
    //   var ter = e;
    //   console.log(ter)
    //   this.GiveList.forEach(item => {
    //     //遍历num，并累加
    //     znum += item.num;
    //   });
    //   this.GiveList.totalnum = znum;
    //   console.log(this.GiveList.totalnum);
    //   if (this.money * 1 == 99) {
    //     if (this.GiveList.totalnum == 1) {
    //     } else {
    //       Toast("请选择一套商品");

    //       if (this.Setupshop.length == 0) {
    //         this.Setupshop.push(ter);
    //       } else {
    //         for (var i = 0; i < this.Setupshop.length; i++) {
    //           if (this.Setupshop[i].id == ter.id) {
    //             console.log(this.Setupshop[i].id);
    //             this.Setupshop[i].num++;
    //           } else {
    //             this.Setupshop.push(ter);
    //           }
    //         }
    //       }
    //       this.Setupshop = [...new Set(this.Setupshop)];
    //       console.log(this.Setupshop);
    //     }
    //   } else if (this.money * 1 == 299) {
    //     if (this.GiveList.totalnum == 2) {
    //       Toast("两套商品已经够了");
    //     } else {
    //       Toast("请选择两套商品");

    //       if (this.Setupshop.length == 0) {
    //         this.Setupshop.push(ter);
    //       } else {
    //         for (var i = 0; i < this.Setupshop.length; i++) {
    //           if (this.Setupshop[i].id == ter.id) {
    //             this.Setupshop[i].num++;
    //           } else {
    //             this.Setupshop.push(ter);
    //           }
    //         }
    //       }
    //       this.Setupshop = [...new Set(this.Setupshop)];
    //       console.log(this.Setupshop);
    //     }
    //   } else if (this.money * 1 == 9680) {
    //     if (this.GiveList.totalnum == 30) {
    //       Toast("三十套商品已经够了");
    //     } else {
    //       Toast("请选择三十套商品");
     
    //       if (this.Setupshop.length == 0) {
    //         this.Setupshop.push(ter);
    //       } else {
    //         for (var i = 0; i < this.Setupshop.length; i++) {
    //           if (this.Setupshop[i].id == ter.id) {
    //             this.Setupshop[i].num++;
    //           } else {
    //             this.Setupshop.push(ter);
    //           }
    //         }
    //       }
    //       console.log(this.Setupshop.target.value);
    //       this.Setupshop = [...new Set(this.Setupshop)];
    //     }
    //   }
    // }
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
    padding: 1rem 0;
    color: #fff;
  }
}
</style>
