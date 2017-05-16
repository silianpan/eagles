import Ajax from './customajax' //自封装的ajxa

export default {
  login(params) {
    var url = '/login';
    return Ajax.save(url, params);
  }
}
