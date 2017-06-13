<template>
  <div class="login">
    <h2>烨华管理中心</h2>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" >
          <Form-item prop="user">
              <Input type="text" v-model="formInline.user" placeholder="Username">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
          </Form-item>
          <Form-item prop="password">
              <Input type="password" v-model="formInline.password" placeholder="Password">
                  <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </Input>
          </Form-item>
          <Form-item>
              <Radio v-model="single">是否记住密码</Radio>
              <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
          </Form-item>
      </Form>
      <h2>{{goodslist}}</h2>
  </div>
</template>

<script>
import {getGoodslist} from '../../service/getData'
export default {
  data () {
    return {
      goodslist: '111',
      single: false,
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!')
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    }
  },
  mounted(){
    // 获取商品列表
    getGoodslist().then(res => {
        this.goodslist = res;
    })
  }
}
</script>

<style lang="less" scoped>
.login{
  width:360px;
  height:200px;
  position: fixed;  
  top:50%;
  left:50%;
  margin-top:-100px;
  margin-left:-180px;
  border:1px solid #ddd;
  padding:10px;
  border-radius: 5px;

  h2{
    color:#27A9E3;
  }
}
</style>
