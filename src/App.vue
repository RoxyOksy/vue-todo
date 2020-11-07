<template>
  <v-app id="app">
      <v-container>
          <add-task @add-task="addTask" />
          <todo-list :todos="todos" />
          <p class="ma-3 text-right">
              {{ todos.filter(todo => todo.done !== true).length }} in progress, {{ todos.filter(todo => todo.done === true).length }} done
          </p>
      </v-container>
  </v-app>
</template>

<script lang="ts">
import TodoList from './components/TodoList'
import AddTask from '@/components/AddTask'
import { v4 as uuid } from 'uuid'

export default {
  name: 'App',
  components: {
    TodoList,
    AddTask
  },
  data () {
    return {
      todos: [{
        id: uuid(),
        title: 'Todo 1',
        done: false
      }, {
        id: uuid(),
        title: 'Todo 2',
        done: true
      }, {
        id: uuid(),
        title: 'Todo 3',
        done: false
      }, {
        id: uuid(),
        title: 'Todo 4',
        done: false
      }]
    }
  },
  methods: {
    addTask (title) {
      this.todos.push({
        id: uuid(),
        title,
        done: false
      })
    }
  }
}
</script>

<style scoped lang="less">
.container {
    width: 400px;
    margin: 50px auto;
}
.row {
    margin: 0;
}
</style>
