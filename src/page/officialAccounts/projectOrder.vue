<template>
  <Table :columns="columns1" :data="data"></Table>
</template>

<script>
import {webGetlist} from '../../service/getData'
export default {
  data () {
    return {
      columns1: [
        {
          title: 'id',
          key: 'id'
        },
        {
          title: '公司名',
          key: 'company'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '联系方式',
          key: 'phone'
        },
        {
          title: 'scene',
          key: 'scene'
        },
        {
          title: 'value',
          key: 'value'
        },
        {
          title: '描述',
          key: 'note'
        },
        {
          title: '创建时间',
          key: 'created_at'
        },
        {
          title: '更新时间',
          key: 'updated_at'
        },
        {
          title: 'is_del',
          key: 'is_del'
        }
      ],
      data: []
    }
  },
  mounted(){
    // 获取商品列表
    webGetlist(1,5).then(res => {
        this.data = res.data.data;
    })
  }
}
</script>


<style scoped>

</style>
