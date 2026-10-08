// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'tableInsideResizerProviderName'
// - Renamed export 'M' to 'tablePageResizerProviderName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 26263
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  let i = docxEditorCore.getProviderName("table-inside-resizer");
  let l = docxEditorCore.getProviderName("table-page-resizer");
  require.d(exports, {
    tableInsideResizerProviderName: function () {
      return i;
    },
    tablePageResizerProviderName: function () {
      return l;
    }
  });
}