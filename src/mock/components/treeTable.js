import Mock from 'mockjs';
import groupJson from './group.json'
import hostJson from './host.json'

export default {
  listHostgroup: () => new Promise(resolve => {
    console.log("fjdksfjdksjfkdsjkfdj")
    setTimeout(() => {
      resolve([200, groupJson]);
    }, 100);
  }),
  queryHostByGroupid: (groupid) => new Promise(resolve => {
    setTimeout(() => {
      resolve([200, hostJson]);
    }, 100);
  })
}
