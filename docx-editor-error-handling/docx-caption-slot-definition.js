// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'getCaptionSlot'
// - Renamed export 'v' to 'getCaptionProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 591389
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docxEditorBlockRenderer = require("docx-editor-block-renderer") /*id: 211843*/;
  let l = docxEditorCore.getProviderName("caption");
  let s = docxEditorBlockRenderer.createSlot(l);
  require.d(exports, {
    getCaptionSlot: function () {
      return s;
    },
    getCaptionProvider: function () {
      return l;
    }
  });
}