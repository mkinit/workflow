import App from './App'

//状态管理
import store from '@/store/index.js'

//自定义跳转路由
import router,{back} from '@/router/router.js'
Vue.prototype.$to = router
Vue.prototype.$back = back

//全局混入
import mixin from '@/mixin/index.js'
Vue.mixin(mixin)

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif