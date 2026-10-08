// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'componentPropUtils'
// - Resolved require(457587) to 'component-prop-utils'
// - Renamed variable 'i' to 'domInteractionUtils'
// - Resolved require(910087) to 'dom-interaction-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 180643
         */
module.exports = function (module, exports, require) {
  exports.canDragX = function (e) {
    return e.props.axis === "both" || e.props.axis === "x";
  };
  exports.canDragY = function (e) {
    return e.props.axis === "both" || e.props.axis === "y";
  };
  exports.createCoreData = function (e, t, n) {
    let i = !componentPropUtils.isNum(e.lastX);
    let o = a(e);
    if (i) {
      return {
        node: o,
        deltaX: 0,
        deltaY: 0,
        lastX: t,
        lastY: n,
        x: t,
        y: n
      };
    } else {
      return {
        node: o,
        deltaX: t - e.lastX,
        deltaY: n - e.lastY,
        lastX: e.lastX,
        lastY: e.lastY,
        x: t,
        y: n
      };
    }
  };
  exports.createDraggableData = function (e, t) {
    let n = e.props.scale;
    return {
      node: t.node,
      x: e.state.x + t.deltaX / n,
      y: e.state.y + t.deltaY / n,
      deltaX: t.deltaX / n,
      deltaY: t.deltaY / n,
      lastX: e.state.x,
      lastY: e.state.y
    };
  };
  exports.getBoundPosition = function (e, t, n) {
    var o;
    if (!e.props.bounds) {
      return [t, n];
    }
    let {
      bounds: s
    } = e.props;
    s = typeof s == "string" ? s : {
      left: (o = s).left,
      top: o.top,
      right: o.right,
      bottom: o.bottom
    };
    let l = a(e);
    if (typeof s == "string") {
      let e;
      let {
        ownerDocument: t
      } = l;
      let n = t.defaultView;
      if (!((e = s === "parent" ? l.parentNode : t.querySelector(s)) instanceof n.HTMLElement)) {
        throw Error("Bounds selector \"" + s + "\" could not find an element.");
      }
      let a = n.getComputedStyle(l);
      let o = n.getComputedStyle(e);
      s = {
        left: -l.offsetLeft + componentPropUtils.int(o.paddingLeft) + componentPropUtils.int(a.marginLeft),
        top: -l.offsetTop + componentPropUtils.int(o.paddingTop) + componentPropUtils.int(a.marginTop),
        right: domInteractionUtils.innerWidth(e) - domInteractionUtils.outerWidth(l) - l.offsetLeft + componentPropUtils.int(o.paddingRight) - componentPropUtils.int(a.marginRight),
        bottom: domInteractionUtils.innerHeight(e) - domInteractionUtils.outerHeight(l) - l.offsetTop + componentPropUtils.int(o.paddingBottom) - componentPropUtils.int(a.marginBottom)
      };
    }
    if (componentPropUtils.isNum(s.right)) {
      t = Math.min(t, s.right);
    }
    if (componentPropUtils.isNum(s.bottom)) {
      n = Math.min(n, s.bottom);
    }
    if (componentPropUtils.isNum(s.left)) {
      t = Math.max(t, s.left);
    }
    if (componentPropUtils.isNum(s.top)) {
      n = Math.max(n, s.top);
    }
    return [t, n];
  };
  exports.getControlPosition = function (e, t, n) {
    let r = typeof t == "number" ? domInteractionUtils.getTouch(e, t) : null;
    if (typeof t == "number" && !r) {
      return null;
    }
    let o = a(n);
    let s = n.props.offsetParent || o.offsetParent || o.ownerDocument.body;
    return domInteractionUtils.offsetXYFromParent(r || e, s, n.props.scale);
  };
  exports.snapToGrid = function (e, t, n) {
    return [Math.round(t / e[0]) * e[0], Math.round(n / e[1]) * e[1]];
  };
  var componentPropUtils = require("component-prop-utils") /*id: 457587*/;
  var domInteractionUtils = require("dom-interaction-utils") /*id: 910087*/;
  function a(e) {
    let t = e.findDOMNode();
    if (!t) {
      throw Error("<DraggableCore>: Unmounted during event!");
    }
    return t;
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}