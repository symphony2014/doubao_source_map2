// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'syncedRefBlockKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 121370
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("syncedReferenceBlockSelectionService");
  require.d(exports, {
    syncedRefBlockKey: function () {
      return o;
    }
  });
}