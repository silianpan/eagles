import * as types from './mutation_type'
import topoApi from 'api/topo'
import iconApi from 'api/manager/iconmanager'

export default {
  // 设置当前拓扑图图标数据
  setTopoIconData({commit}, topoIconData) {
    commit(types.SUCCESS_SET_TOPOICONDATA, topoIconData)
  },
  // 设置当前选中拓扑图元素
  setCurMapElement({commit}, curMapElement) {
    commit(types.SUCCESS_SET_CURMAPELE, curMapElement)
  },
  // 设置用户图标
  getUserIcons({commit}) {
    return new Promise((resolve, reject) => {
      iconApi.getUserIcons().then(response => {
        if (response.status == 200) {
          commit(types.SUCCESS_SET_USERICONS, response.data)
        }
        resolve(response);
      }).catch(error => {
        reject(error);
      });
    });
  },
  // 设置系统图标
  getSysIcons({commit}) {
    return new Promise((resolve, reject) => {
      topoApi.querySysImage().then(response => {
        if (response.status == 200) {
          commit(types.SUCCESS_SET_SYSICONS, response.data)
        }
        resolve(response);
      }).catch(error => {
        reject(error);
      });
    });

  },
  // 设置交换机接口数据
  getExchangerInterfaceData({commit}) {
    return new Promise((resolve, reject) => {
      topoApi.queryInterface().then(response => {
        if (response.status != 200) {
          commit(types.SUCCESS_SET_EXCHANGER_INTERFACE_DATA, response.data)
        }
        resolve(response);
      }).catch(error => {
        reject(error);
      });
    });
  },
  // 设置交换机主机数据
  getExchangerHostData({commit}) {
    return new Promise((resolve, reject) => {
      topoApi.queryExchangerHost().then(response => {
        if (response.status != 200) {
          commit(types.SUCCESS_SET_EXCHANGER_HOST_DATA, response.data)
        }
        resolve(response);
      }).catch(error => {
        reject(error);
      });
    });
  }
}
