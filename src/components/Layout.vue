<template>
    <div class="layout">
        <div class="layout-menu-left">
            <h1><img src="../assets/logo.png" alt=""></h1>
            <Menu :theme="theme2">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        内容管理
                    </template>
                    <Menu-item name="1-1">文章管理</Menu-item>
                    <Menu-item name="1-2">评论管理</Menu-item>
                    <Menu-item name="1-3">举报管理</Menu-item>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        用户管理
                    </template>
                    <Menu-item name="2-1">新增用户</Menu-item>
                    <Menu-item name="2-2">活跃用户</Menu-item>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        统计分析
                    </template>
                    <Menu-group title="使用">
                        <Menu-item name="3-1">新增和启动</Menu-item>
                        <Menu-item name="3-2">活跃分析</Menu-item>
                        <Menu-item name="3-3">时段分析</Menu-item>
                    </Menu-group>
                    <Menu-group title="留存">
                        <Menu-item name="3-4">用户留存</Menu-item>
                        <Menu-item name="3-5">流失用户</Menu-item>
                    </Menu-group>
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
                    <Breadcrumb-item href="#">首页</Breadcrumb-item>
                    <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                    <Breadcrumb-item>某应用</Breadcrumb-item>
                </Breadcrumb>
            </div>
            <div class="layout-content">
                <div class="layout-content-main">
                    <Table :columns="columns1" :data="data1"></Table>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      theme2: 'light',
      columns1: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      data1: [
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居'
        },
        {
          name: '张小刚',
          age: 25,
          address: '北京市海淀区西二旗'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道'
        }
      ]
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
    height:100%;
    border-right:1px solid #ddd;
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
    border-bottom:1px solid #ddd;
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
    height:500px;
    background:pink;
}

</style>
