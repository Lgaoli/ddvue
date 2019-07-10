<template>
  <div>
    <div class="AddressEdit-header">
      <div class="back">
        <router-link to="/shippingAddress">
          <i class="iconfont">&#xe771;</i>
        </router-link>
      </div>
      <div class>收货地址</div>
      <div class></div>
    </div>
    <div class="AddressEdit-main">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-set-default
        show-search-result
        :search-result="searchResult"
        :address-Info="AddressInfo"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
        @change-default="onvlue"
      />
    </div>
  </div>
</template>
<script>
import areaList from "../../assets/area.js";
import Vue from "vue";
import { AddressEdit } from "vant";
Vue.use(AddressEdit);
export default {
  data() {
    return {
      areaList,
      searchResult: [],
      AddressInfo: []
    };
  },
  created() {},
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
  methods: {
    onDelete() {},
    onvlue(value) {
      if (value == false) {
        this.onshow = 0;
        // console.log(this.onshow);
      } else {
        this.onshow = 1;
        // console.log(this.onshow);
      }
    },
    onChangeDetail(val) {
      //详细地址
      if (val) {
        // console.log(val);
      } else {
        this.searchResult = [];
      }
    },
    onSave(val) {
      //获取表单所有信息
      // console.log(val);
      //       addressDetail: "元岗街道慧通产业园B9栋"//详细地址
      // areaCode: "440106"
      // city: "广州市"//城市
      // country: ""
      // county: "天河区"//区
      // isDefault: true  //是否设为默认地址
      // name: "张三"
      // postalCode: "000000"//邮政编号
      // province: "广东省"//省
      // tel: "12312312312"
      // if (val) {
      //   console.log(val);
      //   this.$router.go(-1);
      // } else {
      // }
      // console.log(this.geToken)
      var that = this;
      this.$axios({
        method: "post",
        url: "https://api.ddjingxuan.cn/api/v2/address",
        headers: {
          token: that.getToken
        },
        data: {
          consigner: val.name,
          phone: val.tel,
          province: val.province,
          city: val.city,
          district: val.county,
          address: val.addressDetail,
          is_default: this.onshow
        },
        transformRequest: [
          function(data) {
            // Do whatever you want to transform the data
            let ret = "";
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                "=" +
                encodeURIComponent(data[it]) +
                "&";
            }
            return ret;
          }
        ],
      }).then(res => {
        // console.log(res);
      });
    }
  }
};
</script>

<style lang="scss">
.AddressEdit-header {
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
.AddressEdit-main {
  margin-top: 4.5rem;
}
</style>
