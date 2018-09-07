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
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/Sort',
      children:[{
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

  ]
})
