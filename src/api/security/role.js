import Ajax from '../customajax' //自封装的ajxa

export default {

  pageQueryRoleData(params={},pageIndex=1,pageSize=10){
		var url = "/dirms/security/role/page";
		return Ajax.pageQuery(url, params,pageIndex,pageSize);
	},

  saveRoleData(params){
    var url = "/dirms/security/role/";
    return Ajax.save(url,params);
  },

  delRoleData(params){
    var url = "/dirms/security/role/"+params.id;
    return Ajax.delete(url,params);
  },
  //模糊查询
  findRoleDataByLike(){

  },

  //根据角色查找菜单权限
  findAuthoritiesByRole(params){
     var url = "/dirms/security/roleAndAuthority/data/"+params.id ;

    return Ajax.query(url,params);
  },


  //找到所有的功能菜单
  findAllAuthorities(){
    var url ="/dirms/security/authority/find";
    return Ajax.query(url);
  },

  //赋予菜单的权限
  signAuthorityToRole(params){
    var url ="/dirms/security/roleAndAuthority/";

    return Ajax.save(url,params);
  },

  //取消该权限的分配
  delRoleAuthority(params){
    var url = "/dirms/security/roleAndAuthority/" +params.id ;
    return Ajax.delete(url,params);
  },


  pageQueryAvailableUserDataByRole(params={},pageIndex=1,pageSize=10){

    var url = "/dirms/security/user/data/available/"+params.id;
    return Ajax.pageQuery(url, params,pageIndex,pageSize);
  },

  //该角色所拥有的用户
  pageQueryExistUserDataByRole(params={},pageIndex=1,pageSize=10){
    var url = "/dirms/security/user/data/exist/"+params.id;
    return Ajax.pageQuery(url, params,pageIndex,pageSize);
  },

  // 分配用户给role
  signUserToRole (params){
    var url ="/dirms/security/userAndRole/" ;
    // userId ,roleId
    return Ajax.save(url,params);
  },

  delRoleAndUserRelationship(params){
    var url ="/dirms/security/userAndRole/"+params.id;
    return Ajax.delete(url ,params);
  }

}
