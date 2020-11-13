<template>
    <v-card>
        <todo v-for="todo in todos"
            :todo="todo"
            :key="todo.title"
            elevation="2"
            class="d-flex flex-row p-3"
        />
    </v-card>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

import todo from '@/components/Todo.vue'
import { ITodo } from './types'

@Component({
  components: { todo }
})
export default class TodoList extends Vue {
    todos: ITodo[] = new Array<ITodo>()
    mounted () {
      this.todos = this.$store.getters.todos
    }
}

</script>
