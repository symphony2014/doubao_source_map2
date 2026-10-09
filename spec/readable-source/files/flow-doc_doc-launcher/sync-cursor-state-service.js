// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'syncCursorStateSvc'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 851656
         */
module.exports = function (module, exports, require) {
  var syncCursorSelectStateProvider = require("sync-cursor-select-state-provider") /*id: 620416*/;
  require.d(exports, {
    syncCursorStateSvc: function () {
      return syncCursorSelectStateProvider.syncCursorStateSvc;
    }
  });
}