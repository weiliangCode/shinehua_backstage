<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu active-name="activeName" :theme="theme" width="auto" @on-select="onSelect">
                    <div class="layout-logo-left">
                        <img src="../../images/logo.png" alt="">
                    </div>
                    <Submenu :name="index" v-for="(item,index) in menuData">
                        <template slot="title">
                            <Icon :type="item.icon"></Icon>
                            <span class="layout-text">{{item.title}}</span>
                        </template>
                        <Menu-item :name="obj.name" v-for="obj in item.subtitle">
                            <Icon :type="obj.icon"></Icon>
                            <span class="layout-text">{{obj.title}}</span>
                        </Menu-item>
                    </Submenu>
                 </Menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-header">
                    <i-button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                    <i-button type="text" @click="logOut" class="right">
                        <Icon type="log-out" size="32" ></Icon>
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
import menuData from '../../data/menuData'
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
                list: [],
                menuData: menuData
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
              let title = '';
              for(let i in this.menuData) {
                  let obj = this.menuData[i];
                  if(obj.subtitle[name]){
                      title = obj.subtitle[name].title;
                      break;
                  }
              }
              let obj = {
                  title: title,
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
            logOut () {
                console.log('安全退出')
            },
            closeTag (index) {
                this.list.splice(index, 1);
            }
        }
    }
</script>

<style lang="less" scoped>
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
        position: fixed;
        bottom:0;
        left:0;
        width:100%;
    }
    .layout-menu-left{
        // background: #464c5b;
        background: #1c2438;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        button{
            margin-top:5px;
        }
    }
    .layout-logo-left{
        width: 100%;
        height: 60px;
        background: #28B779;
        // background:#fff;
        // border-radius: 3px;
        margin: 0 auto;
        img{
            height:60px;
            margin: 0 auto;
        }
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
