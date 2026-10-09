// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isObjectMatch'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 679382
         */
module.exports = function (module, exports, require) {
  var objectMatchChecker = require("object-match-checker") /*id: 334875*/;
  var objectEntriesMetaUtil = require("object-entries-meta-util") /*id: 564277*/;
  exports.isObjectMatch = function (e, t) {
    return e === t || objectMatchChecker.matchesObject(e, t, objectEntriesMetaUtil.getObjEntriesMeta(t));
  };
}