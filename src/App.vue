<template>
  <v-app id="app">
      <v-container>
          <addTask />
          <todoList />
          <p class="ma-3 text-right">
              {{ info.inProgress }} in progress, {{ info.done }} done
          </p>
      </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

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
  todos: ITodo[] = this.$store.getters.todos

  get info () {
    return {
      inProgress: this.todos.filter(todo => !todo.done).length,
      done: this.todos.filter(todo => todo.done).length
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
