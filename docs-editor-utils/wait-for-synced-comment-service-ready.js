// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'waitForSyncedCommentServiceReady'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 592697
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var syncedCommentServiceProvider = require("synced-comment-service-provider") /*id: 961839*/;
  let l = async e => {
    let n;
    let r = new Promise(e => {
      n = e;
    });
    if (e) {
      let r = async e => {
        n(e);
      };
      docxEditorCore.onServiceReady(e.editorAPI, syncedCommentServiceProvider.syncedActiveCommentService, r);
    }
    return await r;
  };
  require.d(exports, {
    waitForSyncedCommentServiceReady: function () {
      return l;
    }
  });
}