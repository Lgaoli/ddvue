import Vue from 'vue'
import Router from 'vue-router'



const Home = r => require.ensure([], () => r(require('../pages/Home/Home.vue')), 'Home')
const Login = r => require.ensure([], () => r(require('../pages/Home/login.vue')), 'Login')
const Catalog = r => require.ensure([], () => r(require('../pages/Catalog/Catalog.vue')), 'My')
const My = r => require.ensure([], () => r(require('../pages/My/My.vue')), 'My')
const shop = r => require.ensure([], () => r(require('../pages/shop/shop.vue')), 'shop')
const Search = r => require.ensure([], () => r(require('../pages/Search/Search.vue')), 'Search')
const Detail = r => require.ensure([], () => r(require('../pages/detail/detail.vue')), 'Detail')
const shippingAddress = r => require.ensure([], () => r(require('../pages/shippingAddress/shippingAddress.vue')), 'shippingAddress')
const AddressEdit = r => require.ensure([], () => r(require('../pages/shippingAddress/AddressEdit.vue')), 'AddressEdit')
// const testadd = r => require.ensure([], () => r(require('../pages/shippingAddress/testadd.vue')), 'testadd')
const Indent = r => require.ensure([], () => r(require('../pages/Indent/indent.vue')), 'Indent')
const Indent1 = r => require.ensure([], () => r(require('../pages/Indent/indent1.vue')), 'Indent1')
const Call = r => require.ensure([], () => r(require('../pages/call/call.vue')), 'Call')
const Agency = r => require.ensure([], () => r(require('../pages/Agency/Agency.vue')), 'Agency')
const Order = r => require.ensure([], () => r(require('../pages/Order/Order.vue')), 'Order')
const Integral = r => require.ensure([], () => r(require('../pages/Integral/Integral.vue')), 'Integral')
const IntegralExplain = r => require.ensure([], () => r(require('../pages/Integral/IntegralExplain.vue')), 'IntegralExplain')
const IntegralDetail = r => require.ensure([], () => r(require('../pages/Integral/IntegralDetail.vue')), 'IntegralDetail')
const Setup = r => require.ensure([], () => r(require('../pages/Setup/Setup.vue')), 'Setup')
const SetupDetail = r => require.ensure([], () => r(require('../pages/Setup/SetupDetail.vue')), 'SetupDetail')
const SetupIndent = r => require.ensure([], () => r(require('../pages/Setup/SetupIndent.vue')), 'SetupIndent')
const SetupPicking= r => require.ensure([], () => r(require('../pages/Setup/SetupPicking.vue')), 'SetupPicking')
const Service = r => require.ensure([], () => r(require('../pages/Service/Service.vue')), 'Service')
const Team = r => require.ensure([], () => r(require('../pages/Team/Team.vue')), 'Team')
const Study = r => require.ensure([], () => r(require('../pages/Study/Study.vue')), 'Study')
const StudyDetails = r => require.ensure([], () => r(require('../pages/Study/StudyDetails.vue')), 'StudyDetails')
const picking = r => require.ensure([], () => r(require('../pages/picking/picking.vue')), 'picking')
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        title: '首页'
      },

      component: Home
    }, {
      path: '/Login',
      name: 'Login',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Login
    }, {
      path: '/Catalog',
      name: 'Catalog',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        title: '我的二维码'
      },
      component: Catalog
    }, {
      path: '/My',
      name: 'My',
      meta: {
        requireAuth: true,
        // 添加该字段，表示进入这个路由是需要登录的
        title: '我的页面'
      },
      component: My
    },
    {
      path: '/shop',
      name: 'shop',
      meta: {
        requireAuth: true,
        // 添加该字段，表示进入这个路由是需要登录的
        title: '购物车'
      },
      component: shop
    },
    {
      path: '/Search',
      name: 'Search',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        title: '搜索页'
      },
      component: Search,
    }, {
      path: '/Detail',
      name: 'Detail',
      meta: {
        requireAuth: true,
        // 添加该字段，表示进入这个路由是需要登录的
        title: '商品详情页'
      },
      component: Detail
    },
    , {
      path: '/shippingAddress',
      name: 'shippingAddress',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        title: '收货地址'
      },
      component: shippingAddress
    }, {
      path: '/AddressEdit',
      name: 'AddressEdit',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        title: '收货地址'
      },
      component: AddressEdit
    },

    // {
    //   path: '/testadd',
    //   name: 'testadd',
    //   meta: {
    //     requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
    //     title: '收货地址'
    //   },
    //   component: testadd
    // },


    {
      path: '/Indent',
      name: 'Indent',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        title: '订单页面'
      },
      component: Indent
    },
    {
      path: '/Indent1',
      name: 'Indent1',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        title: '订单页面'
      },
      component: Indent1
    },
    {
      path: '/Call',
      name: 'Call',
      meta: {
        title: '绑定手机',
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Call
    }, {
      path: '/Agency',
      name: 'Agency',
      meta: {
        title: '申请代理',
        requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Agency
    }
    , {
      path: '/Order',
      name: 'Order',
      meta: {
        title: '订单管理',
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Order
    }, {
      path: '/Integral',
      name: 'Integral',
      meta: {
        title: '我的积分',
        requireAuth: true,
      },
      component: Integral
    }, {
      path: '/IntegralExplain',
      name: 'IntegralExplain',
      meta: {
        title: '积分说明',

        requireAuth: true,
      },
      component: IntegralExplain
    }, {
      path: '/IntegralDetail',
      name: 'IntegralDetail',
      meta: {
        title: '积分详情',
        requireAuth: true,
      },
      component: IntegralDetail
    }, {
      path: '/Setup',
      name: 'Setup',
      meta: {
        title: '我要开店',
        requireAuth: true,
      },
      component: Setup
    }, {
      path: '/Service',
      name: 'Service',
      meta: {
        title: '我的客服',
        requireAuth: true,
      },
      component: Service
    }, {
      path: '/Team',
      name: 'Team',
      meta: {
        title: '我的团队',
        requireAuth: false,
      },
      component: Team
    }
    , {
      path: '/Study',
      name: 'Study',
      meta: {
        requireAuth: false,
        title: '学习中心'
      },
      component: Study
    }, {
      path: '/StudyDetails',
      name: 'StudyDetails',
      meta: {
  
        requireAuth: false,
        title: '资讯详情'
      },
      component: StudyDetails
    }, {
      path: '/SetupDetail',
      name: 'SetupDetail',
      meta: {
        requireAuth: false,
        title: '我要开店'
      },
      component: SetupDetail
    }, {
      path: '/SetupIndent',
      name: 'SetupIndent',
      meta: {
        requireAuth: false,
        title: '我要开店'
      },
      component: SetupIndent
    }, {
      path: '/SetupPicking',
      name: 'SetupPicking',
      meta: {
        requireAuth: false,
        title: '我要开店'
      },
      component: SetupPicking
    }, {
      path: '/picking',
      name: 'picking',
      meta: {
        requireAuth: false,
        title: '提货'
      },
      component: picking
    }
  ],


})

// router.beforeEach((to, from, next) => {
//   next()

//   let token = window.localStorage.getItem("token");
//   if (token) {
//     if (to.meta.title) {
//       document.title = to.meta.title
//     }
//     next()
//   }
//   else {
//     window.location.href = "http://d.wbgapp.com/api/v2/code/user"
//   }

// })


export default router