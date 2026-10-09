// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Resolved require(640848) to 'react-dom-entry-wrapper'
// - Resolved require(928010) to 'prop-types-factory-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 217560
         */
module.exports = function (module, exports, require) {
  var r = function () {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var r = t[i];
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
          r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
      }
    }
    return function (t, i, r) {
      if (i) {
        e(t.prototype, i);
      }
      if (r) {
        e(t, r);
      }
      return t;
    };
  }();
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var s = l(reactCoreLibraryReexport);
  var o = l(require("react-dom-entry-wrapper") /*id: 640848*/);
  var a = l(require("prop-types-factory-wrapper") /*id: 928010*/);
  function l(e) {
    if (e && e.__esModule) {
      return e;
    } else {
      return {
        default: e
      };
    }
  }
  function u(e, t, i) {
    if (t in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  var d = typeof ResizeObserver != "undefined";
  var c = {
    position: "relative",
    width: "100%",
    height: "100%"
  };
  var p = {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
    top: 0
  };
  var h = {
    overflow: "hidden",
    width: "100%",
    height: "100%"
  };
  var f = {
    height: "200%",
    width: "200%"
  };
  var y = function (e) {
    function t(e) {
      (function (e, t) {
        if (!(e instanceof t)) {
          throw TypeError("Cannot call a class as a function");
        }
      })(this, t);
      var i = function (e, t) {
        if (!e) {
          throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        if (t && (typeof t == "object" || typeof t == "function")) {
          return t;
        } else {
          return e;
        }
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      i.state = {
        domWidth: 0,
        domHeight: 0
      };
      return i;
    }
    (function (e, t) {
      if (typeof t != "function" && t !== null) {
        throw TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    })(t, e);
    r(t, [{
      key: "componentDidMount",
      value: function () {
        var e = this;
        if (d) {
          this._resizeObserver = new ResizeObserver(function (t) {
            t.forEach(function (t) {
              var i = t.target;
              if (i.parentElement) {
                e._onResize({
                  height: i.offsetHeight,
                  width: i.offsetWidth
                });
              }
            });
          });
          var t = o.default.findDOMNode(this);
          this._resizeNode = t;
          if (!t) {
            return;
          }
          this._onResize({
            height: this._resizeNode.offsetHeight,
            width: this._resizeNode.offsetWidth
          });
          this._resizeObserver.observe(t);
        } else {
          this._resize();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function () {
        if (!d) {
          this.refExpand.scrollTop = this.refExpand.scrollHeight;
          this.refExpand.scrollLeft = this.refExpand.scrollWidth;
          this.refShrink.scrollTop = this.refShrink.scrollHeight;
          this.refShrink.scrollLeft = this.refShrink.scrollWidth;
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        if (this._resizeObserver) {
          this._resizeObserver.disconnect();
          this._resizeObserver = null;
        }
      }
    }, {
      key: "_onResize",
      value: function (e) {
        if (this.props.onResize) {
          this.props.onResize(e);
        }
      }
    }, {
      key: "_onExpand",
      value: function () {
        var e = this._getRect();
        this._resize(e);
        if (this.props.onExpand) {
          this.props.onExpand(e);
        }
        this._onResize(e);
      }
    }, {
      key: "_onShrink",
      value: function () {
        var e = this._getRect();
        this._resize(e);
        if (this.props.onShrink) {
          this.props.onShrink(e);
        }
        this._onResize(e);
      }
    }, {
      key: "_resize",
      value: function (e) {
        var t = (e = e || this._getRect()).width;
        var i = e.height;
        this.setState({
          domWidth: t + 1,
          domHeight: i + 1
        });
      }
    }, {
      key: "_getRect",
      value: function () {
        return this.refNode.getBoundingClientRect();
      }
    }, {
      key: "renderResizeEl",
      value: function () {
        return s.default.Children.only(this.props.children);
      }
    }, {
      key: "renderPolyfillEl",
      value: function () {
        var e;
        var t = this;
        var i = this.state;
        var r = i.domWidth;
        var n = i.domHeight;
        return s.default.createElement("div", {
          style: p,
          ref: function (e) {
            t.refNode = e;
          }
        }, s.default.createElement("div", {
          style: h,
          ref: function (e) {
            t.refExpand = e;
          },
          onScroll: this._onExpand.bind(this)
        }, s.default.createElement("div", {
          style: {
            width: r,
            height: n
          }
        })), s.default.createElement("div", (u(e = {
          ref: "shrink",
          style: h
        }, "ref", function (e) {
          t.refShrink = e;
        }), u(e, "onScroll", this._onShrink.bind(this)), e), s.default.createElement("div", {
          style: f
        })));
      }
    }, {
      key: "renderResizeContainer",
      value: function () {
        return s.default.createElement("div", {
          style: c
        }, this.props.children, this.renderPolyfillEl());
      }
    }, {
      key: "render",
      value: function () {
        if (d) {
          return this.renderResizeEl();
        } else {
          return this.renderResizeContainer();
        }
      }
    }]);
    return t;
  }(reactCoreLibraryReexport.Component);
  y.propTypes = {
    onExpand: a.default.func,
    onShrink: a.default.func
  };
  exports.default = y;
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}