<template>
  <div id="todos">

    <el-row :gutter="12">
      <el-col :span="8" :offset="8">
        <el-collapse v-model="all" accordion class="el-collapse">
          <el-collapse-item :title="('所有清单'+'('+todos.length+')')" name="1">
            <ul class="todos-ul">
              <li v-for="(todo, index) in todos" class="todos-li" :class="{'completed-todos-li': todo.completed}">
                {{ todo.title }}
                <el-button type="danger" icon="circle-cross" class="el-btn" @click="deleteTodo(todo)"></el-button>
                <el-button type="success" icon="circle-check" class="el-btn" @click="completedTodo(todo)"></el-button>
              </li>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>

    <el-row :gutter="12">
      <el-col :span="8" :offset="8">
        <el-collapse v-model="unfinished" accordion class="el-collapse">
          <el-collapse-item :title="('待完成'+'('+unfinishedTodos.length+')')" name="1">
            <ul class="todos-ul">
              <li v-for="(unfinishedTodo, index) in unfinishedTodos" class="todos-li">
                {{ unfinishedTodo.title }}
                <el-button type="danger" icon="circle-cross" class="el-btn" @click="deleteTodo(unfinishedTodo)"></el-button>
                <el-button type="success" icon="circle-check" class="el-btn" @click="completedTodo(unfinishedTodo)"></el-button>
              </li>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>

    <el-row :gutter="12">
      <el-col :span="8" :offset="8">
        <el-collapse v-model="completed" accordion>
          <el-collapse-item :title="('已完成'+'('+finishedTodos.length+')')" name="1">
            <ul class="todos-ul">
              <li v-for="(completedTodo, index) in finishedTodos" class="todos-li" :class="{'completed-todos-li': completedTodo.completed}">
                {{ completedTodo.title }}
                <el-button type="danger" icon="circle-cross" class="el-btn" @click="deleteTodo(completedTodo)"></el-button>
              </li>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'todos',

    props: ['todos'],

    data () {
      return {
        all: '1',
        unfinished: '0',
        completed: '0'
      }
    },

    computed: {
      unfinishedTodos (todos) {
        return this.todos.filter(todo => !todo.completed)
        console.log(unfinishedTodos)
      },

      finishedTodos (todos) {
        return this.todos.filter(todo => todo.completed)
      }
    },

    methods: {
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

  #todos {
    margin: {
      top: 1em;
    }
  }

  .el-collapse {
    margin-bottom: 1em;

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