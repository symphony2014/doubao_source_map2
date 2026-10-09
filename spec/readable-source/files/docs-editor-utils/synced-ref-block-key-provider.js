// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'syncedRefBlockKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 755472
         */
module.exports = function (module, exports, require) {
  var syncedRefBlockSelProvider = require("synced-ref-block-sel-provider") /*id: 121370*/;
  require.d(exports, {
    syncedRefBlockKey: function () {
      return syncedRefBlockSelProvider.syncedRefBlockKey;
    }
  });
}