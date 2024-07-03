<template>
  <!-- 关键声明： id  和 width 和  height 都会影响图表的展示-->
  <div id="table4" style="width: 400px;height:300px;"></div>
</template>

<script >
import * as echarts from "echarts";

export default {
  mounted(){
    //进入页面就执行一次
    this.drawChart();
  },
  methods: {
    //地图
    drawChart() {
      //2. 基于准备好的dom，初始化echarts实例
      //此处的意思就是，对 demo 元素 进行图表初始化的相关操作
      var myChart = this.$echarts.init(document.getElementById('table4'));
      //3. 指定图表的配置项和数据
      //该处就是图表内容，在官网的示例里面，要复制过来到项目里面的也是这一块内容
     let option = {

       tooltip: {
         trigger: 'axis'
       },
       legend: {},
       toolbox: {
         show: true,
         feature: {
           dataZoom: {
             yAxisIndex: 'none'
           },
           dataView: { readOnly: false },
           magicType: { type: ['line', 'bar'] },
           restore: {},
           saveAsImage: {}
         }
       },
       xAxis: {
         type: 'category',
         boundaryGap: false,
         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
       },
       yAxis: {
         type: 'value',
         axisLabel: {
           formatter: '{value} °C'
         }
       },
       series: [
         {
           name: 'Highest',
           type: 'line',
           data: [10, 11, 13, 11, 12, 12, 9],
           markPoint: {
             data: [
               { type: 'max', name: 'Max' },
               { type: 'min', name: 'Min' }
             ]
           },
           markLine: {
             data: [{ type: 'average', name: 'Avg' }]
           }
         },
         {
           name: 'Lowest',
           type: 'line',
           data: [1, -2, 2, 5, 3, 2, 0],
           markPoint: {
             data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
           },
           markLine: {
             data: [
               { type: 'average', name: 'Avg' },
               [
                 {
                   symbol: 'none',
                   x: '90%',
                   yAxis: 'max'
                 },
                 {
                   symbol: 'circle',
                   label: {
                     position: 'start',
                     formatter: 'Max'
                   },
                   type: 'max',
                   name: '最高点'
                 }
               ]
             ]
           }
         }
       ]
     };
      //4.使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);

    }
    //面板1（）

  },

}
</script>

<style scoped>

</style>

