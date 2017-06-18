import App from '../App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import {routerMode} from '../config/env'
Vue.use(VueRouter)

const basis = r => require.ensure([], () => r(require('../page/basis/basis')), 'basis')
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')

const issueGoods = r => require.ensure([], () => r(require('../page/goods/issueGoods')), 'issueGoods')
const allGoods = r => require.ensure([], () => r(require('../page/goods/allGoods')), 'allGoods')
const sellGoods = r => require.ensure([], () => r(require('../page/goods/sellGoods')), 'sellGoods')

const allOrder = r => require.ensure([], () => r(require('../page/order/allorder')), 'allOrder')
const order0 = r => require.ensure([], () => r(require('../page/order/order0')), 'order0')
const order1 = r => require.ensure([], () => r(require('../page/order/order1')), 'order1')
const order2 = r => require.ensure([], () => r(require('../page/order/order2')), 'order2')
const order3 = r => require.ensure([], () => r(require('../page/order/order3')), 'order3')

const projectOrder = r => require.ensure([], () => r(require('../page/officialAccounts/projectOrder')), 'projectOrder')
const payOrder = r => require.ensure([], () => r(require('../page/officialAccounts/payOrder')), 'payOrder')




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
                component: basis,
                children: [
                {
                    path: 'home',
                    name: 'home',
                    component: home
                },
                {
                    path: 'issueGoods',
                    name: 'issueGoods',
                    component: issueGoods
                },
                {
                    path: 'allGoods',
                    name: 'allGoods',
                    component: allGoods
                },
                {
                    path: 'sellGoods',
                    name: 'sellGoods',
                    component: sellGoods
                },
                {
                    path: 'allOrder',
                    name: 'allOrder',
                    component: allOrder
                },
                {
                    path: 'order0',
                    name: 'order0',
                    component: order0
                },
                {
                    path: 'order1',
                    name: 'order1',
                    component: order1
                },
                {
                    path: 'order2',
                    name: 'order2',
                    component: order2
                },
                {
                    path: 'order3',
                    name: 'order3',
                    component: order3
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
                }
                ]
            },
            //登录界面
            {
                path: '/login',
                component: login,
            },
            { path: '*', redirect: '/home' }
        ]
    }]
})