import Vue from 'vue'
import Vuex from 'vuex'
import layout from '@/components/home/layout/stores/index.js'
import auth from '@/stores/auth/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    layout: layout,
    auth: auth
  },
  strict: process.env.NODE_ENV !== 'production'
})
