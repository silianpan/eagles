<template>
<div>
  <el-form :model="currentMapElementData">
    <el-form-item label="名称" :label-width="formLabelWidth">
      <el-input v-model="currentMapElementData.label" auto-complete="off" size="small"></el-input>
    </el-form-item>
    <el-form-item label="类型" :label-width="formLabelWidth">
      <!-- <el-input v-model="currentMapElementData.elementtypeName" size="small" :disabled="true"></el-input> -->
      <el-select v-model="currentMapElementData.elementtypeName" size="small" class="select">
        <el-option v-for="element in mapelementtypes" :key="element.id"
          :label="element.name"
          :value="element.id">
        </el-option>
      </el-select>

    </el-form-item>
    <el-form-item label="图标" :label-width="formLabelWidth">
      <el-form :model="currentMapElementData">
        <el-row class="row-pos">
          <el-col :span="2"><div class="grid-content bg-purple label-color">默认</el-input></div></el-col>
          <el-col :span="22">
            <el-select v-model="currentMapElementData.iconid_off" placeholder="默认" style="width:100%;margin:0 4px;" size="small">
              <el-option v-for="(iconItem, iconId) in userAndSysIcons" :key="iconId"
                :label="iconItem.name"
                :value="iconId">
                <img :src="'data:image/png;base64,'+iconItem.image"></img>
                <span style="float: right; color: #8492a6; font-size: 13px">{{iconItem.name}}</span>
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row class="row-pos">
          <el-col :span="2"><div class="grid-content bg-purple label-color">问题</el-input></div></el-col>
          <el-col :span="22">
            <el-select v-model="currentMapElementData.iconid_on" placeholder="默认" style="width:100%;margin:0 4px;" size="small">
              <el-option v-for="(iconItem, iconId) in userAndSysIcons" :key="iconId"
                :label="iconItem.name"
                :value="iconId">
                <img :src="'data:image/png;base64,'+iconItem.image"></img>
                <span style="float: right; color: #8492a6; font-size: 13px">{{iconItem.name}}</span>
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row class="row-pos">
          <el-col :span="2"><div class="grid-content bg-purple label-color">维护</el-input></div></el-col>
          <el-col :span="22">
            <el-select v-model="currentMapElementData.iconid_maintenance" placeholder="默认" style="width:100%;margin:0 4px;" size="small">
              <el-option v-for="(iconItem, iconId) in userAndSysIcons" :key="iconId"
                :label="iconItem.name"
                :value="iconId">
                <img :src="'data:image/png;base64,'+iconItem.image"></img>
                <span style="float: right; color: #8492a6; font-size: 13px">{{iconItem.name}}</span>
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row class="row-pos">
          <el-col :span="2"><div class="grid-content bg-purple label-color">停用</el-input></div></el-col>
          <el-col :span="22">
            <el-select v-model="currentMapElementData.iconid_disabled" placeholder="默认" style="width:100%;margin:0 4px;" size="small">
              <el-option v-for="(iconItem, iconId) in userAndSysIcons" :key="iconId"
                :label="iconItem.name"
                :value="iconId">
                <img :src="'data:image/png;base64,'+iconItem.image"></img>
                <span style="float: right; color: #8492a6; font-size: 13px">{{iconItem.name}}</span>
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-form>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer" style="text-align: right;">
    <el-button type="success" @click="modifyhost">应 用</el-button>
    <el-button type="danger" @click="">移 除</el-button>
  </div>
</div>
</template>

<script>
import {MAPELEMENTTYPES} from 'common/resTypeEnum'
import topoApi from 'api/topo'
import addTopoEle from 'common/topo/addTopoElement'
export default {
  props: {
    currentMapElementData: {
      style: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      formLabelWidth: '50px',
      mapelementtypes: MAPELEMENTTYPES,
      userAndSysIcons: {},
      sysIcons: {}
    }
  },
  mounted() {
    this.sysIcons = this.$store.state.topo.sysIcons;
    this.userAndSysIcons = $.extend({},this.$store.state.topo.userIcons,this.sysIcons);
  },
  methods: {
    modifyhost() {
      const self = this;
      const newHostData = this.currentMapElementData;
      if (!this.isElementChange(newHostData, this.$store.state.topo.curMapElement)) {
        this.$message({type:'info',message:'数据未发生改变!'})
        return;
      }
      let elementList = [];
      elementList.push(newHostData);
      this.createIcons(newHostData); // 创建不存在的用户图标数据

      topoApi.updateMap(newHostData.sysmapid, elementList).then(response => {
        if (response.data) {
          // 更新数据
          self.$store.dispatch('setCurMapElement', newHostData);
          self.updateEleStyle(newHostData);
          self.$message({type:'success',message:'修改成功!'});
          // this.modifyhostDialog = false;
        } else {
          self.$message({type:'error',message:'修改失败!'})
        }
      });
    },
    isElementChange(oldE, newE) {
      if (oldE.label == newE.label && oldE.iconid_off == newE.iconid_off &&
        oldE.iconid_on == newE.iconid_on && oldE.iconid_maintenance == newE.iconid_maintenance &&
        oldE.iconid_disabled == newE.iconid_disabled) {
          return false;
      }
      return true;
    },
    createIcons(currentElement) {
      if (!this.isObjBlank(currentElement)) {
        const imageoffid = this.createIcon(currentElement.iconid_off);
        if (!this.isObjBlank(imageoffid)) {
          currentElement.iconid_off = imageoffid;
        }

        const imageonid = this.createIcon(currentElement.iconid_on);
        if (!this.isObjBlank(imageonid)) {
          currentElement.iconid_on = imageonid;
        }

        const imagemainid = this.createIcon(currentElement.iconid_maintenance);
        if (!this.isObjBlank(imagemainid)) {
          currentElement.iconid_maintenance = imagemainid;
        }

        const imagedisaid = this.createIcon(currentElement.iconid_disabled);
        if (!this.isObjBlank(imagedisaid)) {
          currentElement.iconid_disabled = imagedisaid;
        }
      }
    },
    createIcon(iconid) {
      if (!this.isExistSysIcons(iconid) && iconid != '0') {
        const imageObj = this.createImage(this.userAndSysIcons[iconid]);
        if (!this.isObjBlank(imageObj)) {
          const imageid = imageObj.imageids[0];
          return imageid;
        }
      }
      return '';
    },
    createImage(image) {
      if (!this.isObjBlank(image)) {
        topoApi.createImage(image).then(response => {
          return response.data;
        });
      }
      return '';
    },
    isExistSysIcons(iconid) {
      return !this.isObjBlank(this.sysIcons[iconid]);
    },
    isObjBlank(obj) {
      return (obj === null) || (obj === undefined) || (obj === '');
    },
    updateEleStyle(element) {
      const self = this;
      eventHubs.getEventHub().$on('topoGraphView', (topoGraphView) => { //Hub接收事件
        const dataModel = topoGraphView.getDataModel();
        const data = dataModel.getDataById(element.selementid);
        if (data) {
          if (self.currentMapElementData.label != '') {
            data.setName(self.currentMapElementData.label);
          }
          if (self.currentMapElementData.iconid_off != '0') {
            data.setImage('data:image/png;base64,' + addTopoEle.getImgBase64(self.currentMapElementData.iconid_off,
              self.$store.state.topo.topoIconData, self.userAndSysIcons, true));
          }
        }
      });
    },
  },
}
</script>
<style scoped>
  .select {
    width: 100%;
  }
</style>
