// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './uitls/rem'
import axios from 'axios'
import Vuex from 'vuex'
import store from './vuex/store'
import wx from 'weixin-jsapi'
// import ajax from './lib/ajax/Ajax.js'//----------------注意这个地方--axios



//设置axios为form-data
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}]


Vue.prototype.$axios = axios
Vue.prototype.$ajax = axios;//---------------------------注意这个地方--axios
Vue.config.productionTip = false
// Axios.defaults.withCredentials = true;
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)
// require styles
import 'swiper/dist/css/swiper.css'
// import 'http://res.wx.qq.com/open/js/jweixin-1.4.0.js'
/* eslint-disable no-new */



new Vue({
  el: '#app',
  router,
  store, wx,
  components: { App },
  template: '<App/>'
})
