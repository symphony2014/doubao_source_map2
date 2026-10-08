// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'debounceUtil_1_1'
// - Resolved require(887312) to 'debounce-util_1_1'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'c' to 'resizeObserverPolyfill'
// - Resolved require(412454) to 'resize-observer-polyfill'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(18504) to 'perfect-scrollbar-loadable'
// - Resolved require.bind(524625) to 'perfect-scrollbar'
// - Updated imported property 'Z' to 'ResizeObserver' (module 412454)
// - Updated imported property 'Z' to 'debounce' (module 887312)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 930828
         */
module.exports = function (module, exports, require) {
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var resizeObserverPolyfill = require("resize-observer-polyfill") /*id: 412454*/;
  function d(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  let u = new WeakMap();
  class h {
    constructor(e) {
      var i = this;
      this.options = e;
      d(this, "resizeObserver", undefined);
      d(this, "initResizeObserver", () => {
        let {
          resizeHandler: e,
          element: i
        } = this.options;
        this.resizeObserver = new resizeObserverPolyfill.ResizeObserver(e);
        try {
          this.observe(i);
        } catch (e) {}
      });
      d(this, "observe", function (e = i.options.element) {
        if (i.resizeObserver) {
          i.resizeObserver.observe(e);
        }
      });
      d(this, "unobserve", function (e = i.options.element) {
        if (i.resizeObserver) {
          i.resizeObserver.unobserve(e);
        }
      });
      d(this, "destroy", () => {
        this.disconnect();
        this.resizeObserver = null;
      });
      d(this, "disconnect", () => {
        if (this.resizeObserver) {
          this.resizeObserver.disconnect();
        }
      });
      this.initResizeObserver();
    }
  }
  let g = e => {
    if (u.has(e)) {
      return u.get(e);
    }
    let i = new h(e);
    u.set(e, i);
    return i;
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function f(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  (r = {})[r.Normal = 0] = "Normal";
  r[r.Small = 1] = "Small";
  let v = r;
  let m = {
    handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
    wheelSpeed: 1,
    wheelPropagation: false,
    swipeEasing: true,
    scrollingThreshold: 1000,
    useBothWheelAxes: false,
    suppressScrollX: false,
    suppressScrollY: false,
    scrollXMarginOffset: 0,
    scrollYMarginOffset: 0,
    minScrollbarLength: 20
  };
  let b = {
    "ps-scroll-y": "onScrollY",
    "ps-scroll-x": "onScrollX",
    "ps-scroll-up": "onScrollUp",
    "ps-scroll-down": "onScrollDown",
    "ps-scroll-left": "onScrollLeft",
    "ps-scroll-right": "onScrollRight",
    "ps-y-reach-start": "onYReachStart",
    "ps-y-reach-end": "onYReachEnd",
    "ps-x-reach-start": "onXReachStart",
    "ps-x-reach-end": "onXReachEnd"
  };
  Object.freeze(b);
  class _ extends reactCoreLibraryReexport.Component {
    componentDidMount() {
      require.e("perfect-scrollbar-loadable") /*id: 18504*/.then(require.bind(require, "perfect-scrollbar") /*id: 524625*/).then(e => {
        let i = e.default;
        this.ps = new i(this.container, {
          ...m,
          ...this.props.options
        });
        if (this.props.updateScrollbarWhenResize) {
          this.initResizeObserver();
        }
        this.bindDragStart();
      });
    }
    componentDidUpdate(e = {}) {
      this.updateEventHook(e);
      if (this.ps && typeof this.ps.update == "function") {
        this.ps.update();
      }
    }
    componentWillUnmount() {
      var e;
      this.unbindDragStart();
      Object.keys(b).forEach(e => {
        let i = this.props[b[e]];
        if (i && typeof i == "function" && this.container) {
          this.container.removeEventListener(e, i, false);
        }
      });
      if (this.ps && typeof this.ps.destroy == "function") {
        this.ps.destroy();
      }
      this.ps = null;
      if ((e = this.resizeObserver) !== null && e !== undefined) {
        e.destroy();
      }
    }
    render() {
      let {
        id: e,
        children: i,
        className: n,
        style: r,
        tabIndex: o,
        size: l,
        onContextMenu: a,
        onDoubleClick: c,
        onWheel: d
      } = this.props;
      return reactJsxRuntimeCoreReexport.jsx("div", {
        id: e,
        className: s(`scrollbar-container ${n}`, {
          "scrollbar-container-small": l === v.Small
        }),
        style: r,
        onWheel: d,
        tabIndex: o,
        ref: this.handleRef,
        onScroll: this.handleScroll,
        onContextMenu: a,
        onDoubleClick: c,
        children: i
      });
    }
    constructor(...e) {
      var i;
      super(...e);
      i = this;
      f(this, "ps", null);
      f(this, "container", undefined);
      f(this, "resizeObserver", undefined);
      f(this, "initResizeObserver", () => {
        this.resizeObserver = g({
          element: this.container,
          resizeHandler: this.handleWrapperResize
        });
      });
      f(this, "handleWrapperResize", debounceUtil_1_1.debounce(() => {
        if (this.ps && typeof this.ps.update == "function") {
          this.ps.update();
          this.ps.update();
        }
      }, 500));
      f(this, "bindDragStart", () => {
        if (!this.container) {
          return;
        }
        let e = this.container.querySelector(".ps__thumb-y");
        if (e) {
          e.addEventListener("mousedown", this.handleYDragStart);
          e.addEventListener("touchstart", this.handleYDragStart);
        }
      });
      f(this, "unbindDragStart", () => {
        if (!this.container) {
          return;
        }
        let e = this.container.querySelector(".ps__thumb-y");
        if (e) {
          e.removeEventListener("mousedown", this.handleYDragStart);
          e.removeEventListener("touchstart", this.handleYDragStart);
        }
      });
      f(this, "bindDragEnd", () => {
        document.addEventListener("mouseup", this.handleYDragEnd);
        document.addEventListener("touchend", this.handleYDragEnd);
      });
      f(this, "unbindDragEnd", () => {
        document.removeEventListener("mouseup", this.handleYDragEnd);
        document.removeEventListener("touchend", this.handleYDragEnd);
      });
      f(this, "handleRef", e => {
        this.container = e;
        if (this.props.containerRef) {
          this.props.containerRef(e);
        }
      });
      f(this, "handleYDragStart", e => {
        let {
          onYDragStart: i
        } = this.props;
        if (i) {
          i(e);
        }
        this.bindDragEnd();
        e.stopPropagation();
      });
      f(this, "handleYDragEnd", e => {
        let {
          onYDragEnd: i
        } = this.props;
        if (i) {
          i(e);
        }
        this.unbindDragEnd();
      });
      f(this, "updateEventHook", function (e = {}) {
        Object.keys(b).forEach(n => {
          let r = i.props[b[n]];
          let o = e[b[n]];
          if (o !== r && i.container) {
            if (o) {
              i.container.removeEventListener(n, o, false);
            }
            if (r) {
              i.container.addEventListener(n, r, false);
            }
          }
        });
      });
      f(this, "handleScroll", e => {
        let {
          onScrollX: i,
          onScrollY: n
        } = this.props;
        if (i != null) {
          i(e);
        }
        if (n != null) {
          n(e);
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return _;
    },
    ScrollbarSize: function () {
      return v;
    }
  });
}