// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from './TodoList'
import Todos from './components/Todos'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Todos}
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<TodoList/>',
  components: { TodoList },
  router
})
