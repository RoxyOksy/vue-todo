<template>
  <v-app id="app">
    <todo-list :todos="todos" />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoList from './components/TodoList.vue'

export default Vue.extend({
  name: 'App',
  components: {
    TodoList
  },
  data () {
    return {
      todos: [{
        title: 'Todo 1',
        project: 'task 1',
        done: false
      }, {
        title: 'Todo 2',
        project: 'task 2',
        done: true
      }, {
        title: 'Todo 3',
        project: 'task 3',
        done: false
      }, {
        title: 'Todo 4',
        project: 'task 4',
        done: false
      }]
    }
  }
})
</script>
