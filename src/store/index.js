import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import menu from './modules/menu'
import topo from './modules/topo'
import home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login: login,
    menu: menu,
    topo: topo,
    home: home
  }
});
