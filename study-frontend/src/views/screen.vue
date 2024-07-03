<template>

  <dv-full-screen-container class="content1">
    <!--标题-->
    <div class="header">
      <div class="showTime"></div>
      <h1 class="h1">山东省地震数据可视化平台</h1>
      <el-icon class="demo1" title="三维展示" style="font-size: 30px" @click="router.push('')"><DArrowLeft /></el-icon>
      <el-icon  class="demo2" title="进入系统" style="font-size: 30px" @click="router.push('/index2')" ><DArrowRight /></el-icon>

    </div>
    <!--/*列表1*/-->
    <section class="mainbox">

      <div class="column1">
        <div class="panel bar">

          <dv-border-box-12 class="box1">
            <span class="h-1" style="display: block">柱状图-年龄分布</span>
            <Chart1 class="chart1"/>
            <div class="panel-footer"></div>
          </dv-border-box-12>
        </div>
        <dv-border-box-12 class="box2">
          <div class="panel pie">
            <span class="h-2" style="display: block">饼形图-年龄分布</span>
            <Chart2/>
            <div class="panel-footer"></div>
          </div>
        </dv-border-box-12>
      </div>
      <!-- 地图模块 -->
      <dv-border-box-10 class="map">

        <div class="map1"></div>
        <div class="map2"></div>
        <div class="map3"></div>
        <Map class="Map"/>

      </dv-border-box-10>
      <!--/*列表2*/-->
      <div class="column2">
        <dv-border-box-12 class="box3">
          <div class="panel line2">
            <span class="h-3" style="display: block">折线图-播放量</span>
            <Chart3/>
            <div class="panel-footer"></div>
          </div>
        </dv-border-box-12>
        <dv-border-box-12 class="box4">
          <div class="panel pie2">
            <span class="h-4" style="display: block">饼形图-地区分布</span>
            <Chart4/>
            <div class="panel-footer"></div>
          </div>
        </dv-border-box-12>
      </div>
    </section>

  </dv-full-screen-container>


</template>

<script setup>

import router from "../router";
import Map from './map.vue'
import Chart1 from './table1.vue'
import Chart2 from './table2.vue'
import Chart3 from './table3.vue'
import Chart4 from './table4.vue'

var t = null;
t = setTimeout(time, 1000); //開始运行
function time() {
  clearTimeout(t); //清除定时器
  let dt;
  dt = new Date();
  var y = dt.getFullYear();
  var mt = dt.getMonth() + 1;
  var day = dt.getDate();
  var h = dt.getHours(); //获取时
  var m = dt.getMinutes(); //获取分
  var s = dt.getSeconds(); //获取秒
  document.querySelector(".showTime").innerHTML =
      "当前时间：" +
      y +
      "年" +
      mt +
      "月" +
      day +
      "-" +
      h +
      "时" +
      m +
      "分" +
      s +
      "秒";
  t = setTimeout(time, 1000); //设定定时器，循环运行
}
</script>

<style scoped>

</style>

