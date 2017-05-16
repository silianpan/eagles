import Mock from 'mockjs';
import exchangerInterfaceData from './exchangerInterfaceData.json'
import exchangerHostData from './exchangerHostData.json'
import sysicons from './sysicons.json'
import usericons from './usericons.json'
import sysmaps from './sysmaps.json'

export default {
  queryInterface: () => new Promise(resolve => {
    setTimeout(() => {
      resolve([200, exchangerInterfaceData]);
    }, 100);
  }),
  queryExchangerHost: () => new Promise(resolve => {
    setTimeout(() => {
      resolve([200, exchangerHostData]);
    }, 100);
  }),
  querySysImage: () => new Promise(resolve => {
    setTimeout(() => {
      resolve([200, sysicons]);
    }, 100);
  }),
  getUserIcons: () => new Promise(resolve => {
    setTimeout(() => {
      resolve([200, exchangerHostData]);
    }, 100);
  }),
  getSysMaps: () => new Promise(resolve => {
    setTimeout(() => {
      resolve([200, sysmaps]);
    }, 100);
  }),
  queryImageByMapid: (mapid) => new Promise(resolve => {
    setTimeout(() => {
      if (mapid == 1) {
        resolve([200, sysmap1icon]);
      } else if (mapid == 2) {
        resolve([200, sysmap2icon]);
      } else {
        resolve([200, sysmap1icon]);
      }
    }, 100);
  }),

}
