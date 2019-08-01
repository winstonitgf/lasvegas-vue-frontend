import * as types from './mutation-types.js'

const state = {
  authUser: null,
  isLogin: false
}

const getters = {
  authUser: state => state.authUser,
  isLogin: state => state.isLogin,
}

const actions = {
  setAuthUser({ commit }, payload) {
    commit(types.USER.SET_AUTH_USER, payload)
  },
  setLogin({ commit }, payload) {
    commit(types.USER.SET_LOGIN, payload)
  },
}

const mutations = {
  [types.USER.SET_AUTH_USER](state, payload) {
    state.authUser = payload;
  },
  [types.USER.SET_LOGIN](state, payload) {
    state.isLogin = payload;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
