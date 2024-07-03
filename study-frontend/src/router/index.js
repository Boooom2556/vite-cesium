import { createRouter, createWebHistory } from 'vue-router'
import {useStore} from "../stores";

import index1 from "../views/screen.vue";
import index2 from "../views/manager.vue";
import view3 from "../views/main/view3.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () =>import('../views/WelcomeView.vue'),
      children:[
        {
          path:'',
          name:'welcome-login',
          component: () =>import('../components/welcome/LoginPage.vue'),

        },
        {
          path:'register',
          name:'welcome-register',
          component: () =>import('../components/welcome/RegisterPage.vue')
        },
        {
          path:'forget',
          name:'welcome-forget',
          component: () =>import('../components/welcome/ForgetPage.vue')
        }
      ]
    },
    {
    path:'/index1',
      name:'index1',
      component:index1

    },
    {
      path: '/index2',
      name: 'index2',
      component:()=>import('../views/manager.vue'),
      children:[
        {
          path:'/view3',
          name:'view3',
          component:view3
        },
      ]

    },
  ]
})

// router.beforeEach((to,from,next)=>{
//   const store = useStore()
//     if (store.auth.user !=null && to.name.startsWith('welcome-')){
//       next('/index/index1')
//   }else if (store.auth.user == null && to.fullPath.startsWith('/index/index1')){
//       next('/')
//     }else if (to.matched.length === 0){
//       next('/index/index1')
//     }else {
//       next()
//     }
//})





export default router
