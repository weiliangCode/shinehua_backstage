<template>
  <div>
    <Table stripe border :columns="columns" :data="data"></Table>
    <Modal
          title="提示"
          v-model="modal"
          class-name="vertical-center-modal"
          @on-ok="onOk">
          <p>你确认要删除吗？</p>
      </Modal>
      <Modal
          title="修改"
          v-model="modal1"
          class-name="vertical-center-modal">
          <Table :columns="columns1" :data="data1"></Table>
      </Modal>
  </div>
</template>

<script>
import {webGetlist,deleteProject} from '../../service/getData'
export default {
  data () {
    return {
      modal: false,
      modal1: false,
      deleteindex: -1,
      columns1: [
          {
            title: '创建时间',
            key: 'created_at'
        },
      ],
      data1: [
            {
                created_at: "2015-06-05"
            }
      ],
      columns: [
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
                                this.remove(params.index)
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
  mounted () {
    // 获取商品列表
    webGetlist(1,5).then(res => {
        this.data = res.data.data;
    })
  },
  methods: {
    remove (index) {
        this.deleteindex = index
    },
    onOk () {
        deleteProject(this.data[this.deleteindex].id);
        this.data.splice(this.deleteindex, 1);
    }
  }
}
</script>


<style scoped>

</style>
