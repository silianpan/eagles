import Ajax from '../customajax'

export default {
  getGraphConfig(id) {
    var url = '/dirms/dev/graphs/getByNo/' + id;
    return Ajax.query(url);
  },
  viewData(key,params) {
    if(!params){
      params={};
    }
    return Ajax.call({
      url: '/dirms/dev/dataSource/viewData?key='+key,
      method: "post",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify(params)
    });
  },
  listDs() {
    var url = '/dirms/dev/dataSource/all';
    return Ajax.query(url);
  },

  queryDataByClassify(params){
    var url = '/dirms/dev/dataSource/find/classify/'+params.classify;

    return Ajax.query(url,params);
  },
  testDs(formData) {
    return Ajax.call({
      method: 'post',
      data: JSON.stringify(formData),
      contentType: "application/json; charset=UTF-8",
      url: '/dirms/dev/dataSource/connect'
    });
  },
  deleteDs(id) {
    var url = '/dirms/dev/dataSource/' + id;
    return Ajax.delete(url);
  },
  saveDs(formData) {
    return Ajax.call({
      url: '/dirms/dev/dataSource/save',
      method: "post",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify(formData)
    });
  },
  listGraphs(){
    var url = '/dirms/dev/graphs/all';
    return Ajax.query(url);
  },
  saveGraphs(formData){
    return Ajax.call({
      url: '/dirms/dev/graphs/save',
      method: "post",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify(formData)
    });
  },
  deleteGraphs(id){
    var url = '/dirms/dev/graphs/' + id;
    return Ajax.delete(url);
  }
}
