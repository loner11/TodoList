import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import TodoList from './TodoList.vue'

Vue.use(Element)

new Vue({
  el: '#todolist',
  render: h => h(TodoList)
})