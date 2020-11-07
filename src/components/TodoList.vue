<template>
  <div>
    <p>Completed tasks: {{ todos.filter(todo => todo.done === true).length }}</p>
    <p>Pending tasks: {{ todos.filter(todo => todo.done === false).length }}</p>
    <ul>
      <li>TODO A</li>
      <li>TODO B</li>
      <li>TODO C</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TodoList',
  props: ['todos']
})
</script>
<style scoped lang="less">

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px;
}

</style>
