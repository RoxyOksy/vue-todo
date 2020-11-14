<template>
  <v-app id="app">
      <v-container>
          <addTask />
          <todoList />
          <info />
      </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import todoList from '@/components/TodoList.vue'
import addTask from '@/components/AddTask.vue'
import info from '@/components/Info.vue'

@Component({
  components: {
    todoList,
    addTask,
    info
  }
})
export default class App extends Vue {}
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
