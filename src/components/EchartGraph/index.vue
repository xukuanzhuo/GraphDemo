<template>
  <div ref="canvasChart" class="Echart" style="height:100%"></div>
</template>

<script>
import BaseOptions from './option';
import data from './data.json';
import SourceData from './sourceData.json';

export default {
  name: 'EchartGraph',
  computed: {
    computedOptions() {
      const options = BaseOptions;

      options.series.data = SourceData.nodes.map((node, index) => {
        const baseNode = {
          x: node.x,
          y: node.y,
          id: node.id,
          name: node.label,
          symbolSize: node.size / 50,
          itemStyle: {
            color: data.nodes[index].color,
          },
        };
        return node.size / 50 > 10 ? Object.assign({}, baseNode, {
          label: { show: true },
        }) : baseNode;
      });

      options.series.edges = data.edges.map(edge => ({
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
