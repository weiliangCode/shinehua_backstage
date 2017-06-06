import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home/Home'
import Login from '@/pages/Login/Login'
import storeOrder from '@/pages/storeOrder/all'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        path: 'storeOrder',
        name: 'storeOrder',
        component: storeOrder
      }]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
