import Mock from 'mockjs';
import exchangerInterfaceData from './exchangerInterfaceData.json'
import exchangerHostData from './exchangerHostData.json'
import sysicons from './sysicons.json'
import usericons from './usericons.json'
import sysmaps from './sysmaps.json'
import sysmap1 from './sysmap1.json'
import sysmap2 from './sysmap2.json'

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
  queryImageByMapid1: () => new Promise(resolve => {
    setTimeout(() => {
      resolve([200, sysmap1icon]);
    }, 100);
  }),
  queryImageByMapid2: () => new Promise(resolve => {
    setTimeout(() => {
      resolve([200, sysmap2icon]);
    }, 100);
  }),
  querySysmapByid1: () => new Promise(resolve => {
    setTimeout(() => {
      resolve([200, sysmap1]);
    }, 100);
  }),
  querySysmapByid2: () => new Promise(resolve => {
    setTimeout(() => {
      resolve([200, sysmap2]);
    }, 100);
  }),

}
