<template>
  <div id="todolist">

    <el-row :gutter="12">
      <el-col :span="8" :offset="8">
        <h2>😯{{ name }}😯</h2>
      </el-col>
    </el-row>

    <todo-form :todos="todos"></todo-form>
  </div>
</template>

<script>
  import TodoForm from './components/TodoForm.vue'
  import Store from './store.js'

  export default {
    name: 'todolist',

    data () {
      return {
        name: 'TodoList',
        todos: Store.fetch()
      }
    },

    watch: {
      todos: {
        handler (todos) {
          Store.save(todos)
        },

        deep: true
      }
    },

    components: {
      TodoForm
    }
  }
</script>

<style lang="scss" scoped>
  h2 {
    text-align: center;
  }
</style>