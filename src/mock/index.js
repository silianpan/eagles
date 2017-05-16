import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import loginAPI from './login';
import menuAPI from './menu/menu'
import tableAPI from './components/table'
import topoAPI from './topo/index'
const mock = new MockAdapter(axios);

// 登录相关
mock.onPost('/login').reply(loginAPI.login);
mock.onPost('/login/logout').reply(loginAPI.logout);
mock.onGet('/user/info').reply(loginAPI.getInfo);

// 菜单
mock.onGet('/dirms/security/authority/findNavAuthoritesByUser').reply(menuAPI.getMenuList);

// 表格
mock.onGet('/dirms/monitor/problem/pagequery').reply(tableAPI.getProblemPageQuery);

// 拓扑图
mock.onGet('/dirms/monitor/image/getSysIcons').reply(topoAPI.querySysImage);
mock.onGet('/dirms/monitor/icons/getUserIcons').reply(topoAPI.getUserIcons);
mock.onGet('/dirms/monitor/item/getInterface').reply(topoAPI.queryInterface);
mock.onGet('/dirms/monitor/application/getExchanger').reply(topoAPI.queryExchangerHost);
mock.onGet('/dirms/monitor/sysmap/all').reply(topoAPI.getSysMaps);
mock.onGet('/dirms/monitor/image/getByMapid/').reply(topoAPI.queryImageByMapid);

export default mock;
