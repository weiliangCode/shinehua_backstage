<template>
  <div class="hTag">
    <router-link :to="routerPath">{{title}}</router-link>
    <i class="ivu-icon ivu-icon-ios-close-empty" @click="onClick"></i>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "首页"
    },
    routerPath: {
      type: String,
      default: "/"
    }
  },
  methods: {
    onClick () {
      this.$emit('on-close')
    }
  }
}
</script>

<style lang="less">
  .hTag{
      height: 32px;
      line-height: 32px;
      border: 1px solid #e9eaec!important;
      color: #495060!important;
      background: #fff!important;
      padding: 0 12px;

      display: inline-block;
      margin: 2px 4px 2px 0;
      border-radius: 3px;
      font-size: 12px;
      vertical-align: middle;
      opacity: 1;
      overflow: hidden;
      cursor: pointer;

      a{
        line-height: 32px;
        color:#495060;
        
      }

      .ivu-icon {
        font-size: 14px;
        display: inline-block;
        font-size: 14px;
        -ms-transform: scale(1.42857143) rotate(0);
        transform: scale(1.42857143) rotate(0);
        cursor: pointer;
        margin-left: 8px;
        color: #666;
        opacity: .66;
        position: relative;
        top: 1px;
    }
  }

</style>
