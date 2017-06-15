<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu active-name="activeName" :theme="theme" width="auto" @on-select="onSelect">
                    <div class="layout-logo-left"></div>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="icecream"></Icon>
                            <span class="layout-text">店铺管理</span>
                        </template>
                        <Menu-item name="issueGoods">
                            <Icon type="android-arrow-dropup-circle"></Icon>
                            <span class="layout-text">发布商品</span>
                        </Menu-item>
                        <Menu-item name="allGoods">
                            <Icon type="ios-paper"></Icon>
                            <span class="layout-text">所有商品</span>
                        </Menu-item>
                        <Menu-item name="sellGoods">
                            <Icon type="android-contacts"></Icon>
                            <span class="layout-text">出售中的商品</span>
                        </Menu-item>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-cart"></Icon>
                            <span class="layout-text">商城订单管理</span> 
                        </template>
                        <Menu-item name="allOrder">
                            <Icon type="ios-paper"></Icon>
                            <span class="layout-text">全部订单</span>
                        </Menu-item>
                        <Menu-item name="Order0"> 
                            <Icon type="ios-paper"></Icon>
                            <span class="layout-text">待付款订单</span>
                        </Menu-item>
                        <Menu-item name="Order1">
                            <Icon type="ios-paper"></Icon>
                            <span class="layout-text">待发货订单</span>
                        </Menu-item>
                        <Menu-item name="Order2">
                            <Icon type="ios-paper"></Icon>
                            <span class="layout-text">待收货订单</span>
                        </Menu-item>
                        <Menu-item name="Order3">
                            <Icon type="ios-paper"></Icon>
                            <span class="layout-text">已收货订单</span>
                        </Menu-item>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="chatbubbles"></Icon>
                            <span class="layout-text">公众号订单</span>
                        </template>
                        <Menu-item name="projectOrder">
                            <Icon type="android-laptop"></Icon>
                            <span class="layout-text">外包订单</span>
                        </Menu-item>
                        <Menu-item name="payOrder">
                            <Icon type="social-usd-outline"></Icon>
                            <span class="layout-text">支付对接订单</span>
                        </Menu-item>
                    </Submenu>
                </Menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-header">
                    <i-button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                </div>
                <div class="layout-breadcrumb">
                    <hTag v-for="(item,index) in list" :title="item.title" @on-close="closeTag(index)" :routerPath="item.routerPath">
                    </hTag>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                      <slot></slot>
                    </div>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
import routes from '../../router/router'
import hTag from './hTag'
    export default {
        components: {
            hTag
        },
        data () {
            return {
                theme: 'dark',
                activeName: '',
                spanLeft: 5,
                spanRight: 19,
                list: [
                    {
                        "title": "首页",
                        "routerPath": "/"
                    },
                    {
                        "title": "全部订单",
                        "routerPath": "allOrder"
                    }
                ],
                menuData: [
                {
                    "title": "店铺管理",
                    "icon": "icecream",
                    "subtitle": {
                        "issueGoods" :{
                            "name": "issueGoods",
                            "title": "发布商品",
                            "icon": "android-arrow-dropup-circle"
                        },
                        "allGoods" :{
                            "name": "allGoods",
                            "title": "所有商品",
                            "icon": "ios-paper"
                        },
                        "sellGoods" :{
                            "name": "sellGoods",
                            "title": "出售中的商品",
                            "icon": "android-contacts"
                        }
                    }
                },
                {
                    "title": "商城订单管理",
                    "icon": "ios-cart",
                    "subtitle": {
                        "allOrder" :{
                            "name": "allOrder",
                            "title": "全部订单",
                            "icon": "layout-text"
                        },
                        "Order0" :{
                            "name": "Order0",
                            "title": "待付款订单",
                            "icon": "ios-paper"
                        },
                        "Order1" :{
                            "name": "Order1",
                            "title": "待发货订单",
                            "icon": "layout-text"
                        },
                        "Order2" :{
                            "name": "Order2",
                            "title": "待收货订单",
                            "icon": "layout-text"
                        },
                        "Order3" :{
                            "name": "Order3",
                            "title": "已收货订单",
                            "icon": "layout-text"
                        }
                    }
                },
                {
                    "title": "公众号订单",
                    "icon": "chatbubbles",
                    "subtitle": {
                        "projectOrder" :{
                            "name": "projectOrder",
                            "title": "外包订单",
                            "icon": "android-laptop"
                        },
                        "payOrder" :{
                            "name": "payOrder",
                            "title": "支付对接订单",
                            "icon": "social-usd-outline"
                        }
                    }
                }

                ]
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            onSelect (name) {
              routes.push(name);
              this.activeName = name;
              let obj = {
                  title: '首页',
                  routerPath: name
              }
              this.list.push(obj);
            },
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            },
            closeTag (index) {
                this.list.splice(index, 1);
            }
        }
    }
</script>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height:100%;
    }
    .layout>div{
      height:100%;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
</style>
