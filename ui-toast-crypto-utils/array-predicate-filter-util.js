// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'arrayPredicateFilter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 664399
         */
module.exports = function (module, exports, require) {
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  var arrayPredicateSliceUtil = require("array-predicate-slice-util") /*id: 260095*/;
  exports.arrayPredicateFilter = function (e, t) {
    if (e && e.length) {
      return arrayPredicateSliceUtil.arrayPredicateSlice(e, objectMatcherFactory.createMatcher(t, 3));
    } else {
      return [];
    }
  };
}