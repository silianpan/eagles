import * as types from './mutation_type'

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
  setUserIcons({commit}, userIcons) {
    commit(types.SUCCESS_SET_USERICONS, userIcons)
  },
  // 设置系统图标
  setSysIcons({commit}, sysIcons) {
    commit(types.SUCCESS_SET_SYSICONS, sysIcons)
  },
  // 设置交换机接口数据
  setExchangerInterfaceData({commit}, exchangerInterfaceData) {
    commit(types.SUCCESS_SET_EXCHANGER_INTERFACE_DATA, exchangerInterfaceData)
  },
  // 设置交换机主机数据
  setExchangerHostData({commit}, exchangerHostData) {
    commit(types.SUCCESS_SET_EXCHANGER_HOST_DATA, exchangerHostData)
  }
}
