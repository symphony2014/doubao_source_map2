// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'executionEnvironmentUtil'
// - Resolved require(232135) to 'execution-environment-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: react-easy-crop.320047a5.js
         * chunkId: 26549
         * moduleId: 200013
         */
module.exports = function (module, exports, require) {
  var n;
  var executionEnvironmentUtil = require("execution-environment-util") /*id: 232135*/;
  if (executionEnvironmentUtil.canUseDOM) {
    n = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== true;
  }
  module.exports = function (e, t) {
    if (!executionEnvironmentUtil.canUseDOM || t && !("addEventListener" in document)) {
      return false;
    }
    var o = "on" + e;
    var i = o in document;
    if (!i) {
      var a = document.createElement("div");
      a.setAttribute(o, "return;");
      i = typeof a[o] == "function";
    }
    if (!i && n && e === "wheel") {
      i = document.implementation.hasFeature("Events.wheel", "3.0");
    }
    return i;
  };
}