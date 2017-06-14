<template>
    <div class="layout">
        <div class="layout-menu-left">
            <h1><img src="../../images/logo.png" alt=""></h1>
            <Menu :theme="theme2" @on-select="onSelect">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        店铺管理
                    </template>
                    <Menu-item name="issueGoods">发布商品</Menu-item>
                    <Menu-item name="allGoods">所有商品</Menu-item>
                    <Menu-item name="sellGoods">出售中的商品</Menu-item>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        商城订单管理
                    </template>
                    <Menu-item name="allOrder" >全部订单</Menu-item>
                    <Menu-item name="Order0">待付款订单</Menu-item>
                    <Menu-item name="Order1">待发货订单</Menu-item>
                    <Menu-item name="Order2">待收货订单</Menu-item>
                    <Menu-item name="Order3">已收货订单</Menu-item>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        公众号订单
                    </template>
                    <Menu-item name="projectOrder">外包订单</Menu-item>
                    <Menu-item name="payOrder">支付对接订单</Menu-item>
                </Submenu>
            </Menu>
        </div>
        <div class="layout-right">
            <div class="layout-header">
                <i-button type="text" >
                    <Icon type="navicon" size="32"></Icon>
                </i-button>
            </div>
            <div class="layout-breadcrumb">
                <Breadcrumb>
                    <Breadcrumb-item href="/">首页</Breadcrumb-item>
                    <Breadcrumb-item href="/storeOrder">应用中心</Breadcrumb-item>
                    <Breadcrumb-item>某应用</Breadcrumb-item>
                </Breadcrumb>
            </div>
            <div class="layout-content">
                <div class="layout-content-main">
                    <slot></slot>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import routes from '../../router/router'
export default {
  name: 'Layout',
  data () {
    return {
      theme2: 'light'
    }
  },
  methods: {
    onSelect (name) {
      routes.push(name)
    }
  }
}
</script>

<style lang="less" scoped>
@top-height: 65px;
@menu-width:240px;
.ivu-menu-dark{
    background:#595c6f;
}
.layout{
    width:100%;
    height:100%;
    display:flex;
}

.layout-menu-left{
    width:@menu-width;
    // height:100%;
    border-right:1px solid #ddd;
    background:rgb(50, 64, 78);
    height:800px;
    h1{
        width:100%;
        height:@top-height;
        background:#38b8f2;
        img{
            width:195px;
            height:100%;
            margin:0 auto;
        }
    }
}

.layout-right{
    flex:1;
    height:100%;
}

.layout-header{
    width:100%;
    height:@top-height;
    // border-bottom:1px solid #ddd;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    button{
        margin-top:10px;
    }
}

.layout-breadcrumb{
    width:100%;
    height:48px;
    overflow: hidden;
    .ivu-breadcrumb{
        margin-top:13px;
    }
}

.layout-content{
    width:100%;
    // height:500px;
    // background:pink;
}

</style>
