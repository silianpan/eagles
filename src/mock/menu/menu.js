import Mock from 'mockjs';
import menuJson from './menu.json'

export default {
  getMenuList: () => new Promise(resolve => {
    setTimeout(() => {
      resolve([200, menuJson]);
    }, 100);
  })
}
