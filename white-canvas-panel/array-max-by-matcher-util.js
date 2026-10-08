// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'arrayMaxByMatcher'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_infra_synced-reference-block-manager.b4c09d05.js
         * chunkId: 15277
         * moduleId: 136425
         */
module.exports = function (module, exports, require) {
  var arrayMaxByUtil = require("array-max-by-util") /*id: 997256*/;
  var greaterThanUtil = require("greater-than-util") /*id: 166954*/;
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  exports.arrayMaxByMatcher = function (e, i) {
    if (e && e.length) {
      return arrayMaxByUtil.maxBy(e, objectMatcherFactory.createMatcher(i, 2), greaterThanUtil.isGreaterThan);
    } else {
      return undefined;
    }
  };
}