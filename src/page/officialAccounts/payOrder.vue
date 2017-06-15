<template>
  <div>
    <Table :columns="columns" :data="data"></Table>
    <Modal
        title="提示"
        v-model="modal"
        class-name="vertical-center-modal">
        <p>你确认要删除吗？</p>
    </Modal>
    <Modal
        title="修改"
        v-model="modal1"
        class-name="vertical-center-modal">
        <div>
            <Input  placeholder="请输入"></Input>
            <Input-number  :min="0" ></Input-number>
            <Input-number  :min="0" ></Input-number>
            <Input-number  :min="0" ></Input-number>
        </div>
    </Modal>
  </div>
</template>

<script>
import {payGetlist} from '../../service/getData'
export default {
  data () {
    return {
      modal: false,
      modal1: false,
      columns: [
        {
          title: '创建时间',
          key: 'created_at',
          sortable: true
        },
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
                                this.modal1 = true;
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
                                this.modal = true;
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
    payGetlist(1,5).then(res => {
        this.data = res.data.data;
    })
  }
}
</script>


<style scoped>

</style>
