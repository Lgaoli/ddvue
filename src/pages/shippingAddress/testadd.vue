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
    <div class="van-address-edit" address-info>
      <div class="van-cell van-field">
        <div class="van-cell__title van-field__label">
          <span>姓名</span>
        </div>
        <div class="van-cell__value">
          <div class="van-field__body">
            <input type="text" placeholder="收货人姓名" class="van-field__control" v-model="consigner">
          </div>
        </div>
      </div>
      <div class="van-cell van-field">
        <div class="van-cell__title van-field__label">
          <span>电话</span>
        </div>
        <div class="van-cell__value">
          <div class="van-field__body">
            <input
              type="tel"
              placeholder="收货人手机号"
              class="van-field__control"
              maxlength="11"
              v-model="phone"
            >
          </div>
        </div>
      </div>
      <div class="van-cell van-field" id="area">
        <div class="van-cell__title van-field__label">
          <span>地区</span>
        </div>
        <div class="addAddress" @click="addshow">
          <input type="text" placeholder="所在地区" class="txtmangth" v-model="userAddress">
        </div>
      </div>
      <div class="van-cell van-address-edit-detail">
        <div class="van-cell__value van-cell__value--alone">
          <div class="van-cell van-field">
            <div class="van-cell__title van-field__label">
              <span>详细地址</span>
            </div>
            <div class="van-cell__value">
              <div class="van-field__body">
                <textarea
                  rows="1"
                  maxlength="200"
                  placeholder="街道门牌、楼层房间号等信息"
                  class="van-field__control"
                  style="height: 24px;"
                  v-model="address"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="van-cell van-cell--center van-cell--borderless van-switch-cell">
        <div class="van-cell__title">
          <span>设为默认收货地址</span>
        </div>
        <div class="van-cell__value">
          <div class="van-switch" style="font-size: 25px;">
            <van-switch
              :value="checked"
              @input="onInput"
              size="24px"
              active-color="#07c160"
              inactive-color="#fff"
              @change="check"
            />
          </div>
        </div>
      </div>
      <div class="van-address-edit__buttons">
        <button
          class="van-button van-button--danger van-button--normal van-button--block"
          @click="onSave"
        >
          <span class="van-button__text">保存</span>
        </button>
      </div>
    </div>
    <!-- 收货地址三级联动选项 start-->

    <van-popup v-model="show" position="bottom">
      <van-area :area-list="areaList" @confirm="confirm" @cancel="cancel"/>
    </van-popup>
    <!-- 收货地址三级联动选项 end-->
  </div>
</template>
<script>
import areaList from "../../assets/area.js";
import Vue from "vue";
import { Config } from "../../uitls/config";
import { AddressEdit, Toast, Switch, Popup, Area } from "vant";
import maps from "../../assets/map.js";
Vue.use(AddressEdit)
  .use(Toast)
  .use(Switch)
  .use(Popup)
  .use(Area);
