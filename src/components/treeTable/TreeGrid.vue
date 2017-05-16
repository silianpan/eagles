<template>
  <el-table :data="data" border style="width: 100%" :row-style="showTr" @row-dblclick="rowdbClick">
    <el-table-column v-for="(column, index) in columns" :key="column.dataIndex" :label="column.text" :width="getColumnWidth(column.dataIndex)">
      <template scope="scope">
          <span v-if="spaceIconShow(index)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"></span>
            <button class="button is-outlined is-primary is-small" style="border:none;background-color: transparent;" v-if="toggleIconShow(index,scope.row)" @click="toggle(scope.$index,scope.row)">
              <i v-if="!scope.row._expanded" class="el-icon-caret-right" style="color:#99A9BF" aria-hidden="true"></i>
              <i v-if="scope.row._expanded" class="el-icon-caret-bottom" style="color:#99A9BF" aria-hidden="true"></i>
            </button>
            <i v-if="scope.row['type'] == 1 && column.dataIndex == 'name'" :class="getIconName(scope.row[column.dataIndex])" aria-hidden="true"></i>
            <i v-else-if="column.dataIndex == 'name'" :class="getIconName(scope.row['type'])"></i>
          <span v-else-if="index===0" class="ms-tree-space"></span>
          {{column.dataIndex == 'type' ? getResTypeName(scope.row[column.dataIndex]) : scope.row[column.dataIndex]}}
      </template>
    </el-table-column>
    <el-table-column label="操作" v-if="treeType === 'normal'" width="270">
        <template scope="scope">
          <el-button v-if="getIsOper(2,scope.row['type'])" size="small" type="default" @click="addDevice()">添加组</el-button>
          <el-button v-if="getIsOper(1,scope.row['type'])" size="small" type="default" @click="addDevice()">添加设备</el-button>
          <!-- <button v-if="getIsOper(1,scope.row['type'])" type="button" class="el-button el-button--default el-button--small">
            <router-link :to="{ path: requestUrl + 'edit', query: {id: scope.row.Oid} }" tag="span">添加设备</router-link>
          </button> -->
          <button v-if="getIsOper(5,scope.row['type'])" type="button" class="el-button el-button--default el-button--small">
            <router-link :to="{ path: requestUrl + 'edit', query: {id: scope.row.Oid} }" tag="span">添加图形</router-link>
          </button>
          <button v-if="getIsOper(6,scope.row['type'])" type="button" class="el-button el-button--default el-button--small">
            <router-link :to="{ path: requestUrl + 'edit', query: {id: scope.row.Oid} }" tag="span">添加监控项</router-link>
          </button>
          <button v-if="getIsOper(3,scope.row['type'])" type="button" class="el-button el-button--success el-button--small">
            <router-link :to="{ path: requestUrl + 'edit', query: {id: scope.row.Oid} }" tag="span">编辑</router-link>
          </button>
          <el-button v-if="getIsOper(4,scope.row['type'])" size="small" type="danger" @click="handleDelete()">删除</el-button>
        </template>
    </el-table-column>
  </el-table>
</template>

<script>
import Utils from './utils/index'
import com from 'common/resTypeEnum'
export default {
  name: 'tree-grid',
  props: {
    // 该属性是确认父组件传过来的数据是否已经是树形结构了，如果是，则不需要进行树形格式化
    treeStructure: {
      type: Boolean,
      default: function() {
        return false
      }
    },
    // 这是相应的字段展示
    columns: {
      type: Array,
      default: function() {
        return []
      }
    },
    // 这是数据源
    dataSource: {
      type: Array,
      default: function() {
        return []
      }
    },
    // 这个作用是根据自己需求来的，比如在操作中涉及相关按钮编辑，删除等，需要向服务端发送请求，则可以把url传过来
    requestUrl: {
      type: String,
      default: function() {
        return ''
      }
    },
    // 这个是是否展示操作列
    treeType: {
      type: String,
      default: function() {
        return 'normal'
      }
    },
    // 是否默认展开所有树
    defaultExpandAll: {
      type: Boolean,
      default: function() {
        return false
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    // 格式化数据源
    data: function() {
      let me = this
      if (me.treeStructure) {
        let data = Utils.MSDataTransfer.treeToArray(me.dataSource, null, null, me.defaultExpandAll)
        return data
      }
      return me.dataSource
    }

  },
  methods: {
    getColumnWidth(columnIndex) {
      switch (columnIndex) {
        case 'name':
          return 412;
        case 'host':
          return 181;
        case 'type':
          return 101;
        case 'lastdata':
          return 130;
        default:
          return 120;
      }
    },
    // 显示行
    showTr: function(row, index) {
      let show = (row._parent ? (row._parent._expanded && row._parent._show) : true)
      row._show = show
      return show ? '' : 'display:none;'
    },
    // 展开下级
    toggle: function(trIndex, row) {
      let me = this
      let record = me.data[trIndex]
      record._expanded = !record._expanded

      this.$emit('transferRow', {index: trIndex, row: row});
    },
    // 显示层级关系的空格和图标
    spaceIconShow(index) {
      let me = this
      if (me.treeStructure && index === 0) {
        return true
      }
      return false
    },
    // 点击展开和关闭的时候，图标的切换
    toggleIconShow(index, record) {
      let me = this
      // if (me.treeStructure && index === 0 && record.children && record.children.length > 0) {
      if (me.treeStructure && index === 0 && record.children && $.isArray(record.children)) {
        return true
      }
      return false
    },
    handleDelete() {
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    getResTypeName(restype) {
      return com.getNameByResType(restype);
    },
    getIconName(restypeName) {
      return com.getIconByResTypeName(restypeName);
    },
    getIsOper(operType, resType) {
      return com.getIsOper(operType, resType);
    },
    addDevice() {
      this.$emit('setViewer',"addDevice");
      $(".rightLayout").show().animate({left:"20%"}).addClass("showBlock");
      $(".layoutTop").show().animate({left:"20%"});//右侧顶部固定
      $("body").addClass("hideScoll");//隐藏主滚动条，禁止出现双滚
    },
    rowdbClick(row, event, column){
      this.$emit('rowdbClick',row, event, column);
    }
  }
}
</script>
<style scoped>
.ms-tree-space {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: 'Glyphicons Halflings';
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  width: 18px;
  height: 14px;
}

.ms-tree-space::before {
  content: ""
}

table td {
  line-height: 26px;
}
</style>
