<template>
    <div>
        <d3-pie-chart
            show-labels
            show-borders
            with-legend
            :donut-radius="75"
            :width="width"
            :height="height"
            :margin="margin"
            :pad-angle="0.03"
            :chartData="chartData"
            :colors="colors"
        />
        <v-btn @click="sss" class="btn-secondary">click</v-btn>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ChartData } from './types'
import D3PieChart from './D3PieChart.vue'

@Component({
  components: {
    D3PieChart
  }
})
export default class PieChartComponent extends Vue {
    chartData: ChartData[] = [
      {
        name: 'VueJs',
        value: 20.70
      },
      {
        name: 'EmberJs',
        value: 30.92
      },
      {
        name: 'ReactJs',
        value: 15.42
      },
      {
        name: 'AngularJs',
        value: 13.65
      }
    ];

    colors = ['#ffd384', '#94ebcd', '#fbaccc', '#d3e0ea'];

    width = 600

    height = 400

    margin = 15

    sss () {
      this.chartData = [
        {
          name: 'Jan',
          value: 3
        },
        {
          name: 'Feb',
          value: 20
        },
        {
          name: 'Mar',
          value: 30
        },
        {
          name: 'Apr',
          value: 15
        },
        {
          name: 'May',
          value: 7
        },
        {
          name: 'June',
          value: 25
        }
      ]
      this.colors = []
    }
}
</script>
