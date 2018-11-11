import Vue from 'vue';
import App from './App.vue';
import router from './routes/index';
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.config.errorHandler = function(err, vm, info) {
  console.error('Vue error:', err);
};

// Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app');
