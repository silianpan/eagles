<template>
  <div id="exchange-hp5406"></div>
</template>

<script>
import topoApi from 'api/topo'
import g3dGraph from 'common/topo/g3dGraph'
export default {
  props: {
    currentMapElementData: {
      style: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      interfaceData: {
        "position": [0, 0, 0],
        "size": [1011, 402, 1000],
        "style": {
          "menu.template": "mainFrame",
          "front.image": "main-front",
          "back.image": "main-back",
          "left.color": "#2e2f32",
          "right.color": "#2e2f32",
          "top.color": "#2e2f32",
          "bottom.color": "#aeb8bf",
          "all.light": true,
          "front.light": false
        },
        "toolTip": "锐捷交换机",
        "attaches": []
      },
      basePos: {x: -208, y: 63, z: 500},
      basePosRightX: 266,
      stepPos: -103,
      itemPosRelative: {x: -170, y: 23.5, z: 1},
      panelSize: [475, 100, 2],
      itemSize: [28, 23, 10],
      g3dDm: null,
      // exchangerInterfaceData: this.$store.state.topo.exchangerInterfaceData,
      // exchangerHostData: this.$store.state.topo.exchangerHostData
    }
  },
  mounted() {
    this.createInterface();
  },
  methods: {
    clearDataModel() {
      if (!this.isObjBlank(this.g3dDm)) {
        this.g3dDm.clear();
      }
    },
    isObjBlank(obj) {
      return (obj === null) || (obj === undefined) || (obj === '');
    },
    /**
     * 创建接口拓扑图
     */
    createInterface() {
      const self = this;
      this.interfaceData.attaches = [];
      this.basePos = {x: -208, y: 63, z: 500};
      this.clearDataModel();
      // 获取该host的接口item
      let interfaceItems = this.exchangerHostData[self.currentMapElementData.elementid];
      if (!self.isObjBlank(interfaceItems)) {
        let interfaces = [];
        $.each(interfaceItems, function() {
          const itemObj = self.exchangerInterfaceData[this.itemid];
          if (!self.isObjBlank(itemObj)) {
            interfaces.push(itemObj);
          }
        });

        let num = 1, flag = 0, itemIndex = 0;
        let panelPos = self.computePanelPos(num);
        let panel = self.createPanel(panelPos);
        $.each(interfaces, function(index) {
          let item = null;
          const itemPos = self.computeItemPos(panelPos, itemIndex, num);
          itemIndex++;
          // 判断是否需要倒立显示
          if ( itemIndex > 10 ) {
            item = self.createItem(itemPos, this, true);
          } else {
            item = self.createItem(itemPos, this);
          }
          panel.attaches.push(item);

          // 判断是否创建新面板
          if ((index+1) % 20 == 0) {
            // 添加前一个面板到接口数据中
            self.interfaceData.attaches.push(panel);
            // 创建新的组
            num++;
            itemIndex = 0;
            panelPos = self.computePanelPos(num);
            panel = self.createPanel(panelPos);
            flag = 1;
          } else {
            flag = 2;
          }
        });
        // flag：标识，添加最后一个面板
        if (flag == 2) {
          self.interfaceData.attaches.push(panel);
        }
        // 创建视图
        const g3d = g3dGraph.init();
        const g3dView = g3d.getView();
        this.g3dDm = g3d.getDataModel();
        g3dGraph.parse(this.interfaceData, this.g3dDm);
        $('#exchange-hp5406').append(g3dView);
      }
    },
    /**
     * 创建接口对象
     * @param  {Object}  interfaceItem [接口数据]
     * @param  {Boolean} isBottom      [是否朝下]
     * @return {Object}                [接口对象]
     */
    createItem(itemPos, interfaceItem, isBottom = false) {
      let item = {};
      item.id = interfaceItem.itemid;
      item.size = this.itemSize;
      item.style = {
        "front.image": this.getItemImage(interfaceItem.lastvalue),
        "all.light": true
      };
      if (isBottom) {
        item.style['front.uv'] = [0, 1, 0, 0, 1, 0, 1, 1];
      }
      item.toolTip = this.getStatusInfo(interfaceItem.lastvalue, interfaceItem)
                  + '<br> 编号: ' + interfaceItem.itemid
                  + '<br> 名称：' + interfaceItem.name;

      item.position = [itemPos.x, itemPos.y, itemPos.z];
      return item;
    },
    /**
     * 计算接口未知
     * @param  {Object} panelPos  [面板未知]
     * @param  {int} itemIndex [接口数下标]
     * @param  {int} num       [面板下标]
     * @return {Object}           [接口位置]
     */
    computeItemPos(panelPos, itemIndex, num) {
      let x = panelPos.x + this.itemPosRelative.x;
      let y = panelPos.y + this.itemPosRelative.y;
      let z = panelPos.z + this.itemPosRelative.z;
      x += 32*(itemIndex%10);
      y -= 34*(Math.floor(itemIndex/10));
      return {x:x, y:y, z:z};
    },
    /**
     * 获取接口图标显示
     * @param  {String} status [接口状态]
     * @return {String}        [图标class]
     */
    getItemImage(status) {
      switch (status) {
        case '1':
          return 'port_green';
        case '2':
          return 'port_red';
        default:
          return 'port_blue';
      }
    },
    /**
     * 获取接口状态信息
     * @param  {String} status        [状态值]
     * @param  {Object} interfaceItem [接口对象]
     * @return {String}               [错误信息]
     */
    getStatusInfo(status, interfaceItem) {
      switch (status) {
        case '1':
          return '正常';
        case '2':
          return '故障：'+ interfaceItem.error;
        default:
          return '未知: '+ interfaceItem.error;
      }
    },
    /**
     * 创建接口面板
     * @param  {Object} panelPos [面板位置]
     * @return {Object}          [面板对象]
     */
    createPanel(panelPos) {
      let panel = {};
      panel.position = [panelPos.x, panelPos.y, panelPos.z];
      panel.size = this.panelSize;
      panel.style = {
        "menu.template": "panel",
        "front.image": "panel"
      };
      panel.attr = {};
      panel.toolTip = '';
      panel.attaches = [];
      return panel;
    },
    /**
     * 计算面板位置
     * @param  {int} num [面板下标]
     * @return {Object}     [面板位置]
     */
    computePanelPos(num) {
      let x = this.basePos.x;
      let y = this.basePos.y;
      let z = this.basePos.z;
      if (num % 2 == 0) {
        x = this.basePosRightX;
      } else if (num != 1){
        y += this.stepPos;
        this.basePos.y = y;
      }
      return {x:x, y:y, z:z};
    }

  },
  computed: {
    exchangerHostData() {
      return this.$store.state.topo.exchangerHostData;
    },
    exchangerInterfaceData() {
      return this.$store.state.topo.exchangerInterfaceData;
    }
  },
  watch: {
    currentMapElementData: function(newValue, oldValue) {
      if (newValue != oldValue) {
        this.createInterface();
      }
    }
  }

}
</script>
