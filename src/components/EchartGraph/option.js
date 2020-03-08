export default {
  title: {
    text: '词向量关系图',
  },
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  series: {
    type: 'graph',
    layout: 'none',
    roam: true,
    focusNodeAdjacency: true,
    animation: true,
    emphasis: {
      label: {
        position: 'inside',
        show: true,
      },
    },
    lineStyle: {
      width: 0.5,
      curveness: 0.3,
      opacity: 0.7,
    },
    data: [],
    edges: [],
  },
};
