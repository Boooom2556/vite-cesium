<template>
  <!-- 关键声明： id  和 width 和  height 都会影响图表的展示-->
  <div id="table1" style="width: 400px;height:300px;"></div>
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
      var myChart = this.$echarts.init(document.getElementById('table1'));
      //3. 指定图表的配置项和数据
      //该处就是图表内容，在官网的示例里面，要复制过来到项目里面的也是这一块内容
     let option2 = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      };

      //4.使用刚指定的配置项和数据显示图表。
      myChart.setOption(option2);

    }
    //面板1（）

  },

}
</script>

<style scoped>

</style>

