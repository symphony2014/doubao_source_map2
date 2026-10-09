// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DD' to 'dragDropManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 489337
         */
module.exports = function (module, exports, require) {
  exports.dragDropManager = undefined;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  let konvaTransformUtil = require("konva-transform-util") /*id: 390581*/;
  exports.dragDropManager = {
    get isDragging() {
      var n = false;
      exports.DD._dragElements.forEach(t => {
        if (t.dragStatus === "dragging") {
          n = true;
        }
      });
      return n;
    },
    justDragged: false,
    get node() {
      var s;
      exports.DD._dragElements.forEach(t => {
        s = t.node;
      });
      return s;
    },
    _dragElements: new Map(),
    _drag(t) {
      let i = [];
      exports.DD._dragElements.forEach((e, r) => {
        let {
          node: n
        } = e;
        let s = n.getStage();
        s.setPointersPositions(t);
        if (e.pointerId === undefined) {
          e.pointerId = konvaTransformUtil.Util._getFirstPointerId(t);
        }
        let o = s._changedPointerPositions.find(t => t.id === e.pointerId);
        if (o) {
          if (e.dragStatus !== "dragging") {
            var h = n.dragDistance();
            if (Math.max(Math.abs(o.x - e.startPointerPos.x), Math.abs(o.y - e.startPointerPos.y)) < h || (n.startDrag({
              evt: t
            }), !n.isDragging())) {
              return;
            }
          }
          n._setDragPosition(t, e);
          i.push(n);
        }
      });
      i.forEach(e => {
        e.fire("dragmove", {
          type: "dragmove",
          target: e,
          evt: t
        }, true);
      });
    },
    _endDragBefore(t) {
      let i = [];
      exports.DD._dragElements.forEach(a => {
        let {
          node: n
        } = a;
        let s = n.getStage();
        if (t) {
          s.setPointersPositions(t);
        }
        if (!s._changedPointerPositions.find(t => t.id === a.pointerId)) {
          return;
        }
        if (a.dragStatus === "dragging" || a.dragStatus === "stopped") {
          exports.DD.justDragged = true;
          konvaCoreConfig.Konva._mouseListenClick = false;
          konvaCoreConfig.Konva._touchListenClick = false;
          konvaCoreConfig.Konva._pointerListenClick = false;
          a.dragStatus = "stopped";
        }
        let o = a.node.getLayer() || a.node instanceof konvaCoreConfig.Konva.Stage && a.node;
        if (o && i.indexOf(o) === -1) {
          i.push(o);
        }
      });
      i.forEach(t => {
        t.draw();
      });
    },
    _endDragAfter(t) {
      exports.DD._dragElements.forEach((i, r) => {
        if (i.dragStatus === "stopped") {
          i.node.fire("dragend", {
            type: "dragend",
            target: i.node,
            evt: t
          }, true);
        }
        if (i.dragStatus !== "dragging") {
          exports.DD._dragElements.delete(r);
        }
      });
    }
  };
  if (konvaCoreConfig.Konva.isBrowser) {
    window.addEventListener("mouseup", exports.DD._endDragBefore, true);
    window.addEventListener("touchend", exports.DD._endDragBefore, true);
    window.addEventListener("mousemove", exports.DD._drag);
    window.addEventListener("touchmove", exports.DD._drag);
    window.addEventListener("mouseup", exports.DD._endDragAfter, false);
    window.addEventListener("touchend", exports.DD._endDragAfter, false);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}