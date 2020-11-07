<template>
  <v-app id="app">
    <todo-list :todos="todos" />
  </v-app>
</template>

<script lang="ts">
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    TodoList
  },
  data () {
    return {
      todos: [{
        id: 1,
        title: 'Todo 1',
        project: 'task 1',
        done: false
      }, {
        id: 2,
        title: 'Todo 2',
        project: 'task 2',
        done: true
      }, {
        id: 3,
        title: 'Todo 3',
        project: 'task 3',
        done: false
      }, {
        id: 4,
        title: 'Todo 4',
        project: 'task 4',
        done: false
      }]
    }
  }
}
</script>
