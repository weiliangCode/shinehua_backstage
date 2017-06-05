import Vue from 'vue'
import Router from 'vue-router'
import Test1 from '@/views/Test1'
import Comp from '@/views/comp'
import Bottst from '@/views/bottstrapTest'
import bAlert from '@/views/bottstrapAlert'
import bBtn from '@/views/bottstrapBtn'
import iview from '@/views/iview'
import main from '@/views/TestMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/test1',
      name: 'Test1',
      component: Test1
    },
    {
      path: '/comp',
      name: 'comp',
      component: Comp
    },
    {
      path: '/bottst',
      name: 'bottst',
      component: Bottst,
      children: [{
        path: 'alert',
        name: 'Alert',
        component: bAlert
      },
      {
        path: 'btn',
        name: 'btn',
        component: bBtn
      }]
    },
    {
      path: '/iview',
      name: 'iview',
      component: iview
    }
  ]
})
