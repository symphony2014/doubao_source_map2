// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'interpolateArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 83058
         */
module.exports = function (module, exports, require) {
  var valueInterpolator = require("value-interpolator") /*id: 274618*/;
  exports.interpolateArray = function (t, e, n, r) {
    var o = e.slice();
    var a = 0;
    for (; a < e.length; a++) {
      o[a] = valueInterpolator.interpolate(t[a], e[a], n, r);
    }
    return o;
  };
}