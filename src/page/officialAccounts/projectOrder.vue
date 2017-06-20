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
          class-name="vertical-center-modal"
          @on-ok="onUpdateOk">
          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <Form-item label="公司名" prop="companyName">
                <Input v-model="formValidate.companyName" placeholder="公司名"></Input>
            </Form-item>
            <Form-item label="联系人" prop="userName">
                <Input v-model="formValidate.userName" placeholder="联系人"></Input>
            </Form-item>
            <Form-item label="手机号" prop="phone">
                <Input v-model="formValidate.phone" placeholder="手机号码"></Input>
            </Form-item>
            <Form-item label="服务类型" prop="scene">
                <Checkbox-group v-model="formValidate.scene">
                    <Checkbox label="企业官网"></Checkbox>
                    <Checkbox label="微信公众号"></Checkbox>
                    <Checkbox label="后台开发"></Checkbox>
                    <Checkbox label="APP开发"></Checkbox>
                    <Checkbox label="网站开发"></Checkbox>
                    <Checkbox label="微场景开发"></Checkbox>
                </Checkbox-group>
            </Form-item>
            <Form-item label="预估金额" prop="price">
                <Input v-model="formValidate.price" placeholder="合适的服务价格"></Input>
            </Form-item>
            <Form-item label="需求说明" prop="note">
                <Input v-model="formValidate.note" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="用户的具体要求"></Input>
            </Form-item>
        </Form>
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
      ArriIndex: -1,
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
                                this.update(params.index);
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
      data: [],
      formValidate: {
            companyName: '',
            userName: '',
            phone: '',
            scene: [],
            price: '',
            note: ''
     },
      ruleValidate: {
            companyName: [
                { required: true, message: '公司名不能为空', trigger: 'blur' }
            ],
            userName: [
                { required: true, message: '联系人不能为空', trigger: 'blur' }
            ],
            phone: [
                { required: true, message: '手机号不能为空', trigger: 'blur' }
            ],
            price: [
                { required: true, message: '预估金鑫不能为空', trigger: 'blur' }
            ],
            scene: [
                { required: true, type: 'array', min: 1, message: '至少选择一个服务类型', trigger: 'change' }
            ],
            note: [
                { required: true, message: '请输入具体要求', trigger: 'blur' },
                { type: 'string', min: 5, message: '介绍不能少于5字', trigger: 'blur' }
            ]
        }
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
    update (index) {
        this.ArriIndex = index
        let obj = this.data[this.ArriIndex]
        this.formValidate.companyName = obj.company 
        this.formValidate.userName = obj.name 
        this.formValidate.phone = obj.phone 
        this.formValidate.price = obj.value 
        this.formValidate.note = obj.note 
    },
    onOk () {
        deleteProject(this.data[this.deleteindex].id);
        this.data.splice(this.deleteindex, 1);
    },
    onUpdateOk () {
        console.log( this.formValidate );
    },
    handleSubmit (name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
                this.$Message.success('提交成功!');
            } else {
                this.$Message.error('表单验证失败!');
            }
        })
    },
    handleReset (name) {
        this.$refs[name].resetFields();
    }
  }
}
</script>


<style scoped>

</style>
