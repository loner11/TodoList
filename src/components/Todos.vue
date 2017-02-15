<template>
  <div id="todos">
    <ul class="list-group">
      <li class="list-group-item"
          v-bind:class="{ 'completed' : todo.completed }"
          v-for="(todo, index) in todos">
        {{ todo.title }}

        <button class="btn btn-warning btn-xs pull-right"
                v-on:click="deleteTodo(index)">
          Delete
        </button>

        <button class="btn btn-xs pull-right margin-right"
                v-bind:class="[todo.completed ? 'btn-danger' : 'btn-success']"
                v-on:click="toggleCompletion(todo)">
          {{ todo.completed ? 'undo' : 'completed' }}
        </button>
      </li>
    </ul>

    <todo-form :todos="todos"></todo-form>
  </div>
</template>

<script>
  import TodoForm from './TodoForm'

  export default {
    name: 'todos',

    props: ['todos'],

    methods: {
      deleteTodo(index) {
        this.todos.splice(index, 1)
      },

      toggleCompletion(todo) {
        todo.completed = !todo.completed
      }
    },

    components: {
      TodoForm
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .completed {
    color: #5cb85c;
    text-decoration: line-through;
  }

  .margin-right {
    margin: {
      right: 1em;
    }
  }
</style>
