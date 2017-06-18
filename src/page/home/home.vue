<template>
  <div>
    <Row type="flex" class="message">
        <i-col span="18" class="message_left">
            <i-col span="8" class="message_item">
                <p>3</p>
                <p>未处理订单</p>
            </i-col>
            <i-col span="8" class="message_item">
                <p>3</p>
                <p>今日订单</p>
            </i-col>
            <i-col span="8" class="message_item">
                <p>300</p>
                <p>总订单</p>
            </i-col>
        </i-col>
        <i-col span="5" class="message_right">
                <p>30</p>
                <p>查看会员</p>
        </i-col>
    </Row>
        <graph-line></graph-line>
  </div>
</template>

<script>
// import data from './data.json'
import graphLine from '../../components/common/graphLine'
export default {
    components: {
        graphLine
    }
}

</script>


<style lang="less" scoped>
.message_left{
    padding:20px 0;
    background:rgb(51, 204, 204);

    .message_item{
        height:100px;
        border-right:1px solid #ddd;
        p{
            text-align: center;
            color:#fff;
        }
        p:nth-child(1){
            font-size:30px;
            margin-top:14px;
        }
        p:nth-child(2){
            font-size:16px;
        }
    }
}

.message_right{
    background:rgb(48, 145, 242);
    float:right;
    height:140px;
    margin-left:4.16%;
    p{
        text-align: center;
        color:#fff;
    }
    p:nth-child(1){
        font-size:30px;
        margin-top:34px;
    }
    p:nth-child(2){
        font-size:16px;
    }
}
</style>
