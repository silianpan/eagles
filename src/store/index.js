import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import menu from './modules/menu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login: login,
    menu: menu
  }
});
