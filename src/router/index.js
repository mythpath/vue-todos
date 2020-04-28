import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layouts from '@/components/Layouts' // 导入layouts.vue 组件
import todo from '@/components/todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Layouts',
      component: Layouts,
      children: [{
        path: '/todo/:id',
        name: 'todo',
        component: todo
      }]
    }
  ]
})
