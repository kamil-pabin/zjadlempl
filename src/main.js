/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { AlertPlugin, BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from "./store";
import VueMeta from "vue-meta";


Vue.config.productionTip = false
Vue.use(AlertPlugin)
Vue.use(VueMeta)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
