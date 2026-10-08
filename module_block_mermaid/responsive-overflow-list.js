// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Overflow'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 249548
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var u = classnamesUtils;
  var reactResizeObserver = require("react-resize-observer") /*id: 248893*/;
  var useMountEffectHook = require("use-mount-effect-hook") /*id: 397101*/;
  var d = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"];
  var f = undefined;
  var v = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n;
    var o = e.prefixCls;
    var l = e.invalidate;
    var c = e.item;
    var v = e.renderItem;
    var g = e.responsive;
    var p = e.responsiveDisabled;
    var y = e.registerSize;
    var L = e.itemKey;
    var m = e.className;
    var b = e.style;
    var w = e.children;
    var R = e.display;
    var x = e.order;
    var S = e.component;
    var E = objectOmitHelper_1.omitWithSymbols(e, d);
    var M = g && !R;
    reactCoreLibraryReexport.useEffect(function () {
      return function () {
        y(L, null);
      };
    }, []);
    var I = v && c !== f ? v(c) : w;
    if (!l) {
      n = {
        opacity: +!M,
        height: M ? 0 : f,
        overflowY: M ? "hidden" : f,
        order: g ? x : f,
        pointerEvents: M ? "none" : f,
        position: M ? "absolute" : f
      };
    }
    var N = {};
    if (M) {
      N["aria-hidden"] = true;
    }
    var C = reactCoreLibraryReexport.createElement(S === undefined ? "div" : S, objectAssignUtil.objectAssign({
      className: u(!l && o, m),
      style: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, n), b)
    }, N, E, {
      ref: t
    }), I);
    if (g) {
      C = reactCoreLibraryReexport.createElement(reactResizeObserver.ResizeObserver, {
        onResize: function (e) {
          y(L, e.offsetWidth);
        },
        disabled: p
      }, C);
    }
    return C;
  });
  v.displayName = "Item";
  var useLatestCallbackHook = require("use-latest-callback-hook") /*id: 115606*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var animationFrameDelay = require("animation-frame-delay") /*id: 28337*/;
  function L(e, t) {
    var n = reactCoreLibraryReexport.useState(t);
    var i = iterableToArrayUtil_1_1.iterableToArray(n, 2);
    var r = i[0];
    var s = i[1];
    return [r, useLatestCallbackHook.useLatestCallback(function (t) {
      e(function () {
        s(t);
      });
    })];
  }
  var m = reactCoreLibraryReexport.createContext(null);
  var b = ["component"];
  var w = ["className"];
  var R = ["className"];
  var x = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = reactCoreLibraryReexport.useContext(m);
    if (!n) {
      var r = e.component;
      var o = objectOmitHelper_1.omitWithSymbols(e, b);
      return reactCoreLibraryReexport.createElement(r === undefined ? "div" : r, objectAssignUtil.objectAssign({}, o, {
        ref: t
      }));
    }
    var l = n.className;
    var h = objectOmitHelper_1.omitWithSymbols(n, w);
    var c = e.className;
    var d = objectOmitHelper_1.omitWithSymbols(e, R);
    return reactCoreLibraryReexport.createElement(m.Provider, {
      value: null
    }, reactCoreLibraryReexport.createElement(v, objectAssignUtil.objectAssign({
      ref: t,
      className: u(l, c)
    }, h, d)));
  });
  x.displayName = "RawItem";
  var S = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"];
  var E = "responsive";
  var M = "invalidate";
  function I(e) {
    return `+ ${e.length} ...`;
  }
  var N = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n;
    var l;
    var d = e.prefixCls;
    var f = d === undefined ? "rc-overflow" : d;
    var g = e.data;
    var b = g === undefined ? [] : g;
    var w = e.renderItem;
    var R = e.renderRawItem;
    var x = e.itemKey;
    var N = e.itemWidth;
    var C = N === undefined ? 10 : N;
    var T = e.ssr;
    var O = e.style;
    var _ = e.className;
    var P = e.maxCount;
    var A = e.renderRest;
    var D = e.renderRawRest;
    var Z = e.suffix;
    var W = e.component;
    var z = e.itemComponent;
    var H = e.onVisibleChange;
    var U = objectOmitHelper_1.omitWithSymbols(e, S);
    var k = T === "full";
    n = reactCoreLibraryReexport.useRef(null);
    function B(e) {
      if (!n.current) {
        n.current = [];
        (function (e) {
          if (typeof MessageChannel == "undefined") {
            animationFrameDelay.frameDelay(e);
          } else {
            var t = new MessageChannel();
            t.port1.onmessage = function () {
              return e();
            };
            t.port2.postMessage(undefined);
          }
        })(function () {
          reactDomEntryWrapper.unstable_batchedUpdates(function () {
            n.current.forEach(function (e) {
              e();
            });
            n.current = null;
          });
        });
      }
      n.current.push(e);
    }
    var Y = L(B, null);
    var F = iterableToArrayUtil_1_1.iterableToArray(Y, 2);
    var X = F[0];
    var q = F[1];
    var j = X || 0;
    var V = L(B, new Map());
    var K = iterableToArrayUtil_1_1.iterableToArray(V, 2);
    var $ = K[0];
    var G = K[1];
    var Q = L(B, 0);
    var J = iterableToArrayUtil_1_1.iterableToArray(Q, 2);
    var ee = J[0];
    var et = J[1];
    var en = L(B, 0);
    var ei = iterableToArrayUtil_1_1.iterableToArray(en, 2);
    var er = ei[0];
    var eo = ei[1];
    var es = L(B, 0);
    var ea = iterableToArrayUtil_1_1.iterableToArray(es, 2);
    var el = ea[0];
    var eu = ea[1];
    var eh = reactCoreLibraryReexport.useState(null);
    var ec = iterableToArrayUtil_1_1.iterableToArray(eh, 2);
    var ed = ec[0];
    var ef = ec[1];
    var ev = reactCoreLibraryReexport.useState(null);
    var eg = iterableToArrayUtil_1_1.iterableToArray(ev, 2);
    var ep = eg[0];
    var ey = eg[1];
    var eL = reactCoreLibraryReexport.useMemo(function () {
      if (ep === null && k) {
        return Number.MAX_SAFE_INTEGER;
      } else {
        return ep || 0;
      }
    }, [ep, X]);
    var em = reactCoreLibraryReexport.useState(false);
    var eb = iterableToArrayUtil_1_1.iterableToArray(em, 2);
    var ew = eb[0];
    var eR = eb[1];
    var ex = `${f}-item`;
    var eS = Math.max(ee, er);
    var eE = P === E;
    var eM = b.length && eE;
    var eI = P === M;
    var eN = eM || typeof P == "number" && b.length > P;
    var eC = reactCoreLibraryReexport.useMemo(function () {
      var e = b;
      if (eM) {
        e = X === null && k ? b : b.slice(0, Math.min(b.length, j / C));
      } else if (typeof P == "number") {
        e = b.slice(0, P);
      }
      return e;
    }, [b, C, X, P, eM]);
    var eT = reactCoreLibraryReexport.useMemo(function () {
      if (eM) {
        return b.slice(eL + 1);
      } else {
        return b.slice(eC.length);
      }
    }, [b, eC, eM, eL]);
    var eO = reactCoreLibraryReexport.useCallback(function (e, t) {
      if (typeof x == "function") {
        return x(e);
      } else {
        return (x && (e == null ? undefined : e[x])) ?? t;
      }
    }, [x]);
    var e_ = reactCoreLibraryReexport.useCallback(w || function (e) {
      return e;
    }, [w]);
    function eP(e, t, n) {
      if (ep !== e || t !== undefined && t !== ed) {
        ey(e);
        if (!n) {
          eR(e < b.length - 1);
          if (H != null) {
            H(e);
          }
        }
        if (t !== undefined) {
          ef(t);
        }
      }
    }
    function eA(e, t) {
      G(function (n) {
        var i = new Map(n);
        if (t === null) {
          i.delete(e);
        } else {
          i.set(e, t);
        }
        return i;
      });
    }
    function eD(e) {
      return $.get(eO(eC[e], e));
    }
    useMountEffectHook.useMountEffect(function () {
      if (j && typeof eS == "number" && eC) {
        var e = el;
        var t = eC.length;
        var n = t - 1;
        if (!t) {
          eP(0, null);
          return;
        }
        for (var i = 0; i < t; i += 1) {
          var r = eD(i);
          if (k) {
            r = r || 0;
          }
          if (r === undefined) {
            eP(i - 1, undefined, true);
            break;
          }
          e += r;
          if (n === 0 && e <= j || i === n - 1 && e + eD(n) <= j) {
            eP(n, null);
            break;
          }
          if (e + eS > j) {
            eP(i - 1, e - r - el + er);
            break;
          }
        }
        if (Z && eD(0) + el > j) {
          ef(null);
        }
      }
    }, [j, $, er, el, eO, eC]);
    var eZ = ew && !!eT.length;
    var eW = {};
    if (ed !== null && eM) {
      eW = {
        position: "absolute",
        left: ed,
        top: 0
      };
    }
    var ez = {
      prefixCls: ex,
      responsive: eM,
      component: z,
      invalidate: eI
    };
    var eH = R ? function (e, t) {
      var n = eO(e, t);
      return reactCoreLibraryReexport.createElement(m.Provider, {
        key: n,
        value: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, ez), {}, {
          order: t,
          item: e,
          itemKey: n,
          registerSize: eA,
          display: t <= eL
        })
      }, R(e, t));
    } : function (e, t) {
      var n = eO(e, t);
      return reactCoreLibraryReexport.createElement(v, objectAssignUtil.objectAssign({}, ez, {
        order: t,
        key: n,
        item: e,
        renderItem: e_,
        itemKey: n,
        registerSize: eA,
        display: t <= eL
      }));
    };
    var eU = {
      order: eZ ? eL : Number.MAX_SAFE_INTEGER,
      className: `${ex}-rest`,
      registerSize: function (e, t) {
        eo(t);
        et(er);
      },
      display: eZ
    };
    if (D) {
      if (D) {
        l = reactCoreLibraryReexport.createElement(m.Provider, {
          value: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, ez), eU)
        }, D(eT));
      }
    } else {
      var ek = A || I;
      l = reactCoreLibraryReexport.createElement(v, objectAssignUtil.objectAssign({}, ez, eU), typeof ek == "function" ? ek(eT) : ek);
    }
    var eB = reactCoreLibraryReexport.createElement(W === undefined ? "div" : W, objectAssignUtil.objectAssign({
      className: u(!eI && f, _),
      style: O,
      ref: t
    }, U), eC.map(eH), eN ? l : null, Z && reactCoreLibraryReexport.createElement(v, objectAssignUtil.objectAssign({}, ez, {
      responsive: eE,
      responsiveDisabled: !eM,
      order: eL,
      className: `${ex}-suffix`,
      registerSize: function (e, t) {
        eu(t);
      },
      display: true,
      style: eW
    }), Z));
    if (eE) {
      eB = reactCoreLibraryReexport.createElement(reactResizeObserver.ResizeObserver, {
        onResize: function (e, t) {
          q(t.clientWidth);
        },
        disabled: !eM
      }, eB);
    }
    return eB;
  });
  N.displayName = "Overflow";
  N.Item = x;
  N.RESPONSIVE = E;
  N.INVALIDATE = M;
  var C = N;
  require.d(exports, {
    Overflow: function () {
      return C;
    }
  });
}