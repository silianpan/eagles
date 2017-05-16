<template>
<div>
  <el-form :model="currentMapData">
    <el-form-item label="链接" :label-width="formLabelWidth">
      <el-select v-model="currentNodeOrLinkData.selmentid" placeholder="请选择链接" style="width:100%;margin:0 4px;" size="small" @change="linkChanged">
        <el-option v-for="nodeItem in relativeNodes" :key="nodeItem.selementid"
          :label="nodeItem.label"
          :value="nodeItem.selementid">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="标签" :label-width="formLabelWidth">
      <el-input v-model="selectLink.label" size="small"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer" style="text-align: right;">
    <el-button type="success" @click="modifyhost">应 用</el-button>
    <el-button type="danger" @click="">移 除</el-button>
  </div>
</div>
</template>

<script>
import topoApi from 'api/topo'
export default {
  props: {
    currentMapData: {
      type: Object,
      default: function() {
        return {};
      }
    },
    currentNodeOrLinkData: {
      type: Object,
      default: function() {
        return {};
      }
    },
    userAndSysIcons: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      formLabelWidth: '50px',
      nodeLinks: [],
      nodeMapData: {},
      relativeNodes: [],
      selectLink: {}
    }
  },
  mounted() {
    this.initNodeLinks();
  },
  methods: {
    initNodeLinks() {
      const self = this;
      $.each(this.currentMapData.selements, function() {
        self.nodeMapData[this.selementid] = this;
      });
      topoApi.queryMapLinksByNodeid(this.currentMapData.sysmapid, this.currentNodeOrLinkData.selementid).then(response => {
        self.nodeLinks = response.data;
        self.initNodeMapData(self.nodeLinks);
      });
    },
    initNodeMapData(nodeLinks) {
      const self = this;
      let selementidsTmp = [];
      $.each(nodeLinks, function() {
        if ($.inArray(this.selementid1, selementidsTmp) < 0) {
          self.relativeNodes.push(self.nodeMapData[this.selementid1]);
        }
        if ($.inArray(this.selementid2, selementidsTmp) < 0) {
          self.relativeNodes.push(self.nodeMapData[this.selementid2]);
        }
        selementidsTmp.push(this.selementid1);
        selementidsTmp.push(this.selementid2);
      });
    },
    modifyhost() {
      // this.$emit('transferNewHostData', this.currentMapData);
    },
    linkChanged(linkItem) {
      console.log(linkItem);
    },
    isObjBlank(obj) {
      return (obj === null) || (obj === undefined) || (obj === '');
    }
  },
}
</script>
