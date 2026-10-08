// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Resolved require(928010) to 'prop-types-factory-wrapper'
// - Resolved require(640848) to 'react-dom-entry-wrapper'
// - Resolved require(820269) to 'conditional-classnames'
// - Renamed variable 's' to 'domInteractionUtils'
// - Resolved require(910087) to 'dom-interaction-utils'
// - Renamed variable 'l' to 'draggableCoreUtils'
// - Resolved require(180643) to 'draggable-core-utils'
// - Renamed variable 'u' to 'componentPropUtils'
// - Resolved require(457587) to 'component-prop-utils'
// - Resolved require(129623) to 'react-draggable-core-component'
// - Resolved require(824599) to 'canvas-doc-panel_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 811346
         */
module.exports = function (module, exports, require) {
  Object.defineProperty(exports, "DraggableCore", {
    enumerable: true,
    get: function () {
      return c.default;
    }
  });
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
    var n = h(t);
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
  var i = f(require("prop-types-factory-wrapper") /*id: 928010*/);
  var a = f(require("react-dom-entry-wrapper") /*id: 640848*/);
  var o = f(require("conditional-classnames") /*id: 820269*/);
  var domInteractionUtils = require("dom-interaction-utils") /*id: 910087*/;
  var draggableCoreUtils = require("draggable-core-utils") /*id: 180643*/;
  var componentPropUtils = require("component-prop-utils") /*id: 457587*/;
  var c = f(require("react-draggable-core-component") /*id: 129623*/);
  var d = f(require("canvas-doc-panel_1") /*id: 824599*/);
  function f(e) {
    if (e && e.__esModule) {
      return e;
    } else {
      return {
        default: e
      };
    }
  }
  function h(e) {
    if (typeof WeakMap != "function") {
      return null;
    }
    var t = new WeakMap();
    var n = new WeakMap();
    return (h = function (e) {
      if (e) {
        return n;
      } else {
        return t;
      }
    })(e);
  }
  function p() {
    return (p = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            e[r] = n[r];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function g(e, t, n) {
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
  class m extends r.Component {
    static getDerivedStateFromProps(e, t) {
      let {
        position: n
      } = e;
      let {
        prevPropsPosition: r
      } = t;
      if (n && (!r || n.x !== r.x || n.y !== r.y)) {
        d.default("Draggable: getDerivedStateFromProps %j", {
          position: n,
          prevPropsPosition: r
        });
        return {
          x: n.x,
          y: n.y,
          prevPropsPosition: {
            ...n
          }
        };
      } else {
        return null;
      }
    }
    constructor(e) {
      super(e);
      g(this, "onDragStart", (e, t) => {
        d.default("Draggable: onDragStart: %j", t);
        if (this.props.onStart(e, draggableCoreUtils.createDraggableData(this, t)) === false) {
          return false;
        }
        this.setState({
          dragging: true,
          dragged: true
        });
      });
      g(this, "onDrag", (e, t) => {
        if (!this.state.dragging) {
          return false;
        }
        d.default("Draggable: onDrag: %j", t);
        let n = draggableCoreUtils.createDraggableData(this, t);
        let r = {
          x: n.x,
          y: n.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          let {
            x: e,
            y: t
          } = r;
          r.x += this.state.slackX;
          r.y += this.state.slackY;
          let [i, a] = draggableCoreUtils.getBoundPosition(this, r.x, r.y);
          r.x = i;
          r.y = a;
          r.slackX = this.state.slackX + (e - r.x);
          r.slackY = this.state.slackY + (t - r.y);
          n.x = r.x;
          n.y = r.y;
          n.deltaX = r.x - this.state.x;
          n.deltaY = r.y - this.state.y;
        }
        if (this.props.onDrag(e, n) === false) {
          return false;
        }
        this.setState(r);
      });
      g(this, "onDragStop", (e, t) => {
        if (!this.state.dragging || this.props.onStop(e, draggableCoreUtils.createDraggableData(this, t)) === false) {
          return false;
        }
        d.default("Draggable: onDragStop: %j", t);
        let n = {
          dragging: false,
          slackX: 0,
          slackY: 0
        };
        if (this.props.position) {
          let {
            x: e,
            y: t
          } = this.props.position;
          n.x = e;
          n.y = t;
        }
        this.setState(n);
      });
      this.state = {
        dragging: false,
        dragged: false,
        x: e.position ? e.position.x : e.defaultPosition.x,
        y: e.position ? e.position.y : e.defaultPosition.y,
        prevPropsPosition: {
          ...e.position
        },
        slackX: 0,
        slackY: 0,
        isElementSVG: false
      };
      if (e.position) {
        if (!e.onDrag) {
          e.onStop;
        }
      }
    }
    componentDidMount() {
      if (window.SVGElement !== undefined && this.findDOMNode() instanceof window.SVGElement) {
        this.setState({
          isElementSVG: true
        });
      }
    }
    componentWillUnmount() {
      this.setState({
        dragging: false
      });
    }
    findDOMNode() {
      var t;
      return ((t = this.props) === null || t === undefined || (t = t.nodeRef) === null || t === undefined ? undefined : t.current) ?? a.default.findDOMNode(this);
    }
    render() {
      let {
        axis: e,
        bounds: t,
        children: n,
        defaultPosition: i,
        defaultClassName: a,
        defaultClassNameDragging: u,
        defaultClassNameDragged: d,
        position: f,
        positionOffset: h,
        scale: g,
        ...m
      } = this.props;
      let v = {};
      let y = null;
      let w = !f || this.state.dragging;
      let b = f || i;
      let x = {
        x: draggableCoreUtils.canDragX(this) && w ? this.state.x : b.x,
        y: draggableCoreUtils.canDragY(this) && w ? this.state.y : b.y
      };
      if (this.state.isElementSVG) {
        y = domInteractionUtils.createSVGTransform(x, h);
      } else {
        v = domInteractionUtils.createCSSTransform(x, h);
      }
      let S = o.default(n.props.className || "", a, {
        [u]: this.state.dragging,
        [d]: this.state.dragged
      });
      return r.createElement(c.default, p({}, m, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), r.cloneElement(r.Children.only(n), {
        className: S,
        style: {
          ...n.props.style,
          ...v
        },
        transform: y
      }));
    }
  }
  exports.default = m;
  g(m, "displayName", "Draggable");
  g(m, "propTypes", {
    ...c.default.propTypes,
    axis: i.default.oneOf(["both", "x", "y", "none"]),
    bounds: i.default.oneOfType([i.default.shape({
      left: i.default.number,
      right: i.default.number,
      top: i.default.number,
      bottom: i.default.number
    }), i.default.string, i.default.oneOf([false])]),
    defaultClassName: i.default.string,
    defaultClassNameDragging: i.default.string,
    defaultClassNameDragged: i.default.string,
    defaultPosition: i.default.shape({
      x: i.default.number,
      y: i.default.number
    }),
    positionOffset: i.default.shape({
      x: i.default.oneOfType([i.default.number, i.default.string]),
      y: i.default.oneOfType([i.default.number, i.default.string])
    }),
    position: i.default.shape({
      x: i.default.number,
      y: i.default.number
    }),
    className: componentPropUtils.dontSetMe,
    style: componentPropUtils.dontSetMe,
    transform: componentPropUtils.dontSetMe
  });
  g(m, "defaultProps", {
    ...c.default.defaultProps,
    axis: "both",
    bounds: false,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: {
      x: 0,
      y: 0
    },
    scale: 1
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}