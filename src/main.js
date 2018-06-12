import Vue from 'vue';
import App from './App.vue';
import router from './routes/index';

Vue.config.productionTip = false;
Vue.config.errorHandler = function(err, vm, info) {
  console.error('Vue error:', err);
};

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app');
