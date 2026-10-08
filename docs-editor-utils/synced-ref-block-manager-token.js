// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'syncedRefBlockToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 549332
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("syncedReferenceBlockManager");
  require.d(exports, {
    syncedRefBlockToken: function () {
      return o;
    }
  });
}