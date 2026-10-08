// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'sumByMatcher'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14520.ef9f9644.js
         * chunkId: 14520
         * moduleId: 746667
         */
module.exports = function (module, exports, require) {
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  var arraySumByIterator = require("array-sum-by-iterator") /*id: 77851*/;
  exports.sumByMatcher = function (t, e) {
    if (t && t.length) {
      return arraySumByIterator.sumBy(t, objectMatcherFactory.createMatcher(e, 2));
    } else {
      return 0;
    }
  };
}