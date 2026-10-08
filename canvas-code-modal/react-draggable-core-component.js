// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Resolved require(928010) to 'prop-types-factory-wrapper'
// - Resolved require(640848) to 'react-dom-entry-wrapper'
// - Renamed variable 'o' to 'domInteractionUtils'
// - Resolved require(910087) to 'dom-interaction-utils'
// - Renamed variable 's' to 'draggableCoreUtils'
// - Resolved require(180643) to 'draggable-core-utils'
// - Renamed variable 'l' to 'componentPropUtils'
// - Resolved require(457587) to 'component-prop-utils'
// - Resolved require(824599) to 'canvas-doc-panel_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 129623
         */
module.exports = function (module, exports, require) {
  exports.default = undefined;
  var r = function (e, t) {
    if (e && e.__esModule) {
      return e;
    }
    if (e === null || typeof e != "object" && typeof e != "function") {
      return {
        default: e
      };
    }
    var n = d(t);
    if (n && n.has(e)) {
      return n.get(e);
    }
    var r = {};
    var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in e) {
      if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
        var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
        if (o && (o.get || o.set)) {
          Object.defineProperty(r, a, o);
        } else {
          r[a] = e[a];
        }
      }
    }
    r.default = e;
    if (n) {
      n.set(e, r);
    }
    return r;
  }(require("react-core-library-reexport") /*id: 634663*/);
  var i = c(require("prop-types-factory-wrapper") /*id: 928010*/);
  var a = c(require("react-dom-entry-wrapper") /*id: 640848*/);
  var domInteractionUtils = require("dom-interaction-utils") /*id: 910087*/;
  var draggableCoreUtils = require("draggable-core-utils") /*id: 180643*/;
  var componentPropUtils = require("component-prop-utils") /*id: 457587*/;
  var u = c(require("canvas-doc-panel_1") /*id: 824599*/);
  function c(e) {
    if (e && e.__esModule) {
      return e;
    } else {
      return {
        default: e
      };
    }
  }
  function d(e) {
    if (typeof WeakMap != "function") {
      return null;
    }
    var t = new WeakMap();
    var n = new WeakMap();
    return (d = function (e) {
      if (e) {
        return n;
      } else {
        return t;
      }
    })(e);
  }
  function f(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || e === null) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : String(r)) in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let h = {
    touch: {
      start: "touchstart",
      move: "touchmove",
      stop: "touchend"
    },
    mouse: {
      start: "mousedown",
      move: "mousemove",
      stop: "mouseup"
    }
  };
  let p = h.mouse;
  class g extends r.Component {
    constructor() {
      super(...arguments);
      f(this, "dragging", false);
      f(this, "lastX", NaN);
      f(this, "lastY", NaN);
      f(this, "touchIdentifier", null);
      f(this, "mounted", false);
      f(this, "handleDragStart", e => {
        this.props.onMouseDown(e);
        if (!this.props.allowAnyClick && typeof e.button == "number" && e.button !== 0) {
          return false;
        }
        let t = this.findDOMNode();
        if (!t || !t.ownerDocument || !t.ownerDocument.body) {
          throw Error("<DraggableCore> not mounted on DragStart!");
        }
        let {
          ownerDocument: n
        } = t;
        if (this.props.disabled || !(e.target instanceof n.defaultView.Node) || this.props.handle && !domInteractionUtils.matchesSelectorAndParentsTo(e.target, this.props.handle, t) || this.props.cancel && domInteractionUtils.matchesSelectorAndParentsTo(e.target, this.props.cancel, t)) {
          return;
        }
        if (e.type === "touchstart") {
          e.preventDefault();
        }
        let r = domInteractionUtils.getTouchIdentifier(e);
        this.touchIdentifier = r;
        let i = draggableCoreUtils.getControlPosition(e, r, this);
        if (i == null) {
          return;
        }
        let {
          x: a,
          y: l
        } = i;
        let c = draggableCoreUtils.createCoreData(this, a, l);
        u.default("DraggableCore: handleDragStart: %j", c);
        u.default("calling", this.props.onStart);
        if (this.props.onStart(e, c) !== false && this.mounted !== false) {
          if (this.props.enableUserSelectHack) {
            domInteractionUtils.addUserSelectStyles(n);
          }
          this.dragging = true;
          this.lastX = a;
          this.lastY = l;
          domInteractionUtils.addEvent(n, p.move, this.handleDrag);
          domInteractionUtils.addEvent(n, p.stop, this.handleDragStop);
        }
      });
      f(this, "handleDrag", e => {
        let t = draggableCoreUtils.getControlPosition(e, this.touchIdentifier, this);
        if (t == null) {
          return;
        }
        let {
          x: n,
          y: r
        } = t;
        if (Array.isArray(this.props.grid)) {
          let e = n - this.lastX;
          let t = r - this.lastY;
          [e, t] = draggableCoreUtils.snapToGrid(this.props.grid, e, t);
          if (!e && !t) {
            return;
          }
          n = this.lastX + e;
          r = this.lastY + t;
        }
        let i = draggableCoreUtils.createCoreData(this, n, r);
        u.default("DraggableCore: handleDrag: %j", i);
        if (this.props.onDrag(e, i) === false || this.mounted === false) {
          try {
            this.handleDragStop(new MouseEvent("mouseup"));
          } catch (t) {
            let e = document.createEvent("MouseEvents");
            e.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            this.handleDragStop(e);
          }
          return;
        }
        this.lastX = n;
        this.lastY = r;
      });
      f(this, "handleDragStop", e => {
        if (!this.dragging) {
          return;
        }
        let t = draggableCoreUtils.getControlPosition(e, this.touchIdentifier, this);
        if (t == null) {
          return;
        }
        let {
          x: n,
          y: r
        } = t;
        if (Array.isArray(this.props.grid)) {
          let e = n - this.lastX || 0;
          let t = r - this.lastY || 0;
          [e, t] = draggableCoreUtils.snapToGrid(this.props.grid, e, t);
          n = this.lastX + e;
          r = this.lastY + t;
        }
        let i = draggableCoreUtils.createCoreData(this, n, r);
        if (this.props.onStop(e, i) === false || this.mounted === false) {
          return false;
        }
        let a = this.findDOMNode();
        if (a && this.props.enableUserSelectHack) {
          domInteractionUtils.removeUserSelectStyles(a.ownerDocument);
        }
        u.default("DraggableCore: handleDragStop: %j", i);
        this.dragging = false;
        this.lastX = NaN;
        this.lastY = NaN;
        if (a) {
          u.default("DraggableCore: Removing handlers");
          domInteractionUtils.removeEvent(a.ownerDocument, p.move, this.handleDrag);
          domInteractionUtils.removeEvent(a.ownerDocument, p.stop, this.handleDragStop);
        }
      });
      f(this, "onMouseDown", e => {
        p = h.mouse;
        return this.handleDragStart(e);
      });
      f(this, "onMouseUp", e => {
        p = h.mouse;
        return this.handleDragStop(e);
      });
      f(this, "onTouchStart", e => {
        p = h.touch;
        return this.handleDragStart(e);
      });
      f(this, "onTouchEnd", e => {
        p = h.touch;
        return this.handleDragStop(e);
      });
    }
    componentDidMount() {
      this.mounted = true;
      let e = this.findDOMNode();
      if (e) {
        domInteractionUtils.addEvent(e, h.touch.start, this.onTouchStart, {
          passive: false
        });
      }
    }
    componentWillUnmount() {
      this.mounted = false;
      let e = this.findDOMNode();
      if (e) {
        let {
          ownerDocument: t
        } = e;
        domInteractionUtils.removeEvent(t, h.mouse.move, this.handleDrag);
        domInteractionUtils.removeEvent(t, h.touch.move, this.handleDrag);
        domInteractionUtils.removeEvent(t, h.mouse.stop, this.handleDragStop);
        domInteractionUtils.removeEvent(t, h.touch.stop, this.handleDragStop);
        domInteractionUtils.removeEvent(e, h.touch.start, this.onTouchStart, {
          passive: false
        });
        if (this.props.enableUserSelectHack) {
          domInteractionUtils.removeUserSelectStyles(t);
        }
      }
    }
    findDOMNode() {
      var e;
      var t;
      if ((e = this.props) !== null && e !== undefined && e.nodeRef) {
        if ((t = this.props) === null || t === undefined || (t = t.nodeRef) === null || t === undefined) {
          return undefined;
        } else {
          return t.current;
        }
      } else {
        return a.default.findDOMNode(this);
      }
    }
    render() {
      return r.cloneElement(r.Children.only(this.props.children), {
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onTouchEnd: this.onTouchEnd
      });
    }
  }
  exports.default = g;
  f(g, "displayName", "DraggableCore");
  f(g, "propTypes", {
    allowAnyClick: i.default.bool,
    children: i.default.node.isRequired,
    disabled: i.default.bool,
    enableUserSelectHack: i.default.bool,
    offsetParent: function (e, t) {
      if (e[t] && e[t].nodeType !== 1) {
        throw Error("Draggable's offsetParent must be a DOM Node.");
      }
    },
    grid: i.default.arrayOf(i.default.number),
    handle: i.default.string,
    cancel: i.default.string,
    nodeRef: i.default.object,
    onStart: i.default.func,
    onDrag: i.default.func,
    onStop: i.default.func,
    onMouseDown: i.default.func,
    scale: i.default.number,
    className: componentPropUtils.dontSetMe,
    style: componentPropUtils.dontSetMe,
    transform: componentPropUtils.dontSetMe
  });
  f(g, "defaultProps", {
    allowAnyClick: false,
    disabled: false,
    enableUserSelectHack: true,
    onStart: function () {},
    onDrag: function () {},
    onStop: function () {},
    onMouseDown: function () {},
    scale: 1
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}