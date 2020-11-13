<template>
    <v-row >
        <v-text-field label="Add new task" v-model="titleText"/>
        <v-btn outlined @click="addTask">
            Add
        </v-btn>
    </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { v4 as uuid } from 'uuid'

@Component
export default class AddTask extends Vue {
    titleText = '';

    addTask () {
      if (this.titleText.trim()) {
        const newTask = {
          id: uuid(),
          title: this.titleText,
          done: false
        }
        this.$store.dispatch('addTask', newTask)
        this.titleText = ''
      }
    }
}
</script>
