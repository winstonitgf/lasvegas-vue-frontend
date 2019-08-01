import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import guard from './utilities/guard';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', redirect: { name: 'home' }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      component: () => import(/* webpackChunkName: "home" */ './views/home/Layout.vue'),
      beforeEnter: guard,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import(/* webpackChunkName: "index" */ './views/home/Index.vue'),
        },
        {
          path: 'sport-schedule',
          name: 'sport-schedule',
          component: () => import(/* webpackChunkName: "sport-schedule" */ './views/home/SportSchedule.vue'),
        },
        {
          path: 'sport-result',
          name: 'sport-result',
          component: () => import(/* webpackChunkName: "sport-result" */ './views/home/SportResult.vue'),
        },
        {
          path: 'sport-order',
          name: 'sport-order',
          component: () => import(/* webpackChunkName: "sport-order" */ './views/home/SportOrder.vue'),
        },
      ],
    },
  ],
});
