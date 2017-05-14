import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    login: login,
    home: home
  }
})
