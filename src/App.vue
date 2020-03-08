<template>
  <div id="app">
    <EchartGraph />
  </div>
</template>

<script>
import EchartGraph from './components/EchartGraph/index.vue';

export default {
  name: 'app',
  components: {
    EchartGraph,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html, body, #app {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
