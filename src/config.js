export const CookieDomain = (process.env.NODE_ENV === 'production') ? '.silianpan.eagles' :''

export const API_BASEURL = (process.env.NODE_ENV === 'production')? "/eagles-service":"/ajax";
export const API_TIMEOUT = 6000;

export const STATIC_IMAGEPATH = (process.env.NODE_ENV === 'production') ? "./static/img/": "/static/img/";
