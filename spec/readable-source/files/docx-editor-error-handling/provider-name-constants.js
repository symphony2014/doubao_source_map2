// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Sn' to 'noLazyRecordLoadingProvider'
// - Renamed export 'Z2' to 'lazyRecordLoadingProvider'
// - Renamed export 'cu' to 'blockLoadingProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 349632
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  let o = docxEditorCore.getProviderName("block-loading");
  let l = docxEditorCore.getProviderName("lazy-record-loading");
  let s = docxEditorCore.getProviderName("no-lazy-record-loading");
  require.d(exports, {
    noLazyRecordLoadingProvider: function () {
      return s;
    },
    lazyRecordLoadingProvider: function () {
      return l;
    },
    blockLoadingProvider: function () {
      return o;
    }
  });
}