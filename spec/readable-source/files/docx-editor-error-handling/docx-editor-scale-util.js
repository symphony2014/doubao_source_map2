// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'getEditorScale'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 431997
         */
module.exports = function (module, exports, require) {
  var docxEditorConstants = require("docx-editor-constants") /*id: 708986*/;
  function o(e, i = 1) {
    let {
      width: r,
      height: o
    } = e;
    let l = 1;
    let s = 1;
    if (r < docxEditorConstants.editorLimit) {
      l = r / docxEditorConstants.editorLimit;
    }
    if (o < docxEditorConstants.editorLimit) {
      s = o / docxEditorConstants.editorLimit;
    }
    return Math.min(l / i, s / i);
  }
  require.d(exports, {
    getEditorScale: function () {
      return o;
    }
  });
}