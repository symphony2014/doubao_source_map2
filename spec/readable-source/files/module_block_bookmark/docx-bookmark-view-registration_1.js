// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerBookmarkView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_bookmark.99f38744.js
         * chunkId: 70225
         * moduleId: 970163
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docBookmarkBlockModel = require("doc-bookmark-block-model") /*id: 171625*/;
  var docxBookmarkComponent = require("docx-bookmark-component") /*id: 46028*/;
  function a(e) {
    docxEditorCore.registerViewModel(docBookmarkBlockModel.BookmarkBlockModel, {
      viewCreator: docxBookmarkComponent.BookmarkBlockView,
      extensions: e
    });
  }
  require.d(exports, {
    registerBookmarkView: function () {
      return a;
    }
  });
}