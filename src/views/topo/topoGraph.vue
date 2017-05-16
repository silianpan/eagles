<template>
  <div id="topoGraph"></div>
</template>
<script>
import graph from 'common/topo/graph'
import eventHubs from 'common/eventHubs'
import {STATIC_IMAGEPATH} from 'src/config'
const imgNode = STATIC_IMAGEPATH + 'node_merge.svg'
const imgLink = STATIC_IMAGEPATH + 'link.svg'
export default {
  props: {
    hasOverView: {
      style: Boolean,
      default: function() {
        return true
      }
    },
    hasTreeView: {
      style: Boolean,
      default: function() {
        return true
      }
    }
  },
  data() {
    return {
      borderPane: null
    }
  },
  mounted() {
    this.initTopoGraph();
  },
  methods: {
    initTopoGraph() {
      const graphObj = graph.createGraph();
      const borderPane = graphObj.borderPane;
      const graphView = borderPane.getCenterView();
      const dataModel = graphView.getDataModel();

      const collapsed = this.$store.state.home.collapsed;

      if (this.hasTreeView) {
        const treeView = new ht.widget.TreeView(dataModel);
        const mainSplit = new ht.widget.SplitView(borderPane, treeView, 'h', 0.8);
        mainSplit.setDividerBackground('#CCC');
        const mainSplitView = mainSplit.getView();
        mainSplitView.className = collapsed ? 'graphyClass2' : 'graphyClass';
        $('#topoGraph').append(mainSplitView);

        treeView.expandAll();
        treeView.getIcon = function(data) {
          if (data instanceof ht.Node) {
            return data._image ? data._image : imgNode;
          } else if (data instanceof ht.Edge) {
            return data._image ? data._image : imgLink;
          } else {
            return imgNode;
          }
        }

        // 事件处理
        eventHubs.getEventHub().$on('collapsedChange', (collapsed) => { //Hub接收事件
          mainSplitView.className = collapsed ? 'graphyClass2' : 'graphyClass';
        });

        eventHubs.getEventHub().$emit("topoTreeView", treeView);

      } else {
        const graphV = graphView.getView();
        $('#topoGraph').append(graphV);

        // 事件处理
        eventHubs.getEventHub().$on('collapsedChange', (collapsed) => { //Hub接收事件
          graphV.className = collapsed ? 'graphyClass2' : 'graphyClass';
        });
      }

      if (this.hasOverView) {
        const overView = graphObj.overView;
        const overV = overView.getView();
        overV.className = collapsed ? "overview2 animation" : "overview animation";
        $('#topoGraph').append(overV);

        // 事件处理
        eventHubs.getEventHub().$on('collapsedChange', (collapsed) => { //Hub接收事件
          overV.className = collapsed ? "overview2 animation" : "overview animation";
        });
      }
    }
  }
}
</script>
