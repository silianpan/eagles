<template>
  <span>
    <el-select v-model="value" placeholder="请选择拓扑图" size="small" style="position: absolute;">
        <el-option v-for="item in topoBaseInfo" :key="item.sysmapid" :label="item.name" :value="item.sysmapid">
        </el-option>
      </el-select>
      <div class="btn-group" style="float:right">
        <el-input v-model="input" placeholder="请输入名称" size='small' icon="search" @change="inputChangeAction"></el-input>
      </div>
  </span>
</template>
<script>
import Ajax from 'api/customajax'
import eventHubs from 'common/eventHubs'
import addTopoEle from 'common/topo/addTopoElement'
export default {
  data() {
    return {
      value: '',
      input: '',
      graphView: null,
      treeView: null,
      topoBaseInfo: [],
    }
  },
  mounted() {
    this.addEventListener();
    this.initTopoData();
  },
  props: {
    topoBaseDataUrl: {
      style: String,
      default: function() {
        return ''
      }
    },
    iconDataUrl: {
      style: String,
      default: function() {
        return ''
      }
    },
    topoDataByIdUrl: {
      style: String,
      default: function() {
        return ''
      }
    }
  },
  methods: {
    addEventListener() {
      const self = this;
      // 事件处理
      eventHubs.getEventHub().$on('topoGraphView', (topoGraphView) => { //Hub接收事件
        self.graphView = topoGraphView;
      });
      eventHubs.getEventHub().$on('topoTreeView', (topoTreeView) => {
        self.treeView = topoTreeView;
      });
    },
    inputChangeAction() {
      const self = this;
      if (self.treeView != null && self.treeView != undefined) {
        if (self.input != '') {
          self.treeView.setVisibleFunc(function(data) {
            return data._name.indexOf(self.input) >= 0 ? true : false;
          });
        } else {
          self.treeView.setVisibleFunc(function(data) {
            return true;
          });
        }
      }
    },
    initTopoData() {
      const self = this;
      Ajax.query(this.topoBaseDataUrl).then(response => {
        self.topoBaseInfo = response.data;
      });
    },
    createTopoGraph(topoId) {
      // 情况dataModel
      const dataModel = this.graphView.getDataModel();
      dataModel.clear();
      const self = this;
      // 这里必须同步请求
      Ajax.syncQuery(this.topoDataByIdUrl + topoId, {}, function(data) {
        self.currentMapData = data[0];
        addTopoEle.setTopoStyle(data[0], self.graphView, self.$store.state.topo.topoIconData);
      });
    },
    layout() {
      const self = this;
      // 布局设置
      this.autoLayout = new ht.layout.AutoLayout(this.graphView);
      // this.autoLayout.setAnimate(animate);
      this.autoLayout.layout('symmetric', function() {
        self.graphView.fitContent(true);
      });
    },
    initTopoIconData(topoId) {
      const self = this;
      let url = this.iconDataUrl + topoId;
      // if (topoId.indexOf('local') == 0) {
      //   url = this.userIconDataUrl;
      // }
      Ajax.syncQuery(url, {}, function(data) {
        self.$store.dispatch('setTopoIconData', data);
      });
    },
  },
  watch: {
    value: function(newValue, oldValue) {
      if (newValue != oldValue) {
        this.initTopoIconData(newValue);
        this.createTopoGraph(newValue);
        this.layout();
      }
    }
  }
}
</script>
