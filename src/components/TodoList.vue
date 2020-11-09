<template>
    <v-card>
        <todo v-for="todo in todos"
            :todo="todo"
            :key="todo.title"
            elevation="2"
            class="d-flex flex-row p-3"
            @delete-task="deleteTask"
            @complete-task="completeTask"
        />
    </v-card>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator'

import todo from '@/components/Todo.vue'
import { ITodo } from './types'

@Component({
  components: { todo }
})
export default class TodoList extends Vue {
    @Prop() todos: ITodo[]

    deleteTask (id: string): void {
      const index = this.todos.findIndex(todo => todo.id === id)
      this.todos.splice(index, 1)
    }

    completeTask (task: ITodo) {
      task.done = !task.done
    }
}

</script>
