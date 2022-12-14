import Vue from 'vue'
import App from './App.vue'
import fastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import toast from 'components/common/Toast'

import store from './store'
import router from './router'

import 'normalize.css/normalize.css'

Vue.config.productionTip = false

Vue.use(toast)

// 解决移动端300ms延迟问题
fastClick.attach(document.body)

// 使用图片懒加载
Vue.use(VueLazyload, {
  loading: require('./assets/images/common/loading.png')
})

Vue.prototype.$EventBus = new Vue()

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
