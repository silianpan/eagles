/**
 * Created by admin on 2017/1/12.
 */

import actions from './actions';
import mutations from './mutations';
export default {
    state: {
      curMapElement: {
        elementid: '',
        selementid: '',
        label: '',
        sysmapid: '',
        elementtype: '',
        elementtypeName: '',
        iconid_off: '',
        iconid_maintenance: '',
        iconid_on: '',
        iconid_disabled: ''
      },
      topoIconData: {},
      userIcons: {},
      sysIcons: {},
      exchangerInterfaceData: {},
      exchangerHostData: {}
    },
    actions: actions,
    mutations: mutations,
    getters:{
    }
};
