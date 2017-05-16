export class CreateEdgeInteractor {
  constructor(graphView) {
    CreateEdgeInteractor.superClass.constructor.call(this, graphView);
  }
}
// var CreateEdgeInteractor = function (graphView) {
//     CreateEdgeInteractor.superClass.constructor.call(this, graphView);
// };
ht.Default.def(CreateEdgeInteractor, ht.graph.Interactor, {
    setUp: function () {
        CreateEdgeInteractor.superClass.setUp.call(this);
        this._autoMakeVisible = this._graphView.isAutoMakeVisible();
        this._graphView.setAutoMakeVisible(false);
    },
    tearDown: function () {
        CreateEdgeInteractor.superClass.tearDown.call(this);
        this._graphView.setAutoMakeVisible(this._autoMakeVisible);
        this._graphView.getSelectionModel().clearSelection();
    },
    handle_mousedown: function (e) {
        this.handle_touchstart(e);
    },
    handle_touchstart: function (e) {
        this. _sourceNode = this.getNodeAt(e);
        if(this._sourceNode){
            this._targetNode = null;
            this.startDragging(e);
            this._graphView.addTopPainter(this);
            this._graphView.getSelectionModel().setSelection(this._sourceNode);
        }
    },
    getNodeAt: function(e){
        if(ht.Default.isLeftButton(e) && ht.Default.getTouchCount(e) === 1){
            var data = this._graphView.getDataAt(e);
            if(data instanceof ht.Node){
                return data;
            }
        }
        return null;
    },
    handleWindowMouseMove: function (e) {
        this.handleWindowTouchMove(e);
    },
    handleWindowMouseUp: function (e) {
        this.handleWindowTouchEnd(e);
    },
    handleWindowTouchMove: function (e) {
        var graphView = this._graphView;
        this.redraw();
        this._logicalPoint = graphView.getLogicalPoint(e);
        this.autoScroll(e);
        this._targetNode = this.getNodeAt(e);
        if(this._targetNode){
            graphView.getSelectionModel().setSelection([this._sourceNode, this._targetNode]);
        }else{
            graphView.getSelectionModel().setSelection([this._sourceNode]);
        }
        this.redraw();
    },
    handleWindowTouchEnd: function (e) {
        this.redraw();
        if(this._targetNode){
            var edge = new ht.Edge(this._sourceNode, this._targetNode);
            edge.setParent(this._graphView.getCurrentSubGraph());
            this._graphView.getDataModel().add(edge);
            this._graphView.getSelectionModel().setSelection(edge);
        }
        this._graphView.removeTopPainter(this);
    },
    redraw: function(){
        var p1 = this._sourceNode.getPosition(),
            p2 = this._logicalPoint;
        if(p1 && p2){
            var rect = ht.Default.unionPoint(p1, p2);
            ht.Default.grow(rect, 1);
            this._graphView.redraw(rect);
        }
    },
    draw: function (g) {
        var p1 = this._sourceNode.getPosition(),
            p2 = this._logicalPoint;
        if(p1 && p2){
            g.lineWidth = 1;
            g.strokeStyle = '#1ABC9C';
            g.beginPath();
            g.moveTo(p1.x, p1.y);
            g.lineTo(p2.x, p2.y);
            g.stroke();
        }
    }
});
