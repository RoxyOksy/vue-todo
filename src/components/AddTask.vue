<template>
    <v-row >
        <v-text-field label="Add new task" v-model="titleText"/>
        <v-btn outlined @click="addTask">
            Add
        </v-btn>
    </v-row>
</template>

<script>
export default {
  name: 'AddTask',
  data () {
    return {
      titleText: ''
    }
  },
  methods: {
    addTask () {
      if (this.titleText.trim()) {
        this.$emit('add-task', this.titleText)
        this.titleText = ''
      }
    }
  }
}
</script>
