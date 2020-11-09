<template>
  <v-app id="app">
      <v-container>
          <addTask @add-task="addTask" />
          <todoList :todos="todos" />
          <p class="ma-3 text-right">
              {{ info.inProgress }} in progress, {{ info.done }} done
          </p>
      </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { v4 as uuid } from 'uuid'

import todoList from '@/components/TodoList.vue'
import addTask from '@/components/AddTask.vue'
import { ITodo } from '@/components/types'

@Component({
  components: {
    todoList,
    addTask
  }
})
export default class App extends Vue {
    todos: ITodo[] = [{
      id: uuid(),
      title: 'Create ToDo using Vue',
      done: true
    }, {
      id: uuid(),
      title: 'Learn Vuex',
      done: false
    }]

    get info () {
      return {
        inProgress: this.todos.filter(todo => todo.done !== true).length,
        done: this.todos.filter(todo => todo.done === true).length
      }
    }

    addTask (title: string) {
      this.todos.push({
        id: uuid(),
        title,
        done: false
      })
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
