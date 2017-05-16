<template>
  <div>
    <div class="btn-group" style="margin-bottom: 10px;">
      <el-input v-model="input" placeholder="请输入关键字" size='small' icon="search" @change="inputChangeAction"></el-input>
    </div>
    <v-table :options="alarmtable" @refreshActionHandle="getProblemPageQuery"></v-table>
  </div>
</template>

<script>
  import vTable from 'components/Table'
  import alarmApi from 'api/alarm'
  import resType from 'common/resTypeEnum'
  export default {
    components:{
        vTable
    },
    data:function (){
      return {
        alarmtable:{
          data:[

          ],
          columns:[
            //如果是多选 或者 有序号 添加这个
            {
              type:"selection",
              width:'55',
              fixed: false
            },

            //所需要展示data 中的 数据 ，prop 绑定 data 中的属性值， label为表格中column 的header 值
            {
              prop:'time',
              label:'时间',
              minWidth:'120',
              sortable: true
            },
            {
              prop:'hostid',
              label:'主机编号',
              minWidth:'100'
            },
            {
              prop:'hostname',
              label:'主机名称',
              minWidth:'100'
            },
            {
              prop:'errorinfo',
              label:'问题',
              minWidth:'200'
            },
            {
              prop:'clevel',
              label:'严重性',
              minWidth:'100'
            }
         ],
         hasPagination : true,
         total: 0
       },
       input: '',
       allData: []
      };
    },
    methods:{
      setAlarmDisplayStyle(alarmData) {
        $.each(alarmData, function() {
          const alarmLevel = resType.getAlarmSeverityLevel(this.clevel);
          this.style = alarmLevel.style;
          this.clevel = alarmLevel.label;
        });
      },
      getProblemPageQuery(pageNo, pageSize) {
        const self = this;
        alarmApi.getProblemPageQuery(pageNo, pageSize).then(response => {
          self.alarmtable.data = response.data.rows;
          self.alarmtable.total = response.data.total;
          self.allData = self.alarmtable.data;
          self.setAlarmDisplayStyle(self.alarmtable.data);
        });
      },
      inputChangeAction() {
        let filterData = [];
        const self = this;
        if (this.input == '') {
          this.getProblemPageQuery(1, 10);
        } else {
          $.each(this.allData, function() {
            if (self.isAlarmItemIncludeKey(self.input, this)) {
              filterData.push(this);
            }
          });
          this.alarmtable.data = filterData;
          self.alarmtable.total = this.alarmtable.data.length;
        }
      },
      isAlarmItemIncludeKey(key, alarmItem) {
        let time = alarmItem.time;
        let hostid = alarmItem.hostid;
        let hostname = alarmItem.hostname;
        let errorinfo = alarmItem.errorinfo;
        if (time.indexOf(key) >= 0 || hostid.indexOf(key) >= 0 || hostname.indexOf(key) >= 0 || errorinfo.indexOf(key) >= 0) {
          return true;
        }
        return false;
      }
    },
    mounted:function (){
      this.getProblemPageQuery(1, 10);
    }
  }
</script>
