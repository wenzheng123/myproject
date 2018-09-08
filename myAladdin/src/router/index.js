import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sort from  '@/components/Sort'
import Groom0 from  '@/components/Groom0'
import Groom1 from  '@/components/Groom1'
import Groom2 from  '@/components/Groom2'
import Facial from  '@/components/Facial'
import Cover from  '@/components/Cover'
import ClassTo from '@/components/ClassTo'
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
import PersonalCenter from '@/components/PersonalCenter'
import Login from '@/components/Login'
import Login1 from '@/components/Login1'
import Login2 from '@/components/Login2'
import Login3 from '@/components/Login3'
import Register from '@/components/Register'
import CutGoods from '@/components/CutGoods'
import Details from '@/components/Details'
import DetailsCover from '@/components/DetailsCover'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Details',
      name: 'Details',
      component: Details,
      children:[
        {
          path:'/DetailsCover',
          name:'DetailsCover',
          component:DetailsCover
        }
      ]
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/one',
      children:[
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
        {
        path:'/Sort',
        name:'Sort',
        component:Sort,
        redirect:'/Groom0',
        children:[
          {
            path:'/Groom0',
            name:'Groom0',
            component:Groom0
          },
          {
            path:'/Groom1',
            name:'Groom1',
            component:Groom1
          },
          {
            path:'/Groom2',
            name:'Groom2',
            component:Groom2
          }
        ]
      }]
    },
    {
      path:'/CutGoods',
      name:'CutGoods',
      component:CutGoods
    },
    {
      path: '/Facial',
      name: 'Facial',
      component: Facial,
      children:[
        {
          path: '/Cover',
          name: 'Cover',
          component: Cover,
        },
        {
          path: '/ClassTo',
          name: 'ClassTo',
          component: ClassTo,
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

    {
      path: '/person',
      name: 'PersonalCenter',
      component: PersonalCenter,
      children: [
        {
          path: '/register',
          name: 'Register',
          component: Register
        },
        {
          path: '/login',
          name: 'Login',
          component: Login,
          redirect: '/login1',
          children: [
            {
              path: '/login1',
              name: 'Login1',
              component: Login1
            },
            {
              path: '/login2',
              name: 'Login2',
              component: Login2
            },
            {
              path: '/login3',
              name: 'Login3',
              component: Login3
            }
          ],
        }
      ]
    },

]
})
