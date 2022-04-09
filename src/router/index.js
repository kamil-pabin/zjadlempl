import Vue from 'vue'
import VueRouter from 'vue-router'
import Home_new from '../views/Home_new.vue'
import Browser from '../views/Browser.vue'
import Profile from "../views/Profile.vue";
import Restauracja from "../views/Restauracja.vue"
import { authGuard } from "../auth/authGuard";

Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'Home_new',
    component: Home_new
  },
  {
    path: '/Browser',
    name: 'Browser',
    component: Browser
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    beforeEnter: authGuard
  },
  {
    path: "/restauracja",
    name: "restauracja",
    component: Restauracja
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
