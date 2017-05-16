import Ajax from '../customajax'
export default {
  getMenuList() {
    var url = '/dirms/security/authority/findNavAuthoritesByUser';
    return Ajax.query(url);
  },

  //保存菜单数据
  saveMenuData(params){
    var url = "/dirms/security/authority/";
    return Ajax.save(url,params,false);
  },

  //查找子菜单
  queryChildrenMenus(params){
    var url = "/dirms/security/authority/findChildren";
    return Ajax.query(url,params);
  },
  //删除菜单
  delMenuData(params){
    var url = "/dirms/security/authority/" +params.id;
    return Ajax.delete(url,params);
  },

  syncFindUniqueBy(params,callback){
    var url = "/dirms/security/authority/findUniqueBy";
    return Ajax.syncQuery(url,params,callback);
  },
  findUniqueBy(params){
    var url = "/dirms/security/authority/findUniqueBy";
    return Ajax.query(url,params);
  },
  queryAllMenus(){
    var url = "/dirms/security/authority/find/all";
    return Ajax.query(url,{});
  }



}
