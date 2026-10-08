// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'syncReferenceBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_infra_synced-reference-block-manager.b4c09d05.js
         * chunkId: 15277
         * moduleId: 750510
         */
module.exports = function (module, exports, require) {
  var deepCloneUtility = require("deep-clone-utility") /*id: 319011*/;
  exports.syncReferenceBlock = function (e) {
    return deepCloneUtility.deepClone(e, 4);
  };
}