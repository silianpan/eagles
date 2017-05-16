import {ToggleOverview} from './ToggleOverview'
import eventHubs from '../eventHubs'
export default {
  createGraph() {
    const self = this;
    const dataModel = new ht.DataModel();
    const graphView = new ht.graph.GraphView(dataModel); // 中间图
    const borderPane = new ht.widget.BorderPane(); // 面板
    borderPane.setCenterView(graphView);
    const overview = new ToggleOverview(graphView); // 鹰眼图

    window.addEventListener('resize', function(e) {
      borderPane.invalidate();
    }, false);

    // 存储在事件中心
    eventHubs.getEventHub().$emit("topoGraphView", graphView);
    return {borderPane:borderPane, overView:overview};
  }
}
