// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'syncedActiveCommentService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 961839
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("SyncedActiveCommentService");
  require.d(exports, {
    syncedActiveCommentService: function () {
      return o;
    }
  });
}