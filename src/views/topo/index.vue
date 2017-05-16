<template>
<div id="topo">
  <div class="viewBlock">
    <div id="topo-toolbar" class="toolBar clear">
      <!-- 工具栏 -->
      <toolbarComp :toolbarBtns="toolbarBtns"></toolbarComp>
      <topoToolbarComp :topoBaseDataUrl="topoBaseDataUrl" :topoDataByIdUrl="topoDataByIdUrl" :iconDataUrl="iconDataUrl"></topoToolbarComp>
    </div>
  </div>
  <!-- 拓扑图  -->
  <topoGraphComp></topoGraphComp>
  <!-- 右键菜单 -->
  <topoContextMenuComp :sysIcons="sysIcons" :userIcons="userIcons" :exchangerHostData="exchangerHostData"
    :exchangerInterfaceData="exchangerInterfaceData"
  ></topoContextMenuComp>
</div>
</template>
<script>
import Ajax from 'api/customajax'
import iconApi from 'api/manager/iconmanager'
import topoApi from 'api/topo'
import {TOPO_BTN_COMMON,TOPO_BTN_TOPO} from 'common/topo/toolbarBtn'

import toolbarComp from 'components/topo/toolbar.vue'
import topoToolbarComp from './topoToolbar.vue'
import topoContextMenuComp from './topoContextMenu.vue'
import topoGraphComp from './topoGraph.vue'

export default {
  data() {
    return {
      toolbarBtns: TOPO_BTN_COMMON.concat(TOPO_BTN_TOPO),
      topoBaseDataUrl: '/dirms/monitor/sysmap/all',
      topoDataByIdUrl: '/dirms/monitor/sysmap/get/',
      iconDataUrl: '/dirms/monitor/image/getByMapid/',
      sysIcons: {},
      userIcons: {},
      exchangerHostData: {},
      exchangerInterfaceData: {}
    }
  },
  components: {
    toolbarComp, topoToolbarComp, topoGraphComp, topoContextMenuComp
  },
  created() {
    this.getUserAndSysIcons();
    this.initExchangerHostData();
  },
  methods: {
    getUserAndSysIcons() {
      const self = this;
      // 用户图标
      // iconApi.getUserIcons().then(response => {
      //   self.$store.dispatch('setUserIcons', response.data);
      // });

      this.$store.dispatch('getUserIcons').then((response) => {
        self.userIcons = response.data;
      });
      // Ajax.syncQuery('/dirms/monitor/icons/getUserIcons', {}, function(data) {
      //   self.$store.dispatch('setUserIcons', data);
      // });

      // 系统图标
      // topoApi.querySysImage().then(response => {
      //   self.$store.dispatch('setSysIcons', response.data);
      // });

      this.$store.dispatch('getSysIcons').then((response) => {
        self.sysIcons = response.data;
      });
      // Ajax.syncQuery('/dirms/monitor/image/getSysIcons', {}, function(data) {
      //   self.$store.dispatch('setSysIcons', data);
      // });

    },
    initExchangerHostData() {
      const self = this;
      // topoApi.queryExchangerHost().then(response => {
      //   self.$store.dispatch('setExchangerHostData', response.data);
      // });

      this.$store.dispatch('getExchangerHostData').then((response) => {
        self.exchangerHostData = response.data;
      });
      // Ajax.syncQuery('/dirms/monitor/application/getExchanger', {}, function(data) {
      //   self.$store.dispatch('setExchangerHostData', data);
      // });

      // topoApi.queryInterface().then(response => {
      //   self.$store.dispatch('setExchangerInterfaceData', response.data);
      // });

      this.$store.dispatch('getExchangerInterfaceData').then((response) => {
        self.exchangerInterfaceData = response.data;
      });
      // Ajax.syncQuery('/dirms/monitor/item/getInterface', {}, function(data) {
      //   self.$store.dispatch('setExchangerInterfaceData', data);
      // });
    }
  }
}
</script>
