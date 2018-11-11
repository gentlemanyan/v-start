import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home.vue';
// import Login from '../pages/login.vue';
// import Commons from '../components/common.vue';
Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: () => import('../pages/login.vue')
      // component: (resolve) => {
      //   require(['../pages/login.vue'], resolve);
      // }
    }
  ]
});

export default router;