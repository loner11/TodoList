<template>
  <div id="todosearch">

    <el-row :gutter="12">
      <el-col :span="8" :offset="8">
        <input class="input" placeholder="输入搜索内容" type="search" v-model="searchInput" @keyup.enter="search(searchInput)"></input>
        <el-button type="danger" :plain="true" icon="delete" v-model="todos" @click="deleteAll(todos)">删除全部</el-button>
      </el-col>
    </el-row>

    <el-row :gutter="12">
      <el-col :span="8" :offset="8">
        <el-collapse v-model="all" accordion class="el-collapse">
          <el-collapse-item :title="('🔍搜索清单'+'('+searchTodos.length+')')" name="1">
            <ul class="todos-ul">
              <li v-for="(todo, index) in searchTodos" class="todos-li" :class="{'completed-todos-li': todo.completed}">
                {{ todo.title }}
                <el-button type="danger" icon="circle-cross" class="el-btn" @click="deleteTodo(todo)"></el-button>
                <el-button type="success" icon="circle-check" class="el-btn" @click="completedTodo(todo)"></el-button>
              </li>
              <li v-show="searchTodos.length < 1" class="todos-li">没有搜索结果😄</li>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'todosearch',

    props: ['todos'],

    data () {
      return {
        all: '0',
        searchInput: '',
        searchTodos: []
      }
    },

    methods: {
      search (searchInput) {
        const trimReg = /^\s*|\s*|\s*$/g;
        let value = searchInput.replace(trimReg, '')
        this.searchTodos = []
        for (let todo of this.todos) {
          if (todo.title.indexOf(value) >=0 && value !== '') {
            this.searchTodos.push(todo)
          }
        }
        this.searchInput = ''
        this.all = '1'
      },

      deleteTodo (todo) {
        this.todos.splice(this.todos.indexOf(todo), 1)
        this.$message({
          showClose: true,
          message: '成功删除😯😯'
        })
      },

      completedTodo (todo) {
        this.todos[this.todos.indexOf(todo)].completed = true
        this.$message({
          showClose: true,
          message: '已完成😄😄'
        })
      },

      deleteAll (todos) {
        this.todos.splice(0)
        this.$message({
          showClose: true,
          message: '成功删除全部😯😯'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @mixin boxShadow($value) {
    -webkit-box-shadow: $value;
    box-shadow: $value;
  }

  @mixin transform($transforms) {
	  -webkit-transform: $transforms;
  	-moz-transform: $transforms;
  	-ms-transform: $transforms;
  	transform: $transforms;
  }

  @mixin translate3d($val1, $val2, $val3) {
	  @include transform(translate3d($val1, $val2, $val3));
  }

  .input {
    border-radius: .25em;
    border: 1px solid #bfcbd9;
    box-sizing: border-box;
    margin: {
      top: 1em;
      bottom: 1em;
    }
    padding: .25em .75em;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    outline: 0;
    width: 76%;
    font: {
      size: 1em;
      weight: 400;
    }
    height: 3em;
    line-height: 1;
    color: #6d6a6a;

    &:hover {
      border-color: #8391a5;
    }
  }

  .el-collapse {
    .todos-ul {
      margin: {
        left: -1.5em;
      }
      .todos-li {
        list-style: none;
        border: 1px solid #eae7e7;
        border-radius: 4px;
        margin-top: 1em;
        padding: .5em;
        overflow: hidden;
        &:hover {
          @include boxShadow(0 3px 20px rgba(0, 0, 0, .2));
          @include translate3d(0, -2px, 0);
        }

        .el-btn {
          margin-left: .1em;
          padding: .15em;
          float: right;
        }
      }
    }
  }

  .completed-todos-li {
      text-decoration: line-through;
      color: #a7a3a3;
  }
</style>