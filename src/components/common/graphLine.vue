<template>
  <div>
    <div id="single"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
// import echarts from 'chart/line'
export default {
    data() {
      return {
        chart: null,
        colors: ['#5793f3', '#d14a61', '#675bba']
      }
    },
    methods: {
      drawPie (id, small, big) {
        this.chart = echarts.init(document.getElementById(id));
        this.chart.setOption({
          color: this.colors,
          tooltip: {
              trigger: 'none',
              axisPointer: {
                  type: 'cross'
              }
          },
          legend: {
              data:['昨日 访客量', '今日 访客量']
          },
          grid: {
              top: 70,
              bottom: 50
          },
          xAxis: [
              {
                  type: 'category',
                  axisTick: {
                      alignWithLabel: true
                  },
                  axisLine: {
                      onZero: false,
                      lineStyle: {
                          color: this.colors[1]
                      }
                  },
                  axisPointer: {
                      label: {
                          formatter: function (params) {
                              return '访客量  ' + params.value
                                  + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                          }
                      }
                  },
                  data: ["2:00", "4:00", "6:00", "8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "24:00"]
              },
              {
                  type: 'category',
                  axisTick: {
                      alignWithLabel: true
                  },
                  axisLine: {
                      onZero: false,
                      lineStyle: {
                          color: this.colors[0]
                      }
                  },
                  axisPointer: {
                      label: {
                          formatter: function (params) {
                              return '访客量  ' + params.value
                                  + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                          }
                      }
                  },
                  data: ["2:00", "4:00", "6:00", "8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "24:00"]
              }
          ],
          yAxis: [
              {
                  type: 'value'
              }
          ],
          series: [
              {
                  name:'昨日 访客量',
                  type:'line',
                  xAxisIndex: 1,
                  smooth: true,
                  data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
              },
              {
                  name:'今日 访客量',
                  type:'line',
                  smooth: true,
                  data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
              }
          ]
        });
      }
    },
    mounted() {
      this.$nextTick(function() {
          this.drawPie('single', 40, 100);
      });
    }
  }
</script>


<style lang="less" scoped>
  #single {
    position: relative;
    left: 50%;
    width: 90%;
    height: 400px;
    box-shadow: 0 0 10px #2A769A;
    border-radius: 10px;
    margin-top:20px;
    margin-bottom:20px;
    margin-left: -45%;
  }   
  @media screen and (max-width: 480px) {
    #single {
      height: 450px;
    }
  }
</style>
