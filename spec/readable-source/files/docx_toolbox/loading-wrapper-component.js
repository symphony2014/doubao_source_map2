// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'LoadingWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 376931
         */
module.exports = function (module, exports, require) {
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var sizeAbbrevUtils = require("size-abbrev-utils") /*id: 464464*/;
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  var useDelayedLoadingHook = require("use-delayed-loading-hook") /*id: 261305*/;
  var svgSpinLoadingComponent = require("svg-spin-loading-component") /*id: 789464*/;
  require("module-no-op") /*id: 116324*/;
  function f(e) {
    var n;
    var r = e.className;
    var f = e.style;
    var p = e.tip;
    var g = e.size;
    var m = e.direction;
    var v = e.indicator;
    var b = e.children;
    var y = e.wrapperClassName;
    var _ = e.spinning;
    var E = e.delay;
    var C = reactContextUtilsHooks.useComponentClass("loading");
    var k = useDelayedLoadingHook.useDelayedLoading({
      loading: _ === undefined || _,
      delay: E
    });
    var w = iterableToArrayUtil_1_1.iterableToArray(k, 1)[0];
    var I = sizeAbbrevUtils.getSizeAbbrev(g === undefined ? "medium" : g);
    var S = conditionalClassnames.default((n = {}, objectPropertySetter.setObjectProperty(n, C(), true), objectPropertySetter.setObjectProperty(n, C(`-size-${I}`), I), objectPropertySetter.setObjectProperty(n, C(`-direction-${m === undefined ? "vertical" : m}`), true), objectPropertySetter.setObjectProperty(n, `${r}`, r), n));
    var T = w ? reactCoreLibraryReexport.createElement("div", {
      className: S,
      style: f
    }, v ? reactCoreLibraryReexport.createElement("div", {
      className: `${C("__spinner")}`
    }, v) : reactCoreLibraryReexport.createElement("div", {
      className: C("__lottie")
    }, reactCoreLibraryReexport.createElement(svgSpinLoadingComponent.SvgSpinLoading, null)), p ? reactCoreLibraryReexport.createElement("div", {
      className: `${C("__tip")}`
    }, p) : null) : null;
    if (b) {
      var B = conditionalClassnames.default(C("__container"), w && C("__container-blur"));
      return reactCoreLibraryReexport.createElement("div", {
        className: conditionalClassnames.default(C("-nested-loading"), y)
      }, T, reactCoreLibraryReexport.createElement("div", {
        className: B
      }, domElementWindowUtils.isFunction(b) ? b({
        loading: w
      }) : b));
    }
    return T;
  }
  require.d(exports, {
    LoadingWrapper: function () {
      return f;
    }
  });
}