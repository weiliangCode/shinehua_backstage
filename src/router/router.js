import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const storeOrder = r => require.ensure([], () => r(require('../page/storeOrder/all')), 'storeOrder')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')


export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        //首页城市列表页
        {
            path: '/home',
            component: home,
            children: [{
                path: 'storeOrder',
                name: 'storeOrder',
                component: storeOrder
            }]
        },
        //登录界面
        {
            path: '/login',
            component: login,
        }   
    ]
}]