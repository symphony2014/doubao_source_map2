// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S_' to 'VariableSizeList'
// - Renamed export 't7' to 'FixedSizeList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 676834
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var assertThisInitialized = require("assert-this-initialized") /*id: 876127*/;
  var classInheritanceHelper_1 = require("class-inheritance-helper_1") /*id: 298550*/;
  var memoizeFunctionUtil = require("memoize-function-util") /*id: 825529*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var l = typeof performance == "object" && typeof performance.now == "function" ? function () {
    return performance.now();
  } : function () {
    return Date.now();
  };
  function h(t) {
    cancelAnimationFrame(t.id);
  }
  function c(t, e) {
    var r = l();
    function i() {
      if (l() - r >= e) {
        t.call(null);
      } else {
        n.id = requestAnimationFrame(i);
      }
    }
    var n = {
      id: requestAnimationFrame(i)
    };
    return n;
  }
  var u = -1;
  function d(t = false) {
    if (u === -1 || t) {
      var e = document.createElement("div");
      var r = e.style;
      r.width = "50px";
      r.height = "50px";
      r.overflow = "scroll";
      document.body.appendChild(e);
      u = e.offsetWidth - e.clientWidth;
      document.body.removeChild(e);
    }
    return u;
  }
  var f = null;
  function p(t = false) {
    if (f === null || t) {
      var e = document.createElement("div");
      var r = e.style;
      r.width = "50px";
      r.height = "50px";
      r.overflow = "scroll";
      r.direction = "rtl";
      var i = document.createElement("div");
      var n = i.style;
      n.width = "100px";
      n.height = "100px";
      e.appendChild(i);
      document.body.appendChild(e);
      if (e.scrollLeft > 0) {
        f = "positive-descending";
      } else {
        e.scrollLeft = 1;
        f = e.scrollLeft === 0 ? "negative" : "positive-ascending";
      }
      document.body.removeChild(e);
    }
    return f;
  }
  var g = 150;
  function m(t, e) {
    return t;
  }
  function v(t) {
    var e;
    var r = t.getItemOffset;
    var l = t.getEstimatedTotalSize;
    var u = t.getItemSize;
    var f = t.getOffsetForIndexAndAlignment;
    var v = t.getStartIndexForOffset;
    var b = t.getStopIndexForStartIndex;
    var A = t.initInstanceProps;
    var S = t.shouldResetStyleCacheOnItemSizeChange;
    var x = t.validateProps;
    (e = function (t) {
      function e(e) {
        var i;
        (i = t.call(this, e) || this)._instanceProps = A(i.props, assertThisInitialized.assertThisInit(i));
        i._outerRef = undefined;
        i._resetIsScrollingTimeoutId = null;
        i.state = {
          instance: assertThisInitialized.assertThisInit(i),
          isScrolling: false,
          scrollDirection: "forward",
          scrollOffset: typeof i.props.initialScrollOffset == "number" ? i.props.initialScrollOffset : 0,
          scrollUpdateWasRequested: false
        };
        i._callOnItemsRendered = undefined;
        i._callOnItemsRendered = memoizeFunctionUtil.default(function (t, e, r, n) {
          return i.props.onItemsRendered({
            overscanStartIndex: t,
            overscanStopIndex: e,
            visibleStartIndex: r,
            visibleStopIndex: n
          });
        });
        i._callOnScroll = undefined;
        i._callOnScroll = memoizeFunctionUtil.default(function (t, e, r) {
          return i.props.onScroll({
            scrollDirection: t,
            scrollOffset: e,
            scrollUpdateWasRequested: r
          });
        });
        i._getItemStyle = undefined;
        i._getItemStyle = function (t) {
          var e;
          var n = i.props;
          var o = n.direction;
          var s = n.itemSize;
          var a = n.layout;
          var l = i._getItemStyleCache(S && s, S && a, S && o);
          if (l.hasOwnProperty(t)) {
            e = l[t];
          } else {
            var h = r(i.props, t, i._instanceProps);
            var c = u(i.props, t, i._instanceProps);
            var d = o === "horizontal" || a === "horizontal";
            var f = o === "rtl";
            var p = d ? h : 0;
            l[t] = e = {
              position: "absolute",
              left: f ? undefined : p,
              right: f ? p : undefined,
              top: d ? 0 : h,
              height: d ? "100%" : c,
              width: d ? c : "100%"
            };
          }
          return e;
        };
        i._getItemStyleCache = undefined;
        i._getItemStyleCache = memoizeFunctionUtil.default(function (t, e, r) {
          return {};
        });
        i._onScrollHorizontal = function (t) {
          var e = t.currentTarget;
          var r = e.clientWidth;
          var n = e.scrollLeft;
          var o = e.scrollWidth;
          i.setState(function (t) {
            if (t.scrollOffset === n) {
              return null;
            }
            var e = i.props.direction;
            var s = n;
            if (e === "rtl") {
              switch (p()) {
                case "negative":
                  s = -n;
                  break;
                case "positive-descending":
                  s = o - r - n;
              }
            }
            s = Math.max(0, Math.min(s, o - r));
            return {
              isScrolling: true,
              scrollDirection: t.scrollOffset < s ? "forward" : "backward",
              scrollOffset: s,
              scrollUpdateWasRequested: false
            };
          }, i._resetIsScrollingDebounced);
        };
        i._onScrollVertical = function (t) {
          var e = t.currentTarget;
          var r = e.clientHeight;
          var n = e.scrollHeight;
          var o = e.scrollTop;
          i.setState(function (t) {
            if (t.scrollOffset === o) {
              return null;
            }
            var e = Math.max(0, Math.min(o, n - r));
            return {
              isScrolling: true,
              scrollDirection: t.scrollOffset < e ? "forward" : "backward",
              scrollOffset: e,
              scrollUpdateWasRequested: false
            };
          }, i._resetIsScrollingDebounced);
        };
        i._outerRefSetter = function (t) {
          var e = i.props.outerRef;
          i._outerRef = t;
          if (typeof e == "function") {
            e(t);
          } else if (e != null && typeof e == "object" && e.hasOwnProperty("current")) {
            e.current = t;
          }
        };
        i._resetIsScrollingDebounced = function () {
          if (i._resetIsScrollingTimeoutId !== null) {
            h(i._resetIsScrollingTimeoutId);
          }
          i._resetIsScrollingTimeoutId = c(i._resetIsScrolling, g);
        };
        i._resetIsScrolling = function () {
          i._resetIsScrollingTimeoutId = null;
          i.setState({
            isScrolling: false
          }, function () {
            i._getItemStyleCache(-1, null);
          });
        };
        return i;
      }
      classInheritanceHelper_1.setupInheritance(e, t);
      e.getDerivedStateFromProps = function (t, e) {
        y(t, e);
        x(t);
        return null;
      };
      var w = e.prototype;
      w.scrollTo = function (t) {
        t = Math.max(0, t);
        this.setState(function (e) {
          if (e.scrollOffset === t) {
            return null;
          } else {
            return {
              scrollDirection: e.scrollOffset < t ? "forward" : "backward",
              scrollOffset: t,
              scrollUpdateWasRequested: true
            };
          }
        }, this._resetIsScrollingDebounced);
      };
      w.scrollToItem = function (t, e = "auto") {
        var r = this.props;
        var i = r.itemCount;
        var n = r.layout;
        var o = this.state.scrollOffset;
        t = Math.max(0, Math.min(t, i - 1));
        var s = 0;
        if (this._outerRef) {
          var a = this._outerRef;
          s = n === "vertical" ? a.scrollWidth > a.clientWidth ? d() : 0 : a.scrollHeight > a.clientHeight ? d() : 0;
        }
        this.scrollTo(f(this.props, t, e, o, this._instanceProps, s));
      };
      w.componentDidMount = function () {
        var t = this.props;
        var e = t.direction;
        var r = t.initialScrollOffset;
        var i = t.layout;
        if (typeof r == "number" && this._outerRef != null) {
          var n = this._outerRef;
          if (e === "horizontal" || i === "horizontal") {
            n.scrollLeft = r;
          } else {
            n.scrollTop = r;
          }
        }
        this._callPropsCallbacks();
      };
      w.componentDidUpdate = function () {
        var t = this.props;
        var e = t.direction;
        var r = t.layout;
        var i = this.state;
        var n = i.scrollOffset;
        if (i.scrollUpdateWasRequested && this._outerRef != null) {
          var o = this._outerRef;
          if (e === "horizontal" || r === "horizontal") {
            if (e === "rtl") {
              switch (p()) {
                case "negative":
                  o.scrollLeft = -n;
                  break;
                case "positive-ascending":
                  o.scrollLeft = n;
                  break;
                default:
                  var s = o.clientWidth;
                  var a = o.scrollWidth;
                  o.scrollLeft = a - s - n;
              }
            } else {
              o.scrollLeft = n;
            }
          } else {
            o.scrollTop = n;
          }
        }
        this._callPropsCallbacks();
      };
      w.componentWillUnmount = function () {
        if (this._resetIsScrollingTimeoutId !== null) {
          h(this._resetIsScrollingTimeoutId);
        }
      };
      w.render = function () {
        var t = this.props;
        var e = t.children;
        var r = t.className;
        var n = t.direction;
        var o = t.height;
        var s = t.innerRef;
        var h = t.innerElementType;
        var c = t.innerTagName;
        var u = t.itemCount;
        var d = t.itemData;
        var f = t.itemKey;
        var p = f === undefined ? m : f;
        var g = t.layout;
        var v = t.outerElementType;
        var y = t.outerTagName;
        var b = t.style;
        var A = t.useIsScrolling;
        var S = t.width;
        var x = this.state.isScrolling;
        var w = n === "horizontal" || g === "horizontal";
        var C = w ? this._onScrollHorizontal : this._onScrollVertical;
        var T = this._getRangeToRender();
        var E = T[0];
        var F = T[1];
        var k = [];
        if (u > 0) {
          for (var P = E; P <= F; P++) {
            k.push(reactCoreLibraryReexport.createElement(e, {
              data: d,
              key: p(P, d),
              index: P,
              isScrolling: A ? x : undefined,
              style: this._getItemStyle(P)
            }));
          }
        }
        var R = l(this.props, this._instanceProps);
        return reactCoreLibraryReexport.createElement(v || y || "div", {
          className: r,
          onScroll: C,
          ref: this._outerRefSetter,
          style: objectAssignUtil.objectAssign({
            position: "relative",
            height: o,
            width: S,
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            willChange: "transform",
            direction: n
          }, b)
        }, reactCoreLibraryReexport.createElement(h || c || "div", {
          children: k,
          ref: s,
          style: {
            height: w ? "100%" : R,
            pointerEvents: x ? "none" : undefined,
            width: w ? R : "100%"
          }
        }));
      };
      w._callPropsCallbacks = function () {
        if (typeof this.props.onItemsRendered == "function" && this.props.itemCount > 0) {
          var t = this._getRangeToRender();
          var e = t[0];
          var r = t[1];
          var i = t[2];
          var n = t[3];
          this._callOnItemsRendered(e, r, i, n);
        }
        if (typeof this.props.onScroll == "function") {
          var o = this.state;
          var s = o.scrollDirection;
          var a = o.scrollOffset;
          var l = o.scrollUpdateWasRequested;
          this._callOnScroll(s, a, l);
        }
      };
      w._getRangeToRender = function () {
        var t = this.props;
        var e = t.itemCount;
        var r = t.overscanCount;
        var i = this.state;
        var n = i.isScrolling;
        var o = i.scrollDirection;
        var s = i.scrollOffset;
        if (e === 0) {
          return [0, 0, 0, 0];
        }
        var a = v(this.props, s, this._instanceProps);
        var l = b(this.props, a, s, this._instanceProps);
        return [Math.max(0, a - (n && o !== "backward" ? 1 : Math.max(1, r))), Math.max(0, Math.min(e - 1, l + (n && o !== "forward" ? 1 : Math.max(1, r)))), a, l];
      };
      return e;
    }(reactCoreLibraryReexport.PureComponent)).defaultProps = {
      direction: "ltr",
      itemData: undefined,
      layout: "vertical",
      overscanCount: 2,
      useIsScrolling: false
    };
    return e;
  }
  function y(t, e) {
    t.children;
    t.direction;
    t.height;
    t.layout;
    t.innerTagName;
    t.outerTagName;
    t.width;
    e.instance;
  }
  var b = 50;
  function A(t, e, r) {
    var i = t.itemSize;
    var n = r.itemMetadataMap;
    var o = r.lastMeasuredIndex;
    if (e > o) {
      var s = 0;
      if (o >= 0) {
        var a = n[o];
        s = a.offset + a.size;
      }
      for (var l = o + 1; l <= e; l++) {
        var h = i(l);
        n[l] = {
          offset: s,
          size: h
        };
        s += h;
      }
      r.lastMeasuredIndex = e;
    }
    return n[e];
  }
  function S(t, e, r) {
    var i = e.itemMetadataMap;
    var n = e.lastMeasuredIndex;
    if ((n > 0 ? i[n].offset : 0) >= r) {
      return x(t, e, n, 0, r);
    } else {
      return w(t, e, Math.max(0, n), r);
    }
  }
  function x(t, e, r, i, n) {
    while (i <= r) {
      var o = i + Math.floor((r - i) / 2);
      var s = A(t, o, e).offset;
      if (s === n) {
        return o;
      }
      if (s < n) {
        i = o + 1;
      } else if (s > n) {
        r = o - 1;
      }
    }
    if (i > 0) {
      return i - 1;
    } else {
      return 0;
    }
  }
  function w(t, e, r, i) {
    var n = t.itemCount;
    var o = 1;
    while (r < n && A(t, r, e).offset < i) {
      r += o;
      o *= 2;
    }
    return x(t, e, Math.min(r, n - 1), Math.floor(r / 2), i);
  }
  function C(t, e) {
    var r = t.itemCount;
    var i = e.itemMetadataMap;
    var n = e.estimatedItemSize;
    var o = e.lastMeasuredIndex;
    var s = 0;
    if (o >= r) {
      o = r - 1;
    }
    if (o >= 0) {
      var a = i[o];
      s = a.offset + a.size;
    }
    return s + (r - o - 1) * n;
  }
  var T = v({
    getItemOffset: function (t, e, r) {
      return A(t, e, r).offset;
    },
    getItemSize: function (t, e, r) {
      return r.itemMetadataMap[e].size;
    },
    getEstimatedTotalSize: C,
    getOffsetForIndexAndAlignment: function (t, e, r, i, n, o) {
      var s = t.direction;
      var a = t.height;
      var l = t.layout;
      var h = t.width;
      var c = s === "horizontal" || l === "horizontal" ? h : a;
      var u = A(t, e, n);
      var d = Math.max(0, Math.min(C(t, n) - c, u.offset));
      var f = Math.max(0, u.offset - c + u.size + o);
      if (r === "smart") {
        r = i >= f - c && i <= d + c ? "auto" : "center";
      }
      switch (r) {
        case "start":
          return d;
        case "end":
          return f;
        case "center":
          return Math.round(f + (d - f) / 2);
        default:
          if (i >= f && i <= d) {
            return i;
          }
          if (i < f) {
            return f;
          }
          return d;
      }
    },
    getStartIndexForOffset: function (t, e, r) {
      return S(t, r, e);
    },
    getStopIndexForStartIndex: function (t, e, r, i) {
      var n = t.direction;
      var o = t.height;
      var s = t.itemCount;
      var a = t.layout;
      var l = t.width;
      var h = n === "horizontal" || a === "horizontal" ? l : o;
      var c = A(t, e, i);
      var u = r + h;
      var d = c.offset + c.size;
      var f = e;
      while (f < s - 1 && d < u) {
        d += A(t, ++f, i).size;
      }
      return f;
    },
    initInstanceProps: function (t, e) {
      var r = {
        itemMetadataMap: {},
        estimatedItemSize: t.estimatedItemSize || b,
        lastMeasuredIndex: -1
      };
      e.resetAfterIndex = function (t, i = true) {
        r.lastMeasuredIndex = Math.min(r.lastMeasuredIndex, t - 1);
        e._getItemStyleCache(-1);
        if (i) {
          e.forceUpdate();
        }
      };
      return r;
    },
    shouldResetStyleCacheOnItemSizeChange: false,
    validateProps: function (t) {
      t.itemSize;
    }
  });
  var E = v({
    getItemOffset: function (t, e) {
      return e * t.itemSize;
    },
    getItemSize: function (t, e) {
      return t.itemSize;
    },
    getEstimatedTotalSize: function (t) {
      var e = t.itemCount;
      return t.itemSize * e;
    },
    getOffsetForIndexAndAlignment: function (t, e, r, i, n, o) {
      var s = t.direction;
      var a = t.height;
      var l = t.itemCount;
      var h = t.itemSize;
      var c = t.layout;
      var u = t.width;
      var d = s === "horizontal" || c === "horizontal" ? u : a;
      var f = Math.max(0, l * h - d);
      var p = Math.min(f, e * h);
      var g = Math.max(0, e * h - d + h + o);
      if (r === "smart") {
        r = i >= g - d && i <= p + d ? "auto" : "center";
      }
      switch (r) {
        case "start":
          return p;
        case "end":
          return g;
        case "center":
          var m = Math.round(g + (p - g) / 2);
          if (m < Math.ceil(d / 2)) {
            return 0;
          }
          if (m > f + Math.floor(d / 2)) {
            return f;
          }
          return m;
        default:
          if (i >= g && i <= p) {
            return i;
          }
          if (i < g) {
            return g;
          }
          return p;
      }
    },
    getStartIndexForOffset: function (t, e) {
      return Math.max(0, Math.min(t.itemCount - 1, Math.floor(e / t.itemSize)));
    },
    getStopIndexForStartIndex: function (t, e, r) {
      var i = t.direction;
      var n = t.height;
      var o = t.itemCount;
      var s = t.itemSize;
      var a = t.layout;
      var l = t.width;
      var h = Math.ceil(((i === "horizontal" || a === "horizontal" ? l : n) + r - e * s) / s);
      return Math.max(0, Math.min(o - 1, e + h - 1));
    },
    initInstanceProps: function (t) {},
    shouldResetStyleCacheOnItemSizeChange: true,
    validateProps: function (t) {
      t.itemSize;
    }
  });
  require.d(exports, {
    VariableSizeList: function () {
      return T;
    },
    FixedSizeList: function () {
      return E;
    }
  });
}