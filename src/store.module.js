import Vue from 'vue'
import Vuex from 'vuex'
import layout from './stores/layout/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    layout: layout
  },
  strict: process.env.NODE_ENV !== 'production'
})
