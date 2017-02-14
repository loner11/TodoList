<template>
  <form v-on:submit.prevent="addTodo(newTodo)">
    <div class=" input-group">
      <input type="text"
             class="form-control"
             v-model="newTodo.title"
             placeholder="Add a new todo">

      <span class="input-group-btn">
        <button class="btn btn-success">Add Todo</button>
      </span>
    </div>
  </form>
</template>

<script>

  export default {
    props: ['todos'],

    data() {
      return {
        newTodo: {
          id: null,
          title: '',
          completed: false
        }
      }
    },

    methods: {
      addTodo(newTodo) {
        if (newTodo.title !== '') {
          this.todos.push(newTodo)
          this.newTodo = {
            id: null,
            title: '',
            completed: false
          }
        } else {
          alert("TodoList cannot be empty !")
        }
      }
    }
  }
</script>
