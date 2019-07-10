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
  </div>
</template>
<script>
import Vue from "vue";
import { RadioGroup, Radio } from "vant";
import test from "../../assets/test.js";
Vue.use(RadioGroup).use(Radio);
export default {
  data() {
    return {
      radio: "1",
      list: [
        // {
        //   id:'',
        //   name: '',
        //   tel: '',
        //   address:''
        // }
      ],
      result: [],
      test,

      disabledList: []
    };
  },
  created() {
    this.testlist();
    // console.log(this.testlist());
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
      // Toast("编辑地址:" + index);
    },
    testlist() {
      var that = this;

      this.$axios({
        method: "get",
        url: "https://api.ddjingxuan.cn/api/v2/address",
        headers: {
          token: "48f2d3c84a0d1007122f41f32900e206"
        }
      }).then(res => {
        // console.log(res);

        for (let i = 0; i < this.test.testlist.length; i++) {
          var obj = {};
          obj.tel = this.test.testlist[i].tel;
          obj.name = this.test.testlist[i].goods_name;
          obj.tel = this.test.testlist[i].tel;
          obj.address = this.test.testlist[i].address;
          this.list.push(obj);
        }
      });
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
}
</style>
