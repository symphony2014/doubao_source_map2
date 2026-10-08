// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'EC' to 'suspensionComment'
// - Renamed export 'EQ' to 'commentInteraction'
// - Renamed export 'jD' to 'blockComment'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 180127
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  let o = docxEditorCore.getProviderName("block-comment");
  let l = docxEditorCore.getProviderName("comment-interaction");
  let s = docxEditorCore.getProviderName("suspension-comment");
  require.d(exports, {
    suspensionComment: function () {
      return s;
    },
    commentInteraction: function () {
      return l;
    },
    blockComment: function () {
      return o;
    }
  });
}