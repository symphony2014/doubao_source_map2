// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'interpolate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 274618
         */
module.exports = function (module, exports, require) {
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var linearInterpolation_1 = require("linear-interpolation_1") /*id: 659052*/;
  var arrayValueInterpolator = require("array-value-interpolator") /*id: 83058*/;
  var interpolateObjectProperties = require("interpolate-object-properties") /*id: 403827*/;
  function s(t, e, n, s) {
    if (typeof t == "number" && typeof e == "number") {
      return linearInterpolation_1.linearInterpolate(t, e, n);
    } else if (Array.isArray(t) && Array.isArray(e)) {
      return arrayValueInterpolator.interpolateArray(t, e, n, s);
    } else if (isObjectOrFunction_1_1.isObjectOrFunction(t) && isObjectOrFunction_1_1.isObjectOrFunction(e)) {
      return interpolateObjectProperties.interpolateObjectProperties(t, e, n, s);
    } else {
      return e;
    }
  }
  require.d(exports, {
    interpolate: function () {
      return s;
    }
  });
}