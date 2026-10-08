// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'reactDraggableComponent_1'
// - Resolved require(844569) to 'react-draggable-component_1'
// - Renamed variable 'a' to 'reactCloneElementUtil'
// - Resolved require(335295) to 'react-clone-element-util'
// - Renamed variable 'o' to 'resizablePropsSchema'
// - Resolved require(857943) to 'resizable-props-schema'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 906423
         */
module.exports = function (module, exports, require) {
  exports.__esModule = true;
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
    var n = l(t);
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
  var reactDraggableComponent_1 = require("react-draggable-component_1") /*id: 844569*/;
  var reactCloneElementUtil = require("react-clone-element-util") /*id: 335295*/;
  var resizablePropsSchema = require("resizable-props-schema") /*id: 857943*/;
  var s = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];
  function l(e) {
    if (typeof WeakMap != "function") {
      return null;
    }
    var t = new WeakMap();
    var n = new WeakMap();
    return (l = function (e) {
      if (e) {
        return n;
      } else {
        return t;
      }
    })(e);
  }
  function u() {
    return (u = Object.assign ? Object.assign.bind() : function (e) {
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
  function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      if (t) {
        r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      n.push.apply(n, r);
    }
    return n;
  }
  function d(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] ?? {};
      if (t % 2) {
        c(Object(n), true).forEach(function (t) {
          var r;
          var i;
          var a;
          r = e;
          i = t;
          a = n[t];
          if ((i = function (e) {
            var t = function (e, t) {
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
            }(e, "string");
            if (typeof t == "symbol") {
              return t;
            } else {
              return String(t);
            }
          }(i)) in r) {
            Object.defineProperty(r, i, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            r[i] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        c(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
    return e;
  }
  function f(e, t) {
    return (f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      e.__proto__ = t;
      return e;
    })(e, t);
  }
  var h = function (e) {
    function t() {
      var t;
      var n = arguments.length;
      var r = Array(n);
      var i = 0;
      for (; i < n; i++) {
        r[i] = arguments[i];
      }
      (t = e.call.apply(e, [this].concat(r)) || this).handleRefs = {};
      t.lastHandleRect = null;
      t.slack = null;
      return t;
    }
    t.prototype = Object.create(e.prototype);
    t.prototype.constructor = t;
    f(t, e);
    var n = t.prototype;
    n.componentWillUnmount = function () {
      this.resetData();
    };
    n.resetData = function () {
      this.lastHandleRect = this.slack = null;
    };
    n.runConstraints = function (e, t) {
      var n = this.props;
      var r = n.minConstraints;
      var i = n.maxConstraints;
      var a = n.lockAspectRatio;
      if (!r && !i && !a) {
        return [e, t];
      }
      if (a) {
        var o = this.props.width / this.props.height;
        if (Math.abs(e - this.props.width) > Math.abs((t - this.props.height) * o)) {
          t = e / o;
        } else {
          e = t * o;
        }
      }
      var s = e;
      var l = t;
      var u = this.slack || [0, 0];
      var c = u[0];
      var d = u[1];
      e += c;
      t += d;
      if (r) {
        e = Math.max(r[0], e);
        t = Math.max(r[1], t);
      }
      if (i) {
        e = Math.min(i[0], e);
        t = Math.min(i[1], t);
      }
      this.slack = [c + (s - e), d + (l - t)];
      return [e, t];
    };
    n.resizeHandler = function (e, t) {
      var n = this;
      return function (r, i) {
        var a = i.node;
        var o = i.deltaX;
        var s = i.deltaY;
        if (e === "onResizeStart") {
          n.resetData();
        }
        var l = (n.props.axis === "both" || n.props.axis === "x") && t !== "n" && t !== "s";
        var u = (n.props.axis === "both" || n.props.axis === "y") && t !== "e" && t !== "w";
        if (l || u) {
          var c = t[0];
          var d = t[t.length - 1];
          var f = a.getBoundingClientRect();
          if (n.lastHandleRect != null) {
            if (d === "w") {
              o += f.left - n.lastHandleRect.left;
            }
            if (c === "n") {
              s += f.top - n.lastHandleRect.top;
            }
          }
          n.lastHandleRect = f;
          if (d === "w") {
            o = -o;
          }
          if (c === "n") {
            s = -s;
          }
          var h = n.props.width + (l ? o / n.props.transformScale : 0);
          var p = n.props.height + (u ? s / n.props.transformScale : 0);
          var g = n.runConstraints(h, p);
          h = g[0];
          p = g[1];
          var m = h !== n.props.width || p !== n.props.height;
          var v = typeof n.props[e] == "function" ? n.props[e] : null;
          if (v && (e !== "onResize" || !!m)) {
            if (r.persist != null) {
              r.persist();
            }
            v(r, {
              node: a,
              size: {
                width: h,
                height: p
              },
              handle: t
            });
          }
          if (e === "onResizeStop") {
            n.resetData();
          }
        }
      };
    };
    n.renderResizeHandle = function (e, t) {
      var n = this.props.handle;
      if (!n) {
        return r.createElement("span", {
          className: "react-resizable-handle react-resizable-handle-" + e,
          ref: t
        });
      }
      if (typeof n == "function") {
        return n(e, t);
      }
      var i = d({
        ref: t
      }, typeof n.type == "string" ? {} : {
        handleAxis: e
      });
      return r.cloneElement(n, i);
    };
    n.render = function () {
      var e = this;
      var t = this.props;
      var n = t.children;
      var o = t.className;
      var l = t.draggableOpts;
      t.width;
      t.height;
      t.handle;
      t.handleSize;
      t.lockAspectRatio;
      t.axis;
      t.minConstraints;
      t.maxConstraints;
      t.onResize;
      t.onResizeStop;
      t.onResizeStart;
      var c = t.resizeHandles;
      t.transformScale;
      var f = function (e, t) {
        if (e == null) {
          return {};
        }
        var n;
        var r;
        var i = {};
        var a = Object.keys(e);
        for (r = 0; r < a.length; r++) {
          n = a[r];
          if (!(t.indexOf(n) >= 0)) {
            i[n] = e[n];
          }
        }
        return i;
      }(t, s);
      return reactCloneElementUtil.cloneElement(n, d(d({}, f), {}, {
        className: (o ? o + " " : "") + "react-resizable",
        children: [].concat(n.props.children, c.map(function (t) {
          var a = e.handleRefs[t] ??= r.createRef();
          return r.createElement(reactDraggableComponent_1.DraggableCore, u({}, l, {
            nodeRef: a,
            key: "resizableHandle-" + t,
            onStop: e.resizeHandler("onResizeStop", t),
            onStart: e.resizeHandler("onResizeStart", t),
            onDrag: e.resizeHandler("onResize", t)
          }), e.renderResizeHandle(t, a));
        }))
      }));
    };
    return t;
  }(r.Component);
  exports.default = h;
  h.propTypes = resizablePropsSchema.resizableProps;
  h.defaultProps = {
    axis: "both",
    handleSize: [20, 20],
    lockAspectRatio: false,
    minConstraints: [20, 20],
    maxConstraints: [Infinity, Infinity],
    resizeHandles: ["se"],
    transformScale: 1
  };
}