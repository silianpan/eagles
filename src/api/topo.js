import Ajax from './customajax'

export default {
  listMap() {
    var url = '/dirms/monitor/sysmap/all';
    return Ajax.save(url);
  },
  queryImageByMapid(mapid) {
    var url = '/dirms/monitor/image/getByMapid/' + mapid;
    return Ajax.save(url);
  },
  querySysImage() {
    var url = '/dirms/monitor/image/getSysIcons';
    return Ajax.save(url);
  },
  createImage(image) {
    var url = '/dirms/monitor/image/create';
    return Ajax.save(url, image, false);
  },
  updateMap(mapid, elementList) {
    var url = '/dirms/monitor/sysmap/update';
    return Ajax.save(url, elementList, false);
  },
  queryScriptByName(name) {
    var url = '/dirms/monitor/script/getByName/' + name;
    return Ajax.save(url);
  },
  executeScript(hostid, scriptid) {
    var url = '/dirms/monitor/script/excute/' + hostid + '/' + scriptid;
    return Ajax.save(url);
  },
  queryInterface() {
    var url = '/dirms/monitor/item/getInterface';
    return Ajax.save(url);
  },
  queryExchangerHost() {
    var url = '/dirms/monitor/application/getExchanger'
    return Ajax.save(url);
  },
  queryMapLinksByNodeid(mapid, nodeid) {
    var url = '/dirms/monitor/sysmap/getLink/' + mapid + '/' + nodeid;
    return Ajax.save(url);
  }
}
