import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tou from '@/components/Tou'
import Zone from '@/components/Zone'
import Lb from '@/components/Lb'
import Ztwo from "@/components/Ztwo"
import Zthree from "@/components/Zthree"
import Zfour from "@/components/Zfour"
import PersonalCenter from '@/components/PersonalCenter'
import Login from '@/components/Login'
import Login1 from '@/components/Login1'
import Login2 from '@/components/Login2'
import Login3 from '@/components/Login3'
import Register from '@/components/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
    // {
    //   path:"/",
    //   name:'Tou',
    //   component:Tou,
    // },
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
      path:'/person',
      name:'PersonalCenter',
      component: PersonalCenter,
      children:[
        {
          path:'/register',
          name:'Register',
          component:Register
        },
        {
          path: '/login',
          name: 'Login',
          component: Login,
          redirect:'/login1',
          children:[
            {
              path:'/login1',
              name:'Login1',
              component:Login1
            },
            {
              path:'/login2',
              name:'Login2',
              component:Login2
            },
            {
              path:'/login3',
              name:'Login3',
              component:Login3
            }
          ],
        }
      ]
    },

  ]
})
