<template>
  <Table :columns="columns1" :data="data"></Table>
</template>

<script>
import {payGetlist} from '../../service/getData'
export default {
  data () {
    return {
      columns1: [
        {
          title: '公司名',
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
        }
      ],
      data: []
    }
  },
  mounted(){
    // 获取商品列表
    payGetlist(1,5).then(res => {
        this.data = res.data.data;
    })
  }
}
</script>


<style scoped>

</style>
