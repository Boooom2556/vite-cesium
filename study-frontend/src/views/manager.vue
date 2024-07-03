<template>
  <div class="common-layout">
    <el-header>
      <div style="display: inline-block">
        <span class="s1" >地震灾害救援模拟仿真系统</span>
      </div>
      <div style="float: right;margin-top: 15px">
        <el-button class="s2" @click="logout()" type="danger" plain>退出</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside width="isCollapse ? '50px':'200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <el-menu :default-openeds="['1', '3']" unique-opened :collapse="isCollapse">

          <el-sub-menu index="1" >

            <template #title>
              <el-icon><message /></el-icon> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AA
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="router.push('')">BB</el-menu-item>
              <el-menu-item index="1-2" @click="router.push('')">cc</el-menu-item>
              <el-menu-item index="1-3" @click="router.push('')">DD</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><Menu /></el-icon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EE
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1" @click="router.push('view3')">FF</el-menu-item>
              <el-menu-item index="2-2" @click="router.push('')">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item index="2-3" @click="router.push('')">Option 3</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><InfoFilled /></el-icon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;II
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-2" >Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item index="3-3">Option 3</el-menu-item>
            <el-sub-menu index="3-4">
              <template #title>Option 4</template>
              <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>

          <el-sub-menu index="4">
            <template #title>
              <el-icon><setting /></el-icon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GG
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-2" @click="router.push('')">KK</el-menu-item>
            </el-menu-item-group>
            <el-menu-item index="4-3">:LL</el-menu-item>
            <el-menu-item index="4-4-1" @click="router.push('')">MM</el-menu-item>

          </el-sub-menu>
        </el-menu>
      </el-aside>


      <el-container>
        <router-view/>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import {get} from "../net";
import {ElMessage} from "element-plus";
import router from "../router";
import {useStore} from "../stores";
import {ref} from "vue";

const store = useStore()


const logout = ()=>{
  get('/api/auth/logout',(message)=>{
    ElMessage.success(message)
    store.auth.user = null
    router.push('/')
  })
}
const isCollapse =ref(false)


const toggleCollapse=()=>{
  console.log(111)
  isCollapse.value = !isCollapse.value
}
</script>

<style scoped>
.container{

}
.toggle-button{

  background-color: #4A5064;

  font-size:10px;

  line-height:24px;

  color:#fff;

  text-align: center;

  letter-spacing: 0.2em;

  cursor:pointer;
}
.s1{
  color: #eaedf1;
  font-size: 30px;
  text-align: center;
  line-height: 60px;
}
.el-header{
  background-color: #1f1f44;
  height: 60px;
}
.el-aside{
  /*background-color: #333744;*/
  height: 670px;
  border-block: black;
  text-align: center;
  font-weight: bold;
}

.el-main{
  background-color: #eaedf1;

}
</style>