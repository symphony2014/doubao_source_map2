// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'OverflowList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 395871
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var u = propTypesFactoryWrapper;
  let d = {
    PREFIX: require("semi-identifier") /*id: 247778*/.semiIdentifier + "-overflow-list"
  };
  let f = {
    COLLAPSE: "collapse",
    SCROLL: "scroll"
  };
  let p = {
    START: "start",
    END: "end"
  };
  let g = {
    NONE: 0,
    GROW: 1,
    SHRINK: 2
  };
  let m = {
    BOUNDARY_SET: Object.values(p),
    POSITION_SET: ["vertical", "horizontal"],
    MODE_SET: Object.values(f),
    MODE_MAP: f,
    BOUNDARY_MAP: p,
    OVERFLOW_DIR: g
  };
  let v = {
    MINIMUM_HTML_ELEMENT_WIDTH: 4
  };
  var resizeObserverComponent = require("resize-observer-component") /*id: 376612*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var isHtmlElementCheck = require("is-html-element-check") /*id: 287357*/;
  class S extends reactCoreLibraryReexport.PureComponent {
    componentDidMount() {
      let {
        items: t
      } = this.props;
      this.cachedKeys = Object.keys(t);
      let {
        root: e,
        threshold: r,
        rootMargin: i,
        option: n,
        onIntersect: o
      } = this.props;
      this.observer = new IntersectionObserver(o, Object.assign({
        root: e,
        threshold: r,
        rootMargin: i
      }, n));
      this.observeElement();
    }
    componentDidUpdate() {
      let {
        items: t
      } = this.props;
      let e = Object.keys(t);
      if (!deepEqualUtil_1.deepEqual(this.cachedKeys, e)) {
        this.observeElement(true);
        this.cachedKeys = e;
      }
    }
    componentWillUnmount() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
    }
    observeElement(t = false) {
      let {
        items: e
      } = this.props;
      if (isEmptyUtil.isEmpty(e)) {
        this.observer.disconnect();
        return;
      }
      if (t) {
        this.observer.disconnect();
      }
      Object.keys(e).forEach(t => {
        let r = e[t];
        if (r && isHtmlElementCheck.isHtmlElement(r)) {
          this.observer.observe(r);
        }
      });
    }
    render() {
      let {
        children: t
      } = this.props;
      return t;
    }
  }
  S.propTypes = {
    onIntersect: u.func,
    option: u.object,
    root: u.any,
    threshold: u.number,
    rootMargin: u.string,
    items: u.object
  };
  S.defaultProps = {
    onIntersect: () => undefined,
    threshold: 0.75,
    rootMargin: "0px",
    option: {},
    items: {}
  };
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  var deepCloneUtil = require("deep-clone-util") /*id: 539809*/;
  let C = m.BOUNDARY_MAP;
  m.OVERFLOW_DIR;
  class T extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(t) {
      super(Object.assign({}, t));
      this.previousY = undefined;
      this.isScrollMode = () => {
        let {
          renderMode: t
        } = this.getProps();
        return t === "scroll";
      };
      this.getReversedItems = () => {
        let {
          items: t
        } = this.getProps();
        return deepCloneUtil.deepClone(t).reverse();
      };
    }
    getOverflowItem() {
      let {
        items: t
      } = this.getProps();
      let {
        visibleState: e,
        overflow: r
      } = this.getStates();
      if (!this.isScrollMode()) {
        return r;
      }
      let i = t.map(t => {
        let {
          key: r
        } = t;
        return !!e.get(r);
      });
      let n = i.indexOf(true);
      let o = i.lastIndexOf(true);
      let s = [];
      s[0] = n >= 0 ? t.slice(0, n) : [];
      s[1] = o >= 0 ? t.slice(o + 1, t.length) : t;
      return s;
    }
    handleIntersect(t) {
      let e = deepCloneUtil.deepClone(this.getState("visibleState"));
      let r = {};
      t.forEach(t => {
        let n = objectPathGetDefault.getObjectPathDefault(t, "target.dataset.scrollkey");
        let o = t.isIntersecting;
        r[n] = t;
        e.set(n, o);
      });
      let n = false;
      for (let t of e.values()) {
        if (t) {
          n = true;
          break;
        }
      }
      let o = n;
      let [s] = t;
      let a = s.boundingClientRect.y;
      if (!o && this.previousY !== undefined && a !== this.previousY) {
        this.previousY = a;
        return;
      }
      this.previousY = a;
      this._adapter.updateVisibleState(e);
      this._adapter.notifyIntersect(r);
    }
    handleCollapseOverflow() {
      let {
        minVisibleItems: t,
        collapseFrom: e
      } = this.getProps();
      let {
        overflowWidth: r,
        containerWidth: i,
        pivot: n,
        overflowStatus: o
      } = this.getStates();
      let {
        items: s,
        onOverflow: a
      } = this.getProps();
      let l = r;
      let h = 0;
      let c = false;
      for (let t of this._adapter.getItemSizeMap().values()) {
        if ((l += t) > i) {
          c = true;
          break;
        }
        if (h === s.length - 1) {
          this._adapter.updateStates({
            overflowStatus: "normal",
            pivot: s.length - 1,
            visible: s,
            overflow: []
          });
          break;
        }
        h++;
      }
      if (c) {
        let r = Math.max(t, h);
        let i = e === C.START;
        let o = i ? this.getReversedItems().slice(0, r).reverse() : s.slice(0, r);
        let l = i ? this.getReversedItems().slice(r).reverse() : s.slice(r);
        this._adapter.updateStates({
          overflowStatus: "overflowed",
          pivot: r,
          visible: o,
          overflow: l
        });
        if (n !== r) {
          a(l);
        }
        return;
      }
    }
  }
  var E = T;
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  let k = d.PREFIX;
  let P = m.BOUNDARY_MAP;
  let R = m.OVERFLOW_DIR;
  let M = m.MODE_MAP;
  class O extends reactFoundationComponent.FoundationComponent {
    constructor(t) {
      var e;
      super(t);
      e = this;
      this.scroller = null;
      this.spacer = null;
      this.isScrollMode = () => {
        let {
          renderMode: t
        } = this.props;
        return t === M.SCROLL;
      };
      this.resize = function () {
        var t;
        let r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        let i = (t = r[0]) === null || t === undefined ? undefined : t.target.clientWidth;
        e.setState({
          containerWidth: i,
          overflowStatus: "calculating"
        });
      };
      this.reintersect = t => {
        this.foundation.handleIntersect(t);
      };
      this.mergeRef = (t, e, r) => {
        this.itemRefs[r] = e;
        if (typeof t == "function") {
          t(e);
        } else if (typeof t == "object" && t && "current" in t) {
          t.current = e;
        }
      };
      this.renderOverflow = () => {
        let t = this.foundation.getOverflowItem();
        return this.props.overflowRenderer(t);
      };
      this.getItemKey = (t, e) => {
        let {
          itemKey: r
        } = this.props;
        if (isFunctionUtil_1.isFunction(r)) {
          return r(t);
        } else {
          return objectPathGetDefault.getObjectPathDefault(t, r || "key", e);
        }
      };
      this.renderItemList = () => {
        let {
          className: t,
          wrapperClassName: e,
          wrapperStyle: r,
          style: i,
          visibleItemRenderer: n,
          renderMode: o,
          collapseFrom: a
        } = this.props;
        let {
          visible: h,
          overflowStatus: c
        } = this.state;
        let u = this.renderOverflow();
        if (!this.isScrollMode() && (Array.isArray(u) && (u = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, u)), reactCoreLibraryReexport.isValidElement(u))) {
          let t = reactCoreLibraryReexport.cloneElement(u);
          u = reactCoreLibraryReexport.createElement(resizeObserverComponent.ResizeObserverComp, {
            onResize: t => {
              let [e] = t;
              this.setState({
                overflowWidth: e.target.clientWidth,
                overflowStatus: "calculating"
              });
            }
          }, reactCoreLibraryReexport.createElement("div", {
            className: `${k}-overflow`
          }, t));
        }
        let d = o === M.SCROLL ? [u[0], reactCoreLibraryReexport.createElement("div", {
          className: l(e, `${k}-scroll-wrapper`),
          ref: t => {
            this.scroller = t;
          },
          style: Object.assign({}, r),
          key: `${k}-scroll-wrapper`
        }, h.map(n).map(t => {
          let {
            forwardRef: e,
            key: r
          } = t;
          return reactCoreLibraryReexport.cloneElement(t, {
            ref: t => this.mergeRef(e, t, r),
            "data-scrollkey": `${r}`,
            key: r
          });
        })), u[1]] : [a === P.START ? u : null, h.map((t, e) => {
          let {
            key: r
          } = t;
          let i = n(t, e);
          let o = reactCoreLibraryReexport.cloneElement(i);
          return reactCoreLibraryReexport.createElement(resizeObserverComponent.ResizeObserverComp, {
            key: r ?? e,
            onResize: r => {
              let [i] = r;
              return this.onItemResize(i, t, e);
            }
          }, reactCoreLibraryReexport.createElement("div", {
            key: r ?? e,
            className: `${k}-item`
          }, o));
        }), a === P.END ? u : null];
        return reactCoreLibraryReexport.createElement("div", {
          className: l(`${k}`, t),
          style: Object.assign(Object.assign({}, i), o === M.COLLAPSE ? {
            maxWidth: "100%",
            visibility: c === "calculating" ? "hidden" : "visible"
          } : null)
        }, ...d);
      };
      this.onItemResize = (t, e, r) => {
        let i = this.getItemKey(e, r);
        let n = this.itemSizeMap.get(i);
        if (n) {
          if (n !== t.target.clientWidth) {
            this.itemSizeMap.set(i, t.target.clientWidth);
            this.setState({
              overflowStatus: "calculating"
            });
          }
        } else {
          this.itemSizeMap.set(i, t.target.clientWidth);
        }
        let {
          maxCount: o
        } = this.state;
        if (this.itemSizeMap.size === o) {
          this.setState({
            overflowStatus: "calculating"
          });
        }
      };
      this.state = {
        direction: R.GROW,
        lastOverflowCount: 0,
        overflow: [],
        visible: [],
        containerWidth: 0,
        visibleState: new Map(),
        itemSizeMap: new Map(),
        overflowStatus: "calculating",
        pivot: -1,
        overflowWidth: 0,
        maxCount: 0
      };
      this.foundation = new E(this.adapter);
      this.previousWidths = new Map();
      this.itemRefs = {};
      this.itemSizeMap = new Map();
    }
    static getDerivedStateFromProps(t, e) {
      let {
        prevProps: r
      } = e;
      let i = {
        prevProps: t
      };
      let n = e => !r && e in t || r && !deepEqualUtil_1.deepEqual(r[e], t[e]);
      if (n("items") || n("style")) {
        i.direction = R.GROW;
        i.lastOverflowCount = 0;
        i.maxCount = 0;
        if (t.renderMode === M.SCROLL) {
          i.visible = t.items;
          i.overflow = [];
        } else {
          let r = t.items.length;
          if (Math.floor(e.containerWidth / v.MINIMUM_HTML_ELEMENT_WIDTH) !== 0) {
            r = Math.min(r, Math.floor(e.containerWidth / v.MINIMUM_HTML_ELEMENT_WIDTH));
          }
          let n = t.collapseFrom === P.START;
          let o = n ? commonFrontendUtils.safeDeepClone(t.items).reverse().slice(0, r) : t.items.slice(0, r);
          let s = n ? commonFrontendUtils.safeDeepClone(t.items).reverse().slice(r) : t.items.slice(r);
          i.visible = o;
          i.overflow = s;
          i.maxCount = r;
        }
        i.pivot = -1;
        i.overflowStatus = "calculating";
      }
      return i;
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        updateVisibleState: t => {
          this.setState({
            visibleState: t
          });
        },
        updateStates: t => {
          this.setState(Object.assign({}, t));
        },
        notifyIntersect: t => {
          if (this.props.onIntersect) {
            this.props.onIntersect(t);
          }
        },
        getItemSizeMap: () => this.itemSizeMap
      });
    }
    componentDidUpdate(t, e) {
      let r = t.items.map(t => t.key);
      let i = this.props.items.map(t => t.key);
      if (!deepEqualUtil_1.deepEqual(r, i)) {
        this.itemRefs = {};
        this.setState({
          visibleState: new Map()
        });
      }
      let {
        overflow: n,
        containerWidth: s,
        visible: a,
        overflowStatus: l
      } = this.state;
      if (!this.isScrollMode() && l === "calculating") {
        this.foundation.handleCollapseOverflow();
      }
    }
    render() {
      let t = this.renderItemList();
      let {
        renderMode: e
      } = this.props;
      if (e === M.SCROLL) {
        return reactCoreLibraryReexport.createElement(S, {
          onIntersect: this.reintersect,
          root: this.scroller,
          threshold: this.props.threshold,
          items: this.itemRefs
        }, t);
      } else {
        return reactCoreLibraryReexport.createElement(resizeObserverComponent.ResizeObserverComp, {
          onResize: this.resize
        }, t);
      }
    }
  }
  O.__SemiComponentName__ = "OverflowList";
  O.defaultProps = commonFrontendUtils.configProxyHandler(O.__SemiComponentName__, {
    collapseFrom: "end",
    minVisibleItems: 0,
    overflowRenderer: () => null,
    renderMode: "collapse",
    threshold: 0.75,
    visibleItemRenderer: () => null,
    onOverflow: () => null
  });
  O.propTypes = {
    className: u.string,
    collapseFrom: u.oneOf(m.BOUNDARY_SET),
    direction: u.oneOf(m.POSITION_SET),
    items: u.array,
    minVisibleItems: u.number,
    onIntersect: u.func,
    onOverflow: u.func,
    overflowRenderer: u.func,
    renderMode: u.oneOf(m.MODE_SET),
    style: u.object,
    threshold: u.number,
    visibleItemRenderer: u.func,
    wrapperClassName: u.string,
    wrapperStyle: u.object
  };
  var D = O;
  require.d(exports, {
    OverflowList: function () {
      return D;
    }
  });
}