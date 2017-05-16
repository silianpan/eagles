
import * as base from './base'
import * as res from './res'
export default {
  getInformation(data, br) {
    if (!data) {
      return null;
    }
    if (data.getToolTip()) {
      return data.getToolTip();
    }
    if (!br) br = '\n';
    return '编号: ' + data.getId() + br +
      '位置: ' + data.getPosition3d();
  },

  /**
   * 初始化3d图对象
   * @return {Object} [3d对象图]
   */
  init() {
    const self = this;
    const dataModel = new ht.DataModel();
    const g3d = new ht.graph3d.Graph3dView(dataModel);
    g3d.setMovableFunc(function(data) {
      return false;
    });
    g3d.getToolTip = function(e) {
      return self.getInformation(g3d.getDataAt(e), '<br>');
    };
    g3d.enableToolTip();

    g3d.getWireframe = function(data) {
      if (this.isSelected(data)) {
        return base.wireframe.select;
      }
      if (data.s('isFocused')) {
        return base.wireframe.focus;
      }
      return null;
    };
    g3d.getBrightness = function(data) {
      if (this.isSelected(data)) {
        return base.brightness.select;
      }
      if (data.s('isFocused')) {
        return base.brightness.focus;
      }
      return null;
    };
    var lastFocusData = null;
    var view = g3d.getView();
    view.addEventListener('mousemove', function(e) {
      var data = g3d.getDataAt(e);
      if (data !== lastFocusData) {
        if (lastFocusData) {
          lastFocusData.s('isFocused', false);
        }
        if (data) {
          data.s('isFocused', true);
        }
        lastFocusData = data;
      }
    });

    view.className = 'graphyClass3';
    // $('#interchanger').append(view);
    window.addEventListener('resize', function(e) {
      g3d.invalidate();
    }, false);

    // 更改提示风格
    var toolTip = ht.Default.getToolTipDiv();
    toolTip.style.zIndex = '9999';

    // self.g3d.reset = self.reset;

    // self.parse(hp5406config.hp5406_config, self.dataModel);
    // var data = self.dataModel.getDataById('the special one');
    // if (data) {
    //   data.s({
    //     'all.blend': 'red'
    //   });
    //
    //   setInterval(function() {
    //     if (data.s('all.blend') === 'red') {
    //       data.s('all.blend', 'blue');
    //     } else {
    //       data.s('all.blend', 'red');
    //     }
    //   }, 500);
    // }

    const fromEye = [0, 900 * 5, 1200 * 5];
    const toEye = [0, 300, 1600];
    g3d.setEye(fromEye);

    ht.Default.startAnim({
      duration: 1000,
      action: function(t) {
        g3d.setEye([
          fromEye[0] + (toEye[0] - fromEye[0]) * t,
          fromEye[1] + (toEye[1] - fromEye[1]) * t,
          fromEye[2] + (toEye[2] - fromEye[2]) * t
        ]);
      },
      finishFunc: function() {
        // self.startRotation();
      }
    });
    // self.g3d.onDataClicked = function(data) {
    //   // self.stopRotation();
    // };
    // self.g3d.onBackgroundDoubleClicked = function(data) {
    //   // self.startRotation();
    // };

    // for (var template in hp5406config.menu_template) {
    //   hp5406config.menu_template[template].forEach(function(item) {
    //     self.parseMenu(item);
    //   });
    // }

    // contextmenu = new ht.widget.ContextMenu();
    // contextmenu.beforeShow = function(e) {
    //   ht.Default.hideToolTip();
    //   var sm = self.g3d.sm();
    //   if (sm.size() > 1) {
    //     this.setItems(hp5406config.menu_template.multiSelection);
    //   } else {
    //     var data = self.g3d.getDataAt(e);
    //     if (data) {
    //       var template = data.s('menu.template');
    //       var items = hp5406config.menu_template[template];
    //     } else {
    //       items = hp5406config.menu_template.background;
    //     }
    //     this.setItems(items);
    //   }
    // };
    // contextmenu.addTo(self.g3d.getView());
    return g3d;
  },

  parseMenu(item, dataModel) {
    const self = this;
    var func = item.action,
      params = item.params;
    if (typeof func === 'string') {
      item.action = function() {
        window[func].apply(this, params);
      };
    }
    if (item.items) {
      item.items.forEach(function(subItem) {
        self.parseMenu(subItem);
      });
    }
  },

  parse(json, dataModel) {

    const self = this;
    var node = new ht.Node();
    if (json.id) {
      node.setId(json.id);
    }
    if (json.position) {
      node.setPosition3d(json.position);
    }
    if (json.size) {
      node.setSize3d(json.size);
    }
    if (json.toolTip) {
      node.setToolTip(json.toolTip);
    }
    if (json.style) {
      node.s(json.style);
    }
    if (json.attr) {
      node.a(json.attr);
    }
    dataModel.add(node);

    if (json.attaches) {
      json.attaches.forEach(function(attach) {
        var attachNode = self.parse(attach, dataModel);
        attachNode.setHost(node);
        attachNode.setParent(node);
      });
    }
    return node;
  }
}
