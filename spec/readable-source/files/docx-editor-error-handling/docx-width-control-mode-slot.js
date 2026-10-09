// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'widthModeProvider'
// - Renamed export 'R' to 'widthControlSlot'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 804339
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docxEditorBlockRenderer = require("docx-editor-block-renderer") /*id: 211843*/;
  let l = docxEditorCore.getProviderName("width-control-mode");
  let s = docxEditorBlockRenderer.createSlot(l);
  require.d(exports, {
    widthModeProvider: function () {
      return l;
    },
    widthControlSlot: function () {
      return s;
    }
  });
}