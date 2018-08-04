import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Todos from '@/components/Todos'
import Todo from '@/components/Todo'
import User from '@/components/User'

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
      path: '/user/:id',
      name: 'User',
      component: User
    }, {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  mode: 'history'
})
