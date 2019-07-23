import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    authUser: null,
  },
  mutations: {
    setLogin(state) {
      state.isLogin = true;
    },
    setAuthUser(state, payload) {
      state.authUser = payload;
    }
  },
  actions: {

  },
});
