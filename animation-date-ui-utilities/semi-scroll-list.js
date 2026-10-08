// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ScrollList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 777395
         */
module.exports = function (module, exports, require) {
  var arrayMapUtil_1 = require("array-map-util_1") /*id: 404345*/;
  var functionCoercionUtil = require("function-coercion-util") /*id: 131864*/;
  var toIntegerUtil_1 = require("to-integer-util_1") /*id: 366478*/;
  var o = Math.min;
  function s(e, t) {
    if ((e = toIntegerUtil_1.toInteger(e)) < 1 || e > 9007199254740991) {
      return [];
    }
    var n = 4294967295;
    var s = o(e, 4294967295);
    t = functionCoercionUtil.ensureFunction(t);
    e -= 4294967295;
    var l = arrayMapUtil_1.mapArrayLength(s, t);
    for (; ++n < e;) {
      t(n);
    }
    return l;
  }
  var arrayFindIndexMatcher = require("array-find-index-matcher") /*id: 489247*/;
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  var arrayValueFinder = require("array-value-finder") /*id: 421495*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var v = propTypesFactoryWrapper;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var T = classnamesUtils;
  var semiScrolllistConstants = require("semi-scrolllist-constants") /*id: 676322*/;
  var arraySliceUtil_3 = require("array-slice-util_3") /*id: 663848*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  var isHtmlElementCheck = require("is-html-element-check") /*id: 287357*/;
  var domNodeHelpers = require("dom-node-helpers") /*id: 632685*/;
  class D extends componentAdapterBaseClass.BaseAdapterClass {
    constructor() {
      super(...arguments);
      this._cachedSelectedNode = null;
    }
    selectIndex(e, t) {
      let {
        type: n,
        list: a
      } = this.getProps();
      if (e > -1 && Array.isArray(a) && a.length && isHtmlElementCheck.isHtmlElement(t)) {
        let r = e % a.length;
        let i = a[r];
        let o = t.children[e];
        this._adapter.setSelectedNode(o);
        this._adapter.notifySelectItem(Object.assign(Object.assign({}, i), {
          value: i.value,
          type: n,
          index: r
        }));
      }
    }
    selectNode(e, t) {
      let {
        type: n,
        list: a
      } = this.getProps();
      if (isHtmlElementCheck.isHtmlElement(e) && isHtmlElementCheck.isHtmlElement(t)) {
        let r = arrayFindIndexMatcher.findMatchingIndex(t.children, t => t === e) % a.length;
        let i = arrayFindIndexMatcher.findMatchingIndex(t.children, e => e === this._cachedSelectedNode) % a.length;
        let o = a[r];
        this._adapter.setSelectedNode(e);
        this._adapter.scrollToCenter(e);
        if (this._cachedSelectedNode !== e) {
          this._cachedSelectedNode = e;
          if (i !== r) {
            this._adapter.notifySelectItem(Object.assign(Object.assign({}, o), {
              value: o.value,
              type: n,
              index: r
            }));
          }
        }
      }
    }
    shouldAppend(e, t, n = 2) {
      if (isHtmlElementCheck.isHtmlElement(e) && isHtmlElementCheck.isHtmlElement(t)) {
        let a = e.querySelectorAll("li");
        let r = a[a.length - 1];
        let {
          list: i
        } = this.getProps();
        if (r) {
          let e = t.getBoundingClientRect();
          let a = r.getBoundingClientRect();
          let o = a.height * i.length;
          let s = a.top;
          let l = 0;
          while (s <= e.top + e.height * n) {
            l += 1;
            s += o;
          }
          return l;
        }
      }
      return false;
    }
    shouldPrepend(e, t, n = 2) {
      if (isHtmlElementCheck.isHtmlElement(e) && isHtmlElementCheck.isHtmlElement(t)) {
        let a = e.querySelectorAll("li")[0];
        let {
          list: r
        } = this.getProps();
        if (a) {
          let e = t.getBoundingClientRect();
          let i = a.getBoundingClientRect();
          let o = i.height * r.length;
          let s = i.top;
          let l = 0;
          while (s + i.height >= e.top - e.height * n) {
            l += 1;
            s -= o;
          }
          return l;
        }
      }
      return 0;
    }
    initWheelList(e, t, n) {
      let {
        list: a
      } = this.getProps();
      if (isHtmlElementCheck.isHtmlElement(t) && isHtmlElementCheck.isHtmlElement(e) && a && a.length) {
        let r = e.children;
        arraySliceUtil_3.sliceArray(r, 0, a.length);
        let i = this.shouldPrepend(e, t);
        let o = this.shouldAppend(e, t);
        this._adapter.setState({
          prependCount: i,
          appendCount: o
        }, n);
      }
    }
    adjustInfiniteList(e, t, n) {
      let {
        list: a
      } = this.getProps();
      if (isHtmlElementCheck.isHtmlElement(t) && isHtmlElementCheck.isHtmlElement(e) && a && a.length) {
        let n = e.querySelectorAll("li");
        let r = n.length;
        let i = this.shouldPrepend(e, t, 1);
        let o = this.shouldAppend(e, t, 1);
        if (i) {
          for (let t = 0; t < i; t++) {
            let i = arraySliceUtil_3.sliceArray(n, r - a.length * (t + 1), r - a.length * t);
            domNodeHelpers.prependChildren(e, ...i);
          }
        }
        if (o) {
          for (let t = 0; t < o; t++) {
            let r = arraySliceUtil_3.sliceArray(n, t * a.length, (t + 1) * a.length);
            domNodeHelpers.appendChildren(e, ...r);
          }
        }
      }
    }
    getNearestNodeInfo(e, t) {
      if (isHtmlElementCheck.isHtmlElement(e) && isHtmlElementCheck.isHtmlElement(t)) {
        let n = t.getBoundingClientRect().top;
        let a = e.querySelectorAll("li");
        let r = null;
        let i = -1;
        let o = Infinity;
        Array.from(a).map((e, t) => {
          let a = Math.abs(e.getBoundingClientRect().top - n);
          if (a < o && !this._adapter.isDisabledIndex(t)) {
            o = a;
            r = e;
            i = t;
          }
        });
        return {
          nearestNode: r,
          nearestIndex: i
        };
      }
    }
    getTargetNode(e, t) {
      if (e && isHtmlElementCheck.isHtmlElement(t)) {
        let n = e.target;
        let a = t.querySelectorAll("li");
        let r = this.getProp("list");
        let i = Array.isArray(r) ? r.length : 0;
        let o = -1;
        let s = -1;
        let l = null;
        let u = arrayValueFinder.valueFinder(a, (e, t) => {
          if (e === n || e.contains(n)) {
            o = t;
            if (i > 0) {
              s = t % i;
            }
            return true;
          }
        });
        if (s > -1) {
          l = r[s];
        }
        return {
          targetNode: u,
          targetIndex: o,
          indexInList: s,
          infoInList: l
        };
      }
      return null;
    }
  }
  var springAnimationEngine = require("spring-animation-engine") /*id: 968898*/;
  var P = (e, t, n) => {
    let a = new springAnimationEngine.SpringAnimator({
      from: {
        scrollTop: e.scrollTop
      },
      to: {
        scrollTop: t
      }
    }, {
      duration: n
    });
    a.on("frame", t => {
      let {
        scrollTop: n
      } = t;
      e.scrollTop = n;
    });
    return a;
  };
  let S = 1000 / 60;
  let R = /^\s*$/;
  let M = "wheel";
  class I extends reactFoundationComponent.FoundationComponent {
    constructor() {
      var e;
      let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      super(t);
      e = this;
      this._cacheNode = (e, t) => e && t && Object.prototype.hasOwnProperty.call(this, e) && (this[e] = t);
      this._cacheSelectedNode = e => this._cacheNode("selectedNode", e);
      this._cacheWillSelectNode = e => this._cacheNode("willSelectNode", e);
      this._cacheListNode = e => this._cacheNode("list", e);
      this._cacheSelectorNode = e => this._cacheNode("selector", e);
      this._cacheWrapperNode = e => this._cacheNode("wrapper", e);
      this._isFirst = e => {
        let {
          list: t
        } = this;
        if (isHtmlElementCheck.isHtmlElement(e) && isHtmlElementCheck.isHtmlElement(t)) {
          let n = t.children;
          return arrayFindIndexMatcher.findMatchingIndex(n, e) === 0;
        }
        return false;
      };
      this._isLast = e => {
        let {
          list: t
        } = this;
        if (isHtmlElementCheck.isHtmlElement(e) && isHtmlElementCheck.isHtmlElement(t)) {
          let {
            children: n
          } = t;
          return arrayFindIndexMatcher.findMatchingIndex(n, e) === n.length - 1;
        }
        return false;
      };
      this.indexIsSame = (e, t) => {
        let {
          list: n
        } = this.props;
        if (n.length) {
          return e % n.length == t % n.length;
        }
      };
      this.isDisabledIndex = e => {
        let {
          list: t
        } = this.props;
        if (Array.isArray(t) && t.length && e > -1) {
          let n = t.length;
          return this.isDisabledData(t[e % n]);
        }
        return false;
      };
      this.isDisabledNode = e => {
        let t = this.list;
        if (isHtmlElementCheck.isHtmlElement(e) && isHtmlElementCheck.isHtmlElement(t)) {
          let n = arrayFindIndexMatcher.findMatchingIndex(t.children, t => t === e);
          return this.isDisabledIndex(n);
        }
        return false;
      };
      this.isDisabledData = e => e && typeof e == "object" && e.disabled;
      this.isWheelMode = () => this.props.mode === M;
      this.addClassToNode = function (t, n = semiScrolllistConstants.cssClasses.SELECTED) {
        let {
          list: a
        } = e;
        t = t || e.selectedNode;
        if (isHtmlElementCheck.isHtmlElement(t) && isHtmlElementCheck.isHtmlElement(a)) {
          let {
            children: e
          } = a;
          let r = RegExp(`\\s*${n}\\s*`, "g");
          collectionMapMatcher.mapWithMatcher(e, e => {
            e.className = e.className && e.className.replace(r, " ");
            if (R.test(e.className)) {
              e.className = "";
            }
          });
          if (t.className && !R.test(t.className)) {
            t.className += ` ${n}`;
          } else {
            t.className = n;
          }
        }
      };
      this.getIndexByNode = e => arrayFindIndexMatcher.findMatchingIndex(this.list.children, e);
      this.getNodeByIndex = e => e > -1 ? arrayValueFinder.valueFinder(this.list.children, (t, n) => n === e) : arrayValueFinder.valueFinder(this.list.children, e => !this.isDisabledNode(e));
      this.scrollToIndex = (e, t) => {
        t = typeof t == "number" ? t : semiScrolllistConstants.scrollConfig.DEFAULT_SCROLL_DURATION;
        e = e == null ? this.props.selectedIndex : e;
        this.scrollToNode(this.selectedNode, t);
      };
      this.scrollToNode = (e, t) => {
        let {
          wrapper: n
        } = this;
        let a = n.offsetHeight;
        let r = this.getItmHeight(e);
        let i = (e.offsetTop || this.list.children.length * r / 2) - (a - r) / 2;
        this.scrollToPos(i, t);
      };
      this.scrollToPos = function (t, n = semiScrolllistConstants.scrollConfig.DEFAULT_SCROLL_DURATION) {
        let {
          wrapper: a
        } = e;
        if (n && e.props.motion) {
          if (e.scrollAnimation) {
            e.scrollAnimation.destroy();
            e.scrolling = false;
          }
          if (a.scrollTop === t) {
            if (e.isWheelMode()) {
              let t = e.foundation.getNearestNodeInfo(e.list, e.selector);
              e.addClassToNode(t.nearestNode);
            }
          } else {
            e.scrollAnimation = P(a, t, n);
            e.scrollAnimation.on("rest", () => {
              if (e.isWheelMode()) {
                let t = e.foundation.getNearestNodeInfo(e.list, e.selector);
                e.addClassToNode(t.nearestNode);
              }
            });
            e.scrollAnimation.start();
          }
        } else {
          a.scrollTop = t;
        }
      };
      this.scrollToSelectItem = e => {
        let {
          nearestNode: t
        } = this.foundation.getNearestNodeInfo(this.list, this.selector);
        if (this.props.cycled) {
          this.throttledAdjustList(e, t);
        }
        this.debouncedSelect(e, t);
      };
      this.scrollToCenter = (e, t, n) => {
        e = e || this.selectedNode;
        t = t || this.wrapper;
        if (isHtmlElementCheck.isHtmlElement(e) && isHtmlElementCheck.isHtmlElement(t)) {
          let a = t.getBoundingClientRect();
          let r = e.getBoundingClientRect();
          let i = t.scrollTop + (r.top - (a.top + a.height / 2 - r.height / 2));
          this.scrollToPos(i, typeof n == "number" ? n : semiScrolllistConstants.scrollConfig.DEFAULT_SCROLL_DURATION);
        }
      };
      this.clickToSelectItem = e => {
        if (e && e.nativeEvent) {
          e.nativeEvent.stopImmediatePropagation();
        }
        let {
          targetNode: t,
          infoInList: n
        } = this.foundation.getTargetNode(e, this.list);
        if (t && n && !n.disabled) {
          this.debouncedSelect(null, t);
        }
      };
      this.getItmHeight = e => e && e.offsetHeight || semiScrolllistConstants.scrollConfig.DEFAULT_ITEM_HEIGHT;
      this.renderItemList = function (t = "") {
        let {
          selectedIndex: n,
          mode: a,
          transform: r,
          list: i
        } = e.props;
        return i.map((i, o) => {
          let {
            transform: s
          } = i;
          let l = typeof s == "function" ? s : r;
          let u = n === o;
          let d = T({
            [`${semiScrolllistConstants.cssClasses.PREFIX}-item-sel`]: u && a !== M,
            [`${semiScrolllistConstants.cssClasses.PREFIX}-item-disabled`]: !!i.disabled
          });
          let c = "";
          c = u && typeof l == "function" ? l(i.value, i.text) : i.text == null ? i.value : i.text;
          let h = {};
          if (!e.isWheelMode() && !i.disabled) {
            h.onClick = () => e.foundation.selectIndex(o, e.list);
          }
          return reactCoreLibraryReexport.createElement("li", Object.assign({
            key: t + o
          }, h, {
            className: d,
            role: "option",
            "aria-selected": u,
            "aria-disabled": i.disabled
          }), c);
        });
      };
      this.renderNormalList = () => {
        let {
          list: e,
          className: t,
          style: n
        } = this.props;
        let a = this.renderItemList();
        let r = T(`${semiScrolllistConstants.cssClasses.PREFIX}-item`, t);
        return reactCoreLibraryReexport.createElement("div", {
          style: n,
          className: r,
          ref: this._cacheWrapperNode
        }, reactCoreLibraryReexport.createElement("ul", {
          role: "listbox",
          "aria-multiselectable": false,
          "aria-label": this.props["aria-label"],
          ref: this._cacheListNode
        }, a));
      };
      this.renderInfiniteList = () => {
        let {
          list: e,
          cycled: t,
          className: n,
          style: a
        } = this.props;
        let {
          prependCount: r,
          appendCount: i
        } = this.state;
        let o = s(r).reduce((e, t) => {
          let n = this.renderItemList(`pre_${t}_`);
          e.unshift(...n);
          return e;
        }, []);
        let l = s(i).reduce((e, t) => {
          let n = this.renderItemList(`app_${t}_`);
          e.push(...n);
          return e;
        }, []);
        let u = this.renderItemList();
        let d = T(`${semiScrolllistConstants.cssClasses.PREFIX}-list-outer`, {
          [`${semiScrolllistConstants.cssClasses.PREFIX}-list-outer-nocycle`]: !t
        });
        let c = T(`${semiScrolllistConstants.cssClasses.PREFIX}-item-wheel`, n);
        let h = T(`${semiScrolllistConstants.cssClasses.PREFIX}-selector`);
        let f = T(`${semiScrolllistConstants.cssClasses.PREFIX}-shade`, `${semiScrolllistConstants.cssClasses.PREFIX}-shade-pre`);
        let g = T(`${semiScrolllistConstants.cssClasses.PREFIX}-shade`, `${semiScrolllistConstants.cssClasses.PREFIX}-shade-post`);
        return reactCoreLibraryReexport.createElement("div", {
          className: c,
          style: a
        }, reactCoreLibraryReexport.createElement("div", {
          className: f
        }), reactCoreLibraryReexport.createElement("div", {
          className: h,
          ref: this._cacheSelectorNode
        }), reactCoreLibraryReexport.createElement("div", {
          className: g
        }), reactCoreLibraryReexport.createElement("div", {
          className: d,
          ref: this._cacheWrapperNode,
          onScroll: this.scrollToSelectItem
        }, reactCoreLibraryReexport.createElement("ul", {
          role: "listbox",
          "aria-label": this.props["aria-label"],
          "aria-multiselectable": false,
          ref: this._cacheListNode,
          onClick: this.clickToSelectItem
        }, o, u, l)));
      };
      this.state = {
        prependCount: 0,
        appendCount: 0
      };
      this.selectedNode = null;
      this.willSelectNode = null;
      this.list = null;
      this.wrapper = null;
      this.selector = null;
      this.scrollAnimation = null;
      this.foundation = new D(this.adapter);
      this.throttledAdjustList = debounceUtilWrapper.createDebounce((e, t) => {
        this.foundation.adjustInfiniteList(this.list, this.wrapper, t);
      }, S);
      this.debouncedSelect = debounceUtil_1_1.debounce((e, t) => {
        this._cacheSelectedNode(t);
        this.foundation.selectNode(t, this.list);
      }, S * 2);
    }
    get adapter() {
      var e = this;
      return Object.assign(Object.assign({}, super.adapter), {
        setState: (e, t) => this.setState(Object.assign({}, e), t),
        setPrependCount: e => this.setState({
          prependCount: e
        }),
        setAppendCount: e => this.setState({
          appendCount: e
        }),
        isDisabledIndex: this.isDisabledIndex,
        setSelectedNode: e => this._cacheWillSelectNode(e),
        notifySelectItem: function () {
          return e.props.onSelect(...arguments);
        },
        scrollToCenter: this.scrollToCenter
      });
    }
    componentWillUnmount() {
      if (this.props.cycled) {
        this.throttledAdjustList.cancel();
        this.debouncedSelect.cancel();
      }
    }
    componentDidMount() {
      this.foundation.init();
      let {
        mode: e,
        cycled: t,
        selectedIndex: n,
        list: a
      } = this.props;
      let r = this.getNodeByIndex(typeof n == "number" && n > -1 ? n : 0);
      this._cacheSelectedNode(r);
      this._cacheWillSelectNode(r);
      if (e === M && t) {
        this.foundation.initWheelList(this.list, this.wrapper, () => {
          this.scrollToNode(r, 0);
        });
      } else {
        this.scrollToNode(r, 0);
      }
    }
    componentDidUpdate(e) {
      let {
        selectedIndex: t
      } = this.props;
      if (e.selectedIndex !== t) {
        let n = this.getIndexByNode(this.willSelectNode);
        if (!this.indexIsSame(n, t)) {
          let n = this.getNodeByOffset(this.selectedNode, t - e.selectedIndex, this.list);
          this._cacheWillSelectNode(n);
        }
        this._cacheSelectedNode(this.willSelectNode);
        this.scrollToIndex(t);
      }
    }
    getNodeByOffset(e, t, n) {
      let {
        list: a
      } = this.props;
      if (isHtmlElementCheck.isHtmlElement(e) && isHtmlElementCheck.isHtmlElement(n) && typeof t == "number" && Array.isArray(a) && a.length) {
        t %= a.length;
        let n = this.getIndexByNode(e) + t;
        while (n < 0) {
          n += a.length;
        }
        if (t) {
          return this.getNodeByIndex(n);
        }
      }
      return e;
    }
    render() {
      if (this.isWheelMode()) {
        return this.renderInfiniteList();
      } else {
        return this.renderNormalList();
      }
    }
  }
  I.propTypes = {
    mode: v.oneOf(semiScrolllistConstants.scrollModes.MODE),
    cycled: v.bool,
    list: v.array,
    selectedIndex: v.number,
    onSelect: v.func,
    transform: v.func,
    className: v.string,
    style: v.object,
    motion: v.oneOfType([v.func, v.bool]),
    type: v.oneOfType([v.string, v.number])
  };
  I.defaultProps = {
    selectedIndex: 0,
    motion: true,
    list: [],
    onSelect: emptyExportFunction.emptyFunction,
    cycled: false,
    mode: M
  };
  require.d(exports, {
    ScrollList: function () {
      return I;
    }
  });
}