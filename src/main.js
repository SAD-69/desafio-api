import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuesax)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
