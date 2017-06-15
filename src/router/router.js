import App from '../App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import {routerMode} from '../config/env'
Vue.use(VueRouter)

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const allOrder = r => require.ensure([], () => r(require('../page/storeOrder/all')), 'allOrder')
const projectOrder = r => require.ensure([], () => r(require('../page/officialAccounts/projectOrder')), 'projectOrder')
const payOrder = r => require.ensure([], () => r(require('../page/officialAccounts/payOrder')), 'payOrder')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const issueGoods = r => require.ensure([], () => r(require('../page/goods/issueGoods')), 'issueGoods')


export default new VueRouter({
    mode: routerMode,
	strict: process.env.NODE_ENV !== 'production',
    routes: [
    {
        path: '/',
        component: App, //顶层路由，对应index.html
        children: [ 
            //首页城市列表页
            {
                path: '/',
                component: home,
                children: [{
                    path: 'allOrder',
                    name: 'allOrder',
                    component: allOrder
                },
                {
                    path: 'projectOrder',
                    name: 'projectOrder',
                    component: projectOrder
                },
                {
                    path: 'payOrder',
                    name: 'payOrder',
                    component: payOrder
                },
                {
                    path: 'issueGoods',
                    name: 'issueGoods',
                    component: issueGoods
                }
                ]
            },
            //登录界面
            {
                path: '/login',
                component: login,
            }
        ]
    }]
})