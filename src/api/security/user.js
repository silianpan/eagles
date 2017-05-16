import Ajax from '../customajax' //自封装的ajxa

export default{

	pageQueryUserData(params={},pageIndex=1,pageSize=10){
		var url = "/dirms/security/user/query";
		return Ajax.pageQuery(url, params,pageIndex,pageSize);
	},

	// 新增或者修改数据
	saveUserData(userData){
		var url = "/dirms/security/user/";
		return Ajax.save(url,userData);
	},

	resetUserPwd(params){
		var url = "dirms/security/user/resetpw";

		return Ajax.save(url,params);
	},
	//根据用户id 删除 用户
	delUserData(params){
		var url = "/dirms/security/user/" +params.id;
		return Ajax.delete(url,params);
	},
	//根据用户查询已有角色
	pageQueryRolesByUser(params,pageIndex=1,pageSize=10){
		var url="/dirms/security/userAndRole/existPage"

		return Ajax.pageQuery(url ,params,pageIndex,pageSize);
	},
	//根据用户查询可分配角色
	pageQueryAvailableRolesByUser(params,pageIndex=1,pageSize=10){
		var url = "/dirms/security/userAndRole/availPage";

		return Ajax.pageQuery(url ,params,pageIndex,pageSize);

	},
	//分配用户某个角色
	signRoleToUser(params){
		var url ="/dirms/security/userAndRole/" ;
		return Ajax.save(url,params);
	},

	delRoleAndUserRelationship(params){
		var url ="/dirms/security/userAndRole/"+params.id;
		return Ajax.delete(url ,params);
	},

};
