import Ajax from '../customajax'
export default {
  // 所有的本地图标数据
  getAllIcons() {
    var url = '/dirms/monitor/icons/all';
    return Ajax.query(url);
  },
  delIconDataById(params){
    var url ="/dirms/monitor/icons/delete/"+params.id;
    return Ajax.delete(url,params);
  },
  //分页查询图标数据
  pageQueryIconsData(params={},pageIndex=1,pageSize=10){
    var url ="/dirms/monitor/icons/pagequery";
    return Ajax.pageQuery(url,params,pageIndex,pageSize);
  },
  //获取到 zabbix 中自带的系统图标数据
  getAllSysIcons(){
    var url ="/dirms/monitor/icons/all/sys/icons";
    return Ajax.query(url);
  },
  getUserAndSysIcons() {
    var url = "/dirms/monitor/icons/getUserAndSysIcons";
    return Ajax.query(url);
  },
  getUserIcons() {
    var url = "/dirms/monitor/icons/getUserIcons";
    return Ajax.query(url);
  }
}
