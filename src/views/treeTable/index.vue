<template>
<div class="viewBlock">
  <h2 class="subTitles">树表</h2>
  <!-- <div class="aboutBlockText clearFix"> </div> -->
  <div class="bd">
    <!-- <el-button size="small" type="success" @click="addDevice()">添加设备测试</el-button> -->
    <!-- <addDevice :devId='dataId' :devType="dataType" :devName="dataName"></addDevice> -->
    <tree-grid :columns="columns" :tree-structure="true" :data-source="dataSource" @transferRow="queryData" @rowdbClick="rowdbClick" @setViewer="setViewer"></tree-grid>
  </div>
</div>
</template>

<script>
import {
  TreeGrid
} from 'components/treeTable'
// import addDevice from './addDevice.vue'
import api from 'api/device'
import {
  RES_HOSTGROUP,
  RES_HOST,
  RES_GRAPHY
} from 'common/resTypeEnum'
export default {
  name: 'deviceMgm',
  data() {
    return {
      columns: [{
          text: '可见名称',
          dataIndex: 'name'
        },
        {
          text: '主机名',
          dataIndex: 'host'
        },
        {
          text: '类型',
          dataIndex: 'type'
        },
        {
          text: '最新数据',
          dataIndex: 'lastdata'
        }
      ],
      dataSource: [],
      dataId: '',
      dataType: 2,
      dataName:''
    }
  },
  components: {
    TreeGrid
  },
  created() {
    this.listHostgroup();
  },
  methods: {
    listHostgroup() {
      var self = this;
      api.listHostgroup().then((response) => {
        console.log('response', response);
        self.dataSource = response.data;
      });
    },
    queryData(rowData) {
      var self = this;
      // 判断请求数据类型，调用api
      var dataType = rowData.row.type;
      this.isEdit = false;
      this.dataId = rowData.id;
      switch (dataType) {
        case RES_HOSTGROUP:
          api.queryHostByGroupid(rowData.row.id).then((response) => {
            rowData.row.children = response.data;
          });
          break;
        case RES_HOST:
          api.queryGraphByHostid(rowData.row.id).then((response) => {
            rowData.row.children = response.data;
          });
          break;
        case RES_GRAPHY:
          api.queryItemByGraphid(rowData.row.id).then((response) => {
            rowData.row.children = response.data;
          });
          break;
        default:
          break;
      }
    },
    rowdbClick(rowData) {
      var self = this;
      // 判断请求数据类型，调用api
      var dataType = rowData.type;
      var dataName = rowData.name;

      this.dataType = parseInt(dataType);
      this.dataName = ""+dataName+"";
      this.dataId = ""+rowData.id+"";
      $(".rightLayout").show().animate({
        left: "20%"
      }).addClass("showBlock");
      $(".layoutTop").show().animate({
        left: "20%"
      }); //右侧顶部固定
      $("body").addClass("hideScoll"); //隐藏主滚动条，禁止出现双滚
    },
    setViewer(controlType) {
      if (controlType == 'addDevice') {
        this.isEdit = true;
        this.dataId = "";
        this.dataType = -1;
      }
    }
  }
}
</script>

<style scoped>

</style>
