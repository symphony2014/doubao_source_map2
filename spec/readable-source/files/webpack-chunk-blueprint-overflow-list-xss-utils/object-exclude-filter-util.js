// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'filterObjectExclude'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 194068
         */
module.exports = function (module, exports, require) {
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  var functionNegateUtil = require("function-negate-util") /*id: 278243*/;
  var objectPathFilterUtil = require("object-path-filter-util") /*id: 213469*/;
  exports.filterObjectExclude = function (e, t) {
    return objectPathFilterUtil.filterObjectByPaths(e, functionNegateUtil.negate(objectMatcherFactory.createMatcher(t)));
  };
}