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
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/home/Home.vue'),
      beforeEnter: guard,
      children: [
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
      ],
    },
  ],
});
