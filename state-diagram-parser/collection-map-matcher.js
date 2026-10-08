// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'mapWithMatcher'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16050.dc89ca70.js
         * chunkId: 16050
         * moduleId: 300366
         */
module.exports = function (module, exports, require) {
  var arrayMapUtil = require("array-map-util") /*id: 466350*/;
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  var collectionMapUtil = require("collection-map-util") /*id: 543979*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  exports.mapWithMatcher = function (t, e) {
    return (arrayIsArrayUtil.isArray(t) ? arrayMapUtil.arrayMap : collectionMapUtil.mapCollection)(t, objectMatcherFactory.createMatcher(e, 3));
  };
}