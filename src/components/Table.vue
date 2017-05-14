<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="24">
        <div >
          <el-table
              v-loading.body.lock="loading"
              :element-loading-text="loadingText"
              :data="data"
              :border ="border==null?false:border"
              :max-height="maxHight ==null ?'':maxHight"
              :stripe="stripe ==null ?false:stripe"
              :show-header = "showheader==null ?true :showheader"
              :highlight-current-row = "highlightCurrentRow ==null?true:highlightCurrentRow"
              :tablestyle="tablestyle==null?'width: 100%':tablestyle"
              :empty-text = "emptyText==null?'暂无数据':emptyText"
              @row-dblclick = "rowDBclick"
              @row-click = "rowClick"
              @select-all="selectAllHandle"
              @select = "selectHandle"
              :row-class-name="getRowStyle">
              <template  v-for="(column,index) in columns">
                <el-table-column :key="index" v-if="column.type ==null && column.operates ==null"
                  :resizable ="column.resizable ==null ? true :column.resizable"
                  :prop="column.prop"
                  :label="column.label"
                  :min-width="column.minWidth">
                  <template scope="scope" v-if="column.formatter!=null &&typeof(column.formatter) == 'function' ">
                      {{formatter(scope.row,scope.column,column.formatter)}}
                  </template>
                </el-table-column>
                <el-table-column :key="index" v-else-if="column.type!=null && column.operates ==null"
                  :resizable ="column.resizable ==null ?true :column.resizable"
                  :type ="column.type"
                  :fixed = "column.fixed==null?'':column.fixed"
                  :min-width="column.minWidth">
                </el-table-column>
                <el-table-column :key="index" v-else="column.type==null && column.operates !=null"
                  :resizable ="column.resizable ==null ?true :column.resizable"
                  :fixed = "column.fixed==null?'' :column.fixed"
                  :label="column.label"
                  :min-width="column.minWidth">
                  <template scope="scope">
                    <el-button-group>
                      <el-button :key ="opIndex" v-for="(op,opIndex) in column.operates"  @click="handleTableOperateClick(op.actionName,scope.$index,scope.row)" :type="op.type ==null ?'primary':op.type" :icon="op.icon" size="small">{{op.name}}</el-button>
                    </el-button-group>
                    <!-- <el-button :key ="opIndex" v-for="(op,opIndex) in column.operates"  @click="handleTableOperateClick(op.actionName,scope.$index,scope.row)" :type="op.type ==null ?'text':op.type" :icon="op.icon" size="small">{{op.name}}</el-button> -->
                  </template>
                </el-table-column>
              </template>
              <!-- <el-table-column v-for="(column) in columns"
                @resizable ="{column.resizable}"
                :prop="{column.prop}"
                :label="{column.name}"
                :min-width="{column.minWidth}">
              </el-table-column> -->
          </el-table>
        </div>
      </el-col>
    </el-row>
    <el-row v-if="hasPagination" type="flex" justify="end" >
        <el-col :span="12">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="options.currentPage ==null?1:options.currentPage"
            :page-sizes="pageSizes"
            :page-size="options.pageSize==null?0:options.pageSize"
            :layout="layout"
            :total="options.total==null?0:options.total">
          </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>


