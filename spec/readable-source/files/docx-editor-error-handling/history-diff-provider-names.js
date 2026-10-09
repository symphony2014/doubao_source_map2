// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'historyDiffBlockHighlightProvider'
// - Renamed export 'x' to 'historyDiffAlignableHighlightProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 818901
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  let o = docxEditorCore.getProviderName("history-diff-block-highlight");
  let l = docxEditorCore.getProviderName("history-diff-alignable-highlight");
  require.d(exports, {
    historyDiffBlockHighlightProvider: function () {
      return o;
    },
    historyDiffAlignableHighlightProvider: function () {
      return l;
    }
  });
}