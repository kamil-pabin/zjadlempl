/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { AlertPlugin, BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { NavbarPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from "./store";
import VueMeta from "vue-meta";
import { domain, clientId } from "../auth_config.json";
import { Auth0Plugin } from "./auth"; 

import "./assets/myCSS.css";

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false
Vue.use(AlertPlugin)
Vue.use(VueMeta)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(NavbarPlugin)

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
