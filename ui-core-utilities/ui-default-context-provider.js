// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'gU' to 'UiProviderWrapper'
// - Renamed export 'L' to 'moduleVersion'
// - Renamed export 'iV' to 'UiContextConnector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 792028
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
  var globalUiConfig = require("global-ui-config") /*id: 946058*/;
  var m = require("create-observable") /*id: 706734*/.createObservable(globalUiConfig.uiGlobalConfig);
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var uiGlobalConfigContext = require("ui-global-config-context") /*id: 698735*/;
  function g(e) {
    var n;
    var r;
    var i;
    var s;
    var c = e.parentContext;
    var g = c === undefined ? globalUiConfig.uiGlobalConfig : c;
    var y = e.isOutermost;
    var b = e.locale;
    var _ = b === undefined ? g.locale : b;
    var w = e.prefixCls;
    var x = w === undefined ? g.rootPrefixCls : w;
    var k = e.direction;
    var $ = k === undefined ? g.direction : k;
    var E = e.getPopupContainer;
    var S = E === undefined ? g.getPopupContainer : E;
    var R = e.getTargetContainer;
    var Z = R === undefined ? g.getTargetContainer : R;
    var T = e.toast;
    var C = T === undefined ? g.toast : T;
    var N = e.theme;
    var M = N === undefined ? g.theme : N;
    var j = e.textOverflowPopperSidecar;
    var P = j === undefined ? g.textOverflowPopperSidecar : j;
    var W = e.useLocaleFontFamily;
    var O = W !== undefined && W;
    var F = e.componentSize;
    var I = F === undefined ? g.componentSize : F;
    var D = e.children;
    var B = e.PopperSidecar;
    var z = B === undefined ? g.PopperSidecar : B;
    var L = reactCoreLibraryReexport.useMemo(function () {
      return throttledDeepCloneUtil_2.throttledCloneDeep({}, g.locale, _, function (e, n) {
        if (Array.isArray(e)) {
          return n;
        }
      });
    }, [_, g.locale]);
    var A = reactCoreLibraryReexport.useMemo(function () {
      return {
        rootPrefixCls: x,
        locale: L,
        direction: $,
        getPopupContainer: S,
        getTargetContainer: Z,
        toast: C,
        theme: M,
        componentSize: I,
        textOverflowPopperSidecar: P,
        PopperSidecar: z
      };
    }, [x, L, $, S, Z, C, M, I, P, z]);
    n = reactCoreLibraryReexport.useCallback(function () {
      if (y && reactRefEffectUtils.canUseDom() && O && _.locale) {
        var e = _.locale.split("-")[0];
        if (e) {
          var n = `${x}__lang-${e}`;
          function r() {
            return document.body.className.split(/\s+/);
          }
          document.body.className = dataProcessor.processData([].concat(arrayIterableSliceUtil.sliceArrayIterable(r()), [n])).join(" ");
          return function () {
            document.body.className = r().filter(function (e) {
              return e !== n;
            }).join(" ");
          };
        }
      }
    }, [y, _.locale, x, O]);
    r = reactCoreLibraryReexport.useRef(true);
    i = reactCoreLibraryReexport.useRef();
    s = reactCoreLibraryReexport.useRef();
    if (r.current || s.current !== n) {
      if (domTypeUtils_1.isFunction(i.current)) {
        i.current();
      }
      i.current = n();
      s.current = n;
    }
    r.current &&= false;
    reactRefEffectUtils.useLayoutEffect(function () {
      return function () {
        if (domTypeUtils_1.isFunction(i.current)) {
          i.current();
          i.current = undefined;
        }
        s.current = undefined;
      };
    }, []);
    reactCoreLibraryReexport.useEffect(function () {
      if (y) {
        m.set(A);
      }
    }, [y, A]);
    return reactCoreLibraryReexport.createElement(themeContextProvider.ThemeProvider, {
      mode: A.theme
    }, reactCoreLibraryReexport.createElement(uiGlobalConfigContext.UiGlobalConfigContext.Provider, {
      value: A
    }, D));
  }
  function y(e) {
    var n = e.children;
    var r = isObjectOrFunctionCheck_1.useSyncExternalStore(m.subscribe, m.get);
    return reactCoreLibraryReexport.createElement(g, {
      parentContext: r,
      isOutermost: false
    }, n);
  }
  function b(e) {
    var n = reactContextSelector.useContextValue(uiGlobalConfigContext.UiGlobalConfigContext);
    return reactCoreLibraryReexport.createElement(g, objectAssignUtil.objectAssign({
      parentContext: n,
      isOutermost: n === globalUiConfig.uiGlobalConfig
    }, e));
  }
  var _ = "__VERSION__";
  require.d(exports, {
    UiProviderWrapper: function () {
      return y;
    },
    moduleVersion: function () {
      return _;
    },
    UiContextConnector: function () {
      return b;
    }
  });
}