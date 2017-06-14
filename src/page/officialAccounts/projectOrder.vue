<template>
  <Table stripe border :columns="columns1" :data="data"></Table>
</template>

<script>
import {webGetlist} from '../../service/getData'
export default {
  data () {
    return {
      columns1: [
        {
          title: '创建时间',
          key: 'created_at',
          sortable: true
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
          title: '更新时间',
          key: 'updated_at'
        },
        {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
                return h('div', [
                    h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: () => {
                                // this.show(params.index)
                                console.log('修改');
                            }
                        }
                    }, '修改'),
                    h('Button', {
                        props: {
                            type: 'error',
                            size: 'small'
                        },
                        on: {
                            click: () => {
                                // this.remove(params.index)
                                console.log('删除');
                            }
                        }
                    }, '删除')
                ]);
            }
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
