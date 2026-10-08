// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'interpolateObjectProperties'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 403827
         */
module.exports = function (module, exports, require) {
  var valueInterpolator = require("value-interpolator") /*id: 274618*/;
  exports.interpolateObjectProperties = function (t, e, n, r) {
    if (!t || !e) {
      return e;
    }
    var o;
    var a = Object.create(null);
    for (var s in t) {
      o = r && r[s] ? r[s] : valueInterpolator.interpolate;
      a[s] = o(t[s], e[s], n, r);
    }
    return a;
  };
}