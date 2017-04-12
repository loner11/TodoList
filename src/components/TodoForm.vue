<template>
  <div id="todoform">

    <el-row :gutter="12">
      <el-col :span="8" :offset="8">
        <input class="input" v-model="newTodo.title" placeholder="添加一个新的todo" @keyup.enter="addTodo(newTodo)"></input>
      </el-col>
    </el-row>

    <todo-search :todos="todos"></todo-search>

    <todos :todos="todos"></todos>
  </div>
</template>

<script>
  import Todos from './Todos.vue'
  import TodoSearch from './TodoSearch.vue'

  export default {
    name: 'todoform',

    props: ['todos'],

    data () {
      return {
        newTodo: {
          id: null,
          title: '',
          completed: false
        }
      }
    },

    methods: {
      addTodo (newTodo) {
        if (newTodo.title !== '') {
          this.todos.push(newTodo)
          this.newTodo = {
            id: null,
            title: '',
            completed: false
          }
        } else {
          this.$message({
            showClose: true,
            message: '不能添加内容为空的todo😢😢'
          })
        }
      }
    },

    components: {
      Todos, TodoSearch
    }
  }
</script>

<style lang="scss" scoped>
  .input {
    border-radius: .25em;
    border: 1px solid #bfcbd9;
    box-sizing: border-box;
    padding: .25em .75em;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    outline: 0;
    width: 100%;
    font: {
      size: 1.25em;
      weight: 400;
    }
    height: 3em;
    line-height: 1;
    color: #6d6a6a;

    &:hover {
      border-color: #8391a5;
    }

    &::-webkit-input-placeholder {
      color: #b7b0b0;
    }
    &:-webkit-placeholder {
     color: #b7b0b0;
    }
    &::input-placeholder {
      color: #b7b0b0;
    }
    &:placeholder {
     color: #b7b0b0;
    }
  }
</style>