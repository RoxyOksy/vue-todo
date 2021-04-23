<template>
    <svg class="plot"
         ref="plot"
         :style="{ height, width, margin }"
    ></svg>
</template>

<script lang="ts">
import * as d3 from 'd3'
import {
  Component, Prop, Vue, Watch
} from 'vue-property-decorator'
import { ChartData } from './types'

@Component({
  name: 'd3-pie-chart'
})
export default class D3PieChart extends Vue {
    @Prop({ default: [] }) chartData!: ChartData[];

    @Prop({ default: [], required: false }) colors!: string[];

    @Prop({ default: 200 }) width!: number;

    @Prop({ default: 200 }) height!: number;

    @Prop({ default: 20 }) margin!: number;

    @Prop({ default: 0 }) donutRadius!: number;

    @Prop({ type: Boolean }) showLabels!: boolean;

    @Prop({ type: Boolean }) showBorders!: boolean;

    @Prop({ type: Boolean }) withLegend!: boolean;

    @Prop({ default: null }) padAngle!: number;

    radius = Math.min(this.width, this.height) / 2 - this.margin;

    svg: any;

    pie: any;

    ordScale: any;

    arc: any;

    path: any;

    label: any;

    colorSeq: any;

    legend: any;

    labelHeight = 15;

    legendSpacing = 4;

    legendColor: any;

    @Watch('chartData')
    updatePie (): void {
      d3.selectAll('g').remove()

      this.initPieChat()
    }

    get chartColors () {
      return this.colors
    }

    get interpolateColors () {
      return d3.scaleOrdinal()
        .domain(this.chartData.map((d) => d.name))
        .range(d3.quantize((t: number) => d3.interpolateSpectral(t * 0.8 + 0.1), this.chartData.length).reverse())
    }

    drawPie () {
      this.ordScale = d3.scaleOrdinal()
        .range(this.colors)

      this.pie = d3.pie()
        .value((d: any) => d.value)
        .sort(null)
        .padAngle(this.padAngle) // space between sections

      this.arc = this.svg.selectAll('arc')
        .data(this.pie(this.chartData))
        .enter()

      this.path = d3.arc()
        .outerRadius(this.radius)
        .innerRadius(this.donutRadius) // donat radius

      // background
      this.arc.append('path')
        .attr('d', this.path)
        .attr('fill', (d: { data: ChartData }, index: number) => (this.colors.length ? this.ordScale(d.data.name) : this.interpolateColors(index.toString())))

      // borders
      if (this.showBorders) {
        this.arc.selectAll('path')
          .attr('stroke', 'black')
          .style('stroke-width', '0.5px')
          .style('opacity', 0.7)
      }

      // labels
      if (this.showLabels) {
        this.label = d3.arc()
          .outerRadius(this.radius)
          .innerRadius(this.donutRadius)

        // this.arc.append('text')
        //   .attr('transform', (d) => `translate(${this.label.centroid(d)})`)
        //   .text((d) => d.data.name)
        //   .style('font-family', 'Roboto-Regular')
        //   .style('font-size', 13)
        //   .style('text-anchor', 'middle');

        this.arc.append('text')
          .attr('transform', (d: { data: ChartData }) => `translate(${this.label.centroid(d)})`)
          .text((d: { data: ChartData }) => d.data.value)
          .style('font-family', 'Roboto-Regular')
          .style('font-size', 15)
          .style('text-anchor', 'middle')
      }
    }

    drawLegend () {
      this.legend = d3.select(this.$refs.plot as any)
        .append('g')
        .attr('transform', (data: any, index: number) => {
          const height = this.labelHeight + this.legendSpacing
          const offset = (height * this.chartData.length) / 2
          const y = index * height - offset + 70

          return `translate(${this.labelHeight},${y})`
        })

      this.legend
        .selectAll(null)
        .data(this.chartData)
        .enter()
        .append('rect')
        .attr('y', (d: ChartData, index: number) => this.labelHeight * index * 1.8)
        .attr('width', this.labelHeight)
        .attr('height', this.labelHeight)
        .attr('fill', (d: ChartData, index: number) => (this.colors[index] || this.interpolateColors(index.toString())))
        .attr('stroke', 'grey')
        .style('stroke-width', '1px')

      this.legend
        .selectAll(null)
        .data(this.chartData)
        .enter()
        .append('text')
        .text((d: ChartData) => d.name)
        .attr('x', this.labelHeight * 1.5)
        .attr('y', (d: ChartData, index: number) => this.labelHeight * index * 1.8 + this.labelHeight)
        .style('font-family', 'sans-serif')
        .style('font-size', `${this.labelHeight}px`)
    }

    initPieChat () {
      this.svg = d3.select(this.$refs.plot as any)
        .append('g')
        .attr('transform', `translate(${this.width / 2},${this.height / 2})`)

      this.drawPie()

      if (this.withLegend) {
        this.drawLegend()
      }
    }

    mounted () {
      this.initPieChat()
    }
}
</script>

<style scoped lang="scss">

</style>