<script>
  const ClickAction = {
    cellDoubleClickedHandle:'cellDoubleClickedHandle',
    cellClickedHandle:'cellClickedHandle',
    refreshActionHandle:"refreshActionHandle",
    defaultAction:'defaultAction'
  };
  export default {
    props: [
      "options",
      "border",//是否带有纵向边框
      "stripe",//是否为斑马纹 table
      "maxHight",
      "fit",//列的宽度是否自撑开
      "showheader",//是否显示表头
      "highlightCurrentRow",//是否要高亮当前行
      "emptyText",
      "tablestyle",

    ],
    data:function (){

      return {
        loading:true,
        loadingText:'搜集情报中',
        // border:false,  //是否带有纵向边框
        // maxHight:"500px",
        // stripe:false ,//是否为斑马纹 table
        // fit:true ,//列的宽度是否自撑开
        // showheader:true ,//是否显示表头
        // highlightCurrentRow:true ,//是否要高亮当前行
        // emptyText:'暂无数据',
        // style :'width: 100%',
        currentSelectRow :'',//当前 所选行
        // hasPagination:false,
        selectRows:[], //多选模式下所有所选的行

        //pagination
        // pageSize :10,
        // pageIndex:1,
        // total:0,
        layout:"total, sizes, prev, pager, next, jumper",//布局
        pageSizes:[10,20]
      };

    },
    methods:{
      getRowStyle(row, index) {
        return row.style;
      },
      //事件
      formatter(row ,column, formatterFunc){
        if (typeof (formatterFunc) == 'function' ){
           return formatterFunc(row,column);
        }
        return row[column.property];
      },
      rowDBclick(row,ev){
        this.$emit(ClickAction.cellDoubleClickedHandle,row,ev);
      },

      rowClick(row, ev, column){
        this.$emit(ClickAction.cellClickedHandle,row,ev);
      },

      selectAllHandle(selection){
        this.selectRows = selection;
        if (selection.length > 0 ){
          //获取到当前所选中行的最后一行数据
          this.currentSelectRow = selection[selection.length -1];
        }else{
          this.currentSelectRow ={};
        }


      },
      selectHandle (selection,row){
        this.selectRows = selection;
        if (selection.includes(row)){
          this.currentSelectRow = row ;
        }else{
          if (selection.length > 0 ){
            //获取到当前所选中行的最后一行数据
            this.currentSelectRow = selection[selection.length -1];
          }else{
            this.currentSelectRow ={};
          }
        }

      },
      // selectionChangeHandle(selection){
      //   console.log("#######selectionChange");
      //   console.log(selection);
      //   this.selectRows = selection;
      // },

      //pageSizeChnage
      handleSizeChange (val){
        this.$emit(ClickAction.refreshActionHandle,this.currentPage,val); //上交个 父组件处理
      },
      handleCurrentChange(val){
        this.$emit(ClickAction.refreshActionHandle,val,this.pageSize); //上交个 父组件处理
      },
      handleTableOperateClick(actionName ,index , row){
        if (actionName == null){
          this.$emit(ClickAction.defaultAction,index,row);
        }else{
          this.$emit(actionName,index,row);
        }

      }
    },

    computed:{
        hasPagination :function (){
          if (this.options!=null && this.options.hasPagination!=null){
            return this.options.hasPagination;
          }
          return false;
        },

        // pageSize :function (){
        //
        //   if (this.options!=null && this.options.pageSize!=null ){
        //
        //     return this.options.pageSize;
        //   }
        //   return 10;
        // },
        //
        // currentPage :function (){
        //   if (this.options!=null && this.options.pageIndex!=null ){
        //     return this.options.pageIndex;
        //   }
        //   return 0;
        // },
        // total:function (){
        //   if (this.options!=null && this.options.total!=null ){
        //     return this.options.total;
        //   }
        //   return 0;
        // },
        // pagination :function (){
        //   console.log(this.hasPagination);
        //
        //   if (this.hasPagination){
        //     return {
        //       pageSize:this.pageSize ,
        //       pageSizes:this.pageSizes ,
        //       currentPage:this.pageIndex,
        //       total:this.total
        //     }
        //   }
        //   return {} ;
        // },
        //  data:[],//显示的数据
        data:function (){
          if (this.options!=null && this.options.data!=null && this.options.data instanceof Array){
            // this.loading = false ;
            setTimeout(() => {
              this.loading = false;
            }, 1000);
            return this.options.data;
          }
          return [];
        },
        //table 的columns
        columns:function (){
          if (this.options!=null && this.options.columns!=null && this.options.columns instanceof Array){
            return this.options.columns;
          }
          return [];
        }

        //是否带有纵向边框
        // border:function (){
        //   if (this.options!=null && this.options.border!=null && this.options.border instanceof Boolean){
        //     return this.options.border;
        //   }
        //   return false ,
        // },
        // stripe:function(){
        //   if (this.options!=null && this.options.stripe!=null && this.options.stripe instanceof Boolean){
        //     return this.options.stripe;
        //   }
        //   return false ,
        // }
    },
    watch:{
    }

  }
</script>

<style scoped>
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .el-row {
    margin-bottom: 20px;

  }
  .el-row :last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }

  .el-col .el-pagination{
    float: right;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }

</style>
