// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'ScrollArea'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 85763
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var simpleBarReactWrapper = require("simple-bar-react-wrapper") /*id: 758191*/;
  var d = ["className", "showScrollBars"];
  var u = reactCoreLibraryReexport.forwardRef(function (e, i) {
    var r = e.className;
    var u = e.showScrollBars;
    var h = objectOmitHelper_1.omitWithSymbols(e, d);
    var p = reactContextUtilsHooks.useComponentClass("scrollArea-simplebar");
    return reactCoreLibraryReexport.createElement(simpleBarReactWrapper.SimpleBar, objectAssignUtil.objectAssign({
      scrollableNodeProps: {
        ref: i
      },
      autoHide: (u === undefined ? "whenScrolling" : u) !== "always",
      className: conditionalClassnames.default(r, p())
    }, h));
  });
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  var reactEffectHook = require("react-effect-hook") /*id: 608203*/;
  var getScrollParent = require("get-scroll-parent") /*id: 968845*/;
  var mergeRefsUtil = require("merge-refs-util") /*id: 590380*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var y = ["className", "onScroll", "onMouseMove", "onMouseLeave", "showScrollBars", "hideTimeout", "scrollX", "scrollY"];
  var w = reactCoreLibraryReexport.forwardRef(function (e, i) {
    var r = e.className;
    var c = e.onScroll;
    var d = e.onMouseMove;
    var u = e.onMouseLeave;
    var w = e.showScrollBars;
    var k = w === undefined ? "whenScrolling" : w;
    var S = e.hideTimeout;
    var M = S === undefined ? 1000 : S;
    var x = e.scrollX;
    var E = e.scrollY;
    var C = objectOmitHelper_1.omitWithSymbols(e, y);
    var _ = reactContextUtilsHooks.useComponentClass("scrollArea");
    var T = reactCoreLibraryReexport.useRef(null);
    var I = mergeRefsUtil.mergeRefs(T, i);
    var R = reactCoreLibraryReexport.useState(k !== "whenScrolling");
    var L = iterableToArrayUtil_1_1.iterableToArray(R, 2);
    var N = L[0];
    var A = L[1];
    var P = reactCoreLibraryReexport.useRef();
    var D = reactCoreLibraryReexport.useRef(false);
    var j = reactCoreLibraryReexport.useCallback(function () {
      if (P.current !== undefined) {
        window.clearTimeout(P.current);
        P.current = undefined;
      }
    }, []);
    reactEffectHook.useEffectHook(function () {
      j();
    });
    var O = reactCoreLibraryReexport.useCallback(function () {
      j();
      A(true);
      P.current = window.setTimeout(function () {
        A(false);
      }, M);
    }, [j, M]);
    var B = reactRefEffectUtils.useEventCallback(function (e) {
      if (domElementWindowUtils.isFunction(d)) {
        d(e);
      }
      var i = getScrollParent.getScrollParent(e.target);
      if (T.current === i && D.current) {
        O();
      }
    });
    var F = reactCoreLibraryReexport.useMemo(function () {
      var e = debounceUtilWrapper.createDebounce(B, 200);
      return function (i) {
        D.current = true;
        i.persist();
        e(i);
      };
    }, [B]);
    return reactCoreLibraryReexport.createElement("div", objectAssignUtil.objectAssign({
      ref: I,
      className: conditionalClassnames.default(r, _(), !N && _("-hide-bar"), x !== undefined && x && _("-x"), (E === undefined || E) && _("-y"))
    }, k === "whenScrolling" ? {
      onScroll: function (e) {
        if (domElementWindowUtils.isFunction(c)) {
          c(e);
        }
        O();
      },
      onMouseMove: F,
      onMouseLeave: function (e) {
        D.current = false;
        if (domElementWindowUtils.isFunction(u)) {
          u(e);
        }
        A(false);
      }
    } : {
      onScroll: c,
      onMouseMove: d,
      onMouseLeave: u
    }, C));
  });
  var k = ["virtual"];
  var S = reactCoreLibraryReexport.forwardRef(function (e, i) {
    var r = e.virtual;
    var s = objectOmitHelper_1.omitWithSymbols(e, k);
    if (r !== undefined && r) {
      return reactCoreLibraryReexport.createElement(u, objectAssignUtil.objectAssign({
        ref: i
      }, s));
    } else {
      return reactCoreLibraryReexport.createElement(w, objectAssignUtil.objectAssign({
        ref: i
      }, s));
    }
  });
  require.d(exports, {
    ScrollArea: function () {
      return S;
    }
  });
}