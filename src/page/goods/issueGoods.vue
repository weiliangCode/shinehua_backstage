<template>
  <div class="issueGoods">
    <h2>一口价发布商品</h2>
    <Form :model="formItem" :label-width="100">
        <Form-item label="商品标题">
            <Input v-model="formItem.input" placeholder="请输入"></Input>
        </Form-item>
        <Form-item label="商品主图">
            <h-upload :imgNum="1"></h-upload>
        </Form-item>
        <Form-item label="商品详图">
            <h-upload :imgNum="5"></h-upload>
        </Form-item>
        <Form-item label="价格（元）">
            <Input-number  :min="0" v-model="priceVal"></Input-number>
        </Form-item>
        <Form-item label="总数量（件）">
            <Input-number  :min="0"  v-model="num"></Input-number>
        </Form-item>
        <Form-item label="商品路费（元）">
            <Input-number  :min="0" v-model="tolls"></Input-number>
        </Form-item>
        <Form-item label="商品长图描述">
            <h-upload :imgNum="10"></h-upload>
        </Form-item>
        <Form-item label="上架时间">
            <Radio-group v-model="formItem.putaway">
                <Radio label="tureputaway">立即上架</Radio>
                <Radio label="falseputaway">放入仓库</Radio>
            </Radio-group>
        </Form-item>
        <Form-item label="橱窗推荐共5个">
            <Radio-group v-model="formItem.radio">
                <Radio label="ture">是</Radio>
                <Radio label="false">否</Radio>
            </Radio-group>
        </Form-item>
        <Form-item>
            <Button type="primary">提交</Button>
            <Button type="ghost" style="margin-left: 8px">取消</Button>
        </Form-item>
    </Form>
  </div>
</template>

<script>
import {payGetlist} from '../../service/getData'
import hUpload from '../../components/common/hUpload'
export default {
  components: {
        hUpload
  },
  data () {
      return {
          formItem: {
              input: '',
              radio: 'male',
              putaway: 'putaway',
              checkbox: [],
              switch: true,
              date: '',
              time: '',
              slider: [20, 50],
              textarea: ''
          },
          priceVal: 0,
          num: 0,
          tolls: 0
      }
  }
}
</script>


<style scoped lang="less">
  @import './issueGoods';
</style>
