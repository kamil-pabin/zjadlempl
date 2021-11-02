import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFormulate from '@braid/vue-formulate'
import { AlertPlugin, BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(AlertPlugin)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueFormulate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
