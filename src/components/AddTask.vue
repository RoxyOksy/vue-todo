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

@Component
export default class AddTask extends Vue {
    titleText = '';

    addTask () {
      if (this.titleText.trim()) {
        this.$emit('add-task', this.titleText)
        this.titleText = ''
      }
    }
}
</script>
