<template>
  <div>
    <Table :columns="columns" :data="data"></Table>
    <Modal
        title="提示"
        v-model="modal"
        class-name="vertical-center-modal"
        @on-ok="onOk">
        <p>你确认要删除吗？</p>
    </Modal>
    <Modal
        title="修改支付接入订单"
        v-model="modal1"
        class-name="vertical-center-modal"
        width="750"
        @on-ok="onUpdateOk">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <Form-item label="单位/个人" prop="name">
                <Input v-model="formValidate.name" placeholder="公司名或联系人"></Input>
            </Form-item>
            <Form-item label="手机号" prop="mail">
                <Input v-model="formValidate.phone" placeholder="手机号码"></Input>
            </Form-item>
            <Form-item label="接入场景" prop="interest">
                <Checkbox-group v-model="formValidate.scene0">
                    <span class="scene">扫码:</span>
                    <Checkbox label="支付宝"></Checkbox>
                    <Checkbox label="微信"></Checkbox>
                </Checkbox-group>
                    <Checkbox-group v-model="formValidate.scene1">
                    <span class="scene">移动端网络:</span> 
                    <Checkbox label="支付宝"></Checkbox>
                    <Checkbox label="微信"></Checkbox>
                    <Checkbox label="百度钱包"></Checkbox>
                    <Checkbox label="京东钱包"></Checkbox>
                    <Checkbox label="银联"></Checkbox>
                </Checkbox-group>
                <Checkbox-group v-model="formValidate.scene2">
                    <span class="scene">移动端APP：</span>
                    <Checkbox label="支付宝"></Checkbox>
                    <Checkbox label="微信"></Checkbox>
                    <Checkbox label="百度钱包"></Checkbox>
                    <Checkbox label="QQ钱包"></Checkbox>
                </Checkbox-group>
                <Checkbox-group v-model="formValidate.scene3">
                    <span class="scene">PC端网站：</span>
                    <Checkbox label="支付宝"></Checkbox>
                    <Checkbox label="微信"></Checkbox>
                    <Checkbox label="百度钱包"></Checkbox>
                    <Checkbox label="QQ钱包"></Checkbox>
                    <Checkbox label="银联"></Checkbox>
                    <Checkbox label="京东钱包"></Checkbox>
                    <Checkbox label="易包"></Checkbox>
                    <Checkbox label="快钱"></Checkbox>
                </Checkbox-group>
            </Form-item>
            <Form-item label="需求说明" prop="desc">
                <Input v-model="formValidate.note" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="用户的具体要求"></Input>
            </Form-item>
        </Form>
    </Modal>
  </div>
</template>

<script>
import {payGetlist, deletePay} from '../../service/getData'
export default {
  data () {
    return {
      modal: false,
      modal1: false,
      ArriIndex: -1,
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
            name: '',
            phone: '',
            scene0: [],
            scene1: [],
            scene2: [],
            scene3: [],
            note: ''
     },
      ruleValidate: {
            name: [
                { required: true, message: '公司名或联系人不能为空', trigger: 'blur' }
            ],
            phone: [
                { required: true, message: '手机号不能为空', trigger: 'blur' }
            ],
            note: [
                { required: true, message: '请输入个人介绍', trigger: 'blur' },
                { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
            ]
        }
     }
  },
  mounted () {
    // 获取商品列表
    payGetlist(1,5).then(res => {
        this.data = res.data.data;
    })
  },
  methods: {
    remove (index) {
        this.ArriIndex = index
    },
    update (index) {
        this.ArriIndex = index
        let obj = this.data[this.ArriIndex]
        this.formValidate.name = obj.name 
        this.formValidate.phone = obj.phone 
        this.formValidate.note = obj.note 
    },
    onOk () {
        deletePay(this.data[this.ArriIndex].id);
        this.data.splice(this.ArriIndex, 1);
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


<style lang="less" scoped>
    .scene{
        display: inline-block;
        width:84px;
        text-align: right;
    }
</style>
