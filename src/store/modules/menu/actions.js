import api from 'api/security/menu'
import * as types from './mutation_type'

export default {
  getMenuList({ commit }) {
    return new Promise((resolve, reject) => {
      api.getMenuList().then(response => {
        if (response.status != 200) {
          commit(types.FAILURE_GET_MENULIST)
        } else {
          commit(types.SUCCESS_GET_MENULIST, response.data)
        }
        resolve(response);
      }).catch(error => {
        commit(types.FAILURE_GET_MENULIST)
        reject(error);
      });
    });
  }
}
