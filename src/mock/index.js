import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import loginAPI from './login';
import menuAPI from './menu'
const mock = new MockAdapter(axios);

// 登录相关
mock.onPost('/login').reply(loginAPI.login);
mock.onPost('/login/logout').reply(loginAPI.logout);
mock.onGet('/user/info').reply(loginAPI.getInfo);

// 菜单
mock.onGet('/dirms/security/authority/findNavAuthoritesByUser').reply(menuAPI.getMenuList);

export default mock;
