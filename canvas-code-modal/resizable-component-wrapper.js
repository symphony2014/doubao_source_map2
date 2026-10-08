// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Resolved require(928010) to 'prop-types-factory-wrapper'
// - Resolved require(906423) to 'react-resizable-component'
// - Renamed variable 'o' to 'resizablePropsSchema'
// - Resolved require(857943) to 'resizable-props-schema'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 450418
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
    var n = u(t);
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
  var i = l(require("prop-types-factory-wrapper") /*id: 928010*/);
  var a = l(require("react-resizable-component") /*id: 906423*/);
  var resizablePropsSchema = require("resizable-props-schema") /*id: 857943*/;
  var s = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];
  function l(e) {
    if (e && e.__esModule) {
      return e;
    } else {
      return {
        default: e
      };
    }
  }
  function u(e) {
    if (typeof WeakMap != "function") {
      return null;
    }
    var t = new WeakMap();
    var n = new WeakMap();
    return (u = function (e) {
      if (e) {
        return n;
      } else {
        return t;
      }
    })(e);
  }
  function c() {
    return (c = Object.assign ? Object.assign.bind() : function (e) {
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
  function d(e, t) {
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
  function f(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] ?? {};
      if (t % 2) {
        d(Object(n), true).forEach(function (t) {
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
        d(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
    return e;
  }
  function h(e, t) {
    return (h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      e.__proto__ = t;
      return e;
    })(e, t);
  }
  var p = function (e) {
    function t() {
      var t;
      var n = arguments.length;
      var r = Array(n);
      var i = 0;
      for (; i < n; i++) {
        r[i] = arguments[i];
      }
      (t = e.call.apply(e, [this].concat(r)) || this).state = {
        width: t.props.width,
        height: t.props.height,
        propsWidth: t.props.width,
        propsHeight: t.props.height
      };
      t.onResize = function (e, n) {
        var r = n.size;
        if (t.props.onResize) {
          if (e.persist != null) {
            e.persist();
          }
          t.setState(r, function () {
            return t.props.onResize && t.props.onResize(e, n);
          });
        } else {
          t.setState(r);
        }
      };
      return t;
    }
    t.prototype = Object.create(e.prototype);
    t.prototype.constructor = t;
    h(t, e);
    t.getDerivedStateFromProps = function (e, t) {
      if (t.propsWidth !== e.width || t.propsHeight !== e.height) {
        return {
          width: e.width,
          height: e.height,
          propsWidth: e.width,
          propsHeight: e.height
        };
      } else {
        return null;
      }
    };
    t.prototype.render = function () {
      var e = this.props;
      var t = e.handle;
      var n = e.handleSize;
      e.onResize;
      var i = e.onResizeStart;
      var o = e.onResizeStop;
      var l = e.draggableOpts;
      var u = e.minConstraints;
      var d = e.maxConstraints;
      var h = e.lockAspectRatio;
      var p = e.axis;
      e.width;
      e.height;
      var g = e.resizeHandles;
      var m = e.style;
      var v = e.transformScale;
      var y = function (e, t) {
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
      }(e, s);
      return r.createElement(a.default, {
        axis: p,
        draggableOpts: l,
        handle: t,
        handleSize: n,
        height: this.state.height,
        lockAspectRatio: h,
        maxConstraints: d,
        minConstraints: u,
        onResizeStart: i,
        onResize: this.onResize,
        onResizeStop: o,
        resizeHandles: g,
        transformScale: v,
        width: this.state.width
      }, r.createElement("div", c({}, y, {
        style: f(f({}, m), {}, {
          width: this.state.width + "px",
          height: this.state.height + "px"
        })
      })));
    };
    return t;
  }(r.Component);
  exports.default = p;
  p.propTypes = f(f({}, resizablePropsSchema.resizableProps), {}, {
    children: i.default.element
  });
}