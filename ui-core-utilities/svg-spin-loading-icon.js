// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SpinLoadingIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 705191
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var availabilityFlag = require("availability-flag") /*id: 138756*/;
  var u = ["className"];
  var d = availabilityFlag.isAvailable ? {
    style: {
      animationPlayState: "paused"
    }
  } : {};
  var f = reactCoreLibraryReexport.forwardRef(function (e, n) {
    var r = e.className;
    var c = objectOmitHelper_1.omitWithSymbols(e, u);
    var f = uiConfigContextHooks.useClassName("svg");
    var m = conditionalClassnames.default(f(), f("-spin-loading"), r);
    return reactCoreLibraryReexport.createElement("div", objectAssignUtil.objectAssign({
      className: m
    }, d), reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "100%",
      height: "100%",
      viewBox: "0 0 100 100",
      ref: n
    }, c), reactCoreLibraryReexport.createElement("circle", objectAssignUtil.objectAssign({
      cx: "50",
      cy: "50",
      r: "35",
      stroke: "currentColor",
      strokeWidth: "11",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      fill: "none"
    }, d))));
  });
  require.d(exports, {
    SpinLoadingIcon: function () {
      return f;
    }
  });
}