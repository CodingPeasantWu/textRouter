import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Router1 from '@/components/Router1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/Router1/:id',
      name:'Router1',
      // component:resolve => require(['@/components/router'],resolve)
      component:Router1
    }
  ]
})
