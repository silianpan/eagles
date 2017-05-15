import axios from './http'
import NProgress from 'nprogress'
import {API_BASEURL,API_TIMEOUT} from '../config'
export default {
  axiosOptions: function(url, method = 'get', params = {}, tag = true) {
    params._ = Math.random();
    const self = this;
    var options = {
      url: url,
      method: method,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'credentials': 'include',
        // 'Access-Token': self.$store.state.login.token
      },
      // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
      responseType: 'json',
      baseURL: API_BASEURL,
      timeout: API_TIMEOUT,

      //将upload事件注释掉，防止跨域状态下发起option请求
      // onUploadProgress: function(progressEvent) {
      // 	// Do whatever you want with the native progress event
      // },

      // onDownloadProgress: function(progressEvent) {
      // 	// Do whatever you want with the native progress event
      // },
      withCredentials: true
    };

    // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
    // options.xsrfCookieName = '_csrf'; // default
    // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
    // options.xsrfHeaderName = 'X-CSRF-TOKEN';
    //在传递给 then/catch 前，允许修改响应数据
    // options.transformResponse = data => {
    //   if ((typeof data.exception) === 'undefined' || data.exception == null) {
    //     console.log("########transformResponse  right:");
    //   } else {
    //     console.log("########transformResponse exception :" + data.errorMsg);
    //   }
    //   return data;
    // };
    //
    if (tag){
        options.params=params;
    }
    if (method == 'post') {
      //可能这里要问为什么要params 和data 是一样的
      //解答:
      //    params :是即将与请求一起发送的 URL 参数
      //    data :`data` 是作为请求主体被发送的数据
      // 我这里不太清楚 后台接受 post 数据的形式
      // 可能是 @RequestBody 也可能是@RequestParam
      options.data = params;
    };
    return options;
  },

  /**
   * get 方法
   *@param url 用户输入的url
   *@returns axios
   */
  query: function(url, params = {}) {
    var options = this.axiosOptions(url, 'get', params);
    return axios(options);
  },

  /**
   * 分页查询
   *@param url 用户输入的url
   *@returns axios
   */
  pageQuery: function(url, params = {}, pageNo = 1, pageSize = 10) {
    //后台是以 easyui 的page rows 来接收分页信息的
    params.page = pageNo;
    params.rows = pageSize;
    var options = this.axiosOptions(url, 'get', params);
    return axios(options);


  },
  /**
   * post 方法
   *@param url 用户输入的url
   *@returns axios
   */
  save: function(url, params = {}, tag = true) {
    var options = this.axiosOptions(url, 'post', params,tag);
    return axios(options);
  },


  delete: function(url, params = {}) {
    var options = this.axiosOptions(url, 'delete', params);
    return axios(options);
  },

  // 同步请求
  syncQuery: function(url, params = {}, callback) {
    // $.get(API_BASEURL+url, callback);
    $.ajax({
      url: API_BASEURL + url,
      data: params,
      cache: false,
      async: false,
      type: "POST",
      dataType: 'json',
      ajaxStart: function() {
        NProgress.start();
      },
      ajaxStop: function() {
        NProgress.done();
      },
      success: function(result) {
        callback(result);
      }
    });
  },

  /**
   * 源生调用
   * @param  {Object} [option={}] [description]
   * @return {[type]}             [description]
   */
  call: function(option = {}) {
    option.baseURL = API_BASEURL;
    option.timeout = API_TIMEOUT;
    option.withCredentials = true;
    option.headers = {
      'X-Requested-With': 'XMLHttpRequest',
      'credentials': 'include',
      'content-type': 'application/json;charset=utf-8'
    };
    return axios(option);
  }
}

//----------------------分隔符-----------------------------//

//----------------------秘籍-----------------------------//

// axios({
//         // `url` 是用于请求的服务器 URL
//         url: '/user',
//
//         // `method` 是创建请求时使用的方法
//         method: 'get', // 默认是 get
//
//         // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
//         // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
//         baseURL: 'https://some-domain.com/api/',
//
//         // `transformRequest` 允许在向服务器发送前，修改请求数据
//         // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
//         // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
//         transformRequest: [function (data) {
//           // 对 data 进行任意转换处理
//
//           return data;
//         }],
//
//         // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
//         transformResponse: [function (data) {
//           // 对 data 进行任意转换处理
//
//           return data;
//         }],
//
//         // `headers` 是即将被发送的自定义请求头
//         headers: {'X-Requested-With': 'XMLHttpRequest'},
//
//         // `params` 是即将与请求一起发送的 URL 参数
//         // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
//         params: {
//           ID: 12345
//         },
//
//         // `paramsSerializer` 是一个负责 `params` 序列化的函数
//         // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
//         paramsSerializer: function(params) {
//           return Qs.stringify(params, {arrayFormat: 'brackets'})
//         },
//
//         // `data` 是作为请求主体被发送的数据
//         // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
//         // 在没有设置 `transformRequest` 时，必须是以下类型之一：
//         // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
//         // - 浏览器专属：FormData, File, Blob
//         // - Node 专属： Stream
//         data: {
//           firstName: 'Fred'
//         },
//
//         // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
//         // 如果请求话费了超过 `timeout` 的时间，请求将被中断
//         timeout: 1000,
//
//         // `withCredentials` 表示跨域请求时是否需要使用凭证
//         withCredentials: false, // 默认的
//
//         // `adapter` 允许自定义处理请求，以使测试更轻松
//         // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
//         adapter: function (config) {
//           /* ... */
//         },
//
//         // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
//         // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
//         auth: {
//           username: 'janedoe',
//           password: 's00pers3cret'
//         },
//
//         // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
//         responseType: 'json', // 默认的
//
//         // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
//         xsrfCookieName: 'XSRF-TOKEN', // default
//
//         // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
//         xsrfHeaderName: 'X-XSRF-TOKEN', // 默认的
//
//         // `onUploadProgress` 允许为上传处理进度事件
//         onUploadProgress: function (progressEvent) {
//           // 对原生进度事件的处理
//         },
//
//         // `onDownloadProgress` 允许为下载处理进度事件
//         onDownloadProgress: function (progressEvent) {
//           // 对原生进度事件的处理
//         },
//
//         // `maxContentLength` 定义允许的响应内容的最大尺寸
//         maxContentLength: 2000,
//
//         // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
//         validateStatus: function (status) {
//           return status >= 200 && status < 300; // 默认的
//         },
//
//         // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
//         // 如果设置为0，将不会 follow 任何重定向
//         maxRedirects: 5, // 默认的
//
//         // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
//         // `keepAlive` 默认没有启用
//         httpAgent: new http.Agent({ keepAlive: true }),
//         httpsAgent: new https.Agent({ keepAlive: true }),
//
//         // 'proxy' 定义代理服务器的主机名称和端口
//         // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
//         // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
//         proxy: {
//           host: '127.0.0.1',
//           port: 9000,
//           auth: : {
//             username: 'mikeymike',
//             password: 'rapunz3l'
//           }
//         },
//
//         // `cancelToken` 指定用于取消请求的 cancel token
//         // （查看后面的 Cancellation 这节了解更多）
//         cancelToken: new CancelToken(function (cancel) {
//         })
//
//     })

//----------------------分隔符-----------------------------//
