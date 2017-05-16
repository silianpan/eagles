export class CreateShapeInteractor {
  constructor(graphView) {
    CreateShapeInteractor.superClass.constructor.call(this, graphView);
    this._points = new ht.List();
  }
}
// var CreateShapeInteractor = function (graphView) {
//     CreateShapeInteractor.superClass.constructor.call(this, graphView);
//     this._points = new ht.List();
// };
ht.Default.def(CreateShapeInteractor, ht.graph.Interactor, {
    setUp: function () {
        CreateShapeInteractor.superClass.setUp.call(this);
        this._graphView.addTopPainter(this);
        this._onBackgroundDoubleClicked = this._graphView.onBackgroundDoubleClicked;
        this._graphView.onBackgroundDoubleClicked = function(){};
    },
    tearDown: function () {
        CreateShapeInteractor.superClass.tearDown.call(this);
        this._graphView.removeTopPainter(this);
        this._graphView.onBackgroundDoubleClicked = this._onBackgroundDoubleClicked;
    },
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
        if(!graphView._panning && !graphView._pinching && this.isLeftClick){
            this.redraw();
            if(ht.Default.isDoubleClick(e)){
                if(this._points.size() > 1){
                    var shape = new ht.Shape();
                    shape.setPoints(this._points);
                    shape.setParent(graphView.getCurrentSubGraph());
                    graphView.getDataModel().add(shape);
                    graphView.getSelectionModel().setSelection(shape);
                    this._points = new ht.List();
                }else{
                    this._points.clear();
                }
                this._movePoint = null;
            }else{
                this._points.add(this._graphView.getLogicalPoint(e));
            }
            this.redraw();
            delete this.isLeftClick;
        }
    },
    handle_mousemove: function (e) {
        if(this._points.size() > 0){
            this.redraw();
            this.autoScroll(e);
            this._movePoint = this._graphView.getLogicalPoint(e);
            this.redraw();
        }
    },
    redraw: function(){
        var points = this._points;
        if(points.size() > 0){
            if(this._movePoint){
                points = new ht.List(points);
                points.add(this._movePoint);
            }
            var rect = ht.Default.unionPoint(points);
            if(rect){
                ht.Default.grow(rect, 5);
                this._graphView.redraw(rect);
            }
        }
    },
    draw: function (g) {
        var size = this._points.size();
        if(size > 0){
            var point = this._points.get(0);
            g.lineWidth = 1;
            g.strokeStyle = '#1ABC9C';
            g.beginPath();
            g.moveTo(point.x, point.y);

            for(var i=1; i<size; i++){
                point = this._points.get(i);
                g.lineTo(point.x, point.y);
            }
            if(this._movePoint){
                g.lineTo(this._movePoint.x, this._movePoint.y);
            }
            g.stroke();

            for(i=0; i<size; i++){
                point = this._points.get(i);
                g.fillStyle = 'white';
                g.strokeStyle = '#34495E';
                g.lineWidth = 1;
                g.beginPath();
                g.arc(point.x, point.y, 4, 0, Math.PI * 2, true);
                g.fill();
                g.stroke();
            }
        }
    }
});
