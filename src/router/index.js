import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Todos from '@/components/Todos'
import Todo from '@/components/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todos',
      component: Todos
    }, {
      path: '/home',
      redirect: '/'
    }, {
      path: '/todos',
      redirect: '/'
    }, {
      path: '/todo/:id',
      name: 'Todo',
      component: Todo
    }, {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  mode: 'history'
})
