import Vue from 'vue'
import "./js/vue.min.js"
import VueRouter from "vue-router"
import VueResource from "vue-resource"
import Mint from 'mint-ui'
import "../node_modules/mint-ui/lib/style.css"
import App from './App.vue'


import "./assets/icon/iconfont.css"

import "./assets/css/cssreset.css"
import "./assets/css/animate.css"

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Mint);

import routers from "./js/router.js"
new Vue({
  el: '#app',
  render: h => h(App),
  router:routers
})
