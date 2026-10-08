// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'RT' to 'PopupTrigger'
// - Renamed export 'ce' to 'triggerDefaults'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 493746
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var popupTriggerCore = require("popup-trigger-core") /*id: 956311*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var featureFlagBooleanExport = require("feature-flag-boolean-export") /*id: 233678*/;
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  var useControlledState = require("use-controlled-state") /*id: 80507*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  function _(t, e) {
    var n = e.disabled;
    var r = t.action;
    var o = t.hideAction;
    var s = t.showAction;
    return [objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, t), {}, {
      action: n ? [] : r,
      showAction: n ? [] : s,
      hideAction: n ? [] : o
    })];
  }
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  function b(t) {
    var e;
    var n;
    var r;
    var i;
    var o = t.childSize;
    var s = t.popupSize;
    var a = t.arrow;
    var c = t.popup;
    var l = t.prefixCls;
    var p = `${l}__arrow`;
    var h = domElementWindowUtils.isNotNullOrUndefined(a);
    var f = a ?? {};
    var d = f.size;
    var y = d === undefined ? 8 : d;
    var g = f.safeMarginX;
    var _ = g === undefined ? 8 : g;
    var b = f.safeMarginY;
    var E = b === undefined ? 8 : b;
    var w = f.content;
    n = (e = function (t) {
      return (t < 0 ? Math.PI * 2 + t : t) / Math.PI * 180;
    })(Math.atan2(-((o.y + o.height / 2 - (s.y + s.height / 2)) * 1), o.x + o.width / 2 - (s.x + s.width / 2)));
    var S = n >= (r = {
      tr: e(Math.atan2(s.height, s.width)),
      tl: e(Math.atan2(s.height, -s.width)),
      bl: e(Math.atan2(-s.height, -s.width)),
      br: e(Math.atan2(-s.height, s.width))
    }).tr && n < r.tl ? "top" : n >= r.tl && n < r.bl ? "left" : n >= r.bl && n < r.br ? "bottom" : "right";
    var T = domElementWindowUtils.isFunction(w) ? w({
      placement: S
    }) : domElementWindowUtils.isNotNullOrUndefined(w) ? reactCoreLibraryReexport.createElement("div", {
      className: `${p}__content`,
      style: {
        width: y * Math.SQRT2,
        height: y * Math.SQRT2
      }
    }) : w;
    var I = h ? reactCoreLibraryReexport.createElement("div", {
      className: conditionalClassnames.default(p, `${p}-${S}`),
      style: (i = {}, ["bottom", "top"].includes(S) ? (i.left = o.left + o.width / 2 - s.left, i.width = y * 2, i.height = y, i.left - y - _ < 0 ? i.left = y + _ : i.left + y + _ > s.width && (i.left = s.width - y - _)) : ["left", "right"].includes(S) && (i.top = o.top + o.height / 2 - s.top, i.width = y, i.height = y * 2, i.top - y - E < 0 ? i.top = y + E : i.top + y + E > s.height && (i.top = s.height - y - E)), i)
    }, T) : null;
    var A = reactCoreLibraryReexport.useMemo(function () {
      if (domElementWindowUtils.isFunction(c)) {
        return c();
      } else {
        return c;
      }
    }, [c]);
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, A, I);
  }
  function E(t) {
    var e = t.popupAlign;
    var n = t.arrow;
    var r = t.prefixCls;
    var o = t.childSize;
    var s = t.popupSize;
    var a = t.viewPointRect;
    var c = t.enablePopupOverflowAuto;
    var l = c !== undefined && c;
    var p = t.popup;
    var h = reactCoreLibraryReexport.useMemo(function () {
      var t;
      var n;
      var r;
      var i;
      var u = {};
      if (l && ((t = e.overflow) === null || t === undefined || !t.adjustX || (n = e.overflow) === null || n === undefined || !n.adjustY) && a) {
        u.overflow = "auto";
        if ((r = e.overflow) === null || r === undefined || !r.adjustX) {
          if (o.right < s.left) {
            u.maxWidth = a.right - s.left;
          } else if (o.left > s.right) {
            u.maxWidth = s.right - a.left;
          }
        }
        if ((i = e.overflow) === null || i === undefined || !i.adjustY) {
          if (o.bottom < s.top) {
            u.maxHeight = a.bottom - s.top;
          } else if (o.top > s.bottom) {
            u.maxHeight = s.bottom - a.top;
          }
        }
        return u;
      }
    }, [e, a, s, o, l]);
    p = domElementWindowUtils.isFunction(p) ? p() : p;
    return p = b({
      childSize: o,
      popupSize: s,
      arrow: n,
      popup: p = reactCoreLibraryReexport.isValidElement(p) && domElementWindowUtils.isNotNullOrUndefined(h) ? reactCoreLibraryReexport.cloneElement(p, {
        style: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, h), p.props.style)
      }) : p,
      prefixCls: r
    });
  }
  var iteratorAdapterUtil = require("iterator-adapter-util") /*id: 528920*/;
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var domElementAlignUtil = require("dom-element-align-util") /*id: 984082*/;
  var domElementTypeChecks = require("dom-element-type-checks") /*id: 158443*/;
  var getScrollParent = require("get-scroll-parent") /*id: 968845*/;
  var getHtmlElementHelper = require("get-html-element-helper") /*id: 53564*/;
  var getWindowFromElement = require("get-window-from-element") /*id: 540463*/;
  var checkElementScrollable = require("check-element-scrollable") /*id: 83180*/;
  function R(t) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var r = getScrollParent.getScrollParent(t);
    var i = r === t.ownerDocument?.body;
    var o = getWindowFromElement.getWindowFromElement(r);
    var s = i ? [o].concat(o.visualViewport || [], checkElementScrollable.isElementScrollable(r) ? r : []) : r;
    var a = n.concat(s);
    if (i) {
      return a;
    } else {
      return a.concat(R(getHtmlElementHelper.getHtmlElement(s)));
    }
  }
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var N = {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    x: 0,
    y: 0
  };
  function x(t) {
    var e = Math.floor(t.left);
    var n = Math.floor(t.top);
    var r = Math.floor(t.width);
    var i = Math.floor(t.height);
    return {
      left: e,
      top: n,
      x: e,
      y: n,
      width: r,
      height: i,
      right: r + e,
      bottom: i + n
    };
  }
  var P = domElementAlignUtil.alignElement.__getVisibleRectForElement;
  function B(t) {
    var e = t.popupAlign;
    var n = t.triggerRef;
    var r = t.readyObserver;
    var i = t.enablePopupOverflowAuto;
    var o = i !== undefined && i;
    var a = t.enableforcePopupAlign;
    var c = a !== undefined && a;
    var l = reactCoreLibraryReexport.useState(N);
    var p = iterableToArrayUtil_1_1.iterableToArray(l, 2);
    var h = p[0];
    var f = p[1];
    var d = reactCoreLibraryReexport.useState(N);
    var v = iterableToArrayUtil_1_1.iterableToArray(d, 2);
    var y = v[0];
    var _ = v[1];
    var m = reactCoreLibraryReexport.useState(null);
    var b = iterableToArrayUtil_1_1.iterableToArray(m, 2);
    var E = b[0];
    var I = b[1];
    var C = reactCoreLibraryReexport.useCallback(function () {
      var t;
      var r;
      var i = (t = n.current) === null || t === undefined ? undefined : t.getRootDomNode();
      var s = (r = n.current) === null || r === undefined ? undefined : r.getPopupDomNode();
      if (i && s) {
        reactDomEntryWrapper.unstable_batchedUpdates(function () {
          var t = x(s.getBoundingClientRect());
          var n = x(i.getBoundingClientRect());
          if (!deepEqualUtil_1.deepEqual(t, h)) {
            f(t);
          }
          if (!deepEqualUtil_1.deepEqual(n, y)) {
            _(n);
          }
          if (o) {
            var a = P(s, !!e.overflow?.alwaysByViewport);
            if (!deepEqualUtil_1.deepEqual(a, E)) {
              I(a);
            }
          }
        });
      }
    }, [e, n, h, y, E, o]);
    reactRefEffectUtils.useLayoutEffect(function () {
      if (r) {
        var t;
        var e;
        var i = {
          passive: true
        };
        var o = (t = n.current) === null || t === undefined ? undefined : t.getRootDomNode();
        var a = (e = n.current) === null || e === undefined ? undefined : e.getPopupDomNode();
        if (o && a) {
          C();
          function u() {
            var t;
            if ((t = n.current) !== null && t !== undefined) {
              t.forcePopupAlign();
            }
          }
          var l = [];
          if (c) {
            (l = arrayIterableSliceUtil.sliceArrayIterable(new Set([].concat(arrayIterableSliceUtil.sliceArrayIterable(domElementTypeChecks.isElement(o) ? R(o) : []), arrayIterableSliceUtil.sliceArrayIterable(domElementTypeChecks.isElement(a) ? R(a) : []))))).forEach(function (t) {
              t.addEventListener("scroll", u, i);
            });
            window.addEventListener("resize", u, i);
          }
          var p = new MutationObserver(function (t) {
            var e;
            var n = ["left", "top", "bottm", "right"];
            var r = new Map();
            var i = iteratorAdapterUtil.createIterator(t);
            try {
              for (i.s(); !(e = i.n()).done;) {
                (function () {
                  var t = e.value;
                  if (t.type === "attributes" && t.attributeName === "style") {
                    function i(t) {
                      return t.trim();
                    }
                    if (typeof t.oldValue == "string") {
                      t.oldValue.split(";").map(i).filter(Boolean).map(function (t) {
                        return t.split(":").map(i);
                      }).forEach(function (t) {
                        var e = iterableToArrayUtil_1_1.iterableToArray(t, 2);
                        var i = e[0];
                        var o = e[1];
                        if (!!n.includes(i) && !r.has(i)) {
                          r.set(i, o);
                        }
                      });
                    }
                  }
                })();
              }
            } catch (t) {
              i.e(t);
            } finally {
              i.f();
            }
            var o = false;
            r.forEach(function (t, e) {
              if (t !== a.style[e]) {
                o = true;
              }
            });
            if (o) {
              C();
            }
          });
          p.observe(a, {
            attributes: true,
            childList: false,
            subtree: false,
            attributeOldValue: true,
            attributeFilter: ["style"]
          });
          return function () {
            if (c) {
              l.forEach(function (t) {
                t.removeEventListener("scroll", u, !i.passive);
              });
              window.removeEventListener("resize", u, !i.passive);
            }
            p.disconnect();
          };
        }
      }
    }, [r, C, n, c]);
    return [y, h, E];
  }
  var mergeRefsUtil = require("merge-refs-util") /*id: 590380*/;
  var domElementUtils = require("dom-element-utils") /*id: 431931*/;
  var j = ["prefixCls", "disabled", "popupMotion", "arrow", "mouseEnterDelay", "mouseLeaveDelay", "popupPlacement", "popupAlign", "builtinPlacements", "modifiers", "destroyOnHide", "visible", "checkOverflow", "defaultVisible", "onVisibleChange", "openClassName", "className", "udTriggerRef", "getPopupContainer", "popupClassName", "children", "__screenshotAlwaysOpenEnabled"];
  var U = {
    mouseEnterDelay: 100,
    mouseLeaveDelay: 100,
    destroyOnHide: {
      keepParent: false
    },
    popupAlign: {}
  };
  var z = reactCoreLibraryReexport.forwardRef(function (t, e) {
    var n = reactContextUtilsHooks.useRootPrefixCls();
    var b = t.prefixCls;
    var w = b === undefined ? `${n}-trigger` : b;
    var S = t.disabled;
    var T = S !== undefined && S;
    var I = t.popupMotion;
    var A = t.arrow;
    var C = t.mouseEnterDelay;
    var M = C === undefined ? U.mouseEnterDelay : C;
    var k = t.mouseLeaveDelay;
    var O = k === undefined ? U.mouseLeaveDelay : k;
    var R = t.popupPlacement;
    var D = t.popupAlign;
    var N = D === undefined ? U.popupAlign : D;
    var x = t.builtinPlacements;
    var P = t.modifiers;
    var z = P === undefined ? {} : P;
    var H = t.destroyOnHide;
    var V = H === undefined ? U.destroyOnHide : H;
    var Z = t.visible;
    var q = t.checkOverflow;
    var W = q !== undefined && q;
    var G = t.defaultVisible;
    var Y = t.onVisibleChange;
    var K = t.openClassName;
    var $ = K === undefined ? `${w}-open` : K;
    var X = t.className;
    var J = t.udTriggerRef;
    var Q = t.getPopupContainer;
    var tt = t.popupClassName;
    var te = t.children;
    var tn = t.__screenshotAlwaysOpenEnabled;
    var tr = objectOmitHelper_1.omitWithSymbols(t, j);
    var ti = z.popupOverflowAuto;
    var to = ti !== undefined && ti;
    var ts = z.forcePopupAlign;
    var ta = reactContextUtilsHooks.usePopupContainer();
    var tu = reactCoreLibraryReexport.useMemo(function () {
      if (R && x) {
        var t;
        t = x[R] || {};
        return throttledDeepCloneUtil.throttledDeepClone(deepCloneWrapper_1.deepClone(t), N);
      }
      return N;
    }, [x, N, R]);
    var tc = useControlledState.useControlledState(G !== undefined && G, Z, {
      onChange: Y
    });
    var tl = iterableToArrayUtil_1_1.iterableToArray(tc, 2);
    var tp = tl[0];
    var th = tl[1];
    var tf = reactCoreLibraryReexport.useRef(null);
    var td = reactCoreLibraryReexport.useCallback(function (t) {
      if (t && W) {
        var e;
        var n = (e = tf.current) === null || e === undefined ? undefined : e.getRootDomNode();
        var r = typeof W == "function" ? W : domElementUtils.hasScroll;
        if (!n || !r(n)) {
          th(false);
          return;
        }
      }
      th(t);
    }, [W, th]);
    if (featureFlagBooleanExport.isFeatureEnabled && tn !== undefined && tn) {
      reactCoreLibraryReexport.useEffect(function () {
        var t;
        if ((t = tf.current) !== null && t !== undefined) {
          t.forcePopupAlign();
        }
        td(true);
      });
    }
    var tv = false;
    var ty = false;
    if (typeof V == "boolean") {
      tv = V;
    } else if (V && typeofHelper.getType(V) === "object") {
      var tg = V.keepParent;
      tv = tg === true;
      ty = tg === false;
    }
    var t_ = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, tr), {}, {
      children: domElementWindowUtils.isFunction(te) ? te({
        visible: tp
      }) : te,
      popupClassName: conditionalClassnames.default(tt, O === 0 && `${w}-no-entry`),
      destroyPopupOnHide: tv,
      autoDestroy: ty,
      mouseEnterDelay: M / 1000,
      mouseLeaveDelay: O / 1000,
      prefixCls: w,
      popupMotion: {
        motionName: `${n}-${I === undefined ? "slide-up" : I}`
      },
      popupAlign: tu,
      builtinPlacements: x,
      popupPlacement: R,
      popupVisible: tp,
      onPopupVisibleChange: td,
      getPopupContainer: Q ?? ta
    });
    var tm = _(t_, {
      disabled: T
    });
    var tb = iterableToArrayUtil_1_1.iterableToArray(tm, 1)[0];
    reactCoreLibraryReexport.useImperativeHandle(J, function () {
      return {
        visible: tp,
        setVisible: th,
        forcePopupAlign: function () {
          var t;
          if (tf != null && (t = tf.current) !== null && t !== undefined) {
            t.forcePopupAlign();
          }
        }
      };
    }, [tp, th]);
    var tE = reactCoreLibraryReexport.useState(false);
    var tw = iterableToArrayUtil_1_1.iterableToArray(tE, 2);
    var tS = tw[0];
    var tT = tw[1];
    var tI = reactCoreLibraryReexport.useCallback(function () {
      return tT(true);
    }, []);
    var tA = B({
      triggerRef: tf,
      popupAlign: tu,
      readyObserver: tS,
      enableforcePopupAlign: ts !== undefined && ts,
      enablePopupOverflowAuto: to
    });
    var tC = iterableToArrayUtil_1_1.iterableToArray(tA, 3);
    var tM = tC[0];
    var tk = tC[1];
    var tO = tC[2];
    reactRefEffectUtils.useLayoutEffect(function () {
      if (!tp && tS) {
        tT(false);
      }
    }, [tp, tS]);
    var tR = reactCoreLibraryReexport.useMemo(function () {
      return mergeRefsUtil.mergeRefs(tf, e);
    }, [tf, e]);
    if (T) {
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, t_.children);
    } else {
      tb.children = reactCoreLibraryReexport.cloneElement(tb.children, throttledPathFilterStringify.throttledPathStr(tb, ["eventKey"]));
      return reactCoreLibraryReexport.createElement(popupTriggerCore.Trigger, objectAssignUtil.objectAssign({}, tb, {
        popup: reactCoreLibraryReexport.createElement(E, {
          enablePopupOverflowAuto: to,
          childSize: tM,
          popupSize: tk,
          viewPointRect: tO,
          prefixCls: tb.prefixCls,
          popup: tb.popup,
          triggerRef: tf,
          popupAlign: tu,
          arrow: A
        }),
        className: conditionalClassnames.default(X, tp && $),
        popupVisible: tp,
        onPopupAlign: tI,
        ref: tR
      }));
    }
  });
  require.d(exports, {
    PopupTrigger: function () {
      return z;
    },
    triggerDefaults: function () {
      return U;
    }
  });
}