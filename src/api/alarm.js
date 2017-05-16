import Ajax from './customajax'

export default {
  getProblem() {
    var url = '/dirms/monitor/problem/get';
    return Ajax.save(url);
  },
  getProblemPageQuery(pageNo, pageSize) {
    var url = '/dirms/monitor/problem/pagequery';
    return Ajax.pageQuery(url, {}, pageNo, pageSize);
  }
}
