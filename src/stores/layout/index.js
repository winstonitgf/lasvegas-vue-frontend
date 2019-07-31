import * as types from './mutation-types.js'

const state = {
  drawerLeft: false,
  drawerRight: false,
  loading: false,
}

const getters = {
  drawerLeft: state => state.drawerLeft,
  drawerRight: state => state.drawerRight,
  loading: state => state.loading,
}

const actions = {
  leftMenuClick({ commit }) {
    commit(types.TOOLBAR_MENU.LEFT_MENU)
  },
  rightMenuClick({ commit }) {
    commit(types.TOOLBAR_MENU.RIGHT_MENU)
  },
  LoadingProccess({ commit }) {
    commit(types.LOADING_PROCCESS.PROCCESS)
  },
}

const mutations = {
  [types.TOOLBAR_MENU.LEFT_MENU](state) {
    state.drawerLeft = !state.drawerLeft;
  },
  [types.TOOLBAR_MENU.RIGHT_MENU](state) {
    state.drawerRight = !state.drawerRight;
  },
  [types.LOADING_PROCCESS.PROCCESS](state) {
    state.loading = !state.loading;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
