import {STATIC_IMAGEPATH} from '../../config'
const shrinkImg = STATIC_IMAGEPATH + 'shrink.png'
const expandImg = STATIC_IMAGEPATH + 'expand.png'
export class ToggleOverview {
  constructor(graphView) {
    var self = this;
    ToggleOverview.superClass.constructor.apply(self, [graphView]);
    self._expand = true;

    var div = document.createElement("div");
    div.style.setProperty("width", "24px", null);
    div.style.setProperty("height", "24px", null);
    div.style.setProperty("position", "absolute", null);
    div.style.setProperty("right", "0", null);
    div.style.setProperty("top", "0", null);
    div.style.setProperty("background", " url("+shrinkImg+") no-repeat", null);
    div.style.setProperty("background-position", "center center", null);
    self._view.appendChild(div);

    function handleTransitionEnd(e) {
      if (e.propertyName === "width") {
        self.invalidate();
      }
    }
    self._view.addEventListener("webkitTransitionEnd", handleTransitionEnd, false);
    self._view.addEventListener("transitionend", handleTransitionEnd, false);
    var eventName = ht.Default.isTouchable ? "touchstart" : "mousedown";
    div.addEventListener(eventName, function(e) {
      if (self._expand) {
        self._view.style.setProperty("width", "24px", null);
        self._view.style.setProperty("height", "24px", null);
        self._canvas.style.setProperty("opacity", "0", null);
        self._mask.style.setProperty("opacity", "0", null);
        div.style.setProperty("background-image", "url("+expandImg+")", null);
        div.style.setProperty("width", "24px", null);
        div.style.setProperty("height", "24px", null);
        self._expand = false;
      } else {
        self._view.style.setProperty("width", "", null);
        self._view.style.setProperty("height", "", null);
        self._canvas.style.setProperty("opacity", "1", null);
        self._mask.style.setProperty("opacity", "1", null);
        div.style.setProperty("background-image", "url("+shrinkImg+")", null);
        div.style.setProperty("width", "24px", null);
        div.style.setProperty("height", "24px", null);
        self._expand = true;
      }
      self.invalidate();
      e.stopPropagation();
    });
    self.setContentBackground("white");
  }
}
ht.Default.def(ToggleOverview, ht.graph.Overview, {});
