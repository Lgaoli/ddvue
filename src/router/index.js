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
const Indent = r => require.ensure([], () => r(require('../pages/Indent/indent.vue')), 'Indent')
const Indent1 = r => require.ensure([], () => r(require('../pages/Indent/indent1.vue')), 'Indent1')
const Call = r => require.ensure([], () => r(require('../pages/call/call.vue')), 'Call')
const Agency = r => require.ensure([], () => r(require('../pages/Agency/Agency.vue')), 'Agency')
const Order = r => require.ensure([], () => r(require('../pages/Order/Order.vue')), 'Order')
const Integral = r => require.ensure([], () => r(require('../pages/Integral/Integral.vue')), 'Integral')
const IntegralExplain = r => require.ensure([], () => r(require('../pages/Integral/IntegralExplain.vue')), 'IntegralExplain')
const IntegralDetail = r => require.ensure([], () => r(require('../pages/Integral/IntegralDetail.vue')), 'IntegralDetail')
const Setup = r => require.ensure([], () => r(require('../pages/Setup/Setup.vue')), 'Setup')
const Service = r => require.ensure([], () => r(require('../pages/Service/Service.vue')), 'Service')
const Team = r => require.ensure([], () => r(require('../pages/Team/Team.vue')), 'Team')
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
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
      },
      component: Catalog
    }, {
      path: '/My',
      name: 'My',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: My
    },
    {
      path: '/shop',
      name: 'shop',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: shop
    },
    {
      path: '/Search',
      name: 'Search',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Search,
    }, {
      path: '/Detail',
      name: 'Detail',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Detail
    },
    , {
      path: '/shippingAddress',
      name: 'shippingAddress',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: shippingAddress
    }, {
      path: '/AddressEdit',
      name: 'AddressEdit',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: AddressEdit
    },
    {
      path: '/Indent',
      name: 'Indent',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Indent
    },
    {
      path: '/Indent1',
      name: 'Indent1',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Indent1
    }, {
      path: '/Call',
      name: 'Call',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Call
    }, {
      path: '/Agency',
      name: 'Agency',
      meta: {
        requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Agency
    }
    , {
      path: '/Order',
      name: 'Order',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Order
    }, {
      path: '/Integral',
      name: 'Integral',
      meta: {
        requireAuth: true,
      },
      component: Integral
    }, {
      path: '/IntegralExplain',
      name: 'IntegralExplain',
      meta: {
        requireAuth: true,
      },
      component: IntegralExplain
    }, {
      path: '/IntegralDetail',
      name: 'IntegralDetail',
      meta: {
        requireAuth: true,
      },
      component: IntegralDetail
    }, {
      path: '/Setup',
      name: 'Setup',
      meta: {
        requireAuth: true,
      },
      component: Setup
    },{
      path: '/Service',
      name: 'Service',
      meta: {
        requireAuth: true,
      },
      component: Service
    },{
      path: '/Team',
      name: 'Team',
      meta: {
        requireAuth: false,
      },
      component: Team
    }
  ],


})

// router.beforeEach((to, from, next) => {

//   let token = window.localStorage.getItem("token");
//   if (token) {
//     next()
//   }
//   else {
//     window.location.href = "https://api.ddjingxuan.cn/api/v2/code/user"
//   }




// })


export default router