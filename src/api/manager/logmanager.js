import Ajax from '../customajax'
export default {
  // zabbix日志管理
  getAllZabbixAuditLog() {
    var url = '/dirms/monitor/auditlog/all';
    return Ajax.query(url);
  },

  pageQueryAuditlogs(params,pageIndex,pageSize){
    var url  = "/dirms/monitor/auditlog/pagequery";
    return Ajax.pageQuery(url,params,pageIndex,pageSize);
  },
  //分页查询图标数据
  pageQueryZabbixHistory(params={},pageIndex=1,pageSize=10){
    var url ="/dirms/monitor/history/log";
    return Ajax.pageQuery(url,params,pageIndex,pageSize);
  },



}
