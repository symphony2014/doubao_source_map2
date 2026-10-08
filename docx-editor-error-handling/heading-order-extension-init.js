// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initHeadingOrder'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 120392
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docEditorConstants_1 = require("doc-editor-constants_1") /*id: 2607*/;
  var headingOrderContextWrapper = require("heading-order-context-wrapper") /*id: 350443*/;
  function s() {
    docxEditorCore.registerViewExt(docEditorConstants_1.headingProvider, headingOrderContextWrapper.HeadingOrderContextWrapper);
  }
  require.d(exports, {
    initHeadingOrder: function () {
      return s;
    }
  });
}