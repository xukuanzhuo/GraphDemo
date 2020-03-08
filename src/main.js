import Vue from 'vue';
import echarts from 'echarts';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

new Vue({
  render: h => h(App),
}).$mount('#app');
