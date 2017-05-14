import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import loginAPI from './login';
const mock = new MockAdapter(axios);

// 登录相关
mock.onPost('/login/login').reply(loginAPI.login);
mock.onPost('/login/logout').reply(loginAPI.logout);
mock.onGet('/user/info').reply(loginAPI.getInfo);

export default mock;
