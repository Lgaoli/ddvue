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
          <van-radio-group
            v-model="radio"
            style="    display: flex;
    justify-content:space-between;
    align-items: center;
    "
          >
            <van-radio :name="item">
              <div class="address" @click="back()">
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
            </van-radio>
            <router-link to="/AddressEdit">
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
              <span>暂无收货地址</span>
            </div>
            <div>
        
            </div>
          </div>
     
        </router-link>
      </div>
           <div data-v-78cb6dca="" style="width: 100%; height: 0.6rem; background: rgb(247, 247, 247);"></div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { RadioGroup, Radio, AddressList } from "vant";
import test from "../../assets/test.js";
Vue.use(RadioGroup)
  .use(Radio)
  .use(AddressList);
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [],
      radio: '1'
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
      url: "https://api.ddjingxuan.cn/api/v2/address",
      headers: {
        token: that.getToken
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
  methods: {
    back() {
      this.$router.go(-1);
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
    width: 3.125rem;
    text-align: center;
  }
  .shop {
    width: 3.125rem;
    text-align: center;
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
