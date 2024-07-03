<template>
  <!-- 关键声明： id  和 width 和  height 都会影响图表的展示-->
  <div id="table2" style="width: 400px;height:300px;"></div>
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
      var myChart = this.$echarts.init(document.getElementById('table2'));
      //3. 指定图表的配置项和数据
      //该处就是图表内容，在官网的示例里面，要复制过来到项目里面的也是这一块内容
     let option3 = {

       tooltip: {
         trigger: 'axis',
         axisPointer: {
           type: 'shadow'
         }
       },
       legend: {},
       grid: {
         left: '3%',
         right: '4%',
         bottom: '3%',
         containLabel: true
       },
       xAxis: {
         type: 'value',
         boundaryGap: [0, 0.01]
       },
       yAxis: {
         type: 'category',
         data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
       },
       series: [
         {
           name: '2011',
           type: 'bar',
           data: [18203, 23489, 29034, 104970, 131744, 630230]
         },
         {
           name: '2012',
           type: 'bar',
           data: [19325, 23438, 31000, 121594, 134141, 681807]
         }
       ]
     };
      //4.使用刚指定的配置项和数据显示图表。
      myChart.setOption(option3);

    }
    //面板1（）

  },

}
</script>

<style scoped>

</style>

