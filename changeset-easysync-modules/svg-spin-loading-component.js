// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SvgSpinLoading'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 789464
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var featureFlagBooleanExport = require("feature-flag-boolean-export") /*id: 233678*/;
  var c = ["className"];
  var l = featureFlagBooleanExport.isFeatureEnabled ? {
    style: {
      animationPlayState: "paused"
    }
  } : {};
  var p = reactCoreLibraryReexport.forwardRef(function (t, e) {
    var n = t.className;
    var u = objectOmitHelper_1.omitWithSymbols(t, c);
    var p = reactContextUtilsHooks.useComponentClass("svg");
    var h = conditionalClassnames.default(p(), p("-spin-loading"), n);
    return reactCoreLibraryReexport.createElement("div", objectAssignUtil.objectAssign({
      className: h
    }, l), reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "100%",
      height: "100%",
      viewBox: "0 0 100 100",
      ref: e
    }, u), reactCoreLibraryReexport.createElement("circle", objectAssignUtil.objectAssign({
      cx: "50",
      cy: "50",
      r: "35",
      stroke: "currentColor",
      strokeWidth: "11",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      fill: "none"
    }, l))));
  });
  require.d(exports, {
    SvgSpinLoading: function () {
      return p;
    }
  });
}