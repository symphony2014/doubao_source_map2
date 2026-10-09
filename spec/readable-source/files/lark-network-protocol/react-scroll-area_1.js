// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'ScrollArea'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 456566
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var simpleBarReactWrapper = require("simple-bar-react-wrapper") /*id: 758191*/;
  var u = ["className", "showScrollBars"];
  var d = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var i = e.className;
    var d = e.showScrollBars;
    var c = objectOmitHelper_1.omitWithSymbols(e, u);
    var p = uiConfigContextHooks.useClassName("scrollArea-simplebar");
    return reactCoreLibraryReexport.createElement(simpleBarReactWrapper.SimpleBar, objectAssignUtil.objectAssign({
      scrollableNodeProps: {
        ref: t
      },
      autoHide: (d === undefined ? "whenScrolling" : d) !== "always",
      className: conditionalClassnames.default(i, p())
    }, c));
  });
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var useEffectCallback = require("use-effect-callback") /*id: 873700*/;
  var getScrollableAncestor = require("get-scrollable-ancestor") /*id: 167314*/;
  var mergeReactRefs = require("merge-react-refs") /*id: 686702*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var m = ["className", "onScroll", "onMouseMove", "onMouseLeave", "showScrollBars", "hideTimeout", "scrollX", "scrollY"];
  var b = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var i = e.className;
    var l = e.onScroll;
    var u = e.onMouseMove;
    var d = e.onMouseLeave;
    var b = e.showScrollBars;
    var E = b === undefined ? "whenScrolling" : b;
    var S = e.hideTimeout;
    var O = S === undefined ? 1000 : S;
    var _ = e.scrollX;
    var T = e.scrollY;
    var w = objectOmitHelper_1.omitWithSymbols(e, m);
    var k = uiConfigContextHooks.useClassName("scrollArea");
    var R = reactCoreLibraryReexport.useRef(null);
    var A = mergeReactRefs.mergeRefs(R, t);
    var P = reactCoreLibraryReexport.useState(E !== "whenScrolling");
    var I = iterableToArrayUtil_1_1.iterableToArray(P, 2);
    var N = I[0];
    var x = I[1];
    var C = reactCoreLibraryReexport.useRef();
    var L = reactCoreLibraryReexport.useRef(false);
    var M = reactCoreLibraryReexport.useCallback(function () {
      if (C.current !== undefined) {
        window.clearTimeout(C.current);
        C.current = undefined;
      }
    }, []);
    useEffectCallback.useEffectCallback(function () {
      M();
    });
    var D = reactCoreLibraryReexport.useCallback(function () {
      M();
      x(true);
      C.current = window.setTimeout(function () {
        x(false);
      }, O);
    }, [M, O]);
    var H = reactRefEffectUtils.useEventCallback(function (e) {
      if (domTypeUtils_1.isFunction(u)) {
        u(e);
      }
      var t = getScrollableAncestor.getScrollableAncestor(e.target);
      if (R.current === t && L.current) {
        D();
      }
    });
    var B = reactCoreLibraryReexport.useMemo(function () {
      var e = debounceUtilWrapper.createDebounce(H, 200);
      return function (t) {
        L.current = true;
        t.persist();
        e(t);
      };
    }, [H]);
    return reactCoreLibraryReexport.createElement("div", objectAssignUtil.objectAssign({
      ref: A,
      className: conditionalClassnames.default(i, k(), !N && k("-hide-bar"), _ !== undefined && _ && k("-x"), (T === undefined || T) && k("-y"))
    }, E === "whenScrolling" ? {
      onScroll: function (e) {
        if (domTypeUtils_1.isFunction(l)) {
          l(e);
        }
        D();
      },
      onMouseMove: B,
      onMouseLeave: function (e) {
        L.current = false;
        if (domTypeUtils_1.isFunction(d)) {
          d(e);
        }
        x(false);
      }
    } : {
      onScroll: l,
      onMouseMove: u,
      onMouseLeave: d
    }, w));
  });
  var E = ["virtual"];
  var S = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var i = e.virtual;
    var o = objectOmitHelper_1.omitWithSymbols(e, E);
    if (i !== undefined && i) {
      return reactCoreLibraryReexport.createElement(d, objectAssignUtil.objectAssign({
        ref: t
      }, o));
    } else {
      return reactCoreLibraryReexport.createElement(b, objectAssignUtil.objectAssign({
        ref: t
      }, o));
    }
  });
  require.d(exports, {
    ScrollArea: function () {
      return S;
    }
  });
}