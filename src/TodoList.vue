<template>
  <div id="todo-list" class="container">
    <div class="row">
      <div class="col-md-offset-2 col-md-8 col-md-offset-2">
        <div class="panel panel-default">
          <div class="panel-heading">TodoList</div>
          <div class="panel-body">
            <h3>My todolist amount ({{ amount }})</h3>
            <router-view :todos="todos"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'todo-list',

    data() {
      return {
        todos: [
          {
            id: 1,
            title: 'a new todo list',
            completed: false
          }
        ]
      }
    },

    computed: {
      amount() {
        return this.todos.length
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  #todo-list {
    margin: {
      top: 1.5em;
    }
  }
</style>
