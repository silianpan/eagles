export default {
  setTopoStyle(data, graphView, topoIconData) {
    var self = this;
    var dataModel = graphView.getDataModel();
    // 遍历点
    $.each(data.selements, function() {
      var node = new ht.Node(); //创建网元,设置id
      node.setId(this.selementid);
      // var originPoint = new Object();
      // originPoint.y = parseFloat(this.y)
      // originPoint.x = parseFloat(this.x)
      // node.setPosition(self.getTransPoint(originPoint))//设置位置,后台传来的x,y是字符串格式
      // node.setPosition(originPoint.x+100, originPoint.y+200);
      node.setToolTip(this.label);
      node.setAttr("data", this); //网元的各种数据都存入网元中
      self.setNodeStyle(node, this, topoIconData); //设置网元的样式
      dataModel.add(node); //添加到网元容器中
    });
    // 遍历线
    $.each(data.links, function() {
      var link = new ht.Edge(); //创建线,设置id
      link.setId(this.linkid);
      link.setAttr("data", this); //线的各种数据都存入线中
      link.setSource(dataModel.getDataById(this.selementid1));
      link.setTarget(dataModel.getDataById(this.selementid2));
      self.setLinkStyle(link, this); //设置图层的样式
      dataModel.add(link); //添加到网元容器中
    });
  },
  setLinkStyle(link, style) {
    link.setStyle("edge.color", '#' + style.color);
    link.setName(style.label);
    // link.setStyle("label.align", "left");
    // link.setStyle("label.offset.x", 0);
    // link.setStyle("label2.position", 3);

    link.s({
      'edge.width': 1
    });
  },
  setNodeStyle(node, style, topoIconData) {
    if (!this.isObjBlank(style.iconid_off)) {
      const iconImgeData = this.getImgBase64(style.iconid_off, topoIconData);
      if (!this.isObjBlank(iconImgeData)) {
        node.setImage('data:image/png;base64,' + iconImgeData);
      }
      // node.setSize(64, 64);
      node.setStyle("label.align", "left");
      node.setName(style.label);
    }
  },
  getImgBase64(iconid, topoIconData, userAndSysIcons, isAll) {
    let iconsTmp = topoIconData;
    if (isAll) {
      iconsTmp = userAndSysIcons;
    }
    let iconImgeData = null;
    if (!this.isObjBlank(iconsTmp)) {
      const iconObj = iconsTmp[iconid];
      if (!this.isObjBlank(iconObj)) {
        iconImgeData = iconObj.image;
        if (this.isObjBlank(iconImgeData)) {
          iconImgeData = iconObj.imageData;
        }
      }
    }
    return iconImgeData;
  },
  isObjBlank(obj) {
    return (obj === null) || (obj === undefined) || (obj === '');
  },
}