export default {
  data() {
    return {
      show: false,
      checked: false,
      areaList,
      userAddress: "",
      phone: "",
      address: "",
      consigner: "",
      province: "",
      city: "",
      district: "",
      is_default: "",
      newsID: "",
      ua_id: ""
    };
  },
  mounted() {
    document.querySelector("body").style.backgroundColor = "#f5f7fa";
  },
  created() {
    this.newsID = this.$route.query.id;

    var that = this;
    // console.log(that);
    this.$axios({
      method: "post",
      url: Config.restUrl + "api/v2/user/address/id/" + that.newsID * 1,
      headers: {
        token: that.getToken
      }
    }).then(res => {
      console.log(res.data);
      that.phone = res.data.phone;
      that.province = res.data.province;
      that.address = res.data.address;
      that.consigner = res.data.consigner;
      that.district = res.data.district;
      that.is_default = res.data.is_default;
      that.city = res.data.city;
      that.userAddress =
        res.data.province + "/" + res.data.city + "/" + res.data.district;

      that.ua_id = res.data.ua_id;
      if (res.data.is_default == 1) {
        that.checked = true;
      } else {
        that.checked = false;
      }
    });
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
  methods: {
    onInput(checked) {
      this.checked = checked;
    },
    addshow() {
      this.show = true;
    },
    confirm(e) {
      console.log(e);
      let address = "";
      for (let i = 0; i < e.length; i++) {
        address += e[i].name + "/";
      }

      this.userAddress = address;
      this.province = this.userAddress.split("/")[0];
      this.city = this.userAddress.split("/")[1];
      this.district = this.userAddress.split("/")[2];
      console.log(this.userAddress);
      this.show = false;
    },
    cancel() {
      this.show = false;
    },
    check() {
      console.log(this);

      if (this.checked === false) {
        this.is_default = 0;
      } else {
        this.is_default = 1;
      }
      this.$axios({
        method: "post",
        url: Config.restUrl + "api/v2/address/is_default",
        headers: {
          token: this.getToken
        },
        data: {
          is_default: this.is_default,
          ua_id: this.ua_id
        }
      }).then(resg => {});
    },

    onChangeDetail(val) {
      //详细地址
      if (val) {
        // console.log(val);
      } else {
        this.searchResult = [];
      }
    },
    handleInput(e) {
      this.val = e.target.value.replace(/[^\d]/g, "");
    },
    onSave() {
      var that = this;

      if (!/^1[34578]\d{9}$/.test(that.phone)) {
        console.log("电话号码格式错误");
        that.$toast({
          message: "电话号码格式错误"
        });
      } else if (that.phone == "" || !that.phone) {
        that.$toast({
          message: "请输入电话号码"
        });
      } else {
        this.$axios({
          method: "post",
          url: Config.restUrl + "api/v2/update/address",
          headers: {
            token: that.getToken
          },
          data: {
            consigner: that.consigner,
            phone: that.phone,
            province: that.province,
            city: that.city,
            district: that.district,
            address: that.address,
            is_default: that.is_default,
            ua_id: that.newsID
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
          ]
        }).then(res => {
          console.log(res);
          if (res.data.code) {
            that.$toast({
              message: "保存成功"
            });
            // that.$router.go(-1);
          } else {
            that.$toast({
              message: "保存失败"
            });
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
/* 地址选择弹层 */
.ac {
  color: #000 !important;
  border-bottom: 0.02rem solid #fff !important;
}
.myAddress {
  width: 100%;
  background-color: white;
  border-top: 4px solid rgba(245, 245, 245, 1);
  color: #333;
  .cont {
    border-bottom: 1px solid rgba(245, 245, 245, 0.8);
    span {
      display: inline-block;
      font-size: 0.28rem;
      color: #333;
      line-height: 0.88rem;
      margin-left: 0.32rem;
    }
    section {
      float: left;
    }
    p {
      display: inline-block;
      font-size: 0.28rem;
      color: #333333;
      line-height: 0.88rem;
      margin-left: 1rem;
      .text {
        margin-left: 0.72rem;
      }
    }
    .pic2 {
      float: right;
      width: 0.14rem;
      height: 0.24rem;
      margin: 0.32rem 0.32rem 0.32rem 0;
    }
  }
}
.address {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 121;
  background: #fff;
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: height 0.5s;
}
.toggHeight {
  height: 22.7rem;
}
.layout {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 120;
  opacity: 0;
  transition: all 0.5s;
  background: rgb(53, 58, 60);
  visibility: hidden;
}
.layoutBg {
  opacity: 0.7;
  visibility: visible;
}
.area {
  padding: 0.3rem;
  font-size: 1.5rem;
  /* font-size: 0.24rem; */
  /* height: 0.48rem; */
  /* line-height: 0.48rem; */
  margin-left: 0.42rem;
  color: #262e31;
  margin-top: 0.31rem;

  /* overflow: hidden; */
}
.addList {
  margin-left: 0.4rem;

  color: #262e31;
}
.address {
  ul {
    height: calc(100% - 4rem);
    font-size: 1.5rem;
    overflow: auto;
    .active {
      color: #d2a24e;
    }

    li {
      list-style: none;
    }
  }
  .title {
    .accolor {
      color: #fe8549;
      border-bottom: 0.04rem solid #fe8549;
    }
  }
}
.title {
  display: flex;
  justify-content: space-between;
  border-bottom: 0.01rem solid #8a96a3;
}
.determine {
  /* display: inline-block; */
  /* width: 0.75rem; */
  text-align: center;
  /* float: right; */
  /* height: 0.82rem; */
  /* line-height: 0.82rem; */
  margin-right: 0.3rem;
  color: #d2a24e;
  /* font-size: 0.28rem; */
}
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
.van-address-edit {
  margin-top: 4.5rem;
  #area {
    display: flex;
    justify-content: start;
    .addAddress {
      flex: 1;
      .txtmangth {
        background: #fff;
        height: 100%;
        width: 100%;
        color: #262e31;

        border: none;
      }
    }
  }
}
.wmassageMask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99;
}
</style>
