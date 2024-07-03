<template>
  <!-- 关键声明： id  和 width 和  height 都会影响图表的展示-->
  <div id="map" style="width: 101%;height:640px;"></div>
</template>

<script >
import shandongGEOJSON from './main/data/shandong.json'
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
      var myChart = this.$echarts.init(document.getElementById('map'));
      //3. 指定图表的配置项和数据
      //该处就是图表内容，在官网的示例里面，要复制过来到项目里面的也是这一块内容
      this.$echarts.registerMap('shandong',shandongGEOJSON)

      let option1 = {
        series: [
          {
            type: 'map',
            map: 'shandong',
            label: {
              show: true,
              color: "#000", //地图初始化区域字体颜色
              fontSize: 10,
              formatter: function (params) {
                return params.name
              },
            },
            itemStyle: {
              // 未选择区域的样式
              normal: {
                areaColor: 'lightblue',
                color: 'white',
                borderColor: 'gray',
                borderWidth: 1,
              },
              emphasis: {
                // 选择区域的样式
                areaColor: 'red',
              },

            },
          },
        ],
      }; //地图的某些配置
      myChart.setOption(option1);
      echarts.registerMap('shandong', shandongGEOJSON);


      //4.使用刚指定的配置项和数据显示图表。
      myChart.setOption(option1);

    }
    //面板1（）

  },

}
</script>

<style scoped>

</style>

