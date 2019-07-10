<template>
  <div class="Agency">
    <div class="Agency-header">
      <div class="back" @click="prev">
        <i class="iconfont">&#xe771;</i>
      </div>
      <div class>申请代理</div>
      <div class="shop"></div>
    </div>

    <div class="Agency-main">
      <div style="height:1.6rem;background:#F5F5F5"></div>
      <div class="Agency-title">
        <p>请完善以下信息</p>
      </div>
      <div style="border-bottom:#ccc 1px solid"></div>
      <div class="Agency-main1">
        <div class="grade">
          <div class="Agency-main1-name">等级：</div>
          <select name="status" class="status" v-model="selected" @change="ge">
            <option
              :value="item.statusVal"
              v-for="(item,index) in statusArr"
              :key="index"
            >{{item.statusVal}}</option>
          </select>
        </div>
        <div class="grade">
          <div class="Agency-main1-name">省：</div>
          <select name="province" class="status" v-model="province.code" @change="getCitys">
            <option :value="provinceList">选择省份</option>
            <option v-for="(item, index) in provinceList" :value="index" :key="index">{{ item }}</option>
          </select>
        </div>
        <div class="grade">
          <div class="Agency-main1-name">市：</div>
          <select name="city" class="status" v-model="city.code" @change="getAreas">
            <option :value="defaultCity">选择城市</option>
            <option v-for="(item, index) in cityList" :value="index" :key="index">{{ item }}</option>
          </select>
        </div>
        <div class="grade">
          <div class="Agency-main1-name">区或县：</div>
          <select name="area" class="status" v-model="area.code" @change="getDistValue">
            <option value>选择区县</option>
            <option v-for="(item, index) in areaList" :value="index" :key="index">{{ item }}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="Agency-footer">
      <div class="Agency-footer-text">下一步</div>
    </div>
  </div>
</template> 
<script>
import DISTRICTS from "./distpicker.js";
const DEFAULT_CODE = 100000;
export default {
  data() {
    return {
      showcitys: true,
      showareas: true,
      selected: "",
      defaultProvince: "湖南省",
      defaultCity: "长沙市",
      defaultArea: "岳麓区",
      province: {},
      city: {},
      area: {},
      provinceList: [],
      cityList: [],
      areaList: [],
      statusArr: [
        {
          statusId: "0",
          statusVal: "请选择"
        },
        {
          statusId: "1",
          statusVal: "黄金会员"
        },
        {
          statusId: "2",
          statusVal: "白金会员"
        },
        {
          statusId: "3 ",
          statusVal: "钻石会员"
        }
      ],
      DISTRICTS
    };
  },
  created() {
    this.selected = this.statusArr[0].statusVal;
    // 在组件创建之后，把默认选中项的value值赋给绑定的属性
    //如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
    // this.defaultProvince== this.DISTRICTS[0].id

    this.provinceList = this.getDistricts();
    this.getDefault();
  },
  methods: {
    prev() {
      this.$router.go(-1);
    },
    ge() {
      console.log(this.selected);
    },
    getDefault() {
      if (this.defaultProvince !== "") {
        let provinceCode = this.getAreaCode(this.defaultProvince);
        this.cityList = this.getDistricts(provinceCode);
        this.province = {
          code: provinceCode,
          value: this.defaultProvince
        };
      }

      if (this.defaultCity !== "") {
        let cityCode = this.getAreaCode(this.defaultCity);
        this.areaList = this.getDistricts(cityCode);
        this.city = {
          code: cityCode,
          value: this.defaultCity
        };
      }

      if (this.defaultArea !== "") {
        let areaCode = this.getAreaCode(this.defaultArea);
        this.area = {
          code: areaCode,
          value: this.defaultArea
        };
      }
    },
    getSelectVal() {
      this.selected = this.province.value + this.city.value + this.area.value;
      console.log(
        this.province.code + "-" + this.city.code + "-" + this.area.code
      );
    },

    //名称转代码
    nameToCode(name) {
      for (let x in DISTRICTS) {
        for (let y in DISTRICTS[x]) {
          if (name === DISTRICTS[x][y]) {
            return y;
          }
        }
      }
    },
    //获取区域代码
    getAreaCode(value) {
      if (typeof value === "string") {
        return this.nameToCode(value);
      }
      return value;
    },

    getCodeValue(code, level = 1) {
      if (level == 1) {
        //省级
        return DISTRICTS[DEFAULT_CODE][code];
      } else if (level == 2) {
        let provinceCode = this.province.code;
        return DISTRICTS[provinceCode][code];
      } else {
        //
        let cityCode = this.city.code;
        return DISTRICTS[cityCode][code];
      }
    },
    getDistricts(code = DEFAULT_CODE) {
      return DISTRICTS[code] || [];
    },

    cleanList(name) {
      this[name] = [];
    },
    getCitys(e) {
      this.cityList = this.getDistricts(e.target.value);
      this.cleanList("areas");
      this.province = this.setData(e.target.value, 1);
      this.areaList = [];
      console.log(this.province.value);
    },
    getAreas(e) {
      this.areaList = this.getDistricts(e.target.value);
      this.city = this.setData(e.target.value, 2);
      console.log(this.city.value);
    },
    getDistValue(e) {
      this.area = this.setData(e.target.value, 3);
      console.log(this.area.value);
    },
    setData(code, level = 1) {
      code = parseInt(code);
      return {
        code: code,
        value: this.getCodeValue(code, level)
      };
    }
  }
};
</script>
<style lang="scss">
.Agency {
  .Agency-header {
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
      font-size: 1.218667rem;
    }
  }
  .Agency-main {
    margin-top: 4.5rem;
    .Agency-title {
      padding: 1.6rem;
      font-size: 1.318667rem;
    }
    .Agency-main1 {
      padding: 1.6rem;
      .grade {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.3rem;
        .status {
          width: 20.858667rem;
          height: 3.749333rem;
          border: #999999 solid 1px;
          outline: none;
          background: #fff;
          border-radius: 5px;
        }
      }
    }
  }
  .Agency-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    background: #f15e0e;
    width: 100%;
    padding: 1.3rem;
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
  }
}
</style>

