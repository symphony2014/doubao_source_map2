// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GK' to 'insertSyncedBlock'
// - Renamed export 'Tc' to 'docxSyncedBlockSelector'
// - Renamed export 'Z5' to 'syncedBlockLimit'
// - Renamed export 'wv' to 'syncedBlockContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 19241
         */
module.exports = function (module, exports, require) {
  let o = ".synced-reference-block-container";
  let i = ".docx-synced_reference-block";
  let l = "insertSyncedBlockByPaste";
  let c = 10;
  require.d(exports, {
    insertSyncedBlock: function () {
      return l;
    },
    docxSyncedBlockSelector: function () {
      return i;
    },
    syncedBlockLimit: function () {
      return c;
    },
    syncedBlockContainer: function () {
      return o;
    }
  });
}