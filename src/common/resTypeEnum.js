export const RES_CONTAINER = 0 // 容器
export const RES_HOSTGROUP = 1 // 组
export const RES_HOST = 2 // 主机
export const RES_APPLICATION = 3 // 应用集
export const RES_GRAPHY = 4 // 图形
export const RES_ITEM = 5 // 监控项

const OPER_ADDDEVICE = 1 // 添加设备
const OPER_ADDGROUP = 2 // 添加组
const OPER_EDIT = 3 // 编辑
const OPER_DELETE = 4 // 删除
const OPER_ADDGRAPH = 5 // 添加图形
const OPER_ADDITEM = 6 // 添加监控项

const GROUP_INTERNET = {id:1, name:'网络设备'}
const GROUP_SERVER = {id:2, name:'服务器'}
const GROUP_MIDDLEWARE = {id:3, name: '中间件'}
const GROUP_DATABASE = {id:4, name:'数据库'}
const GROUP_VM = {id:5, name:'虚拟机'}
const GROUP_STORAGE = {id:6, name:'存储设备'}
const GROUP_HARDWARE = {id:7, name:'硬件监控'}
const GROUP_OTHER = {id:8, name:'其它'}

const INTERFACE_AGENT = {id:1,name:'agent代理的程序接口'} // agent代理的程序接口
const INTERFACE_SNMP = {id:2,name:'SNMP接口'} // SNMP接口
const INTERFACE_IPMI = {id:3,name:'IPMI接口'} // IPMI接口
const INTERFACE_JMX = {id:4,name:'JMX接口'} // JMX接口


const AUDIT_ACTION_ADD =  0
const AUDIT_ACTION_UPDATE= 1
const AUDIT_ACTION_DELETE= 2
const AUDIT_ACTION_LOGIN=  3
const AUDIT_ACTION_LOGOUT= 4
const AUDIT_ACTION_ENABLE= 5
const AUDIT_ACTION_DISABLE=  6

const AUDIT_RESOURCE_USER=     0
const AUDIT_RESOURCE_ZABBIX_CONFIG=  2
const AUDIT_RESOURCE_MEDIA_TYPE=   3
const AUDIT_RESOURCE_HOST=     4
const AUDIT_RESOURCE_ACTION=     5
const AUDIT_RESOURCE_GRAPH=      6
const AUDIT_RESOURCE_GRAPH_ELEMENT=  7
const AUDIT_RESOURCE_USER_GROUP=   11
const AUDIT_RESOURCE_APPLICATION=  12
const AUDIT_RESOURCE_TRIGGER=    13
const AUDIT_RESOURCE_HOST_GROUP=   14
const AUDIT_RESOURCE_ITEM=     15
const AUDIT_RESOURCE_IMAGE=      16
const AUDIT_RESOURCE_VALUE_MAP=    17
const AUDIT_RESOURCE_IT_SERVICE=   18
const AUDIT_RESOURCE_MAP=      19
const AUDIT_RESOURCE_SCREEN=     20
const AUDIT_RESOURCE_SCENARIO=   22
const AUDIT_RESOURCE_DISCOVERY_RULE= 23
const AUDIT_RESOURCE_SLIDESHOW=    24
const AUDIT_RESOURCE_SCRIPT=     25
const AUDIT_RESOURCE_PROXY=      26
const AUDIT_RESOURCE_MAINTENANCE=  27
const AUDIT_RESOURCE_REGEXP=     28
const AUDIT_RESOURCE_MACRO=      29
const AUDIT_RESOURCE_TEMPLATE=   30
const AUDIT_RESOURCE_TRIGGER_PROTOTYPE= 31
//图形分类
const GRAPH_CLASSIFY_NORMAL="0"
const GRAPH_CLASSIFY_ZABBIX='1'
const GRAPH_CLASSIFY_REPORT='2'

//数据的分类
const DATA_CLASSIFY_NORMAL =  "0" ;//通用
const DATA_CLASSIFY_ZABBIX =  "1" ;//监控
const DATA_CLASSIFY_REPORT =  "2" ;//报表

// 告警级别分类
const ALARM_SEVERITY_NOT_CLASSIFIED = 0 // 未分类
const ALARM_SEVERITY_INFORMATION = 1 // 信息
const ALARM_SEVERITY_WARNING = 2 // 警告
const ALARM_SEVERITY_AVERAGE = 3 // 一般严重
const ALARM_SEVERITY_HIGH = 4 // 严重
const ALARM_SEVERITY_DISASTER = 5 // 灾难

