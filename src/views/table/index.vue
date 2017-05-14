<template>

    <v-table :options="mytable" @cellDoubleClickedHandle ="cellDoubleClickedHandle" @refreshActionHandle="pageQuery" @deleteHandle = "deleteHandle" @saveHandle ="saveHandle"></v-table>

</template>

<script>
  import vTable from 'components/Table.vue'
  export default {
    components:{
        vTable
    },
    data:function (){

      return {
        mytable:{
          data:[
            {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            },
            {
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            },
            {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            },
             {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }
          ],
          columns:[
            //如果是多选 或者 有序号 添加这个
            {
              type:"index",//index
              fixed:'left',
              minWidth:'40'
            },

            //所需要展示data 中的 数据 ，prop 绑定 data 中的属性值， label为表格中column 的header 值
            {
              prop:'date',
              label:'日期',
              minWidth:'100'
            },
            {
              prop:'name',
              label:'名字',
              minWidth:'100'
            },
            {
              prop:'name',
              label:'名字',
              minWidth:'100'
            },
            {
              prop:'name',
              label:'名字',
              minWidth:'100'
            },
            {
              prop:'address',
              label:'地址',
              minWidth:'200'
            },
            //有操作动作时
            {
              label:'操作',
              fixed:'right',
              minWidth:'300',
              operates:[
                {
                    name:'保存',
                    type:'primary',
                    icon:'',
                    actionName:'saveHandle' //相应的在组件上 写好 @{{actionName}}
                },
                {
                    name:'删除',
                    type:'primary',
                    icon:'',
                    actionName:'deleteHandle'
                }
              ]
            }
         ],
          hasPagination :true,
          pageSize:4,
          pageIndex:2,
          total:20
        }
      };
    },
    methods:{
      cellDoubleClickedHandle(row,ev){
        console.log("########父组件接收到子组件的信息");
        console.log(row,ev);
      },

      saveHandle(index,row){
        console.log("######saveHandle收到子组件信息");
        console.log(index,row);
      },
      deleteHandle(index,row){
        console.log("######deleteHandle收到子组件信息");
        console.log(index,row);
      },
      //如果有分页
      pageQuery(pageIndex,pageSize){
        console.log("###########pageQuery收到子组件信息");
        console.log(pageIndex,pageSize);
      }
    },
    mounted:function (){

    }
  }
</script>


<style>

</style>
