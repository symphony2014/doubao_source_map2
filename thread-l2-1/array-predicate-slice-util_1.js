// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'arrayPredicateSlice'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 550671
         */
module.exports = function (module, exports, require) {
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  var arrayPredicateSliceUtil = require("array-predicate-slice-util") /*id: 260095*/;
  exports.arrayPredicateSlice = function (e, t) {
    if (e && e.length) {
      return arrayPredicateSliceUtil.arrayPredicateSlice(e, objectMatcherFactory.createMatcher(t, 3), false, true);
    } else {
      return [];
    }
  };
}