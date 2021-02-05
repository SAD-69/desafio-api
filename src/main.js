import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import 'boxicons'

import Home from './views/Home.vue'
import Castle from './views/Castle.vue'
import Cep from './views/Cep.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

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
      path: '/castle',
      component: Castle
    },
    {
      path: '/cep',
      component: Cep
    }
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
