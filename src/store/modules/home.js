/**
 * home module
 */
export const CHANGE_COLLAPSE = 'CHANGE_COLLAPSE'

export default {
  state: {
    collapsed: false
  },
  mutations: {
    [CHANGE_COLLAPSE](state, collapsed) {
      state.collapsed = collapsed;
    }
  },
  actions: {
    changeCollapse({commit}, collapsed) {
      commit(CHANGE_COLLAPSE, collapsed);
    }
  }
}
