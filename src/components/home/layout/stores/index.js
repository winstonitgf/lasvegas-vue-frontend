import * as types from './mutation-types.js'

const state = {
  drawerLeft: false,
  drawerRight: false,
  loading: false,
  logoutDialog: false,
  informationDialog: false,
  passwordDialog: false,
}

const getters = {
  drawerLeft: state => state.drawerLeft,
  drawerRight: state => state.drawerRight,
  loading: state => state.loading,
  logoutDialog: state => state.logoutDialog,
  informationDialog: state => state.informationDialog,
  passwordDialog: state => state.passwordDialog,
}

const actions = {
  leftMenuClick({ commit }) {
    commit(types.TOOLBAR_MENU.LEFT_MENU)
  },
  rightMenuClick({ commit }) {
    commit(types.TOOLBAR_MENU.RIGHT_MENU)
  },
  loadingProccess({ commit }) {
    commit(types.LOADING_PROCCESS.PROCCESS)
  },
  logoutDialogClick({ commit }) {
    commit(types.DIALOG.LOGOUT)
  },
  informationDialogClick({ commit }) {
    commit(types.DIALOG.INFORMATION)
  },
  passwordDialogClick({ commit }) {
    commit(types.DIALOG.PASSWORD)
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
  },
  [types.DIALOG.LOGOUT](state) {
    state.logoutDialog = !state.logoutDialog;
  },
  [types.DIALOG.INFORMATION](state) {
    state.informationDialog = !state.informationDialog;
  },
  [types.DIALOG.PASSWORD](state) {
    state.passwordDialog = !state.passwordDialog;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
