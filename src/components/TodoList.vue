<template>
    <v-container>
        <v-card>
            <v-list-item v-for="todo in todos" :key="todo.title"  elevation="2" class="d-flex flex-row p-3">
                <v-list-item-content>
                    <v-list-item-title>
                        {{ todo.title }}
                    </v-list-item-title>
                </v-list-item-content>
                <v-btn icon :color="todo.done && 'green'">
                    <v-icon>
                        mdi-check-circle-outline
                    </v-icon>
                </v-btn>
                <v-btn icon color="red">
                    <v-icon>
                        mdi-delete-empty
                    </v-icon>
                </v-btn>
            </v-list-item>
            <v-divider inset></v-divider>
        </v-card>
        <p class="ma-3 text-right">
            {{ todos.filter(todo => todo.done !== true).length }} in progress, {{ todos.filter(todo => todo.done === true).length }} done
        </p>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TodoList',
  props: ['todos']
})
</script>
<style scoped lang="less">
.container {
    width: 400px;
    margin: 50px auto;
}
</style>
