<template>
  <div ref="canvasChart" class="Echart" style="height:100%"></div>
</template>

<script>
import BaseOptions from './option';
import SourceData from './data.json';

export default {
  name: 'EchartGraph',
  computed: {
    computedOptions() {
      const options = BaseOptions;

      options.series.data = SourceData.nodes.map(node => ({
        x: node.x,
        y: node.y,
        id: node.id,
        name: node.label,
        symbolSize: node.size,
        itemStyle: {
          color: node.color,
        },
      }));

      options.series.edges = SourceData.edges.map(edge => ({
        source: edge.sourceID,
        target: edge.targetID,
      }));

      return options || {};
    },
  },
  methods: {
    handleResizeChart() {
      if (!this.chart) return;

      this.$nextTick(() => {
        this.chart.setOption(this.computedOptions);
        this.chart.resize();
      });
    },
  },
  mounted() {
    this.chart = this.$echarts.init(this.$refs.canvasChart);
    this.chart.setOption(this.computedOptions);
    window.addEventListener('resize', this.handleResizeChart);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResizeChart);
  },
};
</script>

<style lang="scss" scoped>

</style>
