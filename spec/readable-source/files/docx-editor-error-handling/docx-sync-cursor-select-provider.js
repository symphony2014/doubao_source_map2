// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'syncCursorSelectName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 944587
         */
module.exports = function (module, exports, require) {
  let n = require("docx-editor-core") /*id: 135760*/.getProviderName("sync-cursor-select");
  require.d(exports, {
    syncCursorSelectName: function () {
      return n;
    }
  });
}