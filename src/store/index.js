import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
// import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login: login
  }
});
