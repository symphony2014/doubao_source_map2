// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'transposeArrays'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 591611
         */
module.exports = function (module, exports, require) {
  var throttledArgStringUtil = require("throttled-arg-string-util") /*id: 293873*/;
  var arrayFilterUtil = require("array-filter-util") /*id: 68536*/;
  var arrayMapUtil = require("array-map-util") /*id: 466350*/;
  var propertyAccessor = require("property-accessor") /*id: 119718*/;
  var arrayMapUtil_1 = require("array-map-util_1") /*id: 404345*/;
  var arrayLikeObjectCheck = require("array-like-object-check") /*id: 443422*/;
  var u = Math.max;
  var c = throttledArgStringUtil.throttledStringify(function (e) {
    if (!e || !e.length) {
      return [];
    }
    var t = 0;
    e = arrayFilterUtil.arrayFilter(e, function (e) {
      if (arrayLikeObjectCheck.isArrayLikeObject(e)) {
        t = u(e.length, t);
        return true;
      }
    });
    return arrayMapUtil_1.mapArrayLength(t, function (t) {
      return arrayMapUtil.arrayMap(e, propertyAccessor.getProperty(t));
    });
  });
  require.d(exports, {
    transposeArrays: function () {
      return c;
    }
  });
}