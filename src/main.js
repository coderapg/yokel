import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

import 'normalize.css/normalize.css'

Vue.config.productionTip = false

Vue.prototype.$EventBus = new Vue()

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
