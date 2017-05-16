<template>
  <span>
    <div class="btn-group" v-for="group in toolbarBtns">
      <button v-for="btn in group" :id="btn.domId" class="btn icon_btn icon_min"><i :class="btn.icon"></i></button>
    </div>
  </span>
</template>
<script>
import eventHubs from '../../common/eventHubs'
export default {
  data() {
    return {
      graphView: null
    }
  },
  props: {
    toolbarBtns: {
      style: Array,
      default: function() {
        return []
      }
    }
  },
  mounted() {
    this.addEventListener();
  },
  methods: {
    addEventListener() {
      const self = this;
      // 事件处理
      eventHubs.getEventHub().$on('topoGraphView', (topoGraphView) => { //Hub接收事件
        self.graphView = topoGraphView;
      });

      $('#topo-toolbar').on('click', '#topo-select', function() {
        self.graphView.setEditable(false);
      });

      $('#topo-toolbar').on('click', '#topo-zoomin', function() {
        self.graphView.zoomOut(true);
      });

      $('#topo-toolbar').on('click', '#topo-zoomout', function() {
        self.graphView.zoomIn(true);
      });

      $('#topo-toolbar').on('click', '#topo-fitcontent', function() {
        self.graphView.fitContent(true);
      });

      $('#topo-toolbar').on('click', '#topo-exportimg', function() {
        const doc = window.open().document;
        doc.open();
        doc.write("<img src='" + self.graphView.toDataURL() + "'/>");
        doc.close();
        doc.body.style.margin = '0';
        doc.title = 'Export image at ' + new Date();
      });
    }
  }
}
</script>
