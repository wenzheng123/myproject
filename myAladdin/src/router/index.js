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
import Seekx1 from '@/components/Seekx1'
import Seekx2 from '@/components/Seekx2'
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
import Milk from '@/components/Milk'
import Perfume from '@/components/Perfume'
import Zfive from '@/components/Zfive'
import Share from '@/components/Share'
import Ceas from '@/components/Ceas'
import Ceas2 from '@/components/Ceas2'
import Eye from '@/components/Eye'
import Skin from '@/components/Skin'
import Eye1 from '@/components/Eye1'
import Eye2 from '@/components/Eye2'
import CutGoods from '@/components/CutGoods'
import Details from '@/components/Details'
import DetailsCover from '@/components/DetailsCover'
import Support from '@/components/Support'
import Jie from '@/components/Jie'
import Eye3 from '@/components/Eye3'
import Kefu from '@/components/Kefu'
import Kefu1 from '@/components/Kefu1'
import Kefu2 from '@/components/Kefu2'
import Kefu3 from '@/components/Kefu3'
import shuishuoming from '@/components/shuishuoming'
import Goodsname from '@/components/Goodsname'
import Xinde from '@/components/Xinde'
import Xinde1 from '@/components/Xinde1'
import Xinde2 from '@/components/Xinde2'
import xindeDetial from '@/components/xindeDetial'
import GoShop from '@/components/GoShop'
import Fabiaoxd from '@/components/Fabiaoxd'
import lianlian from '@/components/lianlian'
Vue.use(Router)

export default new Router({
  routes: [
    //wanwan
    {
      path:'/lianlian',
      name:'lianlian',
      component:lianlian,
    },
    {
      path:'/Xinde',
      name:'Xinde',
      component:Xinde,
      redirect:'/Xinde1',
      children:[
        {
          path:'/Xinde1',
          name:'Xinde1',
          component:Xinde1,
        },
        {
          path:'/Xinde2',
          name:'Xinde2',
          component:Xinde2,
        },
      ]
    },
    {
      path:'/xindeDetial',
      name:'xindeDetial',
      component:xindeDetial,
    },
    {
      path:'/Goodsname',
      name:'Goodsname',
      component:Goodsname
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details,
      children:[
        {
          path:'/DetailsCover',
          name:'DetailsCover',
          component:DetailsCover
        },
        {
          path:'/shuishuoming',
          name:'shuishuoming',
          component:shuishuoming
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

    // 单独
    {
      path:"/Fabiaoxd",
      name:"Fabiaoxd",
      component:Fabiaoxd
    },
    {
      path:"/GoShop",
      name:"GoShop",
      component:GoShop
    },
    {

      path:"/kefu3",
      name:"Kefu3",
      component:Kefu3
    },
    {
      path:"/kefu2",
      name:"Kefu2",
      component:Kefu2
    },
    {
      path:"/kefu1",
      name:"Kefu1",
      component:Kefu1
    },
    {
      path:"/kefu",
      name:"Kefu",
      component:Kefu
    },
    {
      path:"/support",
      name:"Support",
      component:Support
    },
    {
      path:"/eye3",
      name:"Eye3",
      component:Eye3
    },
    {
      path:"/jie",
      name:"Jie",
      component:Jie
    },
    {

      path:"/eye",
      name:"Eye",
      component:Eye
    },
    {
      path:"/seek",
      name:"Seek",
      component:Seek,
      redirect:"/Seekx1",
      children:[
        {
          path:"/Seekx1",
          name:"Seekx1",
          component:Seekx1
        },
        {
          path:"/Seekx2",
          name:"Seekx2",
          component:Seekx2
        },
      ]
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


      path:"/milk",
      name:"Milk",
      component:Milk
    },
    {
      path:'/me',
      name:'Perfume',
      component:Perfume
    },
    {
      path:"/skin",
      name:"Skin",
      component:Skin
    },
    {
      path:'/five',
      name:'Zfive',
      component:Zfive,
      children:[
        {
          path:'/share',
          name:'Share',
          component:Share
        },
      ]
    },
    {
      path:'/ceas',
      name:'Ceas',
      component:Ceas,
    },
    {
      path:'/ceas2',
      name:'Ceas2',
      component:Ceas2,
    },
    {
      path:'/eye1',
      name:'Eye1',
      component:Eye1,
    },
    {
      path:'/eye2',
      name:'Eye2',
      component:Eye2,
    },

    // 我的
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
