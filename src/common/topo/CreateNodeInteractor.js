export class CreateNodeInteractor {
  constructor(graphView) {
    CreateNodeInteractor.superClass.constructor.call(this, graphView);
  }
}
// var CreateNodeInteractor = function (graphView) {
//     CreateNodeInteractor.superClass.constructor.call(this, graphView);
// };
//
ht.Default.def(CreateNodeInteractor, ht.graph.Interactor, {
    handle_mousedown: function (e) {
        this.handle_touchstart(e);
    },
    handle_touchstart: function (e) {
        this.isLeftClick = ht.Default.isLeftButton(e) && ht.Default.getTouchCount(e) === 1;
    },
    handle_mouseup: function (e) {
        this.handle_touchend(e);
    },
    handle_touchend: function (e) {
        var graphView = this._graphView;
        if(!graphView._panning && this.isLeftClick){
            var node = new ht.Node();
            node.setPosition(graphView.getLogicalPoint(e));
            node.setParent(graphView.getCurrentSubGraph());
            graphView.getDataModel().add(node);
            graphView.getSelectionModel().setSelection(node);
            delete this.isLeftClick;
        }
    }
});
