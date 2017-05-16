---
title: vue2 eagles项目爬坑之路 —— 集成多方组件
date: 2017-05-13 17:43:03
tags: vue2 vue-i18n element-ui
---
<div align=center>
![header backgroud](vue2/04113_london_320x240.jpg)
</div>

[在线演示](https://silianpan.github.io/eagles/)

## 前言
> &emsp;经过两个多星期的开发与整理，继我的第一篇原创博客[《从C/C++到前端转型之路》](https://silianpan.github.io/2017/05/09/road/)后，终于推出了Eagles项目，为什么取名为Eagles呢？Eagles表示雄鹰，就像神雕侠侣中雕兄展翅战胜蟒蛇一样。本项目采用vue+axios+elementui技术，集成了vuex状态管理，vue-awesome字体图标库，vue-i18n国际化，mockjs模拟api数据提交，支持sass样式编译。开发了非常适合项目的低耦合组件，如：树表、拓扑图、表格、图表等，还附加菜单管理、角色权限管理、用户管理等通用项目模块。

&emsp;后台技术栈暂时采用mockjs模拟Ajax数据提交，后面会用spring boot+mybatis技术给大家娓娓道来。最近也在研究spring cloud与docker微服务架构实战，后面也会有相应文章给大家分享，共同进步！

方便大家交流，已开QQ群，<span style="color:rgb(228, 183, 22);">613176270</span>，欢迎大家畅所欲言，温馨提示：群里有妹子哟！

## 功能
- 登录/注销
- token验证
- 不同风格菜单栏
- 自定义换肤主题
- 国际化支持
- 表格
- 树表
- 拓扑图组件
- 图表
- 右侧弹窗
- 可移动对话框
- 富文本
- Markdown
- JSON美化
- 列表拖拽
- 权限管理
- 日志管理
- 用户管理
- 菜单管理
- 数据管理
- 图形设计器
- 开发/部署两种模式
- mack模拟ajax请求数据
- vuex状态管理模块化
- Ajax请求进度条
- sass样式支持
- 事件中心实现

## 编译运行

``` bash
# 克隆项目
git clone https://github.com/silianpan/eagles.git

# 安装依赖
npm install

# 运行 访问 localhost:8080
npm run dev

# 编译
npm run build

# 待分析报告的编译
npm run build --report
```

## 目录结构说明
```shell
|-- build                           # 编译目录
|-- config                          # 编译配置目录
|-- index.html                      # 首页模板
|-- package.json                    # 依赖库配置
|-- src                             # 源码目录
|   |-- api                         # api目录
|   |-- assets                      # 资源目录
|   |   |-- css                     # 样式目录
|   |   |-- img                     # 图片
|   |   |-- sass                    # sass
|   |   `-- theme                   # 自定义主题目录
|   |-- common                      # 公共js库
|   |   |-- eventHubs.js            # 事件中心
|   |   |-- resTypeEnum.js          # 资源类型
|   |   `-- topo                    # 拓扑图
|   |-- components                  # 通用组件
|   |   |-- Table.vue               # 表格
|   |   |-- topo                    # 拓扑图
|   |   `-- treeTable               # 树表组件
|   |-- config.js                   # 全局配置
|   |-- i18n                        # 国际化
|   |-- libs                        # 第三方组件库
|   |-- main.js                     # 入口程序
|   |-- mock                        # 模拟数据目录
|   |-- router                      # 路由
|   |-- store                       # 状态管理目录
|   |-- utils                       # 工具目录
|   `-- views                       # 业务类型组件
|       |-- introduction            # 简介
|       |-- lang                    # 语言设置
|       |-- layout                  # 布局：header、菜单
|       |-- login                   # 登录
|       |-- table                   # 表格演示
|       |-- topo                    # 拓扑图演示
|       `-- treeTable               # 树表演示
`-- static                          # 静态资源目录
    `-- img                         # 图片目录
```

## 部分截图
#### &emsp;首页
![home](vue2/home.png)

#### &emsp;换肤&表格
![skin](vue2/skin.png)

#### &emsp;国际化&树表
![i18n](vue2/i18n.png)

#### &emsp;拓扑图
![topo](vue2/topo.png)

#### &emsp;不同风格菜单
![menu](vue2/menu.png)

## 爬坑之路
#### &emsp;Jquery组件的正确引用
&emsp;在package.json中加入jquery
```javascript
"jquery": "^1.11.1"
```
&emsp;在webpack.base.conf.js后加入如下代码，在之前要引入webpack
```javascript
var webpack = require("webpack")

plugins: [
   new webpack.optimize.CommonsChunkPlugin('common.js'),
   new webpack.ProvidePlugin({
       jQuery: "jquery",
       $: "jquery"
   })
  ]
```
&emsp;在main.js中引入jquery
```javascript
import $ from 'jquery'
```
#### &emsp;国际化兼容问题
&emsp;国际化采用vue-i18n,但是只能使用5.x版本，使用6.x版本会发生和element兼容性问题，导致原声的element无法翻译
&emsp;和Element兼容国际化引入
```javascript
import enUS from './en-US.json'
import zhCN from './zh-CN.json'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
export const LANGS = {
    'en-US': $.extend(enUS, enLocale),
    'zh-CN': $.extend(zhCN, zhLocale)
}
```
#### &emsp;nginx部署问题
&emsp;vue路由热加载组件，会导致部署到Nginx后，组件无法切换的问题（切换失败）
&emsp;所以如果部署到Nginx，在路由中，只能使用import加载组件
#### &emsp;静态资源访问问题
&emsp;部署到Nginx后，所有静态资源访问出现404（访问失败）
&emsp;原因：vue中src目录下所有的资源文件都要进行编译转码，原先用引用的静态文件将会出错，如img标签引用的静态图片文件
&emsp;解决办法：将静态资源放入到和src同级的static目录，并引用此目录下文件，但是重要的一点是：开发模式和生产模式引用的static路径会有不同，于是在配置文件中加入如下代码，来区分开发模式和生产模式：
```javascript
export const STATIC_IMAGEPATH = (process.env.NODE_ENV === 'production') ? "./static/img/": "/static/img/";
```
&emsp;另外, config/index.js下，assetsPublicPath也是不同
```javascript
assetsPublicPath: './', //生产环境assetsPublicPath: '/'
```
#### &emsp;开发模式和部署不是代理后台服务设置
&emsp;在config/index.js中配置proxyTable
```javascript
proxyTable: {
    '/ajax': {
      target: 'http://127.0.0.1:8080',
      // target: 'http://127.0.0.1:8081',
      changeOrigin: true,
      pathRewrite: {
        '^/ajax': '/dirms-service'
      },
      onProxyReq (proxyReq, req, res) {
      }
    }
  },
```
&emsp;在config中加入如下，其中eagles-service为生产模式下的后台服务访问标识
```javascript
export const API_BASEURL = (process.env.NODE_ENV === 'production')? "/eagles-service":"/ajax";
```
## todo list
- 完成并完善剩下功能
- 寻找其他NB开源组件并封装，如D3等
- 完善后台项目，并搭建微服务架构

## 欢迎大家star和issue
[项目地址](https://github.com/silianpan/eagles.git)

[在线演示](https://silianpan.github.io/eagles/)

[个人博客](https://silianpan.github.io/)

QQ群：<span style="color:rgb(228, 183, 22);">613176270</span>
