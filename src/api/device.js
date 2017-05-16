import Ajax from './customajax'

export default {
  listHostgroup() {
    var url = '/dirms/monitor/group/list';
    return Ajax.query(url);
  },
  queryHostByGroupid(groupid) {
    var url = '/dirms/monitor/host/get/' + groupid;
    return Ajax.query(url);
  },
  queryGraphByHostid(hostid) {
    var url = '/dirms/monitor/graph/getByHostid/' + hostid;
    return Ajax.save(url);
  },
  queryItemByGraphid(graphid) {
    var url = '/dirms/monitor/item/getByGraphId/' + graphid;
    return Ajax.save(url);
  },
  queryAllHostgroup() {
    var url = '/dirms/monitor/group/all';
    return Ajax.save(url);
  },
  createHost(host) {
    var url = '/dirms/monitor/host/create';
    return Ajax.save(url, host);
  },
  queryTrendByItemid(itemid, timefrom, timeto) {
    var url = '/dirms/monitor/trend/get/' + itemid + '/' + timefrom + '/' + timeto;
    return Ajax.save(url);
  },
  queryByItemid(itemid) {
    var url = '/dirms/monitor/item/getItem/' + itemid;
    return Ajax.save(url);
  }
}
