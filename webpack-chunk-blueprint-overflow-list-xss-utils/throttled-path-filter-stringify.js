// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'throttledPathStr'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 245841
         */
module.exports = function (module, exports, require) {
  var objectPathFilter = require("object-path-filter") /*id: 777489*/;
  var pathArrayValidator = require("path-array-validator") /*id: 679313*/;
  var o = require("throttled-arg-stringify-util_1") /*id: 931463*/.throttledStringify(function (e, t) {
    if (e == null) {
      return {};
    } else {
      return objectPathFilter.filterObjectByPaths(e, t, function (t, n) {
        return pathArrayValidator.validatePathArray(e, n);
      });
    }
  });
  require.d(exports, {
    throttledPathStr: function () {
      return o;
    }
  });
}