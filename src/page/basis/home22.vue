<template>
    <Layout :pageList = "pageList">
        <slot :name="item.name" v-for="item in pageList">
           {{ item.name}}
            <router-view ></router-view>
        </slot>
    </Layout>
</template>

<script>
import Layout from '../../components/common/Layout'
export default {
    data() {
        return {
            pageList: [
            {
                "name": "projectOrder",
                "title": "外包订单"
            },
            {
                "name": "payOrder",
                "title": "支付对接订单"
            }]
        }
    },
  components: {
        Layout
  }
}
</script>

<style scoped>

</style>
