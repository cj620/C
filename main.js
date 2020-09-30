import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);
//挂载vuex
import store from './store'
Vue.prototype.$store = store
// 全局变量：用于存储设备屏幕大小
let globalData = {}
Vue.prototype.$globalData = globalData
// 全局变量：存储当前设备环境变量 {android：'安卓',ios:'苹果',devtools:'百度、微信和支付宝小程序'}
let system = uni.getSystemInfoSync().platform
Vue.prototype.$system = system
const app = new Vue({
  ...App
})
app.$mount()
