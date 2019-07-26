import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import vuetimer from './plugins/vue-timer';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  vuetimer,
  render: h => h(App)
}).$mount('#app');
