<template>
  <v-app id="app">
      <v-container>
          <addTask />
          <todoList />
          <info />
      </v-container>
      <v-row>
          <d3-pie-chart
              show-borders
              with-legend
              :width="600"
              :height="350"
              :margin="15"
              :chartData="[
      { name: 'VueJs', value: 20.70 },
      { name: 'EmberJs', value: 30.92 },
      { name: 'ReactJs', value: 15.42 },
      { name: 'AngularJs', value: 13.65 },
    ]"
              :colors="['#ffd384', '#94ebcd', '#fbaccc', '#d3e0ea']"
          />
          <d3-pie-chart
              :chartData="[
      { name: 'January', value: 20 },
      { name: 'February', value: 40 },
      { name: 'March', value: 25 },
      { name: 'April', value: 15 },
    ]"
              :width="350"
              :height="350"
              :margin="15"
              :colors="['#ffd384', '#94ebcd', '#fbaccc', '#d3e0ea']"
          />
      </v-row>
      <v-row>
          <d3-pie-chart
              show-labels
              show-borders
              with-legend
              :width="600"
              :height="350"
              :margin="15"
              :chartData="[
      { name: 'Jan', value: 3 },
      { name: 'Feb', value: 6 },
      { name: 'March', value: 5 },
      { name: 'April', value: 13 },
      { name: 'May', value: 10 },
      { name: 'June', value: 16 },
      { name: 'July', value: 4 },
      { name: 'Aug', value: 9 },
      { name: 'Sept', value: 6 },
      { name: 'Oct', value: 5 },
      { name: 'Nov', value: 13 },
      { name: 'Dec', value: 10 },
    ]"
          />
          <d3-pie-chart
              show-labels
              show-borders
              :width="350"
              :height="350"
              :margin="15"
              :chartData="[
      { name: 'January', value: 20 },
      { name: 'February', value: 30 },
      { name: 'March', value: 5 },
      { name: 'April', value: 45 },
    ]"
              :pad-angle="0.05"
              :colors="['#ffd384', '#94ebcd', '#fbaccc', '#d3e0ea']"
          />
      </v-row>
      <v-row>
          <d3-pie-chart
              :show-labels="true"
              :width="350"
              :height="350"
              :margin="15"
              :chartData="[
      { name: 'January', value: 20 },
      { name: 'February', value: 30 },
      { name: 'March', value: 5 },
      { name: 'April', value: 45 },
    ]"
              :donut-radius="75"
              :colors="['#ffd384', '#94ebcd', '#fbaccc', '#d3e0ea']"
          />
          <d3-pie-chart
              show-borders
              show-labels
              :width="350"
              :height="350"
              :margin="15"
              :chartData="[
      { name: 'January', value: 20 },
      { name: 'February', value: 30 },
      { name: 'March', value: 5 },
      { name: 'April', value: 45 },
    ]"
              :donut-radius="75"
              :pad-angle="0.03"
              :colors="['#D32F2F', '#58975B', '#C97833', '#ffd384']"
          />
      </v-row>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import todoList from '@/components/TodoList.vue'
import addTask from '@/components/AddTask.vue'
import info from '@/components/Info.vue'
import pieChart from '@/components/PieChart.vue'
import D3PieChart from '@/components/D3PieChart.vue'

@Component({
  components: {
    D3PieChart,
    pieChart,
    todoList,
    addTask,
    info
  }
})
export default class App extends Vue {}
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
