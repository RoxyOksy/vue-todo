<template>
    <v-container>
        <add-task />
        <v-card>
            <todo v-for="todo in todos"
                  :todo="todo"
                  :key="todo.title"
                  elevation="2"
                  class="d-flex flex-row p-3"
            />
        </v-card>
        <p class="ma-3 text-right">
            {{ todos.filter(todo => todo.done !== true).length }} in progress, {{ todos.filter(todo => todo.done === true).length }} done
        </p>
    </v-container>
</template>

<script>
import Todo from './Todo'
import AddTask from '@/components/AddTask'

export default {
  name: 'TodoList',
  props: ['todos'],
  components: { Todo, AddTask }
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
