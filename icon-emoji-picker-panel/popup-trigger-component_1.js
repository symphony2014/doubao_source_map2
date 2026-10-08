// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'RT' to 'PopupTrigger'
// - Renamed export 'ce' to 'triggerDefaults'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 505752
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
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var availabilityFlag = require("availability-flag") /*id: 138756*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var useControlledStateHook_1 = require("use-controlled-state-hook_1") /*id: 837560*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  function b(e, t) {
    var n = t.disabled;
    var o = e.action;
    var i = e.hideAction;
    var u = e.showAction;
    return [objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
      action: n ? [] : o,
      showAction: n ? [] : u,
      hideAction: n ? [] : i
    })];
  }
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  function w(e) {
    var t;
    var n;
    var o;
    var r;
    var i = e.childSize;
    var u = e.popupSize;
    var a = e.arrow;
    var l = e.popup;
    var s = e.prefixCls;
    var f = `${s}__arrow`;
    var d = domTypeUtils_1.isDefined(a);
    var p = a ?? {};
    var v = p.size;
    var g = v === undefined ? 8 : v;
    var h = p.safeMarginX;
    var b = h === undefined ? 8 : h;
    var w = p.safeMarginY;
    var y = w === undefined ? 8 : w;
    var x = p.content;
    n = (t = function (e) {
      return (e < 0 ? Math.PI * 2 + e : e) / Math.PI * 180;
    })(Math.atan2(-((i.y + i.height / 2 - (u.y + u.height / 2)) * 1), i.x + i.width / 2 - (u.x + u.width / 2)));
    var R = n >= (o = {
      tr: t(Math.atan2(u.height, u.width)),
      tl: t(Math.atan2(u.height, -u.width)),
      bl: t(Math.atan2(-u.height, -u.width)),
      br: t(Math.atan2(-u.height, u.width))
    }).tr && n < o.tl ? "top" : n >= o.tl && n < o.bl ? "left" : n >= o.bl && n < o.br ? "bottom" : "right";
    var C = domTypeUtils_1.isFunction(x) ? x({
      placement: R
    }) : domTypeUtils_1.isDefined(x) ? reactCoreLibraryReexport.createElement("div", {
      className: `${f}__content`,
      style: {
        width: g * Math.SQRT2,
        height: g * Math.SQRT2
      }
    }) : x;
    var E = d ? reactCoreLibraryReexport.createElement("div", {
      className: conditionalClassnames.default(f, `${f}-${R}`),
      style: (r = {}, ["bottom", "top"].includes(R) ? (r.left = i.left + i.width / 2 - u.left, r.width = g * 2, r.height = g, r.left - g - b < 0 ? r.left = g + b : r.left + g + b > u.width && (r.left = u.width - g - b)) : ["left", "right"].includes(R) && (r.top = i.top + i.height / 2 - u.top, r.width = g, r.height = g * 2, r.top - g - y < 0 ? r.top = g + y : r.top + g + y > u.height && (r.top = u.height - g - y)), r)
    }, C) : null;
    var A = reactCoreLibraryReexport.useMemo(function () {
      if (domTypeUtils_1.isFunction(l)) {
        return l();
      } else {
        return l;
      }
    }, [l]);
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, A, E);
  }
  function y(e) {
    var t = e.popupAlign;
    var n = e.arrow;
    var o = e.prefixCls;
    var i = e.childSize;
    var u = e.popupSize;
    var a = e.viewPointRect;
    var l = e.enablePopupOverflowAuto;
    var s = l !== undefined && l;
    var f = e.popup;
    var d = reactCoreLibraryReexport.useMemo(function () {
      var e;
      var n;
      var o;
      var r;
      var c = {};
      if (s && ((e = t.overflow) === null || e === undefined || !e.adjustX || (n = t.overflow) === null || n === undefined || !n.adjustY) && a) {
        c.overflow = "auto";
        if ((o = t.overflow) === null || o === undefined || !o.adjustX) {
          if (i.right < u.left) {
            c.maxWidth = a.right - u.left;
          } else if (i.left > u.right) {
            c.maxWidth = u.right - a.left;
          }
        }
        if ((r = t.overflow) === null || r === undefined || !r.adjustY) {
          if (i.bottom < u.top) {
            c.maxHeight = a.bottom - u.top;
          } else if (i.top > u.bottom) {
            c.maxHeight = u.bottom - a.top;
          }
        }
        return c;
      }
    }, [t, a, u, i, s]);
    f = domTypeUtils_1.isFunction(f) ? f() : f;
    return f = w({
      childSize: i,
      popupSize: u,
      arrow: n,
      popup: f = reactCoreLibraryReexport.isValidElement(f) && domTypeUtils_1.isDefined(d) ? reactCoreLibraryReexport.cloneElement(f, {
        style: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, d), f.props.style)
      }) : f,
      prefixCls: o
    });
  }
  var iteratorAdapterUtil = require("iterator-adapter-util") /*id: 528920*/;
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var domElementAlignUtil = require("dom-element-align-util") /*id: 984082*/;
  var domTypeCheckers = require("dom-type-checkers") /*id: 966927*/;
  var getScrollableAncestor = require("get-scrollable-ancestor") /*id: 167314*/;
  var getDocumentElement = require("get-document-element") /*id: 948257*/;
  var getWindowUtil = require("get-window-util") /*id: 374363*/;
  var detectScrollableElement = require("detect-scrollable-element") /*id: 484147*/;
  function _(e) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var o = getScrollableAncestor.getScrollableAncestor(e);
    var r = o === e.ownerDocument?.body;
    var i = getWindowUtil.getWindow(o);
    var u = r ? [i].concat(i.visualViewport || [], detectScrollableElement.isScrollable(o) ? o : []) : o;
    var a = n.concat(u);
    if (r) {
      return a;
    } else {
      return a.concat(_(getDocumentElement.getDocumentElement(u)));
    }
  }
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var M = {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    x: 0,
    y: 0
  };
  function N(e) {
    var t = Math.floor(e.left);
    var n = Math.floor(e.top);
    var o = Math.floor(e.width);
    var r = Math.floor(e.height);
    return {
      left: t,
      top: n,
      x: t,
      y: n,
      width: o,
      height: r,
      right: o + t,
      bottom: r + n
    };
  }
  var O = domElementAlignUtil.alignElement.__getVisibleRectForElement;
  function T(e) {
    var t = e.popupAlign;
    var n = e.triggerRef;
    var o = e.readyObserver;
    var r = e.enablePopupOverflowAuto;
    var i = r !== undefined && r;
    var a = e.enableforcePopupAlign;
    var l = a !== undefined && a;
    var s = reactCoreLibraryReexport.useState(M);
    var f = iterableToArrayUtil_1_1.iterableToArray(s, 2);
    var d = f[0];
    var p = f[1];
    var v = reactCoreLibraryReexport.useState(M);
    var m = iterableToArrayUtil_1_1.iterableToArray(v, 2);
    var g = m[0];
    var b = m[1];
    var Z = reactCoreLibraryReexport.useState(null);
    var w = iterableToArrayUtil_1_1.iterableToArray(Z, 2);
    var y = w[0];
    var E = w[1];
    var k = reactCoreLibraryReexport.useCallback(function () {
      var e;
      var o;
      var r = (e = n.current) === null || e === undefined ? undefined : e.getRootDomNode();
      var u = (o = n.current) === null || o === undefined ? undefined : o.getPopupDomNode();
      if (r && u) {
        reactDomEntryWrapper.unstable_batchedUpdates(function () {
          var e = N(u.getBoundingClientRect());
          var n = N(r.getBoundingClientRect());
          if (!deepEqualUtil_1.deepEqual(e, d)) {
            p(e);
          }
          if (!deepEqualUtil_1.deepEqual(n, g)) {
            b(n);
          }
          if (i) {
            var a = O(u, !!t.overflow?.alwaysByViewport);
            if (!deepEqualUtil_1.deepEqual(a, y)) {
              E(a);
            }
          }
        });
      }
    }, [t, n, d, g, y, i]);
    reactRefEffectUtils.useLayoutEffect(function () {
      if (o) {
        var e;
        var t;
        var r = {
          passive: true
        };
        var i = (e = n.current) === null || e === undefined ? undefined : e.getRootDomNode();
        var a = (t = n.current) === null || t === undefined ? undefined : t.getPopupDomNode();
        if (i && a) {
          k();
          function c() {
            var e;
            if ((e = n.current) !== null && e !== undefined) {
              e.forcePopupAlign();
            }
          }
          var s = [];
          if (l) {
            (s = arrayIterableSliceUtil.sliceArrayIterable(new Set([].concat(arrayIterableSliceUtil.sliceArrayIterable(domTypeCheckers.isElement(i) ? _(i) : []), arrayIterableSliceUtil.sliceArrayIterable(domTypeCheckers.isElement(a) ? _(a) : []))))).forEach(function (e) {
              e.addEventListener("scroll", c, r);
            });
            window.addEventListener("resize", c, r);
          }
          var f = new MutationObserver(function (e) {
            var t;
            var n = ["left", "top", "bottm", "right"];
            var o = new Map();
            var r = iteratorAdapterUtil.createIterator(e);
            try {
              for (r.s(); !(t = r.n()).done;) {
                (function () {
                  var e = t.value;
                  if (e.type === "attributes" && e.attributeName === "style") {
                    function r(e) {
                      return e.trim();
                    }
                    if (typeof e.oldValue == "string") {
                      e.oldValue.split(";").map(r).filter(Boolean).map(function (e) {
                        return e.split(":").map(r);
                      }).forEach(function (e) {
                        var t = iterableToArrayUtil_1_1.iterableToArray(e, 2);
                        var r = t[0];
                        var i = t[1];
                        if (!!n.includes(r) && !o.has(r)) {
                          o.set(r, i);
                        }
                      });
                    }
                  }
                })();
              }
            } catch (e) {
              r.e(e);
            } finally {
              r.f();
            }
            var i = false;
            o.forEach(function (e, t) {
              if (e !== a.style[t]) {
                i = true;
              }
            });
            if (i) {
              k();
            }
          });
          f.observe(a, {
            attributes: true,
            childList: false,
            subtree: false,
            attributeOldValue: true,
            attributeFilter: ["style"]
          });
          return function () {
            if (l) {
              s.forEach(function (e) {
                e.removeEventListener("scroll", c, !r.passive);
              });
              window.removeEventListener("resize", c, !r.passive);
            }
            f.disconnect();
          };
        }
      }
    }, [o, k, n, l]);
    return [g, d, y];
  }
  var mergeReactRefs = require("merge-react-refs") /*id: 686702*/;
  var domElementUtils_1 = require("dom-element-utils_1") /*id: 846713*/;
  var B = ["prefixCls", "disabled", "popupMotion", "arrow", "mouseEnterDelay", "mouseLeaveDelay", "popupPlacement", "popupAlign", "builtinPlacements", "modifiers", "destroyOnHide", "visible", "checkOverflow", "defaultVisible", "onVisibleChange", "openClassName", "className", "udTriggerRef", "getPopupContainer", "popupClassName", "children", "__screenshotAlwaysOpenEnabled"];
  var H = {
    mouseEnterDelay: 100,
    mouseLeaveDelay: 100,
    destroyOnHide: {
      keepParent: false
    },
    popupAlign: {}
  };
  var I = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = uiConfigContextHooks.usePrefixCls();
    var w = e.prefixCls;
    var x = w === undefined ? `${n}-trigger` : w;
    var R = e.disabled;
    var C = R !== undefined && R;
    var E = e.popupMotion;
    var A = e.arrow;
    var k = e.mouseEnterDelay;
    var z = k === undefined ? H.mouseEnterDelay : k;
    var P = e.mouseLeaveDelay;
    var L = P === undefined ? H.mouseLeaveDelay : P;
    var _ = e.popupPlacement;
    var S = e.popupAlign;
    var M = S === undefined ? H.popupAlign : S;
    var N = e.builtinPlacements;
    var O = e.modifiers;
    var I = O === undefined ? {} : O;
    var j = e.destroyOnHide;
    var V = j === undefined ? H.destroyOnHide : j;
    var F = e.visible;
    var W = e.checkOverflow;
    var K = W !== undefined && W;
    var Y = e.defaultVisible;
    var U = e.onVisibleChange;
    var J = e.openClassName;
    var X = J === undefined ? `${x}-open` : J;
    var G = e.className;
    var Q = e.udTriggerRef;
    var $ = e.getPopupContainer;
    var ee = e.popupClassName;
    var et = e.children;
    var en = e.__screenshotAlwaysOpenEnabled;
    var eo = objectOmitHelper_1.omitWithSymbols(e, B);
    var er = I.popupOverflowAuto;
    var ei = er !== undefined && er;
    var eu = I.forcePopupAlign;
    var ea = uiConfigContextHooks.usePopupContainer();
    var ec = reactCoreLibraryReexport.useMemo(function () {
      if (_ && N) {
        var e;
        e = N[_] || {};
        return throttledDeepCloneUtil.throttledDeepClone(deepCloneWrapper_1.deepClone(e), M);
      }
      return M;
    }, [N, M, _]);
    var el = useControlledStateHook_1.useControlledState(Y !== undefined && Y, F, {
      onChange: U
    });
    var es = iterableToArrayUtil_1_1.iterableToArray(el, 2);
    var ef = es[0];
    var ed = es[1];
    var ep = reactCoreLibraryReexport.useRef(null);
    var ev = reactCoreLibraryReexport.useCallback(function (e) {
      if (e && K) {
        var t;
        var n = (t = ep.current) === null || t === undefined ? undefined : t.getRootDomNode();
        var o = typeof K == "function" ? K : domElementUtils_1.hasScrollbar;
        if (!n || !o(n)) {
          ed(false);
          return;
        }
      }
      ed(e);
    }, [K, ed]);
    if (availabilityFlag.isAvailable && en !== undefined && en) {
      reactCoreLibraryReexport.useEffect(function () {
        var e;
        if ((e = ep.current) !== null && e !== undefined) {
          e.forcePopupAlign();
        }
        ev(true);
      });
    }
    var em = false;
    var eg = false;
    if (typeof V == "boolean") {
      em = V;
    } else if (V && typeofHelper.getType(V) === "object") {
      var eh = V.keepParent;
      em = eh === true;
      eg = eh === false;
    }
    var eb = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, eo), {}, {
      children: domTypeUtils_1.isFunction(et) ? et({
        visible: ef
      }) : et,
      popupClassName: conditionalClassnames.default(ee, L === 0 && `${x}-no-entry`),
      destroyPopupOnHide: em,
      autoDestroy: eg,
      mouseEnterDelay: z / 1000,
      mouseLeaveDelay: L / 1000,
      prefixCls: x,
      popupMotion: {
        motionName: `${n}-${E === undefined ? "slide-up" : E}`
      },
      popupAlign: ec,
      builtinPlacements: N,
      popupPlacement: _,
      popupVisible: ef,
      onPopupVisibleChange: ev,
      getPopupContainer: $ ?? ea
    });
    var eZ = b(eb, {
      disabled: C
    });
    var ew = iterableToArrayUtil_1_1.iterableToArray(eZ, 1)[0];
    reactCoreLibraryReexport.useImperativeHandle(Q, function () {
      return {
        visible: ef,
        setVisible: ed,
        forcePopupAlign: function () {
          var e;
          if (ep != null && (e = ep.current) !== null && e !== undefined) {
            e.forcePopupAlign();
          }
        }
      };
    }, [ef, ed]);
    var ey = reactCoreLibraryReexport.useState(false);
    var ex = iterableToArrayUtil_1_1.iterableToArray(ey, 2);
    var eR = ex[0];
    var eC = ex[1];
    var eE = reactCoreLibraryReexport.useCallback(function () {
      return eC(true);
    }, []);
    var eA = T({
      triggerRef: ep,
      popupAlign: ec,
      readyObserver: eR,
      enableforcePopupAlign: eu !== undefined && eu,
      enablePopupOverflowAuto: ei
    });
    var ek = iterableToArrayUtil_1_1.iterableToArray(eA, 3);
    var ez = ek[0];
    var eP = ek[1];
    var eL = ek[2];
    reactRefEffectUtils.useLayoutEffect(function () {
      if (!ef && eR) {
        eC(false);
      }
    }, [ef, eR]);
    var e_ = reactCoreLibraryReexport.useMemo(function () {
      return mergeReactRefs.mergeRefs(ep, t);
    }, [ep, t]);
    if (C) {
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, eb.children);
    } else {
      ew.children = reactCoreLibraryReexport.cloneElement(ew.children, throttledPathFilterStringify.throttledPathStr(ew, ["eventKey"]));
      return reactCoreLibraryReexport.createElement(popupTriggerCore.Trigger, objectAssignUtil.objectAssign({}, ew, {
        popup: reactCoreLibraryReexport.createElement(y, {
          enablePopupOverflowAuto: ei,
          childSize: ez,
          popupSize: eP,
          viewPointRect: eL,
          prefixCls: ew.prefixCls,
          popup: ew.popup,
          triggerRef: ep,
          popupAlign: ec,
          arrow: A
        }),
        className: conditionalClassnames.default(G, ef && X),
        popupVisible: ef,
        onPopupAlign: eE,
        ref: e_
      }));
    }
  });
  require.d(exports, {
    PopupTrigger: function () {
      return I;
    },
    triggerDefaults: function () {
      return H;
    }
  });
}