const ALARM_SEVERITY = [{
    level: ALARM_SEVERITY_NOT_CLASSIFIED,
    label: '未分类',
    style: 'alarm_severity_not_classified'
  },
  {
    level: ALARM_SEVERITY_INFORMATION,
    label: '信息',
    style: 'alarm_severity_information'
  },
  {
    level: ALARM_SEVERITY_WARNING,
    label: '警告',
    style: 'alarm_severity_warning'
  },
  {
    level: ALARM_SEVERITY_AVERAGE,
    label: '一般严重',
    style: 'alarm_severity_average'
  },
  {
    level: ALARM_SEVERITY_HIGH,
    label: '严重',
    style: 'alarm_severity_high'
  },
  {
    level: ALARM_SEVERITY_DISASTER,
    label: '灾难',
    style: 'alarm_severity_disaster'
  }];

  export const MAPELEMENTTYPES = [{
    id: 0,
    name: '主机'
  },
  {
    id: 1,
    name: '拓扑图'
  },
  {
    id: 2,
    name: '触发器'
  },
  {
    id: 3,
    name: '组'
  },
  {
    id: 4,
    name: '图片'
  }];

export default {
  getAllGrapshClassify(){
    return [{
        label:"所有",
        value:""
      },
      {
        label:"通用",
        value:GRAPH_CLASSIFY_NORMAL
      },
      {
        label:"监控",
        value:GRAPH_CLASSIFY_ZABBIX
      },{
        label:"报表",
        value:GRAPH_CLASSIFY_REPORT
      }
    ];
  },
  getAllDataClassify(){
    return [
       {
          label:"所有",
          value:"-1"
        },
        {
          label:"通用",
          value:DATA_CLASSIFY_NORMAL
        },
        {
          label:"监控",
          value:DATA_CLASSIFY_ZABBIX
        },{
          label:"报表",
          value:DATA_CLASSIFY_REPORT
        }
    ];
  },
  getNameByResType(restype) {
    switch (restype) {
      case RES_CONTAINER:
        return '容器';
      case RES_HOSTGROUP:
        return '组';
      case RES_HOST:
        return '主机';
      case RES_APPLICATION:
        return '应用集';
      case RES_GRAPHY:
        return '图形';
      case RES_ITEM:
        return '监控项';
      default:
        return '未知';
    }
  },
  getIconByResTypeName(restypeName) {
    switch (restypeName) {
      case RES_CONTAINER:
        return 'icon-page-folder';
      case RES_HOSTGROUP:
        return 'icon-page-folder';
      case RES_HOST:
        return 'icon-page-server';
      case RES_APPLICATION:
        return 'icon-page-folder';
      case RES_GRAPHY:
        return 'icon-page-folder';
      case RES_ITEM:
        return 'icon-page-itemgreen';
      case GROUP_INTERNET.name:
        return 'icon-page-network';
      case GROUP_SERVER.name:
        return 'icon-page-server';
      case GROUP_MIDDLEWARE.name:
        return 'icon-page-middleware';
      case GROUP_DATABASE.name:
        return 'icon-page-datadb';
      case GROUP_VM.name:
        return 'icon-page-other';
      case GROUP_STORAGE.name:
        return 'icon-page-other';
      case GROUP_HARDWARE.name:
        return 'icon-page-other';
      case GROUP_OTHER.name:
        return 'icon-page-other';
      default:
        return 'icon-page-itemgreen';
    }
  },
  getAuditResourceToStr(resource_type){
      // var audit_resource= [
      //   AUDIT_RESOURCE_USER:'User',
      //   AUDIT_RESOURCE_ZABBIX_CONFIG:'Configuration of Zabbix',
      //   AUDIT_RESOURCE_MEDIA_TYPE :'Media type',
      //   AUDIT_RESOURCE_HOST :'Host',
      //   AUDIT_RESOURCE_ACTION :'Action',
      //   AUDIT_RESOURCE_GRAPH :'Graph',
      //   AUDIT_RESOURCE_GRAPH_ELEMENT :'Graph element',
      //   AUDIT_RESOURCE_USER_GROUP :'User group',
      //   AUDIT_RESOURCE_APPLICATION :'Application',
      //   AUDIT_RESOURCE_TRIGGER :'Trigger',
      //   AUDIT_RESOURCE_TRIGGER_PROTOTYPE :'Trigger prototype',
      //   AUDIT_RESOURCE_HOST_GROUP :'Host group',
      //   AUDIT_RESOURCE_ITEM :'Item',
      //   AUDIT_RESOURCE_IMAGE :'Image',
      //   AUDIT_RESOURCE_VALUE_MAP :'Value map',
      //   AUDIT_RESOURCE_IT_SERVICE :'IT service',
      //   AUDIT_RESOURCE_MAP :'Map',
      //   AUDIT_RESOURCE_SCREEN :'Screen',
      //   AUDIT_RESOURCE_SCENARIO :'Web scenario',
      //   AUDIT_RESOURCE_DISCOVERY_RULE :'Discovery rule',
      //   AUDIT_RESOURCE_SLIDESHOW :'Slide show',
      //   AUDIT_RESOURCE_PROXY :'Proxy',
      //   AUDIT_RESOURCE_REGEXP :'Regular expression',
      //   AUDIT_RESOURCE_MAINTENANCE :'Maintenance',
      //   AUDIT_RESOURCE_SCRIPT :'Script',
      //   AUDIT_RESOURCE_MACRO :'Macro',
      //   AUDIT_RESOURCE_TEMPLATE :'Template'
      // ];
      var audit_resource = [];
      audit_resource [AUDIT_RESOURCE_USER ]='用户';
      audit_resource [AUDIT_RESOURCE_ZABBIX_CONFIG ]='Configuration of Zabbix';
      audit_resource [AUDIT_RESOURCE_MEDIA_TYPE ]='Media type';
      audit_resource [AUDIT_RESOURCE_HOST ]='主机';
      audit_resource [AUDIT_RESOURCE_ACTION ]='Action';
      audit_resource [AUDIT_RESOURCE_GRAPH ]='图表';
      audit_resource [AUDIT_RESOURCE_GRAPH_ELEMENT ]='Graph element';
      audit_resource [AUDIT_RESOURCE_USER_GROUP ]='用户组';
      audit_resource [AUDIT_RESOURCE_APPLICATION ]='Application';
      audit_resource [AUDIT_RESOURCE_TRIGGER ]='触发器';
      audit_resource [AUDIT_RESOURCE_TRIGGER_PROTOTYPE ]='Trigger prototype';
      audit_resource [AUDIT_RESOURCE_HOST_GROUP ]='主机组';
      audit_resource [AUDIT_RESOURCE_ITEM ]='Item';
      audit_resource [AUDIT_RESOURCE_IMAGE ]='Image';
      audit_resource [AUDIT_RESOURCE_VALUE_MAP ]='Value map';
      audit_resource [AUDIT_RESOURCE_IT_SERVICE ]='IT service';
      audit_resource [AUDIT_RESOURCE_MAP ]='Map';
      audit_resource [AUDIT_RESOURCE_SCREEN ]='Screen';
      audit_resource [AUDIT_RESOURCE_SCENARIO ]='Web scenario';
      audit_resource [AUDIT_RESOURCE_DISCOVERY_RULE ]='Discovery rule';
      audit_resource [AUDIT_RESOURCE_SLIDESHOW ]='Slide show';
      audit_resource [AUDIT_RESOURCE_PROXY ]='Proxy';
      audit_resource [AUDIT_RESOURCE_REGEXP ]='Regular expression';
      audit_resource [AUDIT_RESOURCE_MAINTENANCE ]='Maintenance';
      audit_resource [AUDIT_RESOURCE_SCRIPT ]='Script';
      audit_resource [AUDIT_RESOURCE_MACRO ]='Macro';
      audit_resource [AUDIT_RESOURCE_TEMPLATE ]='模板';
      return audit_resource[resource_type]==null?"":audit_resource[resource_type];
  },
  getAuditActionToStr(action){

     var audit_actions = [];
     audit_actions[AUDIT_ACTION_UPDATE]='更新';
     audit_actions[AUDIT_ACTION_DELETE]='删除';
     audit_actions[AUDIT_ACTION_LOGIN]='登陆';
     audit_actions[AUDIT_ACTION_LOGOUT]='退出';
     audit_actions[AUDIT_ACTION_ENABLE]='ENABLE';
     audit_actions[AUDIT_ACTION_DISABLE]='DISABLE';
     return audit_actions[action] ==null? "":audit_actions[action];
  },
  getIsOper(operType, resType) {
    switch (resType) {
      case RES_CONTAINER:
        switch (operType) {
          case OPER_ADDGROUP:
          case OPER_EDIT:
          case OPER_DELETE:
            return true;
          default:
            return false;
        }
      case RES_HOSTGROUP:
        switch (operType) {
          case OPER_ADDDEVICE:
          case OPER_EDIT:
          case OPER_DELETE:
            return true;
          default:
            return false;
        }
      case RES_HOST:
        switch (operType) {
          case OPER_ADDGRAPH:
          case OPER_EDIT:
          case OPER_DELETE:
            return true;
          default:
            return false;
        }
      case RES_GRAPHY:
        switch (operType) {
          case OPER_ADDITEM:
          case OPER_EDIT:
          case OPER_DELETE:
            return true;
          default:
            return false;
        }
      default:
        return false;
    }
  },
  getHostInterfaceRes(groupName) {
    switch (groupName) {
      case GROUP_INTERNET.name:
      case GROUP_OTHER.name:
        return INTERFACE_SNMP;
      case GROUP_SERVER.name:
      case GROUP_VM.name:
      case GROUP_STORAGE.name:
      case GROUP_DATABASE.name:
        return INTERFACE_AGENT;
      case GROUP_MIDDLEWARE.name:
        return INTERFACE_JMX;
      case GROUP_HARDWARE.name:
        return INTERFACE_IPMI;
      default:
        return INTERFACE_AGENT
    }
  },
  getElementNameByType(elementType) {
    switch (elementType) {
      case '0':
          return '主机';
      case '1':
          return '拓扑图';
      case '2':
          return '触发器';
      case '3':
          return '组';
      case '4':
          return '图片';
      default:
          return '未知';
    }
  },

  getAlarmSeverityLevel(level) {
    // 整数，大于等于0，小于最大大小
    if (!(/^(\+|-)?\d+$/.test( level )) || level < 0 || level > ALARM_SEVERITY.length-1) {
      return ALARM_SEVERITY[0];
    }
    return ALARM_SEVERITY[level];
  }
}
