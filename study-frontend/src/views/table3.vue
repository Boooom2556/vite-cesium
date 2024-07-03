<template>
  <!-- 关键声明： id  和 width 和  height 都会影响图表的展示-->
  <div id="table3" style="width: 400px;height:300px;"></div>
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
      var myChart = this.$echarts.init(document.getElementById('table3'));
      //3. 指定图表的配置项和数据
      //该处就是图表内容，在官网的示例里面，要复制过来到项目里面的也是这一块内容
     let option = {
       tooltip: {
         trigger: 'item'
       },
       legend: {
         top: '5%',
         left: 'center'
       },
       series: [
         {
           name: 'Access From',
           type: 'pie',
           radius: ['40%', '70%'],
           avoidLabelOverlap: false,
           itemStyle: {
             borderRadius: 10,
             borderColor: '#fff',
             borderWidth: 2
           },
           label: {
             show: false,
             position: 'center'
           },
           emphasis: {
             label: {
               show: true,
               fontSize: 40,
               fontWeight: 'bold'
             }
           },
           labelLine: {
             show: false
           },
           data: [
             { value: 1048, name: 'Search Engine' },
             { value: 735, name: 'Direct' },
             { value: 580, name: 'Email' },
             { value: 484, name: 'Union Ads' },
             { value: 300, name: 'Video Ads' }
           ]
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

