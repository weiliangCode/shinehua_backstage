<template>
  <Table :columns="columns1" :data="data1"></Table>
</template>

<script>
import {getGoodslist} from '../../service/getData'
export default {
  data () {
    return {
      columns1: [
        {
          title: 'id',
          key: 'id'
        },
        {
          title: 'name',
          key: 'name'
        },
        {
          title: 'price',
          key: 'price'
        }
      ],
      data1: []
    }
  },
  mounted(){
    // 获取商品列表
    getGoodslist().then(res => {
        this.data1 = res.data.promotion;
    })
  }
}
</script>


<style scoped>

</style>
