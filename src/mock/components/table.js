import Mock from 'mockjs';
import tableJson from './table.json'

export default {
  getProblemPageQuery: (pageNo, pageSize) => new Promise(resolve => {
    setTimeout(() => {
      resolve([200, tableJson]);
    }, 100);
  })
}
