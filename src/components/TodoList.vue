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

<script>
import Todo from './Todo'

export default {
  name: 'TodoList',
  props: ['todos'],
  components: { Todo },
  methods: {
    deleteTask (id) {
      const index = this.todos.findIndex(todo => todo.id === id)
      this.todos.splice(index, 1)
    },
    completeTask (task) {
      task.done = !task.done
    }
  }
}

</script>
