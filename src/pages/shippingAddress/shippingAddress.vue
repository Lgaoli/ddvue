<template>
  <div>
    <div class="order-form-header">
      <div class="back" style="text-align: right;">
        <router-link to="/shop">
          <i class="iconfont">&#xe771;</i>
        </router-link>
      </div>
      <div class>收货地址</div>
      <div class="back">
        <router-link to="/AddressEdit">
          <p style="font-size:1.25rem;color:#f15e0e">添加</p>
        </router-link>
      </div>
    </div>
    <div class="order-form-main" style="padding: 0 1.25rem 0 1.25rem;">
      <div v-if="list.length">
        <div
          style="  border-bottom: 1px solid #ccc;padding:0 1.25rem  0  1.25rem"
          v-for="(item, index) in list"
          :key="index"
        >
          <div v-if="item.is_default==1">
            <van-radio-group
              v-model="radio"
              style="display: flex;justify-content:space-between;align-items: center;"
            >
              <van-radio :name="radio">
                <div class="address" @click="back(item.ua_id)">
                  <div style="padding-top: 0.6rem">
                    <div>
                      <span
                        style="font-size:1.4rem;font-weight:600;padding-right:0.3rem"
                      >{{item.consigner}}</span>
                      <span>{{item.phone}}</span>
                    </div>
                    <div>{{item.province}}{{item.city}}{{item.district}}{{item.address}}</div>
                  </div>
                </div>
              </van-radio>
              <router-link :to="{path:'/testadd',query:{id:item.ua_id}}">
                <div style="color:#f15e0e;width: 30px;">编辑</div>
              </router-link>
            </van-radio-group>
          </div>
          <div v-else>
            <van-radio-group
              style="display: flex;justify-content:space-between;align-items: center;"
            >
              <van-radio :name="radio" @click="click(item)">
                <div class="address" @click="back(item.ua_id)">
                  <div style="padding-top: 0.6rem">
                    <div>
                      <span
                        style="font-size:1.4rem;font-weight:600;padding-right:0.3rem"
                      >{{item.consigner}}</span>
                      <span>{{item.phone}}</span>
                    </div>
                    <div>{{item.province}}{{item.city}}{{item.district}}{{item.address}}</div>
                  </div>
                </div>
              </van-radio>
              <router-link :to="{path:'/testadd',query:{id:item.ua_id}}">
                <div style="color:#f15e0e;width: 30px;">编辑</div>
              </router-link>
            </van-radio-group>
          </div>
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
      <div data-v-78cb6dca style="width: 100%; height: 0.6rem; background: rgb(247, 247, 247);"></div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { RadioGroup, Radio, AddressList } from "vant";
import test from "../../assets/test.js";
import { Config } from "../../uitls/config";
Vue.use(RadioGroup)
  .use(Radio)
  .use(AddressList);
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [],
      radio: "1"
    };
  },
  computed: {
    checkedgoods() {
      return this.$store.getters.checkedgoods;
    },
    checkedmoney() {
      return this.$store.getters.checkedmoney;
    },
    getToken() {
      return this.$store.getters.getToken;
    },
    freight() {
      let freight = 8;
      if (this.checkedmoney >= 88) {
        freight = 0;
      }
      return freight;
    }
  },
  created() {
    var that = this;
    // console.log(that);
    this.$axios({
      method: "get",
      url: Config.restUrl + "api/v2/address",
      headers: {
        token: that.getToken
      }
    }).then(res => {
      console.log(res.data);
      that.list = res.data;
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].is_default == 1) {
          that.radio = JSON.stringify(res.data[i].is_default);
        }
      }
    });
  },
  methods: {
    click(item) {
      console.log(item);
      item.is_default = 1;
      this.$axios({
        method: "post",
        url: Config.restUrl + "api/v2/address/is_default",
        headers: {
          token: this.getToken
        },
        data: {
          is_default: item.is_default,
          ua_id: item.ua_id
        }
      }).then(resg => {
        this.$router.go(0);
      });
    },
    back(id) {
      this.$router.push({ path: "/testadd", query: { id: id } });
      // console.log("上一页");
    },
    onAdd() {
      // Toast("新增地址");
      this.$router.push({
        path: `/AddressEdit`
      });
    },

    onEdit(item, index) {
      Toast("编辑地址:" + index);
    }
  }
};
</script>

<style lang="scss">
.order-form-header {
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
    width: 3.825rem;
    text-align: center;
  }
  .shop {
    width: 3.825rem;
    text-align: left;
    height: 100%;
    line-height: 4.5rem;
  }
}
.order-form-main {
  margin-top: 4.5rem;
  .address {
    display: flex;
    justify-content: space-around;
    padding: 0.5rem;
    align-items: center;
  }
  .shopping-cart-header {
    background: #fff;
    padding: 1.25rem;
    display: flex;
    justify-content: space-between;
  }
}
</style>
