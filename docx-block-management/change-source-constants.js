// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'fS' to 'changeSourceConstants'
// - Renamed export 'oO' to 'isH5Browser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83252.91175ae0.js
         * chunkId: 83252
         * moduleId: 363583
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  let r = !!require("browser-environment-detection-utils") /*id: 744607*/.browserDetector.isH5;
  let a = {
    UNKNOWN: docxEditorCore.EMPTY_STRING,
    INIT: docxEditorCore.INIT_STATUS,
    INLINE: docxEditorCore.INLINE_LAYOUT,
    OFFLINE: collaborativeEditingFlowSyncModule.offline,
    UNDO_REDO: collaborativeEditingFlowSyncModule.nonRecoverableErrorCodes,
    PASTE: "paste",
    LOCAL_INSERT: "local-insert",
    REMOTE: collaborativeEditingFlowSyncModule.kq.REMOTE
  };
  require.d(exports, {
    changeSourceConstants: function () {
      return a;
    },
    isH5Browser: function () {
      return r;
    }
  });
}