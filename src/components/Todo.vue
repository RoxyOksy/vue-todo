<template>
    <v-list-item elevation="2" class="d-flex flex-row p-3" >
        <v-list-item-title
          :style="todo.done ? 'text-decoration:line-through' : ''"
        >
            {{ todo.title }}
        </v-list-item-title>
        <v-btn icon
               :color="todo.done ? 'green' : 'unset'"
               @click="completeTask(todo.id)">
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

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ITodo } from '@/components/types'

@Component({
  name: 'todo'
})
export default class Todo extends Vue {
    @Prop() todo!: ITodo;

    deleteTask (id: string) {
      this.$store.dispatch('deleteTask', id)
    }

    completeTask (id: string) {
      this.$store.dispatch('completeTask', id)
    }
}

</script>
