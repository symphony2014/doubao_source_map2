// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$b' to 'sheetProviderName'
// - Renamed export 'DU' to 'bitableProviderName'
// - Renamed export 'ZK' to 'isvProviderName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 987445
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  let o = docxEditorCore.getProviderName("docs-mode-bitable");
  let l = docxEditorCore.getProviderName("docs-mode-isv");
  let a = docxEditorCore.getProviderName("docs-mode-sheet");
  require.d(exports, {
    sheetProviderName: function () {
      return a;
    },
    bitableProviderName: function () {
      return o;
    },
    isvProviderName: function () {
      return l;
    }
  });
}