import * as types from './mutation_type'

export default {
	[types.SUCCESS_GET_MENULIST] (state, menuList) {
		state.menuList = menuList
	},
	[types.FAILURE_GET_MENULIST] (state) {
		state.menuList = []
	}
}
