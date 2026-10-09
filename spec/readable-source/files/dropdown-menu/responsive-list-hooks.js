// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S3' to 'useResponsiveListContext'
// - Renamed export 'BT' to 'useSuffixHook'
// - Renamed export 'lP' to 'useRestHook'
// - Renamed export 'IN' to 'useResponsiveList'
// - Renamed export 'KU' to 'ResponsiveListContext'
// - Renamed export 'l' to 'useListItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: box-preview-box-archive.e38f088a.js
         * chunkId: 7174
         * moduleId: 475611
         */
module.exports = function (module, exports, require) {
  var iteratorAdapterUtil = require("iterator-adapter-util") /*id: 528920*/;
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useImmerHooks = require("use-immer-hooks") /*id: 771813*/;
  var reactContextSelector = require("react-context-selector") /*id: 65860*/;
  var useElementRectHook = require("use-element-rect-hook") /*id: 176756*/;
  function f(e, t) {
    return e === t;
  }
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var h = {
    keys: [],
    countBeforeRest: 0,
    countAfterRest: 0,
    restWidth: 0,
    suffixFixedStart: null,
    suffixWidth: 0,
    itemWidths: {},
    isResponsive: false,
    restPosition: -1,
    omittedKeys: []
  };
  var p = reactContextSelector.createContext(objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, h), {}, {
    alwaysObserveResize: false,
    suffixWrap: true,
    containerWidth: 0,
    dispatch: function () {}
  }));
  function g(e) {
    var t = e.keys;
    var r = e.maxCount;
    var u = e.hasSuffix;
    var p = e.restPosition;
    var g = p === undefined ? -1 : p;
    var M = e.suffixWrap;
    var m = useElementRectHook.useElementRect();
    var y = iterableToArrayUtil_1_1.iterableToArray(m, 2);
    var v = y[0];
    var I = y[1].width;
    var N = useImmerHooks.useImmerReducer(function (e, t) {
      switch (t.type) {
        case "SET_DISPLAY_COUNT":
          e.countAfterRest = t.payload.countAfterRest;
          e.countBeforeRest = t.payload.countBeforeRest;
          return;
        case "SET_ITEM_WIDTH":
          if (t.payload.width) {
            e.itemWidths[t.payload.key] = t.payload.width;
          } else {
            delete e.itemWidths[t.payload.key];
          }
          return;
        case "SET_REST_WIDTH":
          e.restWidth = t.payload;
          return;
        case "SET_SUFFIX_WIDTH":
          e.suffixWidth = t.payload;
          return;
        case "SET_SUFFIX_FIXED_START":
          e.suffixFixedStart = t.payload;
          return;
      }
    }, h);
    var x = iterableToArrayUtil_1_1.iterableToArray(N, 2);
    var z = x[0];
    var w = x[1];
    var S = z.restWidth;
    var T = z.itemWidths;
    var L = z.suffixWidth;
    var j = z.countBeforeRest;
    var D = z.countAfterRest;
    var _ = function (e) {
      var t;
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : f;
      var i = reactCoreLibraryReexport.useRef();
      var n = reactCoreLibraryReexport.useRef(e);
      if (!((t = reactCoreLibraryReexport.useRef(true)).current ? (t.current = false, true) : t.current) && !r(n.current, e)) {
        i.current = n.current;
        n.current = e;
      }
      return i.current;
    }(S);
    var A = !!t.length && r === "responsive";
    var b = g < 0 ? g + t.length + 1 : g;
    var E = reactCoreLibraryReexport.useMemo(function () {
      var e = t.length;
      if (A) {
        e = Math.min(t.length, Math.ceil(I / 10));
      } else if (typeof r == "number") {
        e = r === Infinity ? t.length : Math.min(r, t.length);
      }
      var i = t.slice(0, Math.min(b, e));
      var n = [];
      if (i.length < e) {
        n = t.slice(t.length - e + i.length, t.length);
      }
      return {
        beforeRest: i,
        afterRest: n
      };
    }, [I, A, t, r, b]);
    var C = reactCoreLibraryReexport.useMemo(function () {
      if (A) {
        return t.slice(j, t.length - D);
      } else {
        return t.slice(E.beforeRest.length, t.length - E.afterRest.length);
      }
    }, [D, j, A, t, E.afterRest.length, E.beforeRest.length]);
    var O = Math.max(_ ?? S, S);
    reactRefEffectUtils.useLayoutEffect(function () {
      function e(e) {
        if (e > b) {
          return {
            countBeforeRest: b,
            countAfterRest: e - b
          };
        } else {
          return {
            countBeforeRest: e,
            countAfterRest: 0
          };
        }
      }
      if (I && S) {
        var t;
        var l = L;
        var c = [].concat(arrayIterableSliceUtil.sliceArrayIterable(E.beforeRest), arrayIterableSliceUtil.sliceArrayIterable(arrayIterableSliceUtil.sliceArrayIterable(E.afterRest).reverse()));
        var f = c.length;
        var d = l + O;
        var h = {
          i: -1,
          right: d,
          suffixFixedStart: O
        };
        p = d - I > 0 ? {
          wrap: h,
          nowrap: null
        } : {
          wrap: null,
          nowrap: h
        };
        var p;
        var g;
        var m = iteratorAdapterUtil.createIterator(c.entries());
        try {
          for (m.s(); !(g = m.n()).done;) {
            var y = iterableToArrayUtil_1_1.iterableToArray(g.value, 2);
            var v = y[0];
            var N = T[y[1]];
            if (N === undefined) {
              w({
                type: "SET_DISPLAY_COUNT",
                payload: e(v)
              });
              break;
            }
            var x = (l += N) + (v === f - 1 ? 0 : O);
            (function (e) {
              if (e.right - I <= 0) {
                if (!p.nowrap || e.i > p.nowrap.i) {
                  p.nowrap = e;
                }
                return;
              }
              if (e.right - I > 0) {
                if (e.right - L - I <= 0 && (!p.wrap || e.i > p.wrap.i)) {
                  p.wrap = e;
                }
                if (!p.wrap || e.right <= p.wrap.right) {
                  p.wrap = e;
                }
              }
            })({
              i: v,
              right: x,
              suffixFixedStart: x - L
            });
          }
        } catch (e) {
          m.e(e);
        } finally {
          m.f();
        }
        w({
          type: "SET_DISPLAY_COUNT",
          payload: e((t = M ? p.nowrap ?? p.wrap ?? h : p.nowrap ?? h).i + 1)
        });
        if (u && t.right > I) {
          w({
            type: "SET_SUFFIX_FIXED_START",
            payload: null
          });
        } else {
          w({
            type: "SET_SUFFIX_FIXED_START",
            payload: t.suffixFixedStart
          });
        }
      }
    }, [I, w, u, T, E.afterRest, E.beforeRest, b, O, S, L, M]);
    return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({
      ref: v
    }, z), {}, {
      keys: t,
      dispatch: w,
      isResponsive: A,
      mergedKeys: E,
      omittedKeys: C,
      restPosition: b,
      containerWidth: I,
      suffixWrap: M
    });
  }
  function M(e) {
    var t = e.key;
    var r = e.index;
    var i = reactContextSelector.useContextSelector(p, function (e) {
      return e.dispatch;
    });
    var n = reactContextSelector.useContextSelector(p, function (e) {
      return e.alwaysObserveResize;
    });
    var a = reactContextSelector.useContextSelector(p, function (e) {
      return e.keys.length;
    });
    var s = reactContextSelector.useContextSelector(p, function (e) {
      return e.countBeforeRest;
    });
    var l = reactContextSelector.useContextSelector(p, function (e) {
      return e.countAfterRest;
    });
    var f = reactContextSelector.useContextSelector(p, function (e) {
      return e.isResponsive;
    });
    var h = useElementRectHook.useElementRect();
    var g = iterableToArrayUtil_1_1.iterableToArray(h, 2);
    var M = g[0];
    var m = g[1];
    reactRefEffectUtils.useLayoutEffect(function () {
      i({
        type: "SET_ITEM_WIDTH",
        payload: {
          key: t,
          width: m.width
        }
      });
    }, [i, t, m.width]);
    return {
      ref: f || n ? M : undefined,
      isVisible: f && (r > a - l - 1 || r < s) || !f,
      isResponsive: f
    };
  }
  function m() {
    var e = reactContextSelector.useContextSelector(p, function (e) {
      return e.dispatch;
    });
    var t = reactContextSelector.useContextSelector(p, function (e) {
      return e.alwaysObserveResize;
    });
    var r = reactContextSelector.useContextSelector(p, function (e) {
      return e.keys.length;
    });
    var i = reactContextSelector.useContextSelector(p, function (e) {
      return e.countBeforeRest;
    });
    var n = reactContextSelector.useContextSelector(p, function (e) {
      return e.countAfterRest;
    });
    var a = reactContextSelector.useContextSelector(p, function (e) {
      return e.isResponsive;
    });
    var s = reactContextSelector.useContextSelector(p, function (e) {
      return e.restPosition;
    });
    var l = useElementRectHook.useElementRect();
    var f = iterableToArrayUtil_1_1.iterableToArray(l, 2);
    var h = f[0];
    var g = f[1];
    reactRefEffectUtils.useLayoutEffect(function () {
      e({
        type: "SET_REST_WIDTH",
        payload: g.width
      });
    }, [e, g.width]);
    return {
      ref: a || t ? h : undefined,
      countBeforeRest: i,
      countAfterRest: n,
      isVisible: a && i + n < r || !a,
      isResponsive: a,
      restPosition: s
    };
  }
  function y() {
    var e = reactContextSelector.useContextSelector(p, function (e) {
      return e.dispatch;
    });
    var t = reactContextSelector.useContextSelector(p, function (e) {
      return e.alwaysObserveResize;
    });
    var r = reactContextSelector.useContextSelector(p, function (e) {
      return e.countBeforeRest;
    });
    var i = reactContextSelector.useContextSelector(p, function (e) {
      return e.countAfterRest;
    });
    var n = reactContextSelector.useContextSelector(p, function (e) {
      return e.isResponsive;
    });
    var a = reactContextSelector.useContextSelector(p, function (e) {
      return e.suffixFixedStart;
    });
    var s = reactContextSelector.useContextSelector(p, function (e) {
      return e.restWidth;
    });
    var l = reactContextSelector.useContextSelector(p, function (e) {
      return e.suffixWrap;
    });
    var f = useElementRectHook.useElementRect();
    var h = iterableToArrayUtil_1_1.iterableToArray(f, 2);
    var g = h[0];
    var M = h[1];
    reactRefEffectUtils.useLayoutEffect(function () {
      e({
        type: "SET_SUFFIX_WIDTH",
        payload: M.width
      });
    }, [e, M.width]);
    return {
      ref: n || t ? g : undefined,
      countBeforeRest: r,
      countAfterRest: i,
      isResponsive: n,
      suffixFixedStart: a,
      restWidth: s,
      suffixWrap: l
    };
  }
  function v() {
    return reactContextSelector.useContextValue(p);
  }
  require.d(exports, {
    useResponsiveListContext: function () {
      return v;
    },
    useSuffixHook: function () {
      return y;
    },
    useRestHook: function () {
      return m;
    },
    useResponsiveList: function () {
      return g;
    },
    ResponsiveListContext: function () {
      return p;
    },
    useListItem: function () {
      return M;
    }
  });
}