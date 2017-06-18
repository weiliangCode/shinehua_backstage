<template>
  <div>
    <div id="single"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import data from './data.json'
export default {
    data() {
      return {
        chart: null
      };
    },
    methods: {
      drawPie (id, small, big) {
        this.chart = echarts.init(document.getElementById(id));
        this.chart.setOption({
          tooltip: {
            trigger: 'item',
            formatte: "{b}: {c} ({d}%)"
          },
          toolbox: {
            feature: {
              saveAsImage: {},
              dataView: {}
            },
            right: 15,
            top: 10
          },
          legend: {
              orient: 'vertical',
              left: 5,
              top: 10,
              data: data.single.course,
          },
          series: [
            {
              name: '是否单身',
              type: 'pie',
              radius: [small, big],
              center: ['50%', '55%'],
              roseType: 'radius',
              data: data.single.courseDiff,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffset: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        });
      }
    },
    mounted() {
      this.$nextTick(function() {
        if (document.body.clientWidth < 480) {
          this.drawPie('single', 40, 100);
        } else {
          this.drawPie('single', 60, 220);
        }
        
        var that = this; 
        var resizeTimer = null;
        window.onresize = function() {
          if (resizeTimer) clearTimeout(resizeTimer);
          resizeTimer = setTimeout(function() {
            if (document.body.clientWidth < 480) {
              that.drawPie('single', 40, 100);
            } else {
              that.drawPie('single', 60, 220);
            }
          }, 100);
        }
      });
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

  #single {
    position: relative;
    left: 50%;
    width: 90%;
    height: 600px;
    margin-left: -45%;
    box-shadow: 0 0 10px #2A769A;
    border-radius: 10px;
  }   
  @media screen and (max-width: 480px) {
    #single {
      height: 450px;
    }
  }
</style>
