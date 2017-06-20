# 前言

此项目为烨华后台管理系统，主要是实现的功能为管理公众号订单，与健康微商城的后台管理



## 技术栈
vue2 + vuex + vue-router + webpack + ES6/7 + fetch + less + flex + svg + echarts



# 项目运行

#### 注意：由于涉及大量的 ES6/7 等新属性，nodejs 必须是 6.0 以上版本 ，node 7 是先行版，有可能会出问题，建议使用 node 6 稳定版

```
### 安装依懒

npm install

```

### 编译环境
```
npm run dev

访问 http://localhost:8088
```


### 线上版本
```
npm run build

生成的dist文件夹放在服务器即可正常访问
``` 



# 目标功能
- [x] 外包订单 -- 完成
- [x] 支付对接订单 -- 完成
- [ ] 商品上传 -- 
- [ ] 全部商品 -- 
- [ ] 上架商品 -- 
- [ ] 所有订单 --  



# 总结



# 最终目标






# 部分截图


### 商铺列表页

<img src="https://github.com/bailicangdu/vue2-elm/blob/master/screenshots/msite.png" width="365" height="619"/> <img src="https://github.com/bailicangdu/vue2-elm/blob/master/screenshots/msite.gif" width="365" height="619"/>



# 项目布局

```
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── elm                                         // 上线项目文件，放在服务器即可正常访问
├── screenshots                                 // 项目截图
├── src                                         // 源码目录
│   ├── components                              // 组件
│   │   ├── common                              // 公共组件
│   │   │   ├── alertTip.vue                    // 弹出框组件
│   │   │   ├── buyCart.vue                     // 购物车组件
│   │   │   ├── computeTime.vue                 // 倒计时组件
│   │   │   ├── loading.vue                     // 页面初始化加载数据的动画组件
│   │   │   ├── mixin.js                        // 组件混合(包括：指令-下拉加载更多，处理图片地址)
│   │   │   ├── ratingStar.vue                  // 评论的五颗星组件
│   │   │   └── shoplist.vue                    // msite和shop页面的餐馆列表公共组件
│   │   ├── footer
│   │   │   └── footGuide.vue                   // 底部公共组件
│   │   └── header
│   │       └── head.vue                        // 头部公共组件
│   ├── config                                  // 基本配置
│   │   ├── env.js                              // 环境切换配置
│   │   ├── fetch.js                            // 获取数据
│   │   ├── mUtils.js                           // 常用的js方法
│   │   └── rem.js                              // px转换rem
│   ├── images                                  // 公共图片
│   ├── page
│   │   ├── balance
│   │   │   ├── balance.vue                     // 余额页
│   │   │   └── children
│   │   │       └── detail.vue                  // 余额说明
│   │   ├── benefit
│   │   │   ├── benefit.vue                     // 红包页
│   │   │   └── children
│   │   │       ├── commend.vue                 // 推荐有奖
│   │   │       ├── coupon.vue                  // 代金券说明
│   │   │       ├── exchange.vue                // 兑换红包
│   │   │       ├── hbDescription.vue           // 红包说明
│   │   │       └── hbHistory.vue               // 历史红包
│   │   ├── city                 
│   │   │   └── city.vue                        // 当前城市页
│   │   ├── confirmOrder
│   │   │   ├── children
│   │   │   │   ├── children
│   │   │   │   │   ├── addAddress.vue          // 添加地址页
│   │   │   │   │   └── children
│   │   │   │   │       └── searchAddress.vue   // 搜索地址页
│   │   │   │   ├── chooseAddress.vue           // 选择地址页
│   │   │   │   ├── invoice.vue                 // 选择发票页
│   │   │   │   ├── payment.vue                 // 付款页
│   │   │   │   ├── remark.vue                  // 订单备注页 
│   │   │   │   └── userValidation.vue          // 用户验证页
│   │   │   └── confirmOrder.vue                // 确认订单页
│   │   ├── download
│   │   │   └── download.vue                    // 下载App
│   │   ├── find
│   │   │   └── find.vue                        // 发现页
│   │   ├── food
│   │   │   └── food.vue                        // 食品筛选排序页
│   │   ├── forget
│   │   │   └── forget.vue                      // 忘记密码，修改密码页
│   │   ├── home
│   │   │   └── home.vue                        // 首页
│   │   ├── login
│   │   │   └── login.vue                       // 登录注册页
│   │   ├── msite
│   │   │   └── msite.vue                       // 商铺列表页
│   │   ├── order
│   │   │   ├── children
│   │   │   │   └── orderDetail.vue             // 订单详情页
│   │   │   └── order.vue                       // 订单列表页
│   │   ├── points
│   │   │   ├── children
│   │   │   │   └── detail.vue                  // 积分说明
│   │   │   └── points.vue                      // 积分页
│   │   ├── profile
│   │   │   ├── children
│   │   │   │   ├── children
│   │   │   │   │   ├── address.vue             // 添加地址
│   │   │   │   │   └── children
│   │   │   │   │       ├── add.vue             // 新增地址
│   │   │   │   │       └── children
│   │   │   │   │           └── addDetail.vue   // 搜索地址
│   │   │   │   ├── info.vue                    // 帐户信息
│   │   │   │   └── setusername.vue             // 重置用户名
│   │   │   └── profile.vue                     // 个人中心
│   │   ├── search
│   │   │   └── search.vue                      // 搜索页
│   │   ├── service
│   │   │   ├── children
│   │   │   │   └── questionDetail.vue          // 问题详情
│   │   │   └── service.vue                     // 服务中心
│   │   ├── shop
│   │   │   ├── children
│   │   │   │   ├── children
│   │   │   │   │   └── shopSafe.vue            // 商铺认证信息页
│   │   │   │   ├── foodDetail.vue              // 商铺信息页
│   │   │   │   └── shopDetail.vue              // 单个商铺信息页
│   │   │   └── shop.vue                        // 商铺筛选页
│   │   └── vipcard
│   │       ├── children
│   │       │   ├── invoiceRecord.vue           // 购买记录
│   │       │   ├── useCart.vue                 // 使用卡号购买
│   │       │   └── vipDescription.vue          // 会员说明
│   │       └── vipcard.vue                     // 会员卡办理页
│   ├── plugins                                 // 引用的插件
│   ├── router
│   │   └── router.js                           // 路由配置
│   ├── service                                 // 数据交互统一调配
│   │   ├── getData.js                          // 获取数据的统一调配文件，对接口进行统一管理
│   │   └── tempdata                            // 开发阶段的临时数据
│   ├── store                                   // vuex的状态管理
│   │   ├── action.js                           // 配置actions
│   │   ├── getters.js                          // 配置getters
│   │   ├── index.js                            // 引用vuex，创建store
│   │   ├── modules                             // store模块
│   │   ├── mutation-types.js                   // 定义常量muations名
│   │   └── mutations.js                        // 配置mutations
│   └── style
│       ├── common.scss                         // 公共样式文件
│       ├── mixin.scss                          // 样式配置文件
│       └── swiper.min.css
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── favicon.ico                                 // 图标
├── index.html                                  // 入口html文件
.

56 directories, 203 files
```
