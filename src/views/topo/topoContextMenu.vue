<template>
  <span>
    <!-- 右键菜单 -->
    <contextMenuComp :contextMenuBts="contextMenuNodeBts" :contextMenuDomId="contextMenuDomId"></contextMenuComp>

    <!-- 弹出对话框  -->
    <div id="topo-dialog" style="display:none">
      <component :is="currentViewComp" :currentMapElementData="currentMapElementData" transition="fade" transition-mode="out-in" keep-alive :scriptResult="scriptResult"></component>
    </div>
  </span>
</template>
<script>
import eventHubs from 'common/eventHubs'
import resType from 'common/resTypeEnum'
import art from 'utils/artdialog'
import topoApi from 'api/topo'
import {TOPO_COM_CONTEXTMENU,TOPO_NODE_CONTEXTMENU,TOPO_LINK_CONTEXTMENU} from 'common/topo/contextMenuBtn'

import contextMenuComp from 'components/topo/contextMenu.vue'
import modifyhostComp from './modifyHostInfo.vue'
import modifyLinkComp from './modifyLink.vue'
import exchangeRuijieComp from './exchange_ruijie.vue'
import scriptResultComp from './scriptResult.vue'
export default {
  data() {
    return {
      graphView: null,
      contextMenuDomId: 'contextmenu-node',
      contextMenuNodeBts: [],
      contextMenuLinkBts: [],
      currentViewComp: null,
      scriptResult: '',
      currentMapElementData: {}
    }
  },
  created() {
    const self = this;
    eventHubs.getEventHub().$on('topoGraphView', (topoGraphView) => {
      self.graphView = topoGraphView;
    });
  },
  mounted() {
    this.initContextMenu();
    this.addEventListener();
    this.handleEvent();
  },
  components: {
    contextMenuComp, modifyhostComp, modifyLinkComp, exchangeRuijieComp, scriptResultComp
  },
  methods: {
    initContextMenu() {
      this.contextMenuNodeBts = TOPO_COM_CONTEXTMENU.concat(TOPO_NODE_CONTEXTMENU);
      this.contextMenuLinkBts = TOPO_COM_CONTEXTMENU.concat(TOPO_LINK_CONTEXTMENU);
    },
    addEventListener() {
      $('#topo').bind("contextmenu",
        function() {
          return false;
        }
      );
      const self = this;
      self.graphView.getView().addEventListener('mouseup', function(e) {
        const currentNodeOrLink = self.graphView.getDataAt(e);
        if (currentNodeOrLink) {
          const nodeOrLink = currentNodeOrLink._attrObject;
          if (nodeOrLink != undefined && nodeOrLink != null) {
            const nodeOrLinkData = nodeOrLink.data;
            nodeOrLinkData.elementtypeName = self.getElementNameByType(nodeOrLinkData.elementtype);
            self.currentMapElementData = nodeOrLinkData;
          }
          // self.modifyContextMenuIsShow(currentNodeOrLink);
          if (currentNodeOrLink instanceof ht.Node) {
            self.handlerContextMenu(e, 'contextmenu-node');
            return;
          } else if (currentNodeOrLink instanceof ht.Edge) {
            self.handlerContextMenu(e, 'contextmenu-link');
            return;
          }
        }
        self.handlerContextMenu(e);
      });
    },
    handlerContextMenu(event, contextMenuDom) {
      if (event.button == 2) {
        $("#"+contextMenuDom).css({
          top: event.y,
          left: event.x
        }).show();
      } else if (event.button == 0) {
        this.hideContextMenu();
      }
    },
    getElementNameByType(elementtype) {
      return resType.getElementNameByType(elementtype);
    },
    isObjBlank(obj) {
      return (obj === null) || (obj === undefined) || (obj === '');
    },
    handleEvent() {
      const self = this;
      $('#topo').on('click', '#topo-modify-host', function() {
        self.currentViewComp = modifyhostComp;
        art.artdialog('修改设备信息', $('#topo-dialog'), 600, 400, 'topodialog');
        self.$store.dispatch('setCurMapElement', self.currentMapElementData);
        self.hideContextMenu();
      });
      $('#topo').on('click', '#topo-modify-link', function() {
        self.currentViewComp = modifyLinkComp;
        art.artdialog('修改连接关系', $('#topo-dialog'), 600, 400, 'topodialog');
        self.hideContextMenu();
      });
      $('#topo').on('click', '#topo-ping', function() {
        self.scriptResult = '';
        topoApi.queryScriptByName('Ping').then(response => {
          const script = response.data;
          const scriptid = script[0].scriptid;
          const hostid = self.currentMapElementData.elementid;
          topoApi.executeScript(hostid, scriptid).then(exeResult => {
            if (!self.isObjBlank(exeResult.data) && exeResult.data.response == 'success') {
              self.scriptResult = exeResult.data.value;
            } else {
              self.scriptResult = exeResult.data;
            }
          });
        });
        // setTimeout(() => {self.pinghostDialog = true;}, 1500);
        self.currentViewComp = scriptResultComp;
        art.artdialog('Ping执行结果', $('#topo-dialog'), 600, 250, 'topodialog');
        self.hideContextMenu();
      });

      $('#topo').on('click', '#topo-traceroute', function() {
        self.scriptResult = '';
        topoApi.queryScriptByName('Traceroute').then(response => {
          const script = response.data;
          const scriptid = script[0].scriptid;
          const hostid = self.currentMapElementData.elementid;
          topoApi.executeScript(hostid, scriptid).then(exeResult => {
            if (!self.isObjBlank(exeResult.data) && exeResult.data.response == 'success') {
              self.scriptResult = exeResult.data.value;
            } else {
              self.scriptResult = exeResult.data;
            }
          });
        });
        self.currentViewComp = scriptResultComp;
        art.artdialog('Traceroute执行结果', $('#topo-dialog'), 600, 250, 'topodialog');
        // setTimeout(() => {self.tracerouteDialog = true;}, 1000);
        self.hideContextMenu();
      });

      $('#topo').on('click', '#topo-port-state', function() {
        self.currentViewComp = exchangeRuijieComp;
        art.artdialog('设备面板图', $('#topo-dialog'), 800, 400, 'topodialog');
        self.hideContextMenu();
      });
    },
    hideContextMenu() {
      $("#contextmenu-node").hide();
      $("#contextmenu-link").hide();
    }
  }
}
</script>
