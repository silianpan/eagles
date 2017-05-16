// topo 公共右键菜单
export const TOPO_COM_CONTEXTMENU = [
]
// topo节点右键菜单
export const TOPO_NODE_CONTEXTMENU = [
  [{
    name: 'modifyhost',
    icon: 'el-icon-share',
    domId: 'topo-modify-host',
    label: '修改交换机'
  },{
    name: 'modifylink',
    icon: 'el-icon-share',
    domId: 'topo-modify-link',
    label: '修改连接关系'
  }],

  [{
    name: 'portstate',
    icon: 'el-icon-share',
    domId: 'topo-port-state',
    label: '端口状态'
  },{
    name: 'portlink',
    icon: 'el-icon-share',
    domId: 'topo-port-link',
    label: '端口连接主机'
  }],

  [{
    name: 'deviceprop',
    icon: 'el-icon-share',
    domId: 'topo-device-prop',
    label: '查看设备属性',
  },{
    name: 'childtopo',
    icon: 'el-icon-share',
    domId: 'topo-child-topo',
    label: '查看子拓扑'
  }],

  [{
    name: 'ping',
    icon: 'el-icon-share',
    domId: 'topo-ping',
    label: 'PING'
  },
  {
    name: 'traceroute',
    icon: 'el-icon-share',
    domId: 'topo-traceroute',
    label: 'TRACEROUTE'
  },
  {
    name: 'telent',
    icon: 'el-icon-share',
    domId: 'topo-telent',
    label: 'TELENT'
  }],

  [{
    name: 'routetable',
    icon: 'el-icon-share',
    domId: 'topo-route-table',
    label: '路由表'
  },
  {
    name: 'asertinfo',
    icon: 'el-icon-share',
    domId: 'topo-asert-info',
    label: '资产信息'
  }]
]
// topo Link右键菜单
export const TOPO_LINK_CONTEXTMENU = []
