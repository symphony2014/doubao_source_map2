// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'mapAndFlatten'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16050.dc89ca70.js
         * chunkId: 16050
         * moduleId: 378218
         */
module.exports = function (module, exports, require) {
  var arrayFlattenUtil_2 = require("array-flatten-util_2") /*id: 547804*/;
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  exports.mapAndFlatten = function (t, e) {
    return arrayFlattenUtil_2.flattenArray(collectionMapMatcher.mapWithMatcher(t, e), 1);
  };
}