import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tou from '@/components/Tou'
import Zone from '@/components/Zone'
import Lb from '@/components/Lb'
import Ztwo from "@/components/Ztwo"
import Zthree from "@/components/Zthree"
import Zfour from "@/components/Zfour"
import Seek from "@/components/Seek"
import Monitor from "@/components/Monitor"
import News from "@/components/News"
import Sp from "@/components/Sp"
import Cate from "@/components/Cate"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path:'/',
          name:'Zone',
          component:Zone
        },
        {
          path:'/lunbo',
          name:'Lb',
          component:Lb
        },

        {
          path:'/one',
          name:'Zone',
          component:Zone
        },
        {
          path:'/two',
          name:'Ztwo',
          component:Ztwo
        },
        {
          path:'/three',
          name:'Zthree',
          component:Zthree
        },
        {
          path:'/four',
          name:'Zfour',
          component:Zfour
        },
      ]


    },
    {
      path:"/seek",
      name:"Seek",
      component:Seek
    },
    {
      path:"/mo",
      name:"Monitor",
      component:Monitor
    },
    {
      path:"/news",
      name:"News",
      component:News
    },
    {
      path:"/sp",
      name:"Sp",
      component:Sp
    },
    {
      path:"/cate",
      name:"Cate",
      component:Cate
    },
  ]
})
