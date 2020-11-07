<template>
    <v-list-item elevation="2" class="d-flex flex-row p-3" >
        <v-list-item-title>
            {{ todo.title }}
        </v-list-item-title>
        <v-btn icon :color="todo.done && 'green'">
            <v-icon>
                mdi-check-circle-outline
            </v-icon>
        </v-btn>
        <v-btn icon color="red" @click="deleteTask(todo.id)">
            <v-icon>
                mdi-delete-empty
            </v-icon>
        </v-btn>
    </v-list-item>
</template>

<script>
export default {
  name: 'Todo',
  props: ['todo'],
  methods: {
    deleteTask (id) {
      this.$emit('delete-task', id)
    }
  }
}
</script>
