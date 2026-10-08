// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'OverflowList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 172119
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var s = {
    NONE: "none",
    PRIMARY: "primary",
    SUCCESS: "success",
    WARNING: "warning",
    DANGER: "danger"
  };
  var u = "bp5";
  if (typeof BLUEPRINT_NAMESPACE != "undefined") {
    u = BLUEPRINT_NAMESPACE;
  } else if (typeof REACT_APP_BLUEPRINT_NAMESPACE != "undefined") {
    u = REACT_APP_BLUEPRINT_NAMESPACE;
  }
  d("top");
  d("bottom");
  d("left");
  d("right");
  f(0);
  f(1);
  f(2);
  f(3);
  f(4);
  h(s.PRIMARY);
  h(s.SUCCESS);
  h(s.WARNING);
  h(s.DANGER);
  var c = `${u}-overflow-list`;
  var l = `${c}-spacer`;
  function f(e) {
    if (e !== undefined) {
      return `${u}-elevation-${e}`;
    }
  }
  function h(e) {
    if (e != null && e !== s.NONE) {
      return `${u}-intent-${e.toLowerCase()}`;
    }
  }
  function d(e) {
    if (e !== undefined) {
      return `${u}-position-${e}`;
    }
  }
  var p = {
    START: "start",
    END: "end"
  };
  var g = "Blueprint5";
  function v(e, t, n) {
    if (e == null && t == null) {
      return true;
    }
    if (e == null || t == null) {
      return false;
    }
    if (Array.isArray(e) || Array.isArray(t)) {
      return false;
    }
    if (n != null) {
      return m(e, t, n);
    }
    var r = Object.keys(e);
    var i = Object.keys(t);
    return m(e, t, {
      include: r
    }) && m(e, t, {
      include: i
    });
  }
  function m(e, t, n) {
    return function (e, t, n) {
      if ((r = n) != null && r.include != null) {
        return n.include;
      }
      if ((i = n) != null && i.exclude != null) {
        var r;
        var i;
        var o = Object.keys(e);
        var a = Object.keys(t);
        var s = o.concat(a).reduce(function (e, t) {
          e[t] = true;
          return e;
        }, {});
        n.exclude.forEach(function (e) {
          return delete s[e];
        });
        return Object.keys(s);
      }
      return [];
    }(e, t, n).every(function (n) {
      return e.hasOwnProperty(n) === t.hasOwnProperty(n) && e[n] === t[n];
    });
  }
  function y(e) {
    return typeof NODE_ENV != "undefined" && NODE_ENV === e;
  }
  var b = function (e) {
    function t() {
      var n = e.apply(this, arguments) || this;
      n.targetRef = n.props.targetRef ?? reactCoreLibraryReexport.createRef();
      n.prevElement = undefined;
      return n;
    }
    typescriptRuntimeHelpers.classExtends(t, e);
    t.prototype.render = function () {
      var e = reactCoreLibraryReexport.Children.only(this.props.children);
      if (this.props.targetRef !== undefined) {
        return e;
      } else {
        return reactCoreLibraryReexport.cloneElement(e, {
          ref: this.targetRef
        });
      }
    };
    t.prototype.componentDidMount = function () {
      var e = this;
      this.observer = globalThis.ResizeObserver != null ? new ResizeObserver(function (t) {
        var n;
        var r;
        if ((r = (n = e.props).onResize) === null || r === undefined) {
          return undefined;
        } else {
          return r.call(n, t);
        }
      }) : undefined;
      this.observeElement();
    };
    t.prototype.componentDidUpdate = function (e) {
      this.observeElement(this.props.observeParents !== e.observeParents);
    };
    t.prototype.componentWillUnmount = function () {
      var e;
      if ((e = this.observer) !== null && e !== undefined) {
        e.disconnect();
      }
      this.prevElement = undefined;
    };
    t.prototype.observeElement = function (e = false) {
      if (this.observer !== undefined) {
        if (!(this.targetRef.current instanceof Element)) {
          this.observer.disconnect();
          return;
        }
        if ((this.targetRef.current !== this.prevElement || e) && (this.observer.disconnect(), this.prevElement = this.targetRef.current, this.observer.observe(this.targetRef.current), this.props.observeParents)) {
          for (var t = this.targetRef.current.parentElement; t != null;) {
            this.observer.observe(t);
            t = t.parentElement;
          }
        }
      }
    };
    t.displayName = `${g}.ResizeSensor`;
    return t;
  }(function (e) {
    function t(t) {
      var n = e.call(this, t) || this;
      n.timeoutIds = [];
      n.requestIds = [];
      n.clearTimeouts = function () {
        if (n.timeoutIds.length > 0) {
          var e = 0;
          var t = n.timeoutIds;
          for (; e < t.length; e++) {
            var r = t[e];
            window.clearTimeout(r);
          }
          n.timeoutIds = [];
        }
      };
      n.cancelAnimationFrames = function () {
        if (n.requestIds.length > 0) {
          var e = 0;
          var t = n.requestIds;
          for (; e < t.length; e++) {
            var r = t[e];
            window.cancelAnimationFrame(r);
          }
          n.requestIds = [];
        }
      };
      if (!y("production")) {
        n.validateProps(n.props);
      }
      return n;
    }
    typescriptRuntimeHelpers.classExtends(t, e);
    t.prototype.componentDidUpdate = function (e, t, n) {
      if (!y("production")) {
        this.validateProps(this.props);
      }
    };
    t.prototype.componentWillUnmount = function () {
      this.clearTimeouts();
      this.cancelAnimationFrames();
    };
    t.prototype.requestAnimationFrame = function (e) {
      var t = window.requestAnimationFrame(e);
      this.requestIds.push(t);
      return function () {
        return window.cancelAnimationFrame(t);
      };
    };
    t.prototype.setTimeout = function (e, t) {
      var n = window.setTimeout(e, t);
      this.timeoutIds.push(n);
      return function () {
        return window.clearTimeout(n);
      };
    };
    t.prototype.validateProps = function (e) {};
    return t;
  }(reactCoreLibraryReexport.PureComponent));
  var _ = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.state = {
        chopSize: t.defaultChopSize(),
        lastChopSize: null,
        lastOverflowCount: 0,
        overflow: [],
        repartitioning: false,
        visible: t.props.items
      };
      t.spacer = null;
      t.resize = function () {
        t.repartition();
      };
      return t;
    }
    typescriptRuntimeHelpers.classExtends(t, e);
    t.ofType = function () {
      return t;
    };
    t.prototype.componentDidMount = function () {
      this.repartition();
    };
    t.prototype.shouldComponentUpdate = function (e, t) {
      return this.props !== e || this.state === t || !v(this.state, t);
    };
    t.prototype.componentDidUpdate = function (e, t) {
      e.observeParents;
      this.props.observeParents;
      if (e.collapseFrom !== this.props.collapseFrom || e.items !== this.props.items || e.minVisibleItems !== this.props.minVisibleItems || e.overflowRenderer !== this.props.overflowRenderer || e.alwaysRenderOverflow !== this.props.alwaysRenderOverflow || e.visibleItemRenderer !== this.props.visibleItemRenderer) {
        this.setState({
          chopSize: this.defaultChopSize(),
          lastChopSize: null,
          lastOverflowCount: 0,
          overflow: [],
          repartitioning: true,
          visible: this.props.items
        });
      }
      var n;
      var r;
      var i = this.state;
      var o = i.repartitioning;
      var a = i.overflow;
      var s = i.lastOverflowCount;
      if (o === false && t.repartitioning === true) {
        if (a.length !== s) {
          if ((r = (n = this.props).onOverflow) !== null && r !== undefined) {
            r.call(n, a.slice());
          }
        }
      } else if (!v(t, this.state)) {
        this.repartition();
      }
    };
    t.prototype.render = function () {
      var e = this;
      var t = this.props;
      var n = t.className;
      var r = t.collapseFrom;
      var i = t.observeParents;
      var s = t.style;
      var u = t.tagName;
      var f = t.visibleItemRenderer;
      var h = this.maybeRenderOverflow();
      var d = reactCoreLibraryReexport.createElement(u === undefined ? "div" : u, {
        className: o(c, n),
        style: s
      }, r === p.START ? h : null, this.state.visible.map(f), r === p.END ? h : null, reactCoreLibraryReexport.createElement("div", {
        className: l,
        ref: function (t) {
          return e.spacer = t;
        }
      }));
      return reactCoreLibraryReexport.createElement(b, {
        onResize: this.resize,
        observeParents: i
      }, d);
    };
    t.prototype.maybeRenderOverflow = function () {
      var e = this.state.overflow;
      if (e.length !== 0 || this.props.alwaysRenderOverflow) {
        return this.props.overflowRenderer(e.slice());
      } else {
        return null;
      }
    };
    t.prototype.repartition = function () {
      var t = this;
      if (this.spacer != null) {
        var n = this.state.lastChopSize === 1;
        var r = this.props.minVisibleItems ?? 0;
        var i = this.spacer.offsetWidth < 0.9 && this.state.visible.length > r;
        var o = (this.spacer.offsetWidth >= 1 || this.state.visible.length < r) && this.state.overflow.length > 0 && !n;
        if (i || o) {
          this.setState(function (e) {
            if (t.props.collapseFrom === p.END) {
              var n;
              var r;
              var o = E(e.visible, e.overflow, t.state.chopSize * (i ? 1 : -1));
              n = o[0];
              r = o[1];
            } else {
              var o = E(e.overflow, e.visible, t.state.chopSize * (i ? -1 : 1));
              r = o[0];
              n = o[1];
            }
            return {
              chopSize: w(e.chopSize),
              lastChopSize: e.chopSize,
              lastOverflowCount: t.isFirstPartitionCycle(e.chopSize) ? e.overflow.length : e.lastOverflowCount,
              overflow: r,
              repartitioning: true,
              visible: n
            };
          });
        } else {
          this.setState({
            chopSize: this.defaultChopSize(),
            lastChopSize: null,
            repartitioning: false
          });
        }
      }
    };
    t.prototype.defaultChopSize = function () {
      return w(this.props.items.length);
    };
    t.prototype.isFirstPartitionCycle = function (e) {
      return e === this.defaultChopSize();
    };
    t.displayName = `${g}.OverflowList`;
    t.defaultProps = {
      alwaysRenderOverflow: false,
      collapseFrom: p.START,
      minVisibleItems: 0
    };
    return t;
  }(reactCoreLibraryReexport.Component);
  function w(e) {
    return Math.ceil(e / 2);
  }
  function E(e, t, n) {
    var r = e.concat(t);
    var i = e.length - n;
    if (i <= 0) {
      return [[], r];
    }
    if (i >= r.length) {
      return [r, []];
    }
    var o = r.length - i;
    return [r.slice(0, -o), r.slice(-o)];
  }
  require.d(exports, {
    OverflowList: function () {
      return _;
    }
  });
}