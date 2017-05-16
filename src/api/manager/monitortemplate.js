import Ajax from '../customajax'
export default {
  //获取到所有的模板信息

  getAllTemplates() {
    var url = '/dirms/monitor/template/all';
    return Ajax.query(url);
  },


  //根据组id查询模板
  getTemplateByGroupId(params){
    var url ="/dirms/monitor/template/queryByGroupId/"+params.groupId;
    return Ajax.query(url,params);
  },

  //得到模板和 突变之间的关系
  getReTemplatesAndIcons(){
    var url ="/dirms/monitor/templateAndIcons/all";

    return Ajax.query(url);
  },

  // 保存 模板和图标之间的关系
  saveReTemplateAndIcons(params){
    var url = "/dirms/monitor/templateAndIcons/save";

    return Ajax.save(url ,params);
  },

  // 删除图标和模板之间的关系
  delReTemplateAndIcons (params){
    var url = "/dirms/monitor/templateAndIcons/"+params.id;
    return Ajax.delete(url ,params);

  },

  //查询到所有的群组 
  queryHostGroups(){
    var url = "/dirms/monitor/group/all";
    return Ajax.query(url);

  },
  //查询到所有有模板的 群组
  queryTemplateGroups(){
    var url = "/dirms/monitor/group/all/template/group";
    return Ajax.query(url);
  }


}
