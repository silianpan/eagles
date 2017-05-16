import * as types from './mutation_type'

export default {
	[types.SUCCESS_SET_TOPOICONDATA] (state, topoIconData) {
		state.topoIconData = topoIconData;
	},
	[types.SUCCESS_SET_CURMAPELE] (state, curMapElement) {
		state.curMapElement = $.extend(true, {}, curMapElement)
	},
	[types.SUCCESS_SET_USERICONS] (state, userIcons) {
		state.userIcons = userIcons;
	},
	[types.SUCCESS_SET_SYSICONS] (state, sysIcons) {
		state.sysIcons = sysIcons;
	},
	[types.SUCCESS_SET_EXCHANGER_INTERFACE_DATA] (state, exchangerInterfaceData) {
		state.exchangerInterfaceData = exchangerInterfaceData;
	},
	[types.SUCCESS_SET_EXCHANGER_HOST_DATA] (state, exchangerHostData) {
		state.exchangerHostData = exchangerHostData;
	}
}
