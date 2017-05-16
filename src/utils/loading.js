import { Loading } from 'element-ui';

export default {
  loading(target=document.body, time=1000, text='搜集情报中') {
    let loadingInstance = Loading.service({body:true, text: text, target: target});
    setTimeout(() => {
      loadingInstance.close();
    }, time)
  }
}
