/**
 * login module
 */
// import {getCookie} from '../../utils/authService'
// import LoginAction from '../../api/login'
import Vue from 'vue'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const USERINFO_SUCCESS = 'USERINFO_SUCCESS'
export const USERINFO_FAILURE = 'USERINFO_FAILURE'
export const LOGOUT_USER = 'LOGOUT_USER'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'

export default {
  state: {
    user: null,
    // token: getCookie('token') || null,
    msg: ''
  },
  mutations: {
    // [LOGIN_SUCCESS](state, data) {
    //   state.token = data.token;
    //   state.user = data;
    // },
    // [USERINFO_SUCCESS](state, action) {
    //   state.user = action.user
    // },
    // [USERINFO_FAILURE](state, msg) {
    //   state.user = null
    //   state.msg = msg
    // },
    // [LOGOUT_USER](state, action) {
    //   state.token = getCookie('token') || null
    //   state.user = null
    // },
    // [UPDATE_USER_SUCCESS](state, action) {
    //   state.user = action.user
    // }
  },
  actions: {
    loginAction({commit}, loginInfo) {
      return true;
      // LoginAction.userLogin(loginInfo).then(data => {
      //   if (data.exception == null) {
      //     commit(LOGIN_SUCCESS, data.data);
      //     // this.$router.push({name: 'Home'});
      //     return true ;
      //   } else {
      //     commit(USERINFO_FAILURE,"用户名和密码不对，请重新输入");
      //     return false;
      //   }
      // }).catch(err => {
      //   console.log(err);
      //   commit(USERINFO_FAILURE,"用户名和密码不对");
      //   return false;
      // });
    }
  }
}
