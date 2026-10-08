// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'LoadingComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 666260
         */
module.exports = function (module, exports, require) {
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var sizeConvertUtils = require("size-convert-utils") /*id: 293585*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var loadingDelayHook = require("loading-delay-hook") /*id: 242703*/;
  var svgSpinLoadingIcon = require("svg-spin-loading-icon") /*id: 705191*/;
  require("empty-module-export_6") /*id: 84522*/;
  function d(e) {
    var t;
    var n = e.className;
    var d = e.style;
    var p = e.tip;
    var v = e.size;
    var m = e.direction;
    var g = e.indicator;
    var h = e.children;
    var b = e.wrapperClassName;
    var Z = e.spinning;
    var w = e.delay;
    var y = uiConfigContextHooks.useClassName("loading");
    var x = loadingDelayHook.useLoadingDelay({
      loading: Z === undefined || Z,
      delay: w
    });
    var R = iterableToArrayUtil_1_1.iterableToArray(x, 1)[0];
    var C = sizeConvertUtils.convertSize(v === undefined ? "medium" : v);
    var E = conditionalClassnames.default((t = {}, objectPropertySetter.setObjectProperty(t, y(), true), objectPropertySetter.setObjectProperty(t, y(`-size-${C}`), C), objectPropertySetter.setObjectProperty(t, y(`-direction-${m === undefined ? "vertical" : m}`), true), objectPropertySetter.setObjectProperty(t, `${n}`, n), t));
    var A = R ? reactCoreLibraryReexport.createElement("div", {
      className: E,
      style: d
    }, g ? reactCoreLibraryReexport.createElement("div", {
      className: `${y("__spinner")}`
    }, g) : reactCoreLibraryReexport.createElement("div", {
      className: y("__lottie")
    }, reactCoreLibraryReexport.createElement(svgSpinLoadingIcon.SpinLoadingIcon, null)), p ? reactCoreLibraryReexport.createElement("div", {
      className: `${y("__tip")}`
    }, p) : null) : null;
    if (h) {
      var k = conditionalClassnames.default(y("__container"), R && y("__container-blur"));
      return reactCoreLibraryReexport.createElement("div", {
        className: conditionalClassnames.default(y("-nested-loading"), b)
      }, A, reactCoreLibraryReexport.createElement("div", {
        className: k
      }, domTypeUtils_1.isFunction(h) ? h({
        loading: R
      }) : h));
    }
    return A;
  }
  require.d(exports, {
    LoadingComponent: function () {
      return d;
    }
  });
}