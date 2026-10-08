// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'filterObjectByPaths'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 213469
         */
module.exports = function (module, exports, require) {
  var arrayMapUtil = require("array-map-util") /*id: 466350*/;
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  var objectPathFilter = require("object-path-filter") /*id: 777489*/;
  var objectKeysNormalizer = require("object-keys-normalizer") /*id: 585390*/;
  exports.filterObjectByPaths = function (e, t) {
    if (e == null) {
      return {};
    }
    var n = arrayMapUtil.arrayMap(objectKeysNormalizer.normalizeObjectKeys(e), function (e) {
      return [e];
    });
    t = objectMatcherFactory.createMatcher(t);
    return objectPathFilter.filterObjectByPaths(e, n, function (e, n) {
      return t(e, n[0]);
    });
  };
}