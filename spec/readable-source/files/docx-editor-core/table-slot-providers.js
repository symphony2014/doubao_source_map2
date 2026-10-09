// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B4' to 'tableHeaderBarSlot'
// - Renamed export 'BZ' to 'tableColumnResizerProviderName'
// - Renamed export 'MA' to 'tableOperationBarProviderName'
// - Renamed export 'YT' to 'tableHeaderBarProviderName'
// - Renamed export 'pz' to 'tableColumnResizerSlot'
// - Renamed export 'z6' to 'tableOperationBarSlot'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 151739
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docxEditorBlockRenderer = require("docx-editor-block-renderer") /*id: 211843*/;
  let l = docxEditorCore.getProviderName("table-header-bar");
  let a = docxEditorCore.getProviderName("table-operation-bar");
  let s = docxEditorCore.getProviderName("table-column-resizer");
  let c = docxEditorBlockRenderer.createSlot(l);
  let u = docxEditorBlockRenderer.createSlot(a);
  let d = docxEditorBlockRenderer.createSlot(s);
  require.d(exports, {
    tableHeaderBarSlot: function () {
      return c;
    },
    tableColumnResizerProviderName: function () {
      return s;
    },
    tableOperationBarProviderName: function () {
      return a;
    },
    tableHeaderBarProviderName: function () {
      return l;
    },
    tableColumnResizerSlot: function () {
      return d;
    },
    tableOperationBarSlot: function () {
      return u;
    }
  });
}