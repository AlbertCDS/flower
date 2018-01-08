import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import HomeComponent from "@/components/home.vue";
import localComponent from "@/components/local.vue";
import CardComponent from "@/components/card.vue";
import cdsComponent from "@/components/cds.vue";

import DetailComponent from "@/components/detail";

Vue.use(Router) //注册路由


const router = new Router({
  mode:"hash", //两种模式 hash ,history
  routes: [
    {
      path: '/home',
      component: HomeComponent,

      //  components: {
      //   default: Foo,
      //   a: Bar,
      //   b: Baz
      // }
    },
    {
    	path:"/local",
    	component:localComponent,
      
    },
    {
    	path:"/card",
    	component:CardComponent
    },
    {
      path:"/cds",
      component:cdsComponent
    },

    {
      path:"/detail/:id", //  /detail/dwa 动态路由
      name:"mydetail",
      component:DetailComponent
    },

    {
      path:"*",
      redirect:"/home" //重定向
    }
  ]
})


export default router;
