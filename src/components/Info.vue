<template>
    <p class="ma-3 text-right">
        {{ info.inProgress }} in progress, {{ info.done }} done
    </p>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ITodo } from '@/components/types'

@Component({
  name: 'info'
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
