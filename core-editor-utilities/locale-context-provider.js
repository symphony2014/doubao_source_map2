// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'gU' to 'localeProvider'
// - Renamed export 'iV' to 'localeWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 577211
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var themeContextProvider = require("theme-context-provider") /*id: 274284*/;
  var reactContextSelector = require("react-context-selector") /*id: 65860*/;
  var isObjectOrFunctionCheck_1 = require("is-object-or-function-check_1") /*id: 8406*/;
  var throttledDeepCloneUtil_2 = require("throttled-deep-clone-util_2") /*id: 739988*/;
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var enUsLocaleConfig = require("en-us-locale-config") /*id: 743929*/;
  var f = require("reactive-state-util") /*id: 840764*/.createState(enUsLocaleConfig.localeConfig);
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  var enUsLocaleContext = require("en-us-locale-context") /*id: 812811*/;
  function h(e) {
    var t;
    var r;
    var n;
    var c;
    var s = e.parentContext;
    var h = s === undefined ? enUsLocaleConfig.localeConfig : s;
    var m = e.isOutermost;
    var w = e.locale;
    var E = w === undefined ? h.locale : w;
    var k = e.prefixCls;
    var v = k === undefined ? h.rootPrefixCls : k;
    var x = e.direction;
    var y = x === undefined ? h.direction : x;
    var _ = e.getPopupContainer;
    var T = _ === undefined ? h.getPopupContainer : _;
    var A = e.getTargetContainer;
    var O = A === undefined ? h.getTargetContainer : A;
    var B = e.toast;
    var N = B === undefined ? h.toast : B;
    var R = e.theme;
    var C = R === undefined ? h.theme : R;
    var S = e.textOverflowPopperSidecar;
    var G = S === undefined ? h.textOverflowPopperSidecar : S;
    var I = e.useLocaleFontFamily;
    var F = I !== undefined && I;
    var D = e.componentSize;
    var L = D === undefined ? h.componentSize : D;
    var P = e.children;
    var H = e.PopperSidecar;
    var M = H === undefined ? h.PopperSidecar : H;
    var j = reactCoreLibraryReexport.useMemo(function () {
      return throttledDeepCloneUtil_2.throttledCloneDeep({}, h.locale, E, function (e, t) {
        if (Array.isArray(e)) {
          return t;
        }
      });
    }, [E, h.locale]);
    var W = reactCoreLibraryReexport.useMemo(function () {
      return {
        rootPrefixCls: v,
        locale: j,
        direction: y,
        getPopupContainer: T,
        getTargetContainer: O,
        toast: N,
        theme: C,
        componentSize: L,
        textOverflowPopperSidecar: G,
        PopperSidecar: M
      };
    }, [v, j, y, T, O, N, C, L, G, M]);
    t = reactCoreLibraryReexport.useCallback(function () {
      if (m && reactRefEffectUtils.canUseDom() && F && E.locale) {
        var e = E.locale.split("-")[0];
        if (e) {
          var t = `${v}__lang-${e}`;
          function r() {
            return document.body.className.split(/\s+/);
          }
          document.body.className = dataProcessor.processData([].concat(arrayIterableSliceUtil.sliceArrayIterable(r()), [t])).join(" ");
          return function () {
            document.body.className = r().filter(function (e) {
              return e !== t;
            }).join(" ");
          };
        }
      }
    }, [m, E.locale, v, F]);
    r = reactCoreLibraryReexport.useRef(true);
    n = reactCoreLibraryReexport.useRef();
    c = reactCoreLibraryReexport.useRef();
    if (r.current || c.current !== t) {
      if (domElementWindowUtils.isFunction(n.current)) {
        n.current();
      }
      n.current = t();
      c.current = t;
    }
    r.current &&= false;
    reactRefEffectUtils.useLayoutEffect(function () {
      return function () {
        if (domElementWindowUtils.isFunction(n.current)) {
          n.current();
          n.current = undefined;
        }
        c.current = undefined;
      };
    }, []);
    reactCoreLibraryReexport.useEffect(function () {
      if (m) {
        f.set(W);
      }
    }, [m, W]);
    return reactCoreLibraryReexport.createElement(themeContextProvider.ThemeProvider, {
      mode: W.theme
    }, reactCoreLibraryReexport.createElement(enUsLocaleContext.EnUsLocaleContext.Provider, {
      value: W
    }, P));
  }
  function m(e) {
    var t = e.children;
    var r = isObjectOrFunctionCheck_1.useSyncExternalStore(f.subscribe, f.get);
    return reactCoreLibraryReexport.createElement(h, {
      parentContext: r,
      isOutermost: false
    }, t);
  }
  function w(e) {
    var t = reactContextSelector.useContextValue(enUsLocaleContext.EnUsLocaleContext);
    return reactCoreLibraryReexport.createElement(h, objectAssignUtil.objectAssign({
      parentContext: t,
      isOutermost: t === enUsLocaleConfig.localeConfig
    }, e));
  }
  require.d(exports, {
    localeProvider: function () {
      return m;
    },
    localeWrapper: function () {
      return w;
    }
  });
